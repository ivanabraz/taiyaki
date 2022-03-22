import React, { useState, useEffect, Fragment } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail';
import PropagateLoader from "react-spinners/ClipLoader";

// FIREBASE
import { getProductById } from "../../../firebase/firebaseConfig";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState ({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    
    const navigate = useNavigate();

    useEffect(() => {
        const getFromFirebase = async () => {
            try {
                setLoading(true);
                const product = await getProductById(id);
                setLoading(false);
                if (product) {
                    setProduct(product);
                } else {
                    navigate("/");
                }
            } catch (error) {
            navigate("/");
            console.error("getProductById", error);
            }
        };
        getFromFirebase();
    }, [id, navigate]);

    return (
        <Fragment>
            {loading 
                ? <PropagateLoader /> 
                : <ItemDetail product={product}/>
            }
        </Fragment>
    );
};

export default ItemDetailContainer;