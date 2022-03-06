import React, {Fragment} from 'react';
import HeroImageTextButton from '../components/HeroImageTextButton/HeroImageTextButton';
import ShopBgImg from '../images/background/background_shop.jpg';


function SignIn() {
    return (
        <Fragment>
            <HeroImageTextButton    title="SignIn" titleColor={"#7f6c54"} titleBackgroundColor={"none"}
                                    buttonDisplay="none" buttonName="See more" buttonTextColor={"#1a03ff"} buttonBorder={"1px solid #1a03ff"} buttonBackgroundColor={"#ffffff"} buttonUrl="/shop"
                                    imgAlt="Shop image" imgBg={ShopBgImg} imgBackgroundPosition={"top center"} imgBackgroundHeight={"50vh"} 
                                    />
        </Fragment>
    );
}

export default SignIn;