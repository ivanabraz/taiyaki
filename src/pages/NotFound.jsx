import * as React from 'react';
import HeroImageTextButton from '../components/HeroImageTextButton/HeroImageTextButton';
import NotFoundImg from '../images/background/background_notfound.svg';

function NotFound() {
    return (
        <React.Fragment>
            <HeroImageTextButton title="404 Not found ☹️" buttonName="Go back" imgAlt="Not found" imgBg={NotFoundImg} buttonUrl="/"/>
        </React.Fragment>
    );
}

export default NotFound;