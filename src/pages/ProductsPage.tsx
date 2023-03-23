import { Suspense } from "react";
import clsx from "clsx";
import {
  Await,
  defer,
  LoaderFunctionArgs,
  useAsyncValue,
  useLoaderData,
} from "react-router-dom";

import { productArray } from "types";
import styles from "styles/ProductsPage.module.css";
import SearchTool from "components/SearchTool";
import FilterPrice from "components/FilterPrice";
import ProductItem from "components/ProductItem";

const ProductsPage = () => {
  const { products } = useLoaderData() as Record<string, productArray>;

  return (
    <div className={clsx(styles.productsContainer)}>
      <div className={clsx(styles.toolbar)}>
        <SearchTool />
        <FilterPrice />
      </div>
      {/* <ul className={clsx(styles.productList)}>
        {products.map((product) => (
          <li key={product.id}>
            <ProductItem product={product} />
          </li>
        ))}
      </ul> */}
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={products}>
          {(productLoaded) => (
            <ul className={clsx(styles.productList)}>
              {productLoaded.map((product) => (
                <li key={product.id}>
                  <ProductItem product={product} />
                </li>
              ))}
            </ul>
          )}
        </Await>
      </Suspense>
    </div>
  );
};

async function loader({ request }: LoaderFunctionArgs) {
  const products = fetch("https://fakestoreapi.com/products", {
    signal: request.signal,
  });

  // if (response.ok === false) {
  //   throw new Response(`${response.statusText}`, { status: response.status });
  // }

  // const products = await response.json();
  return defer({ products });
}

export { loader };
export default ProductsPage;
