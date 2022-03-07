import React from "react";
import { useParams } from "react-router-dom";

const ShoppingCartSuccess = () => {
    const { id: purchaseId } = useParams();
    return (
        <div className="w-screen h-screen bg-black flex flex-col justify-center text-center">
            <h1 className="text-3xl font-medium text-white my-3">
                Your order has been placed!
            </h1>
            <h3 className="text-2xl font-light text-base text-white my-3">
                Hi 👋 — We got your oder (thank you!).<br/>We hope you enjoy your Taiyaki
            </h3>
            <p className="text-lg font-light text-white my-3">
                Your order number is:<br/><span className="font-medium">{purchaseId}</span>
            </p>
        </div>
    );
};

export default ShoppingCartSuccess;
