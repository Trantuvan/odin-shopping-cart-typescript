import clsx from "clsx";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

import { productArray } from "types";
import styles from "styles/ProductsPage.module.css";
import SearchTool from "components/SearchTool";
import FilterPrice from "components/FilterPrice";
import ProductItem from "components/ProductItem";

const ProductsPage = () => {
  const products = useLoaderData() as productArray;
  console.log(products);

  return (
    <div className={clsx(styles.productsContainer)}>
      <div className={clsx(styles.toolbar)}>
        <SearchTool />
        <FilterPrice />
      </div>
      <ul className={clsx(styles.productList)}>
        {products.map((product) => (
          <li key={product.id}>
            <ProductItem product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

async function loader({ request }: LoaderFunctionArgs) {
  const response = await fetch("https://fakestoreapi.com/products", {
    signal: request.signal,
  });

  if (response.ok === false) {
    throw new Response(`${response.statusText}`, { status: response.status });
  }
  return response;
}

export { loader };
export default ProductsPage;
