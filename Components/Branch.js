export default function Branch(props){
   return(
      < div className="mx-auto mb-16 text-xl">
         <h1 className="title font-bold text-center underline underline-offset-4 my-6">{props.branch}</h1>
         <p className="text-center">{props.address}</p>
         {props.address2 && <p className="text-center">{props.address2}</p>} 
      </div>
   )
}