import React from 'react';
import HeaderContainer from './header_container';
import SplashTextComponent from './splash_text';
import SplashPictureComponent from './splash_picture';
import SplashExtraInfoComponent from './splash_extra_info';
import SplashFooterComponent from './splash_footer';

const splash = (props) => {
    return (
        <div className="splash-container">
        <section className="splash">
            <HeaderContainer />
            <SplashTextComponent />
            <SplashPictureComponent />
            {/* <SplashExtraInfoComponent /> */}
            <SplashFooterComponent />
        </section></div>
    );
};


export default splash;