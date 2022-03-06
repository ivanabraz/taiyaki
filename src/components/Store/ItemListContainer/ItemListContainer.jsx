import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import PropagateLoader from "react-spinners/ClipLoader";

// FIREBASE
import { FirebaseConfig } from "../../../firebase/firebaseConfig";

function ItemListContainer () {
    const [product, setProduct] = useState ([]);
    const [loading, setLoading] = useState(false);
    const { category } = useParams();

    useEffect(() => {
        const firebase = new FirebaseConfig();

        const getFromFirebase = async () => {
            try {
                setLoading(true);
                const value = (category)
                ? await firebase.getProductByCategory(category)
                : await firebase.getProducts();
                setProduct(value);
                setLoading(false);
            } catch (error) {
            console.error("getFromFirebase", error);
            }
        };
        getFromFirebase();
    }, [category]);

    return (
        <>
            {loading 
                ? <PropagateLoader /> 
                : <ItemList product={product}/>
            }
        </>
    );
}

export default ItemListContainer;