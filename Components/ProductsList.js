import hoodies from "../public/images/products/Hoodies/hoodies"
import wallets from "../public/images/products/Wallets/wallets"
import minibags from "../public/images/products/Mini_Bags/minibags"
import pants from "../public/images/products/Pants/pants"
import tshirts from "../public/images/products/Tshirts/tshirts"
import Image from "next/image"

export default function ProductsList ({ input }){

   const products = hoodies.concat(wallets, minibags, pants, tshirts)
   const productsFilter = products.filter((product) => {
      if (input){
         return product.name.toLowerCase().includes(input)
      }
   })

   return (
      <ul id="searchBG" className="absolute w-full overflow-auto max-h-56 rounded-lg scrollbar bg-white opacity-90 mt-2">
         {productsFilter.map((product) => (
            <li key={product.key} className="flex gap-6 p-2 pl-4 border border-b-2 hover:bg-gray-600 bg-cover w-full h-full rounded-lg hover:cursor-pointer">
               <Image alt="product image" src={product.img} width={40} height={10}></Image>
               <div>
                  <p className="font-playfair">{product.name}</p>
                  <span className="font-libre text-rose-400">{product.price} VND</span>
               </div>
            </li>
            ))}
      </ul>
   )
}