import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/components";
import { z } from "zod";
import ApplicationEmail from "@/emails/ApplicationEmail";
import { prisma } from "@/lib/prisma";
import { getTransporter, escapeHtml } from "@/lib/email";

const applySchema = z.object({
  founderName: z.string().min(1).max(200),
  email: z.string().email().max(320),
  startupName: z.string().min(1).max(200),
  website: z.string().max(500).optional(),
  stage: z.string().min(1).max(100),
  industry: z.string().min(1).max(100),
  location: z.string().min(1).max(200),
  teamSize: z.string().min(1).max(50),
  pitch: z.string().min(1).max(5000),
  support: z.string().max(2000).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = applySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", issues: parsed.error.issues.map((i) => i.message) },
        { status: 400 }
      );
    }

    const {
      founderName,
      email,
      startupName,
      website,
      stage,
      industry,
      location,
      teamSize,
      pitch,
      support,
    } = parsed.data;

    await prisma.application.create({
      data: { founderName, email, startupName, website, stage, industry, location, teamSize, pitch, support },
    });

    const emailHtml = await render(
      ApplicationEmail({
        founderName,
        email,
        startupName,
        website,
        stage,
        industry,
        location,
        teamSize,
        pitch,
        support,
      })
    );

    const transporter = getTransporter();

    await transporter.sendMail({
      from: `"Starting Block Ventures" <${process.env.SMTP_FROM}>`,
      to: "hello@sbv.one",
      replyTo: email,
      subject: `New Application: ${startupName} - ${founderName}`,
      html: emailHtml,
    });

    const safeFounderName = escapeHtml(founderName);
    const safeStartupName = escapeHtml(startupName);

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

            <h2 style="font-size: 20px; font-weight: 500; color: #1a1a1a; margin: 0 0 16px;">Application Received!</h2>

            <p style="font-size: 14px; color: #4b5563; line-height: 1.6; margin: 0 0 16px;">
              Hi ${safeFounderName},
            </p>

            <p style="font-size: 14px; color: #4b5563; line-height: 1.6; margin: 0 0 16px;">
              Thank you for applying to the SBV Accelerator program with <strong>${safeStartupName}</strong>. We've received your application and our team will review it carefully.
            </p>

            <p style="font-size: 14px; color: #4b5563; line-height: 1.6; margin: 0 0 24px;">
              We typically respond within 5-7 business days. In the meantime, feel free to reach out if you have any questions.
            </p>

            <div style="background: #f9fafb; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
              <p style="font-size: 12px; color: #6b7280; margin: 0 0 4px;">What's next?</p>
              <p style="font-size: 14px; color: #1a1a1a; margin: 0;">Our team will review your application and reach out to schedule an initial conversation.</p>
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
      subject: "We've received your application - SBV Accelerator",
      html: confirmationHtml,
    });

    return NextResponse.json(
      { message: "Application submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
