import React from 'react';
import HeroImageTextButton from '../components/HeroImageTextButton/HeroImageTextButton';

//IMAGES
import ShopBgImg from '../images/background/background-black.png';
import flying1 from '../images/flying-taiyaki/flying-taiyaki-01.png';
import flying2 from '../images/flying-taiyaki/flying-taiyaki-02.png';
import flying3 from '../images/flying-taiyaki/flying-taiyaki-03.png';
import flying4 from '../images/flying-taiyaki/flying-taiyaki-04.png';
import flying5 from '../images/flying-taiyaki/flying-taiyaki-05.png';


function About() {
    return (
            <HeroImageTextButton title="About" titleColor={"#ffffff"} titleBackgroundColor={"none"}
            buttonDisplay="none" buttonName="See more" buttonTextColor={"#1a03ff"} buttonBorder={"1px solid #1a03ff"} buttonBackgroundColor={"#ffffff"} buttonUrl="/shop"
            imgAlt="Shop image" imgBg={ShopBgImg} imgBackgroundPosition={"top center"} imgBackgroundHeight={"100vh"}>
                <img data-aos='fade-up' className='absolute w-80 animate-[spin_15s_linear_infinite] bottom-0 left-10' src={flying1} alt="Flying Taiyaki"/>
                <img data-aos='fade-up' className='absolute w-80 animate-[spin_60s_linear_infinite] top-50 left-[35em]' src={flying2} alt="Flying Taiyaki"/>
                <img data-aos='fade-up' className='absolute w-80 animate-[spin_40s_linear_infinite] top-0 left-20' src={flying3} alt="Flying Taiyaki"/>
                <img data-aos='fade-up' className='absolute w-80 animate-[spin_30s_linear_infinite] top-0 right-[10em]' src={flying5} alt="Flying Taiyaki"/>
                <img data-aos='fade-up' className='absolute w-80 animate-[spin_20s_linear_infinite] bottom-0 right-[20em]' src={flying4} alt="Flying Taiyaki"/>
                <img data-aos='fade-up' className='absolute w-80 animate-[spin_90s_linear_infinite] bottom-[-10em] left-50' src={flying3} alt="Flying Taiyaki"/>
            </HeroImageTextButton>
    );
}

export default About;