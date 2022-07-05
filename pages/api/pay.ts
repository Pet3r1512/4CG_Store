import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../src/client/getPrismaClient";
import { ProductWithQuantity } from "../../src/products/fetchProductDetails";

interface Order {
  customerName: string;
  customerPhoneNumber: string;
  cart: ProductWithQuantity[];
  total: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(500).json({ message: "Unsupported method" });
    return;
  }

  const { customerName, customerPhoneNumber, cart, total } = req.body as Order;

  const noCustomerDetails = !customerName || !customerPhoneNumber;
  const emptyCart = !cart || cart.length <= 0;
  const noItem = total === 0;

  if (noCustomerDetails || emptyCart || noItem) {
    res.status(500).json({ message: "Invalid payment payload" });
    return;
  }

  try {
    const receipt = await prisma.receipt.create({
      data: {
        customerName,
        customerPhoneNumber,
        total,
        ReceiptDetails: {
          createMany: {
            data: cart.map((item) => ({
              productId: item.id,
              quantity: item.quantity,
            })),
          },
        },
      },
    });

    res.status(200).json({ message: "payment success", receipt });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "database connection error" });
  }
}