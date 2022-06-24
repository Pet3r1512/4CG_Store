import Link from "next/link";

export default function Card({ img, name, price, slug }) {
  return (
    <div className="mx-auto mt-4 card px-6 pb-4 flex flex-col gap-2 items-center">
      <div className="min-h-[550px] flex items-center">
        <img
          src={img}
          alt=""
          className="max-w-[300px] min-w-[200px] sm:max-w-[350px] sm:min-w-[300px] "
        />
      </div>
      <div className="flex flex-col ">
        <h1 className="font-libre text-3xl">{name}</h1>
        <p className="font-poppins">{price} VND</p>
      </div>
      <div>
        <Link href={`/products/${slug}`} passHref>
          <button className="bg-red-400 text-white font-semibold text-xl px-6 py-1 rounded-lg flex justify-center items-center border-[3px] border-red-400 hover:text-red-500 hover:bg-white transition duration-100 ease-linear font-dancing max-w-[150px]">
            Buy now !
          </button>
        </Link>
      </div>
    </div>
  );
}
