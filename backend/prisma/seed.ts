import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient, Roles } from "../generated/prisma/client";
import argon2 from "argon2";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const options: argon2.HashOptions = {
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    hashLength: 50,
    timeCost: 5,
    parallelism: 5,
  };

  const adminpasswordHash = await argon2.hash("admin123", options);

  const managerpasswordHash = await argon2.hash("manager123", options);

  const operateurpasswordHash = await argon2.hash("operateur123", options);
  const now = new Date();

  // admin
  await prisma.user.upsert({
    where: { email: "admin@example.io" },
    update: {},
    create: {
      email: "admin@example.io",
      name: "Doe",
      firstname: "John",
      passwordhashed: adminpasswordHash,
      role: Roles.ADMIN,
      createdAt: now,
      updatedAt: now,
    },
  });

  // manager
  await prisma.user.upsert({
    where: { email: "manager@example.io" },
    update: {},
    create: {
      email: "manager@example.io",
      name: "Dupont",
      firstname: "Louis",
      passwordhashed: managerpasswordHash,
      role: Roles.MANAGER,
      createdAt: now,
      updatedAt: now,
    },
  });

  // opérateur
  await prisma.user.upsert({
    where: { email: "operateur@example.io" },
    update: {},
    create: {
      email: "operateur@example.io",
      name: "Poteau",
      firstname: "Florian",
      passwordhashed: operateurpasswordHash,
      role: Roles.OPERATOR,
      createdAt: now,
      updatedAt: now,
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  });
