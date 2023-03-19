import clsx from "clsx";
import styles from "styles/ProductsPage.module.css";

const ProductsPage = () => {
  return (
    <div className={clsx(styles.productsContainer)}>
      <div className={clsx(styles.toolbar)}>toolbar</div>
      <div className={clsx(styles.productList)}>productList</div>
    </div>
  );
};

export default ProductsPage;
