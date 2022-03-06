import React from 'react';
import './HeroImage.css';

const HeroImage = (HeroImageProps) => {
    return (
        <div className="heroimage--div" style={{backgroundImage: `url(${HeroImageProps.imgBg})`, backgroundPosition:`${HeroImageProps.imgBackgroundPosition}`, height:`${HeroImageProps.imgBackgroundHeight}`}}>
            {HeroImageProps.children}
        </div>
    )
}

export default HeroImage;