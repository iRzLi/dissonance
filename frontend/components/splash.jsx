import React from 'react';
import HeaderContainer from './header_container';
import SplashTextComponent from './splash_text';

const splash = (props) => {
    return (
        <section className="splash">
        <HeaderContainer />
        <SplashTextComponent />
        </section>
    );
};


export default splash;