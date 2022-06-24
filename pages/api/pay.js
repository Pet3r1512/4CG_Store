import { prisma } from '../../backend/getPrismaClient';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(500).json({ message: 'Unsupported method' });
    return;
  }

  const { customerName, customerPhoneNumber, cart, total } = req.body;

  try {
    const receipt = await prisma.receipt.create({
      data: {
        customerName,
        customerPhoneNumber,
        total,
        ReceiptDetails: {
          createMany: {
            data: cart.map((item) => ({ productId: item.id, quantity: item.quantity }))
          },
        }
      }
    });

    res.status(200).json({ message: 'payment success', receipt });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'database connection error'});
  }
}
