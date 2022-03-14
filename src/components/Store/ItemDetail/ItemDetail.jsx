import React, { useContext } from 'react';
import ItemCountStock from '../ItemCountStock/ItemCountStock';
import { Link } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/solid'

// CONTEXT
import { CartContext } from '../../../context/CartContext';

// REVIEW
const reviews = { href: '#', average: 5, totalCount: 117 }

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ItemDetail = ({name, image1, image2, image3, image4, category, price, description, detail, stock, onAdd, added}) => {

    const { setOpenCart } = useContext(CartContext);

    return (
        <div className="bg-white">
            <div className="pt-32">
                {/* Image gallery */}
                <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
                    <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
                        <img src={image1} alt={name} className="w-full h-full object-center object-cover"/>
                    </div>
                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                            <img src={image2} alt={name} className="w-full h-full object-center object-cover"/>
                        </div>
                        <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                            <img src={image3} alt={name} className="w-full h-full object-center object-cover"/>
                        </div>
                    </div>
                    <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
                        <img src={image4} alt={name} className="w-full h-full object-center object-cover"/>
                    </div>
                </div>
                {/* Product info */}
                <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                            {name}
                        </h1>
                    </div>
                {/* Options */}
                <div className="mt-4 lg:mt-0 lg:row-span-3">
                    <h2 className="sr-only">Product information</h2>
                    <p className="text-3xl text-gray-900">$ {price}</p>
                    {/* Reviews */}
                    <div className="mt-6">
                        <h3 className="sr-only">Reviews</h3>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon key={rating} className={classNames( reviews.average > rating ? 'text-gray-900' : 'text-gray-200', 'h-5 w-5 flex-shrink-0')} aria-hidden="true"/>
                                    ))}
                                </div>
                                <p className="sr-only">{reviews.average} out of 5 stars</p>
                                <Link to={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                    {reviews.totalCount} reviews
                                </Link>
                            </div>
                        </div>
                        {/* Add to cart */}
                        <div className='mt-10'>
                            {added === true
                                ?   <>
                                        <button onClick={() => {setOpenCart(true);}} className="mt-10 w-full bg-transparent border border-black rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-black hover:bg-black-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500">
                                            Added! View shopping cart
                                        </button>
                                    </>
                                :   <ItemCountStock stock={stock} initial={1} onAdd={onAdd} />
                            }
                        </div>
                    </div>
                    <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        {/* Description and details */}
                        <div>
                            <h3 className="sr-only">Description</h3>
                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{description}</p>
                            </div>
                        </div>
                        <div className="mt-10">
                            <h2 className="text-sm font-medium text-gray-900">Details</h2>
                            <div className="mt-2 space-y-6">
                                <p className="text-sm text-gray-600">{detail}</p>
                                <p className="text-sm text-gray-600 capitalize border-t border-gray-300 pt-2">Category: {category}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;