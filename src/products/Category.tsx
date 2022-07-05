import Card from "./Card";
import { convertPrice } from "./formatPrice";
import { Product } from "./fetchProductDetails";

interface CategoryProps {
  products: Product[];
  category: string;
}

export default function Category({ products, category }: CategoryProps) {
  return (
    <div>
      <h1 className="text-3xl font-extrabold">{`${category
        .substring(0, 1)
        .toUpperCase()}${category.substring(1)}`}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 lg:gap-5">
        {products.map((product) => {
          return (
            <Card
              key={product.key}
              name={product.name}
              price={convertPrice(product.price)}
              img={product.img}
              slug={product.slug}
            />
          );
        })}
      </div>
    </div>
  );
}
