import { PrismaClient } from "@prisma/client";

const globalPrisma = global as unknown as { prisma?: PrismaClient };

let prisma: PrismaClient;

if (process.env.NODE_ENV !== "production") {
  prisma = new PrismaClient();
} else {
  if (!globalPrisma.prisma) {
    globalPrisma.prisma = new PrismaClient();
  }
  prisma = globalPrisma.prisma;
}

export default prisma;
