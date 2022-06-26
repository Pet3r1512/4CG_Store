import { useCallback, useEffect } from "react";
import Header from "../src/layout/Header";
import SideBar from "../src/layout/SideBar";
import SubSearchBar from "../src/layout/SubSearchBar";
import Card from "../src/products/Card";
import Footer from "../src/layout/Footer";
import { convertPrice } from "../src/hooks/formatPrice";
import { prisma } from "../src/client/getPrismaClient";

export async function getServerSideProps() {
  const products = await prisma.product.findMany();

  const types = Array.from(new Set([...products.map((product) => product.type)]));

  return {
    props: {
      types,
      products,
    },
  };
}

export default function Products({ types, products }) {
  const createProductList = useCallback((products) => {
    return products.map((product) => {
      return (
        <Card
          key={product.key}
          name={product.name}
          price={convertPrice(product.price)}
          img={product.img}
          slug={product.slug}
        />
      );
    });
  }, []);

  const productsByType = types.map((type) => {
    const productList = products.filter((product) => product.type === type);
    return (
      <div key={type}>
        <h1 className="text-3xl font-extrabold">{`${type.substring(0,1).toUpperCase()}${type.substring(1)}`}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 lg:gap-5">
          {createProductList(productList)}
        </div>
      </div>
    );
  });

  useEffect(() => {
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
  }, []);

  return (
    <>
      <SideBar />
      <div className="w-full z-10 top-0 bg-gray-600 pb-5" id="navbar">
        <Header />
        <SubSearchBar />
      </div>
      <div className="relative max-w-7xl mx-auto my-14 px-3 sm:px-4 lg:px-0 flex flex-col gap-y-14">
        {productsByType}
      </div>
      <Footer />
    </>
  );
}
