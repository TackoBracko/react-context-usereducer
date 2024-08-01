import { useContext, useRef } from 'react'
import logo from '../assets/logo.png'
import Modal from './Modal'
import { Context } from './Context'

export default function Header() {
  const dialog = useRef()
  
  //const context = useContext(Context)
  const{cartProducts} = useContext(Context)

  const handleOpenModal = () => {
    dialog.current.open()
  }
  
  return (
    <>
      <Modal ref={dialog} />

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
  )
}