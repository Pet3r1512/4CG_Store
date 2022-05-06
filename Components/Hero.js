/* eslint-disable @next/next/no-html-link-for-pages */

export default function Hero() {
  return (
    <div>
      <h1 className="font-playfair italic font-400 text-6xl text-white pt-14 text-center leading-normal  md:text-left md:text-9xl md:pl-[150px]">
        Welcome <br /> to
        <p className="font-dancing not-italic bg-gradient-to-r from-rose-400 to-orange-300 bg-clip-text text-transparent font-bold md:h-36">4CG Store</p>
        <a
          href="./product"
          className="font-libre not-italic text-lg text-white border-2 border-solid rounded-lg p-2 hover:bg-white hover:text-black font-semibold transition duration-200 ease-linear"
        >
          SHOP NOW!
        </a>
      </h1>
    </div>
  );
}
