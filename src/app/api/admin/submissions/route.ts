import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const patchSchema = z.object({
  ids: z.array(z.string().min(1)),
  type: z.enum(["application", "contact"]),
  read: z.boolean(),
});

const deleteSchema = z.object({
  ids: z.array(z.string().min(1)),
  type: z.enum(["application", "contact", "newsletter"]),
});

const paginationSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(50),
});

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const parsed = paginationSchema.safeParse({
    page: searchParams.get("page") ?? 1,
    limit: searchParams.get("limit") ?? 50,
  });

  const { page, limit } = parsed.success ? parsed.data : { page: 1, limit: 50 };
  const skip = (page - 1) * limit;

  const [applications, contacts, newsletters, appCount, contactCount, newsletterCount] = await Promise.all([
    prisma.application.findMany({ orderBy: { createdAt: "desc" }, take: limit, skip }),
    prisma.contact.findMany({ orderBy: { createdAt: "desc" }, take: limit, skip }),
    prisma.newsletter.findMany({ orderBy: { createdAt: "desc" }, take: limit, skip }),
    prisma.application.count(),
    prisma.contact.count(),
    prisma.newsletter.count(),
  ]);

  return NextResponse.json({
    applications,
    contacts,
    newsletters,
    pagination: {
      page,
      limit,
      total: { applications: appCount, contacts: contactCount, newsletters: newsletterCount },
    },
  });
}

export async function PATCH(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = patchSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { ids, type, read } = parsed.data;

  if (type === "application") {
    await prisma.application.updateMany({
      where: { id: { in: ids } },
      data: { read },
    });
  } else {
    await prisma.contact.updateMany({
      where: { id: { in: ids } },
      data: { read },
    });
  }

  return NextResponse.json({ success: true });
}

export async function DELETE(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = deleteSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { ids, type } = parsed.data;

  if (type === "application") {
    await prisma.application.deleteMany({ where: { id: { in: ids } } });
  } else if (type === "contact") {
    await prisma.contact.deleteMany({ where: { id: { in: ids } } });
  } else {
    await prisma.newsletter.deleteMany({ where: { id: { in: ids } } });
  }

  return NextResponse.json({ success: true });
}
