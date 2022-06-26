import Header from "../src/layout/Header";
import SideBar from "../src/layout/SideBar";
import SubSearchBar from "../src/layout/SubSearchBar";
import Footer from "../src/layout/Footer";
import Card from "../src/products/Card";
import NavBar from "../src/layout/NavBar";
import useFetch from "../src/client/swr";

export default function Best() {
  const { data, isLoading, error } = useFetch('/api/best');
  if (error) {
    return (
      <>
        <h1>
          Error loading best sellers
        </h1>
      </>
    );
  }

  return (
    <>
      <SideBar />
      <NavBar>
        <Header />
        <SubSearchBar />
      </NavBar>
      <div className="relative max-w-7xl mx-auto my-14 px-3 sm:px-4 lg:px-0 flex flex-col gap-y-14">
        <div>
          <h1 className="text-3xl font-extrabold">Best Sellers</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 lg:gap-5">
            {isLoading && <>Loading...</>}
            {data && data.products.map((item) => {
              return (
                <Card
                  key={item.key}
                  name={item.name}
                  price={item.price}
                  img={item.img}
                  slug={item.slug}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}