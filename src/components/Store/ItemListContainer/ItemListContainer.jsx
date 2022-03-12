import React from 'react';
import { Fragment, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Dialog, Menu, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon, FilterIcon, ViewGridIcon, ViewListIcon } from '@heroicons/react/solid'
import ItemList from '../ItemList/ItemList';
import PropagateLoader from "react-spinners/ClipLoader";

// FIREBASE
import { FirebaseConfig } from "../../../firebase/firebaseConfig";

const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
    { name: 'Sweets', href: '/sweet' },
    { name: 'Savoury', href: '/savoury' },
    { name: 'Ice-cream', href: '/icecream' },
    { name: 'Hot drinks', href: '/hotdrinks' },
    { name: 'Cold drinks', href: '/coldrinks' },
    { name: 'Show all →', href: '/shop' },

]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ItemListContainer = () => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

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
    <div className="bg-white">
        <div>
            {/* Mobile filter dialog */}
            <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setMobileFiltersOpen}>
                    <Transition.Child as={Fragment} enter="transition-opacity ease-linear duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity ease-linear duration-300" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>
                    <Transition.Child as={Fragment} enter="transition ease-in-out duration-300 transform" enterFrom="translate-x-full" enterTo="translate-x-0" leave="transition ease-in-out duration-300 transform" leaveFrom="translate-x-0" leaveTo="translate-x-full" >
                        <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                            <div className="px-4 flex items-center justify-between">
                                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                <button type="button" className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400" onClick={() => setMobileFiltersOpen(false)}>
                                    <span className="sr-only">Close menu</span>
                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            {/* Filters */}
                            <form className="mt-4 border-t border-gray-200">
                                <h3 className="sr-only">Categories</h3>
                                <ul className="font-medium text-gray-900 px-2 py-3">
                                    {subCategories.map((category) => (
                                        <li key={category.name}>
                                            <Link to={category.href} className="block px-2 py-3">
                                            {category.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </form>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition.Root>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Products</h1>
                    <div className="flex items-center">
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                    Sort
                                    <ChevronDownIcon
                                    className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                    />
                                </Menu.Button>
                            </div>
                            <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        {sortOptions.map((option) => (
                                            <Menu.Item key={option.name}>
                                                {({ active }) => (
                                                    <Link to={option.href} className={classNames(option.current 
                                                        ? 'font-medium text-gray-900' : 'text-gray-500',
                                                        active 
                                                            ? 'bg-gray-100' 
                                                            : '','block px-4 py-2 text-sm')}>
                                                        {option.name}
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        ))}
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <button type="button" className="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">View grid</span>
                            <ViewListIcon className="w-5 h-5" aria-hidden="true" />
                        </button>
                        <button type="button" className="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">View grid</span>
                            <ViewGridIcon className="w-5 h-5" aria-hidden="true" />
                        </button>
                        <button type="button" className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden" onClick={() => setMobileFiltersOpen(true)}>
                            <span className="sr-only">Filters</span>
                            <FilterIcon className="w-5 h-5" aria-hidden="true" />
                        </button>
                    </div>
                </div>
                <section aria-labelledby="products-heading" className="pt-6 pb-24">
                    <h2 id="products-heading" className="sr-only">Products</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                        {/* Filters */}
                        <form className="hidden lg:block">
                            <h3 className="text-sm font-bold text-black space-y-4 pb-6">Categories</h3>
                            <ul className="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200">
                                {subCategories.map((category) => (
                                    <li key={category.name}>
                                        <Link to={category.href}>{category.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </form>
                        {/* Product grid */}
                        <div className="lg:col-span-3">
                            {loading 
                                ?   <PropagateLoader /> 
                                :   <ItemList product={product}/>
                            }
                        </div>
                    </div>
                </section>
            </main>
        </div>
    </div>
    )
}

export default ItemListContainer;