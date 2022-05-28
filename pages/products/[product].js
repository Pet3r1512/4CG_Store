/* eslint-disable @next/next/link-passhref */
import Link from "next/link"
import hoodies from "./hoodies.json"
import minibags from "./minibags.json"
import pants from "./pants.json"
import tshirts from "./tshirts.json"
import wallets from "./wallets.json"
import SideBar from "../../Components/SideBar";
import Header from "../../Components/Header";
import SubSearchBar from "../../Components/SubSearchBar";

export async function getServerSideProps (context){
   const product = getProducts(context.query.product)

   return {
      props:{
         product: product,
      }
   }
}

const products = hoodies.concat(wallets, minibags, pants, tshirts)

const getProducts = (param) => {
   const splitProduct = param.split("-")
   const key = splitProduct[splitProduct.length - 1]
   
   const product = products.find(product => product.key == key)

   if (product){
      return product
   } else return null
}

export default function Product({ product }){
   console.log(product)
   return (
      <div>
         <SideBar />
         <div>
            <Header />
            <SubSearchBar />
            <div className="mt-20">
               <h1 className="text-5xl">{product.name}</h1>
            </div>
         </div>
      </div>
   )
}