export default function Product({image, title, price, description, addProductToCart, consoleDescription, decrementProduct}) {

    return (
        <div className="product">
            <img src={image} />

            <div className="product-content">
                <div>
                    <h3>{title}</h3>
                    <p className="product-price">${price}</p>
                    <p>{description}</p>
                </div>

                <div className="product-actions">
                    <button onClick={addProductToCart} >Add to Cart</button>
                </div>

                <div className="product-actions">
                    <button onClick={consoleDescription}>Console log</button>
                </div>

                <div className="product-actions">
                    <button onClick={decrementProduct}>Decrement</button>
                </div>

            </div>
        </div>
    )
}