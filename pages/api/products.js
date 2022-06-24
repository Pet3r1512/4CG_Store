import { prisma } from '../../backend/getPrismaClient';

export default async function handler(req, res) {
  const products = await prisma.product.findMany();

  res.status(200).json({ products });
}
