import { ReactElement } from "react";
import { product } from "./common";

type starRates = { key: number; value: ReactElement }[];

type productItemProps = {
  product: product;
};

export type { starRates, productItemProps };
