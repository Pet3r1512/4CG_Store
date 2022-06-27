const { PrismaClient } = require("@prisma/client");
const hoodies = require("./json/hoodies.json");
const minibags = require("./json/minibags.json");
const pants = require("./json/pants.json");
const tshirts = require("./json/tshirts.json");
const wallets = require("./json/wallets.json");

function createProductDetails(product, productType) {
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

async function insert() {
  const prisma = new PrismaClient();

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
