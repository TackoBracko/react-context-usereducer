import { DUMMY_PRODUCTS } from "../dummy-products"
import Product from "./Product"
import { Context } from "./Context"
import { useContext } from "react"

export default function ProductsList() {
  
  //const context = useContext(Context)
  const {addProductToCart} = useContext(Context)

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
              addProductToCart={() => addProductToCart(product)}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}