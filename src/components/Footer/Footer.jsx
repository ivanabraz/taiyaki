import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagramSquare} from '@fortawesome/free-brands-svg-icons';
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import LogoFooter from '../../images/logo/logo-white.svg';

const Footer = () => {
    return (
        <div className="footer--container">
            <div className="footer--innercontainer">
                <Link className="nav-link" to="/">
                    <img src={LogoFooter} className="footer--logo" alt="Logo"/>
                </Link>
                <Link to="/">Link</Link>
                <Link to="/">Link</Link>
                <Link to="/">Link</Link>
                <Link to="/" target="_blank">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                </Link>
                <Link to="/" target="_blank">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                </Link>
            </div>
        </div>
    )
}

export default Footer;