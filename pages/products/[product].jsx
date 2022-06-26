import { useRouter } from "next/router";
import Template from "../../src/layout/Template";
import ProductSection from "../../src/products/ProductSection";
import { useAppContext } from "../../src/hooks/state";
import useFetch from "../../src/client/swr";

function getKeyFromSlug(slug) {
  const slugSplit = slug.split("-");
  const key = slugSplit[slugSplit.length - 1];
  return key;
}

export default function Product() {
  const router = useRouter();
  const { product: slug } = router.query;
  const { data, isLoading, error } = useFetch(slug ? `/api/product/${getKeyFromSlug(slug)}` : null);

  const context = useAppContext();
  const [_cart, addToCart] = context.cartArray;

  if (error) {
    return (
      <h1>
        Error loading product.
      </h1>
    )
  }

  return (
    <Template>
      {isLoading && <>Loading...</>}
      {data && <ProductSection {...data.product} onClick={() => addToCart(data.product)} />}
    </Template>
  );
}