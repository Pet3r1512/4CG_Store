import { useRouter } from "next/router";
import Template from "../../src/layout/Template";
import ProductSection from "../../src/products/ProductSection";
import { useAppStore } from "../../src/store";
import useFetch, {
  SingleProductResult,
} from "../../src/products/fetchProductDetails";

function getKeyFromSlug(slug: string) {
  const slugSplit = slug.split("-");
  const key = slugSplit[slugSplit.length - 1];
  return key;
}

export default function Product() {
  const router = useRouter();
  const { product: slug } = router.query;
  const { data, isLoading, error } = useFetch<SingleProductResult>(
    slug ? `/api/product/${getKeyFromSlug(slug as string)}` : null
  );
  const addToCart = useAppStore((state) => state.addToCart);

  return (
    <Template>
      {error && <>Error loading product.</>}
      {isLoading && <>Loading...</>}
      {data && (
        <ProductSection
          {...data.product}
          onClick={() => addToCart(data.product)}
        />
      )}
    </Template>
  );
}
