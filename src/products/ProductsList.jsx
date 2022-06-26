import Image from "next/image";
import Link from "next/link";
import useFetch from "../client/swr";

export default function ProductsList({ input }) {
  const { data, isLoading } = useFetch(input ? `/api/search/${input}` : null);

  return (
    <ul
      id="searchBG"
      className="absolute w-full overflow-auto max-h-56 rounded-lg scrollbar bg-white opacity-90 mt-2"
    >
      {input && isLoading && <>Loading...</>}
      {data && data.products.map((product) => (
        <Link key={product.key} href={`/products/${product.slug}`} passHref>
          <li className="flex gap-4 p-2 pl-4 border border-b-2 hover:bg-gray-200 bg-cover w-full h-full rounded-lg hover:cursor-pointer text-black">
            <Image
              alt={`${product.name} image`}
              src={product.img}
              width={40}
              height={10}
            />
            <div>
              <p className="font-playfair">{product.name}</p>
              <span className="font-libre text-rose-400">{product.price}</span>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}
