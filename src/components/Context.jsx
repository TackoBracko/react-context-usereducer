import { createContext, useReducer} from "react"

export const Context = createContext()

const cartReducer = (state, action) => {
    if (action.type === 'ADD_PRODUCT') {
        const isItemInCart = state.find((cartProduct) => cartProduct.id === action.payload.id)

        if (isItemInCart) {
            return (
                state.map((cartProduct) => cartProduct.id === action.payload.id 
                ? {...cartProduct, quantity: cartProduct.quantity + 1} : cartProduct )
            )
        } else {
            return ([...state, {...action.payload, quantity: 1}])
        }
    }

    if (action.type === 'REMOVE_PRODUCT') {
        const isItemInCart = state.find((cartProduct) => cartProduct.id === action.payload.id)

        if (isItemInCart.quantity === 1) {
            return (state.filter((cartProduct) => cartProduct.id !== action.payload.id))
        } else {
            return(
                state.map((cartProduct) => cartProduct.id === action.payload.id 
                ? {...cartProduct, quantity: cartProduct.quantity - 1 } : cartProduct )
            )
        }
    }

    if (action.type === 'CONSOLE_PRODUCT') {
       console.log(action.payload.title, action.payload.price) 

       return state
    } 

    if (action.type === 'DECREMENT_PRODUCT') {
        return (
            state.map((cartProduct) => cartProduct.id === action.payload.id 
            ? {...cartProduct, quantity: cartProduct.quantity - 1} : cartProduct )
        )
    }

    return state
}

export const CartContextProvider = ({ children}) => { 
    //const [cartProducts, setCartProducts] = useState([])
    const [cartProducts, dispatch] = useReducer(cartReducer, [])


    const addProductToCart = (product) => {

        dispatch({
            type: 'ADD_PRODUCT',
            payload: product
        })

        /*const isItemInCart = cartProducts.find((cartProduct) => cartProduct.id === product.id)

        if (isItemInCart) {
            setCartProducts(
                cartProducts.map((cartProduct) => cartProduct.id === product.id 
                ? {...cartProduct, quantity: cartProduct.quantity + 1} : cartProduct)
            )
        } else {
            setCartProducts([...cartProducts, {...product, quantity: 1}])
        }*/
    }

    const removeProductFromCart = (product) => {

        dispatch({
            type: 'REMOVE_PRODUCT',
            payload: product
        })

        /*const isItemInCart = cartProducts.find((cartProduct) => cartProduct.id === product.id)

        if (isItemInCart.quantity === 1) {
            setCartProducts(cartProducts.filter((cartProduct) => cartProduct.id !== product.id))
        } else {
            setCartProducts(
                cartProducts.map((cartProduct) => cartProduct.id === product.id 
                ? {...cartProduct, quantity: cartProduct.quantity - 1 } : cartProduct)
            )
        }*/
    }

    const consoleDescription = (product) => {
        dispatch({
            type: 'CONSOLE_PRODUCT',
            payload: product
        })
    }

    const decrementProduct = (product) => {
        dispatch ({
            type: 'DECREMENT_PRODUCT',
            payload: product
        })
    }

    return (
        <Context.Provider value={{cartProducts, addProductToCart, removeProductFromCart, consoleDescription, decrementProduct}}>
            {children}
        </Context.Provider>
    )
}