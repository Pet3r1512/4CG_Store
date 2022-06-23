import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export function getPrismaClient() {
  return client;
}
