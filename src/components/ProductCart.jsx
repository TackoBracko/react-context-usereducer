import Product from "./Product"
export default function ProductCart({cartProducts }) {
    
    const totalOfProducts = cartProducts.reduce((total, product) => total + product.price, 0).toFixed(2)

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
                                    <button>-</button>
                                    <span>0</span>
                                    <button>+</button>
                                </div>
                            </li>
                        )}
                        
                    </ul>
                }

            <p className="cart-total-price">Cart total: $ {totalOfProducts}</p>
        </div>
    )
}