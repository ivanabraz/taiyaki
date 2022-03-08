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
            <HeroImageTextButton className="overflow-hidden" title="About" titleColor={"#ffffff"} titleBackgroundColor={"none"}
            buttonDisplay="none" buttonName="See more" buttonTextColor={"#1a03ff"} buttonBorder={"1px solid #1a03ff"} buttonBackgroundColor={"#ffffff"} buttonUrl="/shop"
            imgAlt="Shop image" imgBg={ShopBgImg} imgBackgroundPosition={"top center"} imgBackgroundHeight={"100vh"}>
                
                {/* LEFT */}
                <img data-aos='fade-up' src={flying2} alt="Flying Taiyaki" 
                    className='absolute w-80 animate-[spin_60s_linear_infinite] 
                    xs:top-[0em] xs:left-[0em] xs:invisible
                    sm:top-[0em] sm:left-[0em] sm:visible
                    md:top-[-4em] md:left-[3em] md:visible
                    lg:top-50 lg:left-[25em] lg:visible
                    xl:top-50 xl:left-[35em] xl:visible
                '/>
                <img data-aos='fade-up' src={flying3} alt="Flying Taiyaki"
                    className='absolute w-80 animate-[spin_15s_linear_infinite] 
                    xs:bottom-[0em] xs:left-[0em] xs:invisible
                    sm:bottom-[0em] sm:left-[0em] sm:visible
                    md:bottom-[-10em] md:left-[3em] md:visible
                    lg:bottom-0 lg:left-10 lg:visible
                    xl:bottom-[20em] xl:left-[3em] xl:visible
                '/>
                <img data-aos='fade-up' src={flying1} alt="Flying Taiyaki"
                    className='absolute w-80 animate-[spin_90s_linear_infinite] 
                    xs:bottom-[0em] xs:left-[0em] xs:invisible
                    sm:bottom-[0em] sm:left-[0em] sm:visible
                    md:bottom-[-2em] md:left-[20em] md:visible
                    lg:bottom-[-10em] lg:left-[20em] lg:visible
                    xl:bottom-[-5em] xl:left-[30em] xl:visible
                '/>

                {/* RIGHT */}
                <img data-aos='fade-up' src={flying5} alt="Flying Taiyaki"
                    className='absolute w-80 animate-[spin_30s_linear_infinite] 
                    xs:top-[0em] xs:right-[0em] xs:visible
                    sm:top-[0em] sm:right-[0em] sm:visible
                    md:top-[-1em] md:right-[5em] md:visible
                    lg:top-[-2em] lg:right-[5em] lg:visible
                    xl:top-0 xl:right-[30em] xl:visible
                '/>
                <img data-aos='fade-up' src={flying4} alt="Flying Taiyaki" 
                    className='absolute w-80 animate-[spin_20s_linear_infinite] 
                    xs:bottom-[0em] xs:right-[12em] xs:visible
                    sm:bottom-[-10em] sm:right-[15em] sm:visible
                    md:bottom-[-10em] md:right-[1em] md:visible
                    lg:bottom-[-10em] lg:right-[4em] lg:visible
                    xl:bottom-[10em] xl:right-[5em] xl:visible
                '/>
                <img data-aos='fade-up' src={flying3} alt="Flying Taiyaki" 
                    className='absolute w-80 animate-[spin_40s_linear_infinite] 
                    xs:bottom-[0em] xs:right-[0em] xs:invisible
                    sm:bottom-[0em] sm:right-[0em] sm:visible
                    md:invisible
                    lg:bottom-0 lg:right-20 lg:visible
                    xl:bottom-[-6em] xl:right-[50em] xl:visible
                '/>
            </HeroImageTextButton>
    );
}

export default About;