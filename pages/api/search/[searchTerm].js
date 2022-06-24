import { prisma } from '../../../backend/getPrismaClient';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(500).json({ message: 'Unsupported method' });
  }

  const { searchTerm } = req.query;
  if (!searchTerm) {
    res.status(500).json({ message: 'Invalid search term' });
    return;
  }

  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: searchTerm,
      }
    }
  });
  res.status(200).json({ products });
}
