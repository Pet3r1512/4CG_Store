import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../src/client/getPrismaClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(500).json({ message: "Unsupported method" });
    return;
  }

  try {
    const products = await prisma.product.findMany();
    res.status(200).json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "database connection error" });
  }
}
