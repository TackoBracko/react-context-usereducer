import { createContext, useState } from "react"
import Header from "./components/Header"
import ProductsList from "./components/ProductsList"

export const CartContext = createContext()

function App() {
  const [cartProducts, setCartProducts] = useState([])

  const addProductToCart = (product) => {
    const isItemInCart = cartProducts.find((cartProduct) => cartProduct.id === product.id)

    if (isItemInCart) {
      setCartProducts(
        cartProducts.map((cartProduct) => cartProduct.id === product.id
        ? {...cartProduct, quantity: cartProduct.quantity + 1} : cartProduct)
      )
    } else {
      setCartProducts([...cartProducts, {...product, quantity: 1}])
    }
  }

  const removeProductFromCart = (product) => {
    const isItemInCart = cartProducts.find((cartProduct) => cartProduct.id === product.id)

    if (isItemInCart.quantity === 1) {
      setCartProducts(cartProducts.filter((cartProduct) => cartProduct.id !== product.id))
    } else {
      setCartProducts(
        cartProducts.map((cartProduct) => cartProduct.id === product.id 
        ? {...cartProduct, quantity: cartProduct.quantity - 1 } : cartProduct)
      )
    }
  }

  return (
    <CartContext.Provider value={{cartProducts, addProductToCart, removeProductFromCart}}>
      <Header />
      <ProductsList />
    </CartContext.Provider>
  )

}

export default App