import React from "react";
import CartWidget from '../Store/CartWidget/CartWidget';
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, SearchIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom';

//IMAGES
import LogoMenu from '../../images/logo/logo-white.svg';
import TaiyakiEmoji from '../../images/emoji/taiyaki-emoji.png';
import ShoppingCart from "../Store/ShoppingCart/ShoppingCart";

const navigation = {
    categories: [
        {
        id: 'food',
        name: 'FOOD',
        featured: [
            {
                name: 'New flavours',
                href: '/shop',
                imageSrc: 'https://firebasestorage.googleapis.com/v0/b/taiyaki-85b82.appspot.com/o/taiyaki-02.jpg?alt=media&token=e85b76ba-c62e-4f3c-b174-a9f9f1a7a78b',
                imageAlt: 'New flavours',
            },
            {
                name: 'Explore all',
                href: '/shop',
                imageSrc: 'https://firebasestorage.googleapis.com/v0/b/taiyaki-85b82.appspot.com/o/taiyaki-01.jpg?alt=media&token=a3d7d851-b189-4899-aa24-48f91821c518',
                imageAlt: 'Explore all',
            },
        ],
        sections: [
            {
                id: 'sweet',
                name: 'Sweet Taiyaki',
                items: [
                    { name: 'Anko', href: '/details/anko' },
                    { name: 'Custard Cream', href: '/details/custard-cream' },
                    { name: 'Dulce de Leche', href: '/details/dulce-leche' },
                    { name: 'Jam', href: '/details/jam' },
                    { name: 'Nutella', href: '/details/nutella' },
                    { name: 'Plain & Sweet', href: '/details/plain-sweet' },
                    { name: 'Explore category →', href: '/sweet' },
                ],
            },
            {
                id: 'savoury',
                name: 'Savoury Taiyaki',
                items: [
                    { name: 'Bacon', href: '/details/bacon' },
                    { name: 'Ham & Cheese', href: '/details/ham-cheese' },
                    { name: 'Potato & Cheese', href: '/details/potato-cheese' },
                    { name: 'Rocket & Cheese', href: '/details/rocket-cheese' },
                    { name: 'Sausage', href: '/details/sausage' },
                    { name: 'Plain & Salted', href: '/details/plain-salted' },
                    { name: 'Explore category →', href: '/savoury' },
                ],
            },
            {
                id: 'icecream',
                name: 'Ice-cream Taiyaki',
                items: [
                    { name: 'Ice-cream', href: '/details/ice-cream' },
                    { name: 'Ice-cream + Sauce', href: '/details/ice-cream-sauce' },
                    { name: 'Ice-cream + Sauce + Toppings', href: '/details/ice-cream-sauce-topping' },
                    { name: 'Explore category →', href: '/icecream' },
                ],
            },
        ],
        },
        {
        id: 'drinks',
        name: 'DRINKS',
        featured: [
            {
                name: 'Best sellers',
                href: '/shop',
                imageSrc: 'https://firebasestorage.googleapis.com/v0/b/taiyaki-85b82.appspot.com/o/drinks-02.jpg?alt=media&token=32280d31-3fd1-4e7c-9d05-716c26819ae8',
                imageAlt: 'Coffee',
            },
            {
                name: 'Explore all drinks',
                href: '/shop',
                imageSrc: 'https://firebasestorage.googleapis.com/v0/b/taiyaki-85b82.appspot.com/o/drinks-01.jpg?alt=media&token=5b27dc91-7148-4a2a-9d7d-3735035d7dd1',
                imageAlt: 'Explore all drinks',
            },
        ],
        sections: [
            {
                id: 'hotdrinks',
                name: 'Hot drinks',
                items: [
                    { name: 'Coffee', href: '#' },
                    { name: 'Tea', href: '#' },
                    { name: 'Matcha', href: '#' },
                    { name: 'Hot Chocolate', href: '#' },
                ],
            },
            {
                id: 'coldDrinks',
                name: 'Cold drinks',
                items: [
                    { name: 'Juice', href: '#' },
                    { name: 'Lemonade', href: '#' },
                    { name: 'Still water', href: '#' },
                ],
            },
        ],
        },
    ],
    pages: [
        { name: 'ABOUT', href: '/about' },
    ],
    }

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }


const NavBar = (NavBarProps) => {

    const [open, setOpen] = useState(false)
    const [openCart, setOpenCart] = useState(false)

    return (
        <div className="bg-white">
            {/* Mobile menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setOpen}>
                    <Transition.Child as={Fragment} enter="transition-opacity ease-linear duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity ease-linear duration-300" leaveFrom="opacity-100" leaveTo="opacity-0" >
                        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>
                    <Transition.Child as={Fragment} enter="transition ease-in-out duration-300 transform" enterFrom="-translate-x-full" enterTo="translate-x-0" leave="transition ease-in-out duration-300 transform" leaveFrom="translate-x-0" leaveTo="-translate-x-full">
                        <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                            <div className="px-4 pt-5 pb-2 flex">
                                <button type="button" className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400" onClick={() => setOpen(false)}>
                                    <span className="sr-only">Close menu</span>
                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            {/* Links */}
                            <Tab.Group as="div" className="mt-2">
                                <div className="border-b border-gray-200">
                                    <Tab.List className="-mb-px flex px-4 space-x-8">
                                        {navigation.categories.map((category) => (
                                            <Tab key={category.name} className={({ selected }) => classNames(
                                            selected ? 'text-orange-400 border-orange-400' : 'text-gray-900 border-transparent',
                                            'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium')}>
                                                {category.name}
                                            </Tab>
                                        ))}
                                    </Tab.List>
                                </div>
                                <Tab.Panels as={Fragment}>
                                    {navigation.categories.map((category) => (
                                        <Tab.Panel key={category.name} className="pt-10 pb-8 px-4 space-y-10">
                                        <div className="grid grid-cols-2 gap-x-4">
                                            {category.featured.map((item) => (
                                                <div key={item.name} className="group relative text-sm">
                                                    <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                        <img src={item.imageSrc} alt={item.imageAlt} className="object-center object-cover" />
                                                    </div>
                                                    <Link to={item.href} className="mt-6 block font-medium text-gray-900">
                                                        <span className="absolute z-10 inset-0" aria-hidden="true" />
                                                        {item.name}
                                                    </Link>
                                                    <p aria-hidden="true" className="mt-1">
                                                        Shop now
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                        {category.sections.map((section) => (
                                            <div key={section.name}>
                                                <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                                                    {section.name}
                                                </p>
                                                <ul aria-labelledby={`${category.id}-${section.id}-heading-mobile`} className="mt-6 flex flex-col space-y-6">
                                                    {section.items.map((item) => (
                                                        <li key={item.name} className="flow-root last:text-gray-900 ">
                                                            <Link to={item.href} className="m-2 p-2 block text-gray-500">
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                        </Tab.Panel>
                                    ))}
                        </Tab.Panels>
                    </Tab.Group>

                    <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                        {navigation.pages.map((page) => (
                        <div key={page.name} className="flow-root">
                            <Link to={page.href} className="-m-2 p-2 block font-medium text-gray-900">
                            {page.name}
                            </Link>
                        </div>
                        ))}
                    </div>
                    <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                        <div className="flow-root">
                            <Link to="/signin" className="-m-2 p-2 block font-medium text-gray-900">
                                Sign in
                            </Link>
                        </div>
                        <div className="flow-root">
                            <Link to="/" className="-m-2 p-2 block font-medium text-gray-900">
                                Create account
                            </Link>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 py-6 px-4 items-center">
                        <img src="https://tailwindui.com/img/flags/flag-united-states.svg" alt="Country flag" className="w-5 h-auto inline flex-shrink-0" />
                        <span className="ml-3 inline text-base font-medium text-gray-900">NYC</span>
                        <span className="sr-only">, change language</span>
                    </div>
                </div>
            </Transition.Child>
            </Dialog>
        </Transition.Root>

        <header className="absolute left-0 right-0 bg-black z-40">
            <Link to="/findus">
                <p className="bg-white h-10 flex items-center justify-center text-sm font-medium text-black px-4 sm:px-6 lg:px-8">
                    Need a coffee break? <img className="w-5 h-auto inline flex-shrink-0 mx-1" src={TaiyakiEmoji} alt="Taiyaki emoji"/> Find us!
                </p>
            </Link>

            <nav aria-label="Top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="h-16 flex items-center">
                        <button type="button" className="bg-transparent p-2 rounded-md text-white lg:hidden" onClick={() => setOpen(true)}>
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        {/* Logo */}
                        <div className="ml-4 flex lg:ml-0">
                            <Link to="/">
                                <img src={LogoMenu} className="h-14 w-auto" alt="Logo"/>
                            </Link>
                        </div>

                        {/* Flyout menus */}
                        <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                            <div className="h-full flex space-x-8">
                            {navigation.categories.map((category) => (
                                <Popover key={category.name} className="flex">
                                    {({ open }) => (
                                        <>
                                            <div className="relative flex">
                                                <Popover.Button
                                                className={classNames(
                                                    open
                                                    ? 'border-orange-400 text-orange-400'
                                                    : 'border-transparent text-white hover:text-orange-200',
                                                    'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px')}>
                                                    {category.name}
                                                </Popover.Button>
                                            </div>

                                            <Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100" leave="transition ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
                                                <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
                                                    <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />
                                                        <div className="relative bg-white">
                                                            <div className="max-w-7xl mx-auto px-8">
                                                                <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                                                        {category.featured.map((item) => (
                                                                            <div key={item.name} className="group relative text-base sm:text-sm">
                                                                                <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                                    <img src={item.imageSrc} alt={item.imageAlt} className="object-center object-cover" />
                                                                                </div>
                                                                                <Link to={item.href} className="mt-6 block font-medium text-gray-900">
                                                                                    <span className="absolute z-10 inset-0" aria-hidden="true" />
                                                                                    {item.name}
                                                                                </Link>
                                                                                <p aria-hidden="true" className="mt-1">
                                                                                    Shop now
                                                                                </p>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                    <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                                                        {category.sections.map((section) => (
                                                                            <div key={section.name}>
                                                                                <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                                                                    {section.name}
                                                                                </p>
                                                                                <ul aria-labelledby={`${section.name}-heading`} className="mt-6 space-y-6 sm:mt-4 sm:space-y-4" >
                                                                                    {section.items.map((item) => (
                                                                                    <li key={item.name} className="flex">
                                                                                        <Link to={item.href} className="hover:text-orange-400">
                                                                                            {item.name}
                                                                                        </Link>
                                                                                    </li>
                                                                                    ))}
                                                                                </ul>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>
                            ))}
                            {navigation.pages.map((page) => (
                                <Link key={page.name} to={page.href} className="flex items-center text-sm font-medium text-white hover:text-orange-200" >
                                    {page.name}
                                </Link>
                            ))}
                        </div>
                    </Popover.Group>

                    <div className="ml-auto flex items-center">
                        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                            <Link to="/signin" className="text-sm font-medium text-white hover:text-orange-200">
                                Sign in
                            </Link>
                        </div>
                        <div className="hidden lg:ml-8 lg:flex">
                            <Link to="/" className="text-white hover:text-orange-200 flex items-center">
                                <img
                                src="https://tailwindui.com/img/flags/flag-united-states.svg"
                                alt="Country flag"
                                className="w-5 h-auto block flex-shrink-0"
                                />
                                <span className="ml-3 block text-sm font-medium">NYC</span>
                                <span className="sr-only">, change language</span>
                            </Link>
                        </div>
                        {/* Search */}
                        <div className="flex lg:ml-6 xs:px-2">
                            <Link to="/" className="p-2 text-white hover:text-orange-200">
                                <span className="sr-only">Search</span>
                                <SearchIcon className="w-5 h-5" aria-hidden="true" />
                            </Link>
                        </div>
                        {/* Avatar */}
                        <div className="flex lg:ml-6 xs:px-2">
                            <img className="inline-block h-7 w-7 rounded-full ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Avatar" />
                        </div>
                        {/* Cart */}
                        <div className="flex lg:ml-6 xs:px-2" onClick={() => {setOpenCart(true);}}>
                            <CartWidget/>
                        </div>
                        <ShoppingCart openCart={openCart} setOpenCart={setOpenCart} />
                    </div>
                </div>
            </nav>
        </header>
    </div>
    )
}

export default NavBar;