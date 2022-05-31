import SideBar from "../Components/SideBar"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import SubSearchBar from "../Components/SubSearchBar"

export default function Policy (){
   return (
      <div>
         <div className="w-full z-10 top-0 bg-gray-600 pb-5">
            <Header />
            <SideBar />
            <SubSearchBar />
         </div>
         <div className="h-screen">
            
         </div>
         <Footer />
      </div>
   )
}