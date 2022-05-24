/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";

export default function Hero() {
  return (
    <div>
      <h1 className="text-white h-screen flex flex-col items-center justify-start mt-14 gap-y-10">
        <div className="font-libre text-6xl sm:text-7xl text-center italic md:text-8xl">
          Welcome <br /> to
          <p className="font-dancing not-italic bg-gradient-to-r from-rose-400 to-orange-300 bg-clip-text text-transparent font-bold md:h-36 w-full px-2">
            4CG Store
          </p>
        </div>
        <div className="font-playfair not-italic text-sm md:text-lg text-white border-2 border-solid rounded-lg p-2 hover:bg-white hover:text-black font-semibold transition duration-200 ease-linear">
          <Link href="./product">SHOP NOW!</Link>
        </div>
      </h1>
    </div>
  );
}
