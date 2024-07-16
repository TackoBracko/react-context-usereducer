export default function Product(props) {
    return (
        <div className="product">
            <img src={props.image} />

            <div className="product-content">
                <div>
                    <h3>{props.title}</h3>
                    <p className="product-price">${props.price}</p>
                    <p>{props.description}</p>
                </div>

                <div className="product-actions">
                    <button>Add to Cart</button>
                </div>

            </div>
        </div>
    )
}