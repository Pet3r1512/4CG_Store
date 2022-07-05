import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../src/client/getPrismaClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(500).json({ message: "Unsupported method" });
  }

  const { productKey } = req.query;
  if (!productKey) {
    res.status(500).json({ message: "Invalid product key" });
    return;
  }

  try {
    const product = await prisma.product.findUnique({
      where: { key: productKey as string },
    });
    res.status(200).json({ product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "database connection error" });
  }
}
