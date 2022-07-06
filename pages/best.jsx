import Card from "../src/products/Card";
import Template from "../src/layout/Template";
import useFetch from "../src/products/fetchProductDetails";

export default function Best() {
  const { data, isLoading, error } = useFetch("/api/best");

  return (
    <Template>
      <div className="relative max-w-7xl mx-auto my-14 px-3 sm:px-4 lg:px-0 flex flex-col gap-y-14">
        <div>
          <h1 className="text-3xl font-extrabold">Best Sellers</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 lg:gap-5">
            {error && <>Error loading best sellers</>}
            {isLoading && <>Loading...</>}
            {data &&
              data.products.map((item) => {
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
    </Template>
  );
}
