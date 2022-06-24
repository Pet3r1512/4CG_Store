import hoodies from "../pages/products/hoodies.json";
import minibags from "../pages/products/minibags.json";
import pants from "../pages/products/pants.json";
import tshirts from "../pages/products/tshirts.json";
import wallets from "../pages/products/wallets.json";
import Image from "next/image";
import Link from "next/link";

export default function ProductsList({ input }) {
  const products = hoodies.concat(wallets, minibags, pants, tshirts);
  const productsFilter = products.filter((product) => {
    if (!input) return;

    return product.name.toLowerCase().includes(input);
  });

  return (
    <ul
      id="searchBG"
      className="absolute w-full overflow-auto max-h-56 rounded-lg scrollbar bg-white opacity-90 mt-2"
    >
      {productsFilter.map((product) => (
        <Link key={product.key} href={`/products/${product.slug}`} passHref>
          <li className="flex gap-4 p-2 pl-4 border border-b-2 hover:bg-gray-200 bg-cover w-full h-full rounded-lg hover:cursor-pointer">
            <Image
              alt="product image"
              src={product.img}
              width={40}
              height={10}
            />
            <div>
              <p className="font-playfair">{product.name}</p>
              <span className="font-libre text-rose-400">
                {product.price} VND
              </span>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}
