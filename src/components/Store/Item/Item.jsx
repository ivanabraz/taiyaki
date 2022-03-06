import React from 'react';

const Item = ({product}) =>{
    return (
        <>
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img src={product.image} alt={product.name} className="w-full h-full object-center object-cover group-hover:opacity-75"/>
            </div>
            <h3 className="mt-4 text-lg text-gray-700">{product.name}</h3>
            <div className="flex justify-between mt-1">
                <p className="inline text-sm font-base text-gray-500 capitalize">{product.category}</p>
                <p className="inline text-sm font-medium text-gray-900">$ {product.price}</p>
            </div>
        </>
    )
}

export default Item;