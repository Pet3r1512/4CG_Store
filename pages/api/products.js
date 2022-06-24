import { prisma } from '../../backend/getPrismaClient';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(500).json({ message: 'Unsupported method' });
    return;
  }

  const products = await prisma.product.findMany();

  res.status(200).json({ products });
}
