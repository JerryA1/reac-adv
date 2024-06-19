import { useContext } from "react";
// styles
import styles from "../styles/styles.module.css";
// context
import { ProductContext } from "./ProductCard";

// ----------------------------------------------------------------------

export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={styles.productDescription}>
      {title ? title : product.title}
    </span>
  );
};
