import { useRef } from 'react'
import logo from '../assets/logo.png'
import Modal from './Modal'

export default function Header({ cartProducts, addProductToCart, removeProductFromCart }) {
    const dialog = useRef()

    const handleOpenModal = () => {
      dialog.current.open()
    }
    
    return (
      <>
        <Modal ref={dialog} cartProducts={cartProducts} addProductToCart={addProductToCart} removeProductFromCart={removeProductFromCart}  />
        <header className="main-header">
          <div className="main-title">
            <img src={logo} className="main-img" />
            <h1>Elegant Context</h1>
          </div>
          <button className="main-header-button" onClick={handleOpenModal}>
            Cart <span>({cartProducts.length})</span>
          </button>
        </header>
      </>
    );
  }