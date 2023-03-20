import clsx from "clsx";
import { AiTwotoneStar } from "react-icons/ai";

import styles from "styles/ProductItem.module.css";
import { starRates } from "types";

type productType = {
  id: number;
  title: string;
  price: number;
  description?: string;
  category?: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const ProductItem = () => {
  const product: productType = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 1,
      count: 120,
    },
  };

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
};

export default ProductItem;
