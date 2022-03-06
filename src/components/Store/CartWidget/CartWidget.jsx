import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

// CONTEXT
import { CartContext } from '../../../context/CartContext';

const CartWidget = () => {
    const { totalItems } = useContext(CartContext);

    return (
        <>
            <ShoppingCart />
            <span type="button" className="text-white hover:text-orange-200">
                <FontAwesomeIcon icon={faShoppingBag} /> {totalItems()}
            </span>
            <span className="sr-only">items in cart, view bag</span>
        </>
    );
}
export default CartWidget;