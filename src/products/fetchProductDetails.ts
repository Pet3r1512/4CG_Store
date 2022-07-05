import useSWR from "swr";

export interface Product {
  id: string;
  key: string;
  type: string;
  name: string;
  price: number;
  img: string;
  slug: string;
  bestseller: boolean;
}

export interface SingleProductResult {
  product: Product;
}

export interface ProductWithQuantity extends Product {
  quantity: number;
}

export interface ProductsResult {
  products: Product[];
}

const fetcher = (key: string) =>
  fetch(key)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Something went wrong.");
      }

      return res.json();
    })
    .catch((error) => {
      throw new Error(error);
    });

export default function useFetch<T extends object = object>(
  key: string | null
) {
  const { data, error } = useSWR<T>(key, fetcher);

  return {
    data,
    isLoading: !data && !error,
    error,
  };
}
