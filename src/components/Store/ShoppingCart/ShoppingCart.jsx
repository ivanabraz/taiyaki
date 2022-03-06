import React, { useState, useContext, Fragment } from 'react';
import './ShoppingCart.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faTimesCircle, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

// FIREBASE
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";

// CONTEXT
import { CartContext } from '../../../context/CartContext';

const ShoppingCart = () => {
    const { cartProducts, cartTotal, removeProduct, clearCart } = useContext(CartContext);

    const initialState = {
        name: "", 
        lastname:"", 
        email: "",
    };

    const [values, setValues] = useState(initialState);
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const {value, name, lastname, email} = e.target;
        setValues({...values, [name]:value, [lastname]:value, [email]:value})
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db, 'orders'),{
            values,
        });
        console.log('Document written with ID: ', docRef.id);
        navigate(`/success/${docRef.id}`);
        clearCart();
        setValues({initialState});
    };

    return (
        // <div className="shoppingcart--container">
        //     <h1 className="shoppingcart--title">Shopping cart</h1>
        //         <div className="shoppingcart--inner-container">
                    // {cartProducts.length === 0 
                    //     ? <div className="shoppingcart--container-empty-cart">
                    //         <p className="shoppingcart--emoji">☹️</p>
                    //             <h3 className="shoppingcart--text">Your cart is empty</h3>
                    //             <Link to="/shop">
                    //                 <button type="button" className="shoppingcart--button">Explore the store</button>
                    //             </Link>
                    //         </div>
                    //     : cartProducts.map((product) => 
                    //             <div key={product.product.id} className="shoppingcart--card">
                    //                 <Link className="nav-link" to={`/details/${product.product.id}`}>
                    //                     <img className="shoppingcart--product-image" variant="center" alt={product.product.name} src={product.product.image} />
                    //                     <div>
                    //                         <p className="shoppingcart--product-name">{product.product.name}</p>
                    //                         <p className="shoppingcart--product-price">${product.product.price}</p>
                    //                         <p className="shoppingcart--product-quantity">Quantity: {product.count}</p>
                    //                         <span className="shoppingcart--product-quantity" onClick={() => removeProduct(product.product.id)}>
                    //                             Remove item <FontAwesomeIcon icon={faTimesCircle}/>
                    //                         </span>
                    //                     </div>
                    //                 </Link>
                    //             </div>
                    //     )}
        //         </div>
        //         <div className="shoppingcart--text">
        //             {cartProducts.length === 0
        //                 ?   <p className="shoppingcart--text"></p>
        //                 :   <Fragment>
        //                         <p className="shoppingcart--text">Total: ${cartTotal()}</p>
        //                         <button className="shoppingcart--clear-button" onClick={clearCart}>
        //                             Clear cart <FontAwesomeIcon icon={faTrash}/>
        //                         </button>                                
        //                         <form className="row g-3" onSubmit={onSubmit}>
        //                             <h4>Checkout</h4>
        //                             <label htmlFor="name" className="form-label">Register</label>
        //                             <input type="text" 
        //                                 name="name"
        //                                 placeholder="Names" 
        //                                 className="form-control" 
        //                                 id="name" 
        //                                 value={values.name}
        //                                 onChange={handleOnChange}>
        //                             </input>
        //                             <label htmlFor="lastname" className="form-label">Register</label>
        //                             <input 
        //                                 type="text"
        //                                 name="lastname"
        //                                 placeholder="Last name" 
        //                                 className="form-control" 
        //                                 id="lastName" 
        //                                 value={values.lastname} 
        //                                 onChange={handleOnChange}>
        //                             </input>
        //                             <label htmlFor="email" className="form-label">Email address</label>
        //                             <input 
        //                                 type="email" 
        //                                 name="email"
        //                                 placeholder="Email"
        //                                 className="form-control" 
        //                                 id="email" 
        //                                 value={values.email} 
        //                                 onChange={handleOnChange}>
        //                             </input>
        //                             <button type="submit" className="btn btn-primary">
        //                                 Continue with payment <FontAwesomeIcon icon={faArrowRight}/>
        //                             </button>
        //                         </form>
        //                     </Fragment>
        //             }
        //         </div>
        // </div>
        <Transition.Root as={Fragment}>
            <Dialog as="div" className="fixed inset-0 overflow-hidden" >
                <div className="absolute inset-0 overflow-hidden">
                    <Transition.Child as={Fragment} enter="ease-in-out duration-500" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-500" leaveFrom="opacity-100" leaveTo="opacity-0" >
                        <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <Transition.Child as={Fragment} enter="transform transition ease-in-out duration-500 sm:duration-700" enterFrom="translate-x-full" enterTo="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leaveFrom="translate-x-0" leaveTo="translate-x-full">
                            <div className="pointer-events-auto w-screen max-w-md">
                                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                                        <div className="flex items-start justify-between">
                                            <Dialog.Title className="text-lg font-medium text-gray-900"> Shopping cart </Dialog.Title>
                                            <div className="ml-3 flex h-7 items-center">
                                                <button type="button" className="-m-2 p-2 text-gray-400 hover:text-gray-500" >
                                                    <span className="sr-only">Close panel</span>
                                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </div>
                                        {cartProducts.length === 0 
                                            ? <div className="shoppingcart--container-empty-cart">
                                                <p className="text-base font-medium text-gray-900">☹️</p>
                                                    <h3 className="text-base font-medium text-gray-900">Your cart is empty</h3>
                                                    <Link to="/shop">
                                                        <button type="button" className="shoppingcart--button">Explore the store</button>
                                                    </Link>
                                                </div>
                                            : cartProducts.map((product) => 
                                                    <div key={product.product.id} className="shoppingcart--card">
                                                        <Link className="nav-link" to={`/details/${product.product.id}`}>
                                                            <img className="shoppingcart--product-image" variant="center" alt={product.product.name} src={product.product.image} />
                                                            <div>
                                                                <p className="shoppingcart--product-name">{product.product.name}</p>
                                                                <p className="shoppingcart--product-price">${product.product.price}</p>
                                                                <p className="shoppingcart--product-quantity">Quantity: {product.count}</p>
                                                                <span className="shoppingcart--product-quantity" onClick={() => removeProduct(product.product.id)}>
                                                                    Remove item <FontAwesomeIcon icon={faTimesCircle}/>
                                                                </span>
                                                            </div>
                                                        </Link>
                                                    </div>
                                            )
                                        }
                                        <div className="mt-8">
                                            <div className="flow-root">
                                                <ul className="-my-6 divide-y divide-gray-200">
                                                {cartProducts.map((product) => (
                                                    <li key={product.product.id} className="flex py-6">
                                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                            <img alt={product.product.name} src={product.product.image} className="h-full w-full object-cover object-center" />
                                                        </div>
                                                        <div className="ml-4 flex flex-1 flex-col">
                                                            <div>
                                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                                    <h3>
                                                                        <a href={product.href}>{product.product.name}</a>
                                                                    </h3>
                                                                    <p className="ml-4">$ {product.product.price}</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                                <p className="text-gray-500">Qty {product.count}</p>
                                                                <div className="flex">
                                                                    <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => removeProduct(product.product.id)}>
                                                                        Remove item <FontAwesomeIcon icon={faTimesCircle}/>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <p>Total</p>
                                            <p>${cartTotal()}</p>
                                        </div>
                                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                        <div className="mt-6">
                                            <a href="/checkout" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700" >
                                                Checkout
                                            </a>
                                        </div>
                                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                            <p> or{' '} 
                                                <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" >
                                                    Continue Shopping<span aria-hidden="true"> &rarr;</span>
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default ShoppingCart;