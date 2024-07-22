import { forwardRef, useImperativeHandle, useRef } from "react"
import ProductCart from "./ProductCart.jsx"

const Modal = forwardRef(function Modal({cartProducts, addProductToCart, removeProductFromCart}, ref) {

    const dialog = useRef()

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal()
            }
        }
    })

    return (
        <dialog ref={dialog} className="modal">

            <ProductCart cartProducts={cartProducts} addProductToCart={addProductToCart} removeProductFromCart={removeProductFromCart} />

            <form method="dialog" className="modal-actions">
                <button>Close</button>
            </form>

        </dialog>
    )
})

export default Modal