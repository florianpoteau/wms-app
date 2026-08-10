import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient, Roles } from "../generated/prisma/client";
import bcrypt from "bcrypt";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
async function main() {
  const adminpasswordHash = await bcrypt.hash("admin123", 10);
  const managerpasswordHash = await bcrypt.hash("manager123", 10);
  const operateurpasswordHash = await bcrypt.hash("operateur123", 10);
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
