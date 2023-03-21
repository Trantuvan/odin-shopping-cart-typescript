import clsx from "clsx";
import { AiTwotoneStar } from "react-icons/ai";

import styles from "styles/ProductItem.module.css";
import { starRates, productItemProps } from "types";

function ProductItem({ product }: productItemProps) {
  // TODO: redo logic for render star rating
  const wholeStars: starRates = Array.from(
    { length: Math.floor(product.rating.rate) },
    (_, i) => ({
      key: i,
      value: <AiTwotoneStar style={{ color: "hsl(26, 100%, 55%)" }} />,
    })
  );

  const fractionStars: starRates = Array.from(
    { length: 5 - Math.floor(product.rating.rate) },
    (_, i) => ({
      key: i,
      value: <AiTwotoneStar style={{ color: "hsl(220, 14%, 75%)" }} />,
    })
  );

  return (
    <div className={clsx(styles.productContainer)}>
      <div className={clsx(styles.productImg)}>
        <img src={product.image} alt="product-img" />
      </div>
      <div className={clsx(styles.productTitle)}>{product.title}</div>
      <div className={clsx(styles.productPrice)}>${product.price}</div>
      <div className={clsx(styles.productRating)}>
        <ul className={clsx(styles.ratingStars)}>
          {wholeStars.map((ws) => (
            <li key={ws.key}>{ws.value}</li>
          ))}
          {fractionStars.map((fs) => (
            <li key={fs.key}>{fs.value}</li>
          ))}
        </ul>
        <span>{product.rating.count} sold</span>
      </div>
    </div>
  );
}

export default ProductItem;
