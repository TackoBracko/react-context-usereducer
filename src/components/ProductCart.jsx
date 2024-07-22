export default function ProductCart({cartProducts, addProductToCart, removeProductFromCart }) {
    
    const totalOfProducts = cartProducts.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity, 0
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
