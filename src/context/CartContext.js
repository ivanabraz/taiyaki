import { createContext, useState, useMemo } from "react";

// CREATE CONTEXT
export const CartContext = createContext();

// CREATE PROVIDER COMPONENT
export const CartProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([]);

    const cartAmount = useMemo(() => 
        cartProducts.reduce((item, product) => item + product.price * product.count, 0), [cartProducts]
    );

    // PRODUCT IS IN CART
    const isInCart = (id) => {
        return cartProducts.some((x) => x.product.id === id);
    };

    // ADD PRODUCT
    const addProduct = (product, count) => {
        if (isInCart(product.id)) {
        const indexItem = cartProducts.findIndex((x) => x.product.id === product.id);
        cartProducts[indexItem].count = cartProducts[indexItem].count + count;
        setCartProducts([...cartProducts]);
        } else {
        setCartProducts([...cartProducts, { product: product, count: count }]);
        }
    };

    // REMOVE PRODUCT
    const removeProduct = (id) => {
        setCartProducts(cartProducts.filter((product) => product.id !== id));
    };

    // CLEAR CART
    const clearCart = () =>{
        setCartProducts([])
    };

    // CART TOTAL
    const cartTotal = (arr) =>{
        const totalPrice = cartProducts.reduce((total, product) => total + (product.product.price * product.count), 0)
        return totalPrice;
    };

    // TOTAL ITEMS
    const totalItems = () => {
        return cartProducts.reduce((x, product) => x + product.count, 0);
    };

    // RETURN CONTEXT
    return (
        <CartContext.Provider value={{ cartProducts, setCartProducts, isInCart, addProduct, removeProduct, clearCart, cartTotal, cartAmount, totalItems }}>
            { children }
        </CartContext.Provider>
    );
};