import { PrismaClient } from "@prisma/client";
import hoodies from "./json/hoodies.json";
import pants from "./json/pants.json";
import wallets from "./json/wallets.json";
import minibags from "./json/minibags.json";
import tshirts from "./json/tshirts.json";
import { Product } from "../src/products/fetchProductDetails";

function createProductDetails(
  product: Omit<Product, "id" | "type">,
  productType: string
): Omit<Product, "id"> {
  return {
    type: productType,
    key: product.key,
    name: product.name,
    price: product.price,
    img: product.img,
    slug: product.slug,
    bestseller: product.bestseller,
  };
}

const prisma = new PrismaClient();

async function insert() {
  const promises = [
    hoodies.map((hoodie) => createProductDetails(hoodie, "hoodie")),
    minibags.map((minibag) => createProductDetails(minibag, "minibag")),
    pants.map((pair) => createProductDetails(pair, "pants")),
    tshirts.map((shirt) => createProductDetails(shirt, "tshirt")),
    wallets.map((wallet) => createProductDetails(wallet, "wallet")),
  ]
    .flat()
    .map(async (product) => {
      const result = await prisma.product.create({ data: { ...product } });
      console.log(`Successfully insert product ${product.name}`);

      return result;
    });

  await Promise.all(promises);
}

insert()
  .then((res) => {
    console.log("ALL DONE");
    console.log(res);
  })
  .catch((e) => {
    console.error(e);
  })
  .finally(() => {
    prisma.$disconnect();
  });
