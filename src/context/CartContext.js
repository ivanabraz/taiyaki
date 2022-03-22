import { createContext, useState, useMemo } from "react";

// CREATE CONTEXT
export const CartContext = createContext();

// CREATE PROVIDER COMPONENT
export const CartProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([]);

    const cartAmount = useMemo(() => 
        cartProducts.reduce((item, product) => item + product.price * product.count, 0), [cartProducts]
    );

    // OPEN CART
    const [open, setOpen] = useState(false)
    const [openCart, setOpenCart] = useState(false)

    // PRODUCT IS IN CART
    const isInCart = (id) => {
        return cartProducts.some((prod) => prod.product.id === id);
    };

    // ADD PRODUCT
    const addProduct = (product, count) => {
        const newItem = { product, count };
        if (isInCart(product.id)) {
            let product = cartProducts.find((p) => p.item.id === product.id);
            product.count += count;
        
            let newCart = cartProducts.map((p) => {
                if (product.item.id === p.item.id) return product;
                return p;
            });
            setCartProducts(newCart);
        } 
        else {
            if (count > 0) {
                setCartProducts((prevState) => [...prevState, newItem]);
            }
        }
    };

    // REMOVE PRODUCT
    const removeProduct = (id) => {
        setCartProducts(cartProducts.filter((product) => product.product.id !== id));
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
        <CartContext.Provider value={{ 
            cartProducts, isInCart, 
            addProduct, removeProduct, clearCart, cartTotal, cartAmount, 
            totalItems, open, setOpen, openCart, setOpenCart }}>
            { children }
        </CartContext.Provider>
    );
};