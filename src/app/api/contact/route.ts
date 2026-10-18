import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getTransporter, escapeHtml } from "@/lib/email";

const contactSchema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email().max(320),
  company: z.string().max(200).optional(),
  message: z.string().min(1).max(5000),
  type: z.string().max(50).optional(),
  _t: z.number().optional(),
});

const MIN_SUBMIT_TIME_MS = 3000; // 3 seconds minimum to fill form

const inquiryTypes: Record<string, string> = {
  general: "General Inquiry",
  founder: "Founder / Startup",
  investor: "Investor",
  partner: "Potential Partner",
  media: "Media / Press",
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", issues: parsed.error.issues.map((i) => i.message) },
        { status: 400 }
      );
    }

    const { name, email, company, message, type, _t } = parsed.data;

    // Time-based spam check: reject if submitted faster than humanly possible
    if (_t && Date.now() - _t < MIN_SUBMIT_TIME_MS) {
      // Silently accept to not reveal detection to bots
      return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
    }

    const inquiryType = inquiryTypes[type ?? "general"] || "General Inquiry";

    await prisma.contact.create({
      data: { type: inquiryType, name, email, company, message },
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = company ? escapeHtml(company) : "";
    const safeMessage = escapeHtml(message);
    const safeInquiryType = escapeHtml(inquiryType);

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f6f9fc; padding: 40px 20px;">
          <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; padding: 0;">
            <div style="padding: 32px 40px 24px; text-align: center; border-bottom: 1px solid #e5e7eb;">
              <img src="https://sbv.one/sbv_logo_inverted.png" width="92" height="40" alt="SBV Logo" style="margin: 0 auto 8px; display: block;" />
              <p style="font-size: 18px; font-weight: 500; letter-spacing: -0.02em; color: #1a1a1a; margin: 0; line-height: 1;">StartingBlock</p>
              <p style="font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase; color: #6b7280; margin: 2px 0 0; font-weight: 300;">VENTURES</p>
            </div>

            <div style="padding: 32px 40px;">
              <h2 style="font-size: 24px; font-weight: 500; color: #1a1a1a; margin: 0 0 8px;">New Contact Message</h2>
              <p style="font-size: 14px; color: #6b7280; margin: 0 0 24px;">Someone has reached out through the website contact form.</p>

              <div style="margin-bottom: 24px;">
                <p style="font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: #9ca3af; margin: 0 0 16px; font-weight: 500;">Contact Information</p>

                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; font-size: 13px; color: #6b7280; width: 120px; vertical-align: top;">Name</td>
                    <td style="padding: 8px 0; font-size: 14px; color: #1a1a1a; font-weight: 500;">${safeName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-size: 13px; color: #6b7280; width: 120px; vertical-align: top;">Email</td>
                    <td style="padding: 8px 0; font-size: 14px; color: #1a1a1a; font-weight: 500;">${safeEmail}</td>
                  </tr>
                  ${safeCompany ? `
                  <tr>
                    <td style="padding: 8px 0; font-size: 13px; color: #6b7280; width: 120px; vertical-align: top;">Company</td>
                    <td style="padding: 8px 0; font-size: 14px; color: #1a1a1a; font-weight: 500;">${safeCompany}</td>
                  </tr>
                  ` : ''}
                  <tr>
                    <td style="padding: 8px 0; font-size: 13px; color: #6b7280; width: 120px; vertical-align: top;">Type</td>
                    <td style="padding: 8px 0; font-size: 14px; color: #1a1a1a; font-weight: 500;">${safeInquiryType}</td>
                  </tr>
                </table>
              </div>

              <hr style="border: none; border-top: 1px solid #f3f4f6; margin: 24px 0;">

              <div>
                <p style="font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: #9ca3af; margin: 0 0 16px; font-weight: 500;">Message</p>
                <p style="font-size: 14px; color: #374151; line-height: 1.6; margin: 0; white-space: pre-wrap;">${safeMessage}</p>
              </div>
            </div>

            <div style="padding: 24px 40px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="font-size: 12px; color: #9ca3af; margin: 0 0 4px;">This message was sent through the SBV website contact form.</p>
              <p style="font-size: 12px; color: #9ca3af; margin: 0;">Reply directly to this email to respond to ${safeName}.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const transporter = getTransporter();

    await transporter.sendMail({
      from: `"Starting Block Ventures" <${process.env.SMTP_FROM}>`,
      to: "hello@sbv.one",
      replyTo: email,
      subject: `[${inquiryType}] New message from ${name}`,
      html: emailHtml,
    });

    const safeMessagePreview = escapeHtml(message.length > 200 ? message.substring(0, 200) + '...' : message);

    const confirmationHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f6f9fc; padding: 40px 20px;">
          <div style="max-width: 500px; margin: 0 auto; background: white; border-radius: 12px; padding: 40px;">
            <div style="text-align: center; margin-bottom: 32px;">
              <img src="https://sbv.one/sbv_logo_inverted.png" width="92" height="40" alt="SBV Logo" style="margin: 0 auto 8px; display: block;" />
              <p style="font-size: 18px; font-weight: 500; letter-spacing: -0.02em; color: #1a1a1a; margin: 0; line-height: 1;">StartingBlock</p>
              <p style="font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase; color: #6b7280; margin: 2px 0 0; font-weight: 300;">VENTURES</p>
            </div>

            <h2 style="font-size: 20px; font-weight: 500; color: #1a1a1a; margin: 0 0 16px;">Message Received!</h2>

            <p style="font-size: 14px; color: #4b5563; line-height: 1.6; margin: 0 0 16px;">
              Hi ${safeName},
            </p>

            <p style="font-size: 14px; color: #4b5563; line-height: 1.6; margin: 0 0 16px;">
              Thank you for reaching out to Starting Block Ventures. We've received your message and will get back to you as soon as possible.
            </p>

            <p style="font-size: 14px; color: #4b5563; line-height: 1.6; margin: 0 0 24px;">
              In the meantime, feel free to explore our website or follow us on <a href="https://www.linkedin.com/company/starting-block-ventures/" style="color: #2563eb; text-decoration: none;">LinkedIn</a> for the latest updates.
            </p>

            <div style="background: #f9fafb; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
              <p style="font-size: 12px; color: #6b7280; margin: 0 0 4px;">Your message:</p>
              <p style="font-size: 14px; color: #1a1a1a; margin: 0; white-space: pre-wrap;">${safeMessagePreview}</p>
            </div>

            <p style="font-size: 14px; color: #4b5563; line-height: 1.6; margin: 0;">
              Best regards,<br>
              <strong>The SBV Team</strong>
            </p>

            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 32px 0 16px;">

            <p style="font-size: 12px; color: #9ca3af; text-align: center; margin: 0;">
              Starting Block Ventures &middot; Makati, Philippines
            </p>
          </div>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"Starting Block Ventures" <${process.env.SMTP_FROM}>`,
      to: email,
      cc: "hello@sbv.one",
      replyTo: "hello@sbv.one",
      subject: "We've received your message - SBV",
      html: confirmationHtml,
    });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
