// components
import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
// data
import { products } from "../data/products";

// ----------------------------------------------------------------------

const product = products[0];

// ----------------------------------------------------------------------

const ShoppingPage = () => {
  return (
    <div>
      <div>ShoppingPage</div>

      <hr />

      <ProductCard
        product={product}
        key={product.id}
        initialValues={{
          count: 3,
          maxCount: 10,
        }}
      >
        {({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
