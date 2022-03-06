import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const HeroChild = (HeroChildProps) => {
    return (
        <Fragment>
            <Link className="flex" to={HeroChildProps.to}>
                <img 
                    className="heroChild maxwidth-none w-auto h-auto max-h-screen flex flex-nowrap flex-row justify-between items-baseline pt-10 
                    xs:mx-[-3em] sm:mx-[-5em] md:mx-[-5em] lg:mx-[-5em] xl:mx-[-3em] 2xl:mx-[1.5em] 
                    transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300" 
                    src={HeroChildProps.img} 
                    alt="Taiyaki" 
                    style={{zIndex: HeroChildProps.zindex}}
                />
            </Link>
        </Fragment>
    )
}

export default HeroChild;