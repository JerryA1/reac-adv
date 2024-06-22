// components
import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
// hooks
import { useShoppingCart } from "../hooks/useShoppingCart";
// data
import { products } from "../data/products";
//
import "../styles/custom-styles.css";

// ----------------------------------------------------------------------

const ShoppingPage = () => {
  const { onProductCountChange, shoppingCart } = useShoppingCart();

  return (
    <div>
      <div>ShoppingPage</div>

      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((_product) => (
          <ProductCard
            product={_product}
            className="bg-dark text-white"
            key={_product.id}
            onChange={onProductCountChange}
            value={shoppingCart[_product.id]?.count || 0}
          >
            <ProductImage
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
            />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, _productInCart]) => (
          <ProductCard
            product={_productInCart}
            className="bg-dark text-white"
            style={{ width: "100px" }}
            key={key}
            onChange={onProductCountChange}
            value={_productInCart.count}
          >
            <ProductImage
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
            />
            <ProductButtons
              className="custom-buttons"
              style={{ display: "flex", justifyContent: "center" }}
            />
          </ProductCard>
        ))}
      </div>

      <div>
        <code>{JSON.stringify(shoppingCart, null, 5)}</code>
      </div>
    </div>
  );
};

export default ShoppingPage;
