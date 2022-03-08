import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import LogoFooter from '../../images/logo/logo-white.svg';

const Footer = () => {
    return (
        <footer className="bg-black">
            <div className="grid max-w-screen-xl grid-cols-1 mx-auto lg:grid-cols-2">
                <div className="px-4 py-12 border-b border-gray-800 md:border-b-0 md:border-l lg:pl-12 lg:order-last">
                    <div className="block lg:hidden">
                        <img src={LogoFooter} className="h-20 w-auto" alt="Logo"/>
                    </div>
                    <div className="mt-12 space-y-4 lg:mt-0">
                        <span className="block w-10 h-1 bg-orange-500 rounded"></span>
                        <div>
                            <h5 className="text-2xl font-medium text-white">
                                Subscribe to our newsletter
                            </h5>
                            <p className="mt-1 text-md text-white">
                                Our newsletter will keep you up to date on the latest releases, so you get to taste the new Taiyaki before anyone else 😏 Cancel anytime.
                            </p>
                        </div>
                        <form>
                            <div className="relative max-w-lg">
                                <label className="sr-only" htmlFor="email"> Email </label>
                                <input className="w-full py-4 pl-3 pr-16 text-sm bg-gray-800 border-none rounded-lg" id="email" type="email" placeholder="Enter your email" />
                                <button className="absolute px-3 py-2 text-white -translate-y-1/2 bg-orange-500 rounded-md top-1/2 right-1.5" type="button">
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="px-4 py-12 lg:pr-12">
                    <div className="hidden lg:block">
                        <img src={LogoFooter} className="h-20 w-auto" alt="Logo"/>
                    </div>
                    <div className="grid grid-cols-6 xs:text-center lg:text-left">
                        <Link to="/shop" className="font-bold text-white">
                            Shop
                        </Link>
                        <Link to="/about" className="font-bold text-white">
                            About
                        </Link>
                        <Link to="findus" className="font-bold text-white">
                            Find us
                        </Link>
                        <Link to="/" className="font-bold text-white">
                            <FontAwesomeIcon icon={faFacebook} />
                        </Link>
                        <Link to="/" className="font-bold text-white">
                            <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                        <Link to="/" className="font-bold text-white">
                            <FontAwesomeIcon icon={faYoutube} />
                        </Link>
                    </div>
                    <div className="flex mt-12 space-x-6 text-xs text-white xs:justify-center lg:justify-start">
                        <p>&copy; 2022 Ivana Braz</p>
                        <Link className="underline hover:opacity-75" to="https://github.com/ivanabraz"><FontAwesomeIcon icon={faGithub} /> GitHub</Link>
                        <Link className="underline hover:opacity-75" to="www.linkedin.com/in/ivanabraz"><FontAwesomeIcon icon={faLinkedin} /> Linkedin</Link>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;