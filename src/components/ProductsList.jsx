import { DUMMY_PRODUCTS } from "../dummy-products";
import Product from "./Product";

export default function ProductsList() {

    return (
        <div className="shop">
            <h2>Elegant clothing for everyone</h2>

            <ul className="products">
                {DUMMY_PRODUCTS.map(product => {
                    return(

                        <li key={product.id}>
                            <Product 
                                image={product.image}
                                title={product.title}
                                price={product.price}
                                description={product.description}
                            />
                        </li> 
                        
                    )
                })}

            </ul>
        </div>
    )
}