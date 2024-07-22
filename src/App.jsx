import { useState } from "react"
import Header from "./components/Header"
import ProductsList from "./components/ProductsList"

function App() {

  const [cartProducts, setCartProducts] = useState([])

  /*const addProductToCart = (cartProducts) => {
    setCartProducts(prevProduct => {
      return [...prevProduct, cartProducts]
    })
  }*/

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
    <>
      <Header cartProducts={cartProducts} addProductToCart={addProductToCart} removeProductFromCart={removeProductFromCart} />
      <ProductsList addProductToCart={addProductToCart} />
    </>
  )
}

export default App
