import React, { useState, useEffect, useContext, Fragment } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail';
import PropagateLoader from "react-spinners/ClipLoader";

// FIREBASE
import { FirebaseConfig } from "../../../firebase/firebaseConfig";

// CONTEXT
import { CartContext } from '../../../context/CartContext';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState ({});
    const [loading, setLoading] = useState(false);
    const [added, setAdded] = useState (false);
    const { addProduct } = useContext(CartContext);
    const { id } = useParams();
    
    const navigate = useNavigate();

    useEffect(() => {
        const firebase = new FirebaseConfig();

        const getFromFirebase = async () => {
            try {
                setLoading(true);
                const product = await firebase.getProductById(id);
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

    const onAdd = (count) => {
        addProduct(product, count);
        setAdded(true);
    };

    return (
        <Fragment>
            {loading 
                ? <PropagateLoader /> 
                : <ItemDetail {...product} product={product} onAdd={onAdd} added={added}/>
            }
        </Fragment>
    );
};

export default ItemDetailContainer;