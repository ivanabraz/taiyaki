import React from 'react';
import { Link} from 'react-router-dom';
import { LockClosedIcon } from '@heroicons/react/solid'
import background from '../images/background/background-flying-taiyaki.png';

function SignIn() {
    return (
        <div className="h-screen w-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-black-background" >
                <img src={background} className="maxwidth-none absolute h-full xs:hidden lg:block" alt="Logo"/>
                <div className="max-w-md w-full space-y-8">
                    <h2 className="mt-6 text-center text-3xl font-regular text-white">Sign in to your account</h2>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input id="email-address" name="email" type="email" autoComplete="email" required className="bg-transparent appearance-none rounded-none relative block w-full px-3 py-2 border border-white placeholder-gray-100 text-white rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input id="password" name="password" type="password" autoComplete="current-password" required className="bg-transparent appearance-none rounded-none relative block w-full px-3 py-2 border border-white placeholder-gray-100 text-white rounded-b-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm" placeholder="Password" />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-orange-300 focus:ring-orange-500 border-gray-300 rounded" />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-white">
                                    Remember me
                                </label>
                            </div>
                            <div className="text-sm">
                                <Link to="#" className="font-medium text-orange-600 hover:text-orange-500">
                                    Forgot your password?
                                </Link>
                            </div>
                        </div>
                        <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-white text-sm font-medium rounded-md text-white bg-transparent hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <LockClosedIcon className="h-5 w-5 text-orange-100 group-hover:text-orange-300" aria-hidden="true" />
                            </span>
                            Sign in
                        </button>
                        </div>
                    </form>
                </div>
            </div>
    );
}

export default SignIn;

