import React from "react";
import { useParams } from "react-router-dom";

const ShoppingCartSuccess = () => {
    const { id: purchaseId } = useParams();
    return (
        <div className="shoppingcart--container">
            <h1 className="shoppingcart--title">Your order has been placed!</h1>
            <h3 className="shoppingcart--text">Hi 👋 — We got your oder (thank you!). We hope you enjoy your Taiyaki!</h3>
            <p className="shoppingcart--text">
                Your order number is: {purchaseId}
            </p>
        </div>
    );
};

export default ShoppingCartSuccess;
