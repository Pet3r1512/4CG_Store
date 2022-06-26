import { useCallback, useEffect } from "react";
import Header from "../src/layout/Header";
import SideBar from "../src/layout/SideBar";
import SubSearchBar from "../src/layout/SubSearchBar";
import Category from "../src/products/Category";
import Footer from "../src/layout/Footer";
import NavBar from "../src/layout/NavBar";
import useFetch from "../src/client/swr";

export default function Products() {
  const { data, isLoading, error } = useFetch('/api/products');

  const createProductList = useCallback(
    (products) => {
      const types = Array.from(new Set([...products.map((product) => product.type)]));
      return types.map((type) => {
        const productList = products.filter((product) => product.type === type);
        return <Category key={type} category={type} products={productList} />;
      });
    },
    []
  );


  if (error) {
    return (
      <h1>
        Error loading products
      </h1>
    );
  }

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
      <NavBar>
        <Header />
        <SubSearchBar />
      </NavBar>
      <div className="relative max-w-7xl mx-auto my-14 px-3 sm:px-4 lg:px-0 flex flex-col gap-y-14">
        {isLoading && <>Loading...</>}
        {data && createProductList(data.products)}
      </div>
      <Footer />
    </>
  );
}
