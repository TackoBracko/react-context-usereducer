import { useContext } from "react"
import { CartContext } from "../App"

export default function ProductCart() {
    const cartContext = useContext(CartContext)
    
    const totalOfProducts = cartContext.cartProducts.reduce(
        (total, item) => total + item.price * item.quantity, 0
    ).toFixed(2)

    return (
        <div className="cart">
            <h2>Your Cart</h2>

                {cartContext.cartProducts.length === 0 ? <p>No items in cart</p> : 

                    <ul className="cart-items">
                        {cartContext.cartProducts.map((product) =>
                            <li key={product.id}>
                                <div>
                                    <p>{product.title}</p>
                                    <p>${product.price}</p>
                                </div>

                                <div className="cart-item-actions">
                                    <button onClick={() => cartContext.removeProductFromCart(product)}>-</button>
                                    <span>{product.quantity}</span>
                                    <button onClick={() => cartContext.addProductToCart(product)}>+</button>
                                </div>
                            </li>
                        )}
                        
                    </ul>
                }

            <p className="cart-total-price">Cart total: $ {totalOfProducts}</p>
        </div>
    )
}
