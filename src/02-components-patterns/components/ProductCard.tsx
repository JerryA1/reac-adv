import { createContext } from "react";
// styles
import styles from "../styles/styles.module.css";
// hooks
import { useProduct } from "../hooks/useProduct";
// interfaces
import {
  ProductCardProps,
  ProductContextProps,
} from "../interfaces/interfaces";

// ----------------------------------------------------------------------

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

// ----------------------------------------------------------------------

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};

export default ProductCard;
