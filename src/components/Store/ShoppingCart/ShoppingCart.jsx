import React, { useState, useContext, Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faTimesCircle, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { XIcon } from '@heroicons/react/outline'

// FIREBASE
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";

// CONTEXT
import { CartContext } from '../../../context/CartContext';

const ShoppingCart = ({openCart, setOpenCart}) => {
    const { cartProducts, cartTotal, removeProduct, clearCart } = useContext(CartContext);
    
    const [openCheckout, setOpenCheckout] = useState(false);
    const handleCheckoutToggle = () => { setOpenCheckout(!openCheckout);};

    const initialState = {
        name: "", 
        lastname:"", 
        email: "",
        cartTotal: "",
        cartProducts: "",
    };

    const [values, setValues] = useState(initialState);
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const {value, name, lastname, email} = e.target;
        setValues({...values, [name]:value, [lastname]:value, [email]:value},)
    };

    const placeOrder = (e) => {
        let order = {
            buyerData: {
                name: values.name,
                lastname: values.lastname,
                email: values.email,
                date: new Date(),
            },
            item: cartProducts.map((product) => ({
                id: product.id,
                name: product.titulo,
                price: product.precio,
                stock: product.stock,
                count: product.count,
            })),
            total: parseFloat(cartTotal()),
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db, 'orders'),{
            values,
        });
        placeOrder();
        console.log('Document written with ID: ', docRef.id);
        navigate(`/success/${docRef.id}`);
        clearCart();
        setValues({initialState});
        setOpenCart(false);
    };

    return (
        <main className={" fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " + (openCart
        ? " transition-opacity opacity-100 duration-500 translate-x-0  "
        : "transition-all delay-500 opacity-0 translate-x-full")}>
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                    <div className="pointer-events-auto w-screen max-w-md">
                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                            <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                                <div className="flex items-start justify-between">
                                    <h1 className="text-lg font-medium text-gray-900"> Shopping cart </h1>
                                    <div className="ml-3 flex h-7 items-center">
                                        <button type="button" className="-m-2 p-2 text-gray-400 hover:text-gray-500" onClick={() => {setOpenCart(false);}}>
                                            <span className="sr-only">Close panel</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                                {cartProducts.length === 0 
                                    ?   <div className='flex flex-col w-full h-full justify-center'>
                                            <p className="text-center text-9xl text-black">☹️</p>
                                            <div className="mt-6 flex justify-center text-center text-lg text-gray-500">
                                                <p> 
                                                    Oops!{' '} <span type="button" className="font-medium text-orange-400 hover:text-orange-500" >Your cart is empty</span>
                                                </p>
                                            </div>
                                            <Link to="/shop" onClick={() => {setOpenCart(false);}} className="mt-4 flex items-center justify-center rounded-full border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700" >
                                                Explore the store &rarr;
                                            </Link>
                                        </div>
                                    : 
                                        <>
                                            <div className="mt-8">
                                                <div className="flow-root">
                                                    <ul className="-my-6 divide-y divide-gray-200">
                                                    {cartProducts.map((product) => (
                                                        <li key={product.product.id} className="flex py-6">
                                                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-full border border-gray-200">
                                                                <img alt={product.product.name} src={product.product.image} className="h-full w-full object-cover object-center" />
                                                            </div>
                                                            <div className="ml-4 flex flex-1 flex-col">
                                                                <div>
                                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                                        <Link to={`/details/${product.product.id}`}>
                                                                            {product.product.name}
                                                                        </Link>
                                                                        <p className="ml-4">$ {product.product.price}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                                    <p className="text-gray-500">Qty {product.count}</p>
                                                                    <div className="flex">
                                                                        <button type="button" className="font-medium text-orange-600 hover:text-orange-500" onClick={() => removeProduct(product.product.id)}>
                                                                            Remove item <FontAwesomeIcon icon={faTimesCircle}/>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                    </ul>
                                                </div>
                                                <div className="border-t border-gray-200 mt-6 py-5 px-4 sm:px-6">
                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                        <p>Total</p>
                                                        <p>${cartTotal()}</p>
                                                    </div>
                                                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                                </div>
                                            </div>
                                            <div className="mt-6">
                                                <button onClick={handleCheckoutToggle} className="w-full flex items-center justify-center rounded-full border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700" >
                                                    Checkout
                                                </button>
                                                { openCheckout === true 
                                                    ?   <>
                                                            {/* Checkout form */}
                                                            <form onSubmit={onSubmit}>
                                                                <div className="shadow overflow-hidden">
                                                                    <div className="px-4 py-5 bg-white sm:p-6">
                                                                        <p className="mt-2 mb-6 text-base font-medium text-gray-900 border-b border-gray-200 py-6">Complete your personal information</p>
                                                                        <div className="grid grid-cols-6 gap-6">
                                                                            <div className="col-span-6 sm:col-span-3">
                                                                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                                                                    First name
                                                                                </label>
                                                                                <input required value={values.name} onChange={handleOnChange} placeholder="Name" type="text" name="name" id="name" autoComplete="given-name" className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-full" />
                                                                            </div>
                                                                            <div className="col-span-6 sm:col-span-3">
                                                                                <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                                                                                    Last name
                                                                                </label>
                                                                                <input required value={values.lastname} onChange={handleOnChange} placeholder="Surname" ype="text" name="lastname" id="lastname" autoComplete="family-name" className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-full" />
                                                                            </div>
                                                                            <div className="col-span-6 sm:col-span-4">
                                                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                                                    Email address
                                                                                </label>
                                                                                <input required value={values.email} onChange={handleOnChange} placeholder="name@example.com" type="email" name="email" id="email" autoComplete="email" className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-full"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className=" px-4 py-3 bg-gray-50 text-right sm:px-6">
                                                                        <button type="submit"className="w-full inline-flex justify-center items-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500" >
                                                                            Continue with payment  <FontAwesomeIcon icon={faCreditCard}/>
                                                                        </button>
                                                                        <p className="mt-6 flex justify-center text-center text-sm text-gray-500">or 
                                                                            <button to="/shop" onClick={handleCheckoutToggle} type="button" className="font-medium text-orange-600 hover:text-orange-500" >
                                                                                Keep Shopping &rarr;
                                                                            </button>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </>
                                                    :   <>
                                                            <button onClick={clearCart} className="w-full mt-4 flex items-center justify-center rounded-full border border-orange-600 bg-transparent px-6 py-3 text-base font-medium text-orange-600 shadow-sm hover:bg-orange-700" >
                                                                Clear cart <FontAwesomeIcon icon={faTrash}/>
                                                            </button>   
                                                            <p className="mt-6 flex justify-center text-center text-sm text-gray-500">or 
                                                                <Link to="/shop" onClick={() => {setOpenCart(false);}} type="button" className="font-medium text-orange-600 hover:text-orange-500" >
                                                                    Continue Shopping &rarr;
                                                                </Link>
                                                            </p>
                                                        </>
                                                }
                                            </div>
                                        </>
                                    
                                }
                            </div>
                        </div>
                    </div>
            </div>
            <section className=" w-screen h-full cursor-pointer " onClick={() => { setOpenCart(false); }} ></section>
        </main>
    );
};

export default ShoppingCart;