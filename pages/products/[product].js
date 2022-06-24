import { useAppContext } from "../../hooks/state";
import SideBar from "../../Components/SideBar";
import Header from "../../Components/Header";
import SubSearchBar from "../../Components/SubSearchBar";
import Button from "../../Components/Button";
import { getPrismaClient } from '../../backend/getPrismaClient';

export async function getServerSideProps(context) {
  const slug = context.query.product;
  const slugSplit = slug.split("-");
  const key = slugSplit[slugSplit.length - 1];

  const prisma = getPrismaClient();
  const product = await prisma.product.findUnique({
    where: { key },
  })

  return {
    props: {
      product,
    },
  };
}

export default function Product({ product }) {
  const context = useAppContext();
  const [_cart, addToCart] = context.cartArray;

  const addToCartHandler = () => addToCart(product);

  return (
    <div>
      <SideBar />
      <div className="w-full z-10 top-0 bg-gray-600 pb-5" id="navbar">
        <Header />
        <SubSearchBar />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="my-20 w-full flex flex-col sm:flex-row sm:justify-end">
          <div className="max-w-[350px] sm:max-w-[450px] md:max-w-[500px] mx-auto">
            <img src={product.img} alt=""/>
          </div>
          <div className="mx-[30px] sm:mx-auto w-full flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-1">
              <h1 className="font-poppins font-bold text-2xl">
                {product.name}
              </h1>
              <p className="font-semibold text-lg">{product.price}</p>
            </div>
            <Button onClick={addToCartHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}
