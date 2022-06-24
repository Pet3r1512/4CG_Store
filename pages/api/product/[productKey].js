import { getPrismaClient } from '../../../backend/getPrismaClient';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(500).json({ message: 'Unsupported method' });
  }

  const prisma = getPrismaClient();
  const { productKey } = req.query;
  if (!productKey) {
    res.status(500).json({ message: 'Invalid product key' });
    return;
  }

  const product = await prisma.product.findUnique({
    where: { key: productKey }
  });
  res.status(200).json({ product });
}
