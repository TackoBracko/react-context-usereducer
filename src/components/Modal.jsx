import { forwardRef, useImperativeHandle, useRef } from "react"

const Modal = forwardRef(function Modal({}, ref) {

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
            <h2>Your Cart</h2>
            <p>No items in cart</p>
            <p>Cart total: $ 0.00</p>
            <form method="dialog" className="modal-actions">
                <button>Close</button>
            </form>
        </dialog>
    )
})

export default Modal