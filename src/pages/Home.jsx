import React, {Fragment} from 'react';

//COMPONENTS
import HeroImage from '../components/HeroImage/HeroImage';
import HeroImageTextButton from '../components/HeroImageTextButton/HeroImageTextButton';
import HeroChild from '../components/HeroChild/HeroChild';
import FeaturedProducts from '../components/Store/FeaturedProducts/FeaturedProducts';

//IMAGES
import background from '../images/home/background.png';
import hand1 from '../images/home/hand-1.png';
import hand2 from '../images/home/hand-2.png';
import hand3 from '../images/home/hand-3.png';
import hand4 from '../images/home/hand-4.png';
import hand5 from '../images/home/hand-5.png';
import whereToFindUs from '../images/home/where-to-find-us.jpg';

function Home() {
    return (
        <Fragment>
            <HeroImage imgBg={background} imgBackgroundPosition={"center center"} imgBackgroundHeight={"100vh"}>
                <div className='absolute w-screen h-screen flex flex-row overflow-hidden justify-center'>
                    <HeroChild img={hand1} zindex="3" to="/icecream"/>
                    <HeroChild img={hand2} zindex="4" to="/sweet"/>
                    <HeroChild img={hand3} zindex="5" to="/icecream"/>
                    <HeroChild img={hand4} zindex="4" to="/icecream"/>
                    <HeroChild img={hand5} zindex="3" to="/savoury"/>
                </div>
            </HeroImage>
            <FeaturedProducts/>
            <HeroImageTextButton    title="Find us" titleColor={"#ffffff"} titleBackgroundColor={"none"}
                                    buttonDisplay={"inline-block"} buttonName="See more" buttonTextColor={"#7f6c54"} buttonBorder={"1px solid #7f6c54"} buttonBackgroundColor={"none !important"} buttonUrl="/shop"
                                    imgAlt="Where to find us" imgBg={whereToFindUs} imgBackgroundPosition={"center center"} imgBackgroundHeight={"60vh"}/>
        </Fragment>
    );
}

export default Home;