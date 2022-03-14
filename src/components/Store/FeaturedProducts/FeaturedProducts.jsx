import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

// FIREBASE
import { getProductByCategory, getProducts } from "../../../firebase/firebaseConfig";

function FeaturedProducts() {

    const [product, setProduct] = useState ([]);
    const { category } = useParams();
    
    useEffect(() => {
        const getFromFirebase = async () => {
            try {
                const value = (category)
                ? await getProductByCategory(category)
                : await getProducts();
                setProduct(value);
            } catch (error) {
            console.error("getFromFirebase", error);
            }
        };
        getFromFirebase();
    }, [category]);

    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="flex justify-between mb-4">
                    <h2 className="mt-1 text-xl font-medium text-gray-900">Food & drinks</h2>
                    <Link className="mt-4 text-sm text-gray-700" to="/shop"> Explore flavours &rarr;</Link>
                </div>
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
                    {product.slice(4, 8).map((product) => (
                        <Link key={product.id} to={`/details/${product.id}`} className="group">
                            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                <img src={product.image} alt={product.name} className="w-full h-full object-center object-cover group-hover:opacity-75" />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeaturedProducts;