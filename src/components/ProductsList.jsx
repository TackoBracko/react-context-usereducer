import { DUMMY_PRODUCTS } from "../dummy-products";
import Product from "./Product";
import { CartContext } from "../App";
import { useContext } from "react";

export default function ProductsList() {
  const cartContext = useContext(CartContext)

  return (
    <div className="shop">
      <h2>Elegant clothing for everyone</h2>
      
      <ul className="products">
        {DUMMY_PRODUCTS.map((product) => (
            <li key={product.id}>
              <Product 
                image={product.image}
                title={product.title}
                price={product.price}
                description={product.description}
                addProductToCart={() => cartContext.addProductToCart(product)}
              />
            </li>
          ))}
      </ul>
    </div>
  )
}