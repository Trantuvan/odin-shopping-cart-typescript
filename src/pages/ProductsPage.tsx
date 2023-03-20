import clsx from "clsx";

import styles from "styles/ProductsPage.module.css";
import SearchTool from "components/SearchTool";
import FilterPrice from "components/FilterPrice";
import ProductItem from "components/ProductItem";

const ProductsPage = () => {
  return (
    <div className={clsx(styles.productsContainer)}>
      <div className={clsx(styles.toolbar)}>
        <SearchTool />
        <FilterPrice />
      </div>
      <div className={clsx(styles.productList)}>
        <ProductItem />
      </div>
    </div>
  );
};

export default ProductsPage;
