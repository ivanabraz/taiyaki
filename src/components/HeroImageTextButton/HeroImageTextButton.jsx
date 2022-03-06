import React from 'react';
import './HeroImageTextButton.css';
import {Link} from 'react-router-dom';


const HeroImageTextButton = (HeroImageTextButtonProps) => {
    return (
        <div className="heroImageTextButton--div" style={{backgroundImage: `url(${HeroImageTextButtonProps.imgBg})`, backgroundPosition:`${HeroImageTextButtonProps.imgBackgroundPosition}`, height:`${HeroImageTextButtonProps.imgBackgroundHeight}`}}>
            {HeroImageTextButtonProps.children}
            <p className="heroImageTextButton--title" style={{backgroundColor: `${HeroImageTextButtonProps.titleBackgroundColor}`, color:`${HeroImageTextButtonProps.titleColor}`}}>
                {HeroImageTextButtonProps.title}
            </p>
            <Link to={HeroImageTextButtonProps.buttonUrl}>
                <button type="button"   className="heroImageTextButton--button" style={{display:`${HeroImageTextButtonProps.buttonDisplay}`, backgroundColor: `${HeroImageTextButtonProps.buttonBackgroundColor}`, color:`${HeroImageTextButtonProps.buttonTextColor}`, border:`${HeroImageTextButtonProps.buttonBorder}`}}>
                    {HeroImageTextButtonProps.buttonName}
                </button>
            </Link>
        </div>
    )
}

export default HeroImageTextButton;