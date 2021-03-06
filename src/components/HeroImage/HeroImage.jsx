import React from 'react';

const HeroImage = (HeroImageProps) => {
    return (
        <div className="w-screen flex items-center justify-center bg-no-repeat bg-cover" 
        style={{backgroundImage: `url(${HeroImageProps.imgBg})`, 
        backgroundPosition:`${HeroImageProps.imgBackgroundPosition}`, 
        height:`${HeroImageProps.imgBackgroundHeight}`}}>
            {HeroImageProps.children}
        </div>
    )
}

export default HeroImage;