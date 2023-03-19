import clsx from "clsx";
import SearchTool from "components/SearchTool";

import styles from "styles/ProductsPage.module.css";

const ProductsPage = () => {
  return (
    <div className={clsx(styles.productsContainer)}>
      <div className={clsx(styles.toolbar)}>
        <SearchTool />
      </div>
      <div className={clsx(styles.productList)}>productList</div>
    </div>
  );
};

export default ProductsPage;
