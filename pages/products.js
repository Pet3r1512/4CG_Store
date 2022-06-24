import { useCallback, useEffect } from "react";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import SubSearchBar from "../Components/SubSearchBar";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import { prisma } from "../backend/getPrismaClient";

export async function getServerSideProps() {
  const hoodies = await prisma.product.findMany({
    where: {
      type: 'hoodie',
    },
  });
  const minibags = await prisma.product.findMany({
    where: {
      type: 'minibag',
    },
  });
  const pants = await prisma.product.findMany({
    where: {
      type: 'pants',
    },
  });
  const tshirts = await prisma.product.findMany({
    where: {
      type: 'tshirt',
    },
  });
  const wallets = await prisma.product.findMany({
    where: {
      type: 'wallet',
    },
  });

  return {
    props: {
      hoodies,
      minibags,
      pants,
      tshirts,
      wallets,
    }
  }
}

export default function Products({ hoodies, minibags, pants, tshirts, wallets }) {
  const createProductList = useCallback((products) => {
    return products.map((product) => {
      return (
        <Card
          key={product.key}
          name={product.name}
          price={product.price}
          img={product.img}
          slug={product.slug}
        />
      )
    })
  }, []);

  const hoodiesList = createProductList(hoodies);
  const minibagsList = createProductList(minibags);
  const pantsList = createProductList(pants);
  const tshirtsList = createProductList(tshirts);
  const walletsList = createProductList(wallets);

  useEffect(
    () => {
      const navbar = document.getElementById("navbar");
      const sticky = navbar.offsetTop;

      function stickyNav() {
        if (window.scrollY > sticky) {
          navbar.classList.add("fixed");
        } else {
          navbar.classList.remove("fixed");
        }
      }

      window.onscroll = () => {
        stickyNav();
      };
    },
    []
  );

  return (
    <>
      <SideBar />
      <div className="w-full z-10 top-0 bg-gray-600 pb-5" id="navbar">
        <Header />
        <SubSearchBar />
      </div>
      <div className="relative max-w-7xl mx-auto my-14 px-3 sm:px-4 lg:px-0 flex flex-col gap-y-14">
        <div>
          <h1 className="text-3xl font-extrabold">Hoodies</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 lg:gap-5">
            {hoodiesList}
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-extrabold">Mini Bags</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 lg:gap-5">
            {minibagsList}
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-extrabold">Pants</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 lg:gap-5">
            {pantsList}
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-extrabold">T-shirts</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 lg:gap-5">
            {tshirtsList}
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-extrabold">Wallets</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 lg:gap-5">
            {walletsList}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
