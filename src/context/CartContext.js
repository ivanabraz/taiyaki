import { createContext, useState } from "react";

// CREATE CONTEXT
export const CartContext = createContext();

// CREATE PROVIDER COMPONENT
export const CartProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([]);

    // OPEN CART
    const [open, setOpen] = useState(false)
    const [openCart, setOpenCart] = useState(false)

    // PRODUCT IS IN CART
    const isInCart = (id) => {
        return cartProducts.some(x => x.id === id);
    };

    // PRODUCT AMOUNT
    const productAmount = (product, count) => {
        const search = [...cartProducts]
        search.forEach( x => {
            if(x.id === product.id){
                x.amount += count
            };
        });
        setCartProducts(search);
    };

    // ADD PRODUCT
    const addProduct = (product, count) => {
        if (isInCart(product.id)) {
            productAmount(product, count);
        } else {
            setCartProducts([...cartProducts, { ...product, amount: count }]);
        }
    };

    // REMOVE PRODUCT
    const removeProduct = (id) => {
        setCartProducts(cartProducts.filter(x => x.id !== id));
    };

    // CLEAR CART
    const clearCart = () =>{
        setCartProducts([])
    };

    // CART TOTAL
    const cartTotal = () =>{
        const totalPrice = cartProducts.reduce((total, product) => total + (product.price * product.amount), 0);
        return totalPrice;
    };

    // TOTAL ITEMS
    const totalItems = () => {
        const totalProducts = cartProducts.reduce((x, product) => x + (Number(product.price) * product.amount),0);
        return totalProducts;
    };

    // RETURN CONTEXT
    return (
        <CartContext.Provider value={{ 
            cartProducts, setCartProducts, isInCart, 
            addProduct, removeProduct, clearCart, cartTotal, productAmount, 
            totalItems, open, setOpen, openCart, setOpenCart }}>
            { children }
        </CartContext.Provider>
    );
};