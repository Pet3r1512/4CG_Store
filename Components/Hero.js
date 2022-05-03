/* eslint-disable @next/next/no-html-link-for-pages */

export default function Hero (){
   return (
      <div>
         <h1 className="absolute text-[100px] font-libre z-10 top-[100px] left-[75px] w-[450px] text-center text-[#FFFFFF]">
            Welcome<p>to</p>
            <p>
               4CG Store
            </p>
            <a href="/product" className="text-sm text-[#FFFFFF] border-2 border-solid rounded-l-lg rounded-r-lg p-2 hover:bg-white hover:text-[#000000] font-medium">SHOP NOW!</a>
         </h1>
      </div>
   )
}