/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Card(props) {
  return (
    <div className="mx-auto mt-4 card px-6 pb-4 flex flex-col gap-4 items-center">
      <div className="min-h-[550px] flex items-center">
        <img
          src={props.img}
          alt=""
          className="max-w-[300px] min-w-[200px] sm:max-w-[350px] sm:min-w-[300px] "
        />
      </div>
      <div className="flex flex-col ">
        <h1 className="font-libre text-3xl">{props.name}</h1>
        <p className="font-poppins">{props.price} VND</p>
      </div>
      <div className="">
        <Link href={`/products/${props.slug}`}>
          <button className="bg-red-400 text-white font-semibold text-xl px-6 py-1 rounded-lg flex justify-center items-center border-[3px] border-red-400 hover:text-red-500 hover:bg-white transition duration-100 ease-linear font-dancing">
            Buy now !
          </button>
        </Link>
      </div>
    </div>
  );
}
