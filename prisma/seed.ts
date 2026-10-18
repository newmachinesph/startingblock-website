import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const prisma = new PrismaClient();

async function main() {
  const password = crypto.randomBytes(12).toString("base64url");
  const hashedPassword = await bcrypt.hash(password, 12);

  const admin = await prisma.admin.upsert({
    where: { email: "hello@sbv.one" },
    update: {},
    create: {
      email: "hello@sbv.one",
      password: hashedPassword,
    },
  });

  console.log(`\n✓ Admin account created/verified`);
  console.log(`  Email:    ${admin.email}`);
  console.log(`  Password: ${password}`);
  console.log(`\n  Save this password — it won't be shown again.\n`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
