import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

async function findProductFromApi(name) {
  try {
    return await fetch(`/api/search/${name}`)
      .then((res) => res.json());
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default function ProductsList({ input }) {
  const [products, setProducts] = useState([]);
  useEffect(
    () => {
      if (!input) {
        setProducts([]);
        return;
      }

      findProductFromApi(input)
        .then((apiResult) => {
          const products = apiResult.products;
          setProducts(products);
        });
    },
    [input]);

  return (
    <ul
      id="searchBG"
      className="absolute w-full overflow-auto max-h-56 rounded-lg scrollbar bg-white opacity-90 mt-2"
    >
      {products.map((product) => (
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
