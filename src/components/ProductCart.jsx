import { useContext } from "react"
import { Context } from "./Context"

export default function ProductCart() {

    //const context = useContext(Context)
    const {cartProducts, addProductToCart, removeProductFromCart} = useContext(Context)

    const totalOfProducts = cartProducts.reduce(
        (total, item) => total + item.price * item.quantity, 0
    ).toFixed(2)

    return (
        <div className="cart">
            <h2>Your Cart</h2>

                {cartProducts.length === 0 ? <p>No items in cart</p> : 

                    <ul className="cart-items">
                        {cartProducts.map((product) =>
                            <li key={product.id}>
                                <div>
                                    <p>{product.title}</p>
                                    <p>${product.price}</p>
                                </div>

                                <div className="cart-item-actions">
                                    <button onClick={() => removeProductFromCart(product)}>-</button>
                                    <span>{product.quantity}</span>
                                    <button onClick={() => addProductToCart(product)}>+</button>
                                </div>
                            </li>
                        )}
                        
                    </ul>
                }

            <p className="cart-total-price">Cart total: $ {totalOfProducts}</p>
        </div>
    )
}
