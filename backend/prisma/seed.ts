import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import {
  PrismaClient,
  Roles,
  type Product,
  type Supplier,
} from "../generated/prisma/client";
import argon2 from "argon2";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// USERS

async function seedUsers() {
  const options: argon2.HashOptions = {
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    hashLength: 50,
    timeCost: 5,
    parallelism: 5,
  };

  const adminpasswordHash = await argon2.hash("admin123!", options);

  const managerpasswordHash = await argon2.hash("manager123!", options);

  const operateurpasswordHash = await argon2.hash("operateur123!", options);
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

// PRODUITS

async function seedProduct() {
  const products = [
    {
      reference: "CLAVIER-001",
      name: "Clavier mécanique",
      description: "Clavier mécanique USB AZERTY",
      barcode: "376000000001",
      unit: "piece",
      minimumStock: 10,
      active: true,
    },
    {
      reference: "SOURIS-001",
      name: "Souris sans fil",
      description: "Souris sans fil Bluetooth avec capteur optique",
      barcode: "376000000002",
      unit: "piece",
      minimumStock: 15,
      active: true,
    },
    {
      reference: "ECRAN-001",
      name: "Écran 24 pouces",
      description: "Écran LED Full HD 24 pouces",
      barcode: "376000000003",
      unit: "piece",
      minimumStock: 5,
      active: false,
    },
    {
      reference: "ECRAN-002",
      name: "Écran 27 pouces",
      description: "Écran LED 27 pouces résolution 2560x1440",
      barcode: "376000000004",
      unit: "piece",
      minimumStock: 5,
      active: true,
    },
    {
      reference: "CABLE-001",
      name: "Câble HDMI",
      description: "Câble HDMI haute vitesse de 2 mètres",
      barcode: "376000000005",
      unit: "piece",
      minimumStock: 20,
      active: false,
    },
    {
      reference: "CABLE-002",
      name: "Câble USB-C",
      description: "Câble USB-C vers USB-C de 1 mètre",
      barcode: "376000000006",
      unit: "piece",
      minimumStock: 25,
      active: false,
    },
    {
      reference: "CASQUE-001",
      name: "Casque audio",
      description: "Casque audio filaire avec microphone intégré",
      barcode: "376000000007",
      unit: "piece",
      minimumStock: 10,
      active: true,
    },
    {
      reference: "WEBCAM-001",
      name: "Webcam Full HD",
      description: "Webcam USB Full HD 1080p avec microphone",
      barcode: "376000000008",
      unit: "piece",
      minimumStock: 8,
      active: true,
    },
    {
      reference: "HUB-001",
      name: "Hub USB",
      description: "Hub USB 3.0 avec quatre ports",
      barcode: "376000000009",
      unit: "piece",
      minimumStock: 10,
      active: false,
    },
    {
      reference: "CHARGEUR-001",
      name: "Chargeur USB-C",
      description: "Chargeur secteur USB-C 65W",
      barcode: "376000000010",
      unit: "piece",
      minimumStock: 12,
      active: true,
    },
  ];

  const createdProducts: Product[] = [];

  for (const product of products) {
    const result = await prisma.product.upsert({
      where: {
        reference: product.reference,
      },
      update: {},
      create: product,
    });

    createdProducts.push(result);
  }

  return createdProducts;
}

// FOURNISSEURS

async function seedSupplier() {
  const suppliers: Supplier[] = [];
  const supplier1 = await prisma.supplier.upsert({
    where: { email: "contact@techdistrib.fr", phone: "01 45 67 89 10" },
    create: {
      name: "TechDistrib",
      email: "contact@techdistrib.fr",
      phone: "01 45 67 89 10",
      address: "24 rue des Entrepreneurs",
      city: "Paris",
      country: "France",
      postalCode: "75015",
    },
    update: {},
  });
  const supplier2 = await prisma.supplier.upsert({
    where: { email: "acme@example.com", phone: "03 11 11 11 11" },
    create: {
      name: "acme",
      email: "acme@example.com",
      phone: "03 11 11 11 11",
      address: "10 rue de Paris",
      city: "Paris",
      country: "France",
      postalCode: "75015",
    },
    update: {},
  });
  const supplier3 = await prisma.supplier.upsert({
    where: { email: "contact@techdistribution.fr", phone: "045678910" },
    create: {
      name: "TechDistribution",
      email: "contact@techdistribution.fr",
      phone: "045678910",
      address: "24 rue des Entrepreneurs",
      city: "Paris",
      country: "France",
      postalCode: "75015",
    },
    update: {},
  });
  suppliers.push(supplier1, supplier2, supplier3);
  return suppliers;
}

// PRODUITS + FOURNISSEURS

async function seedProductSupplier(products: Product[], suppliers: Supplier[]) {
  await prisma.productSupplier.createMany({
    data: [
      {
        productId: products[0]!.id,
        supplierId: suppliers[0]!.id,
      },
      {
        productId: products[1]!.id,
        supplierId: suppliers[0]!.id,
      },
      {
        productId: products[6]!.id,
        supplierId: suppliers[1]!.id,
      },
      {
        productId: products[4]!.id,
        supplierId: suppliers[2]!.id,
      },
      {
        productId: products[1]!.id,
        supplierId: suppliers[2]!.id,
      },
      {
        productId: products[8]!.id,
        supplierId: suppliers[1]!.id,
      },
    ],
    skipDuplicates: true,
  });
}

async function main() {
  await seedUsers();
  const products = await seedProduct();
  const suppliers = await seedSupplier();
  await seedProductSupplier(products, suppliers);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  });
