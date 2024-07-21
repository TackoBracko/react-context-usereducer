import { useState } from "react"
import Header from "./components/Header"
import ProductsList from "./components/ProductsList"

function App() {

  const [cartProducts, setCartProducts] = useState([])

  const addProductToCart = (cartProducts) => {
    setCartProducts(prevProduct => {
      return [...prevProduct, cartProducts]
    })
  }

  return (
    <>
      <Header cartProducts={cartProducts} />
      <ProductsList addProductToCart={addProductToCart} />
    </>
  )
}

export default App
