import React from 'react';
import Item from '../Item/Item';
import {Link} from 'react-router-dom';

const ItemList = ({product}) => {
    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-autopx-4 lg:max-w-7xl">
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {product.map((product) => (
                    <Link key={product.id} className="nav-link" to={`/details/${product.id}`}> 
                        <Item key={product.id} product={product} />
                    </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ItemList;