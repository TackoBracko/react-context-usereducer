import Header from "./components/Header"
import ProductsList from "./components/ProductsList"
import { CartContextProvider } from "./components/Context"

function App() {

  return (
    <CartContextProvider>
      <Header/>
      <ProductsList/>
    </CartContextProvider>
  )
}

export default App
