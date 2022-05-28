/* eslint-disable @next/next/link-passhref */
import wallets from "../public/images/products/Wallets/wallets"
import Link from "next/link"

export async function getServerSideProps (context){
   const item = getItem(context.query.item)
   console.log(item)

   return {
      props:{
         item: item
      }
   }
}

const getItem = (param) => {
   const splitItem = param.split("-")
   const id = splitItem[splitItem.length - 1]
   
   const item = wallets.find(wallet => (wallet.id = id))
   if (item){
      return item
   } else return null
}

export default function Item({ item }){
   console.log(item)
   return (
      <div>
         <Link href="/product"><button>Back</button></Link>
         <p>
            {item.key}
            {item.name}
            {item.price}
         </p>
      </div>
   )
}