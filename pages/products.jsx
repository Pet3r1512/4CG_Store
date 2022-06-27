import { useCallback } from "react";
import Category from "../src/products/Category";
import Template from "../src/layout/Template";
import useFetch from "../src/client/swr";

export default function Products() {
  const { data, isLoading, error } = useFetch("/api/products");

  const createProductList = useCallback((products) => {
    const types = Array.from(
      new Set([...products.map((product) => product.type)])
    );
    return types.map((type) => {
      const productList = products.filter((product) => product.type === type);
      return <Category key={type} category={type} products={productList} />;
    });
  }, []);

  if (error) {
    return <h1>Error loading products</h1>;
  }

  return (
    <Template>
      <div className="relative max-w-7xl mx-auto my-14 px-3 sm:px-4 lg:px-0 flex flex-col gap-y-14">
        {isLoading && <>Loading...</>}
        {data && createProductList(data.products)}
      </div>
    </Template>
  );
}
