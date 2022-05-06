/* eslint-disable @next/next/no-html-link-for-pages */

export default function Hero() {
  return (
    <div>
      <h1 className="font-oleo font-semibold italic text-6xl text-white pt-14 text-center leading-normal  md:text-left md:text-9xl md:pl-[150px]">
        Welcome <br /> to
        <p className="font-dancing bg-gradient-to-r from-rose-400 to-orange-300 bg-clip-text text-transparent font-bold">4CG Store</p>
        <a
          href="./product"
          className="text-lg text-white border-2 border-solid rounded-lg p-2 hover:bg-white hover:text-black font-semibold transition duration-75 ease-linear"
        >
          SHOP NOW!
        </a>
      </h1>
    </div>
  );
}
