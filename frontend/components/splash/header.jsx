import React from 'react';
import {Link} from 'react-router-dom';
import LoginLogoutContainer from '../session/login_logout_container';
const header = (props) => {

    let goToChat = null;
    if (props.loggedIn){
        goToChat = (<span className="login-link" onClick={(e) => {
            props.history.push("/channel/me")
        }} >Open</span>)
    }
    return (
        <>
        <nav className="header">
            <ul>
                <li className="logo"><i className="fab fa-discord"></i> Dissonance</li>
            </ul>
            <ul>
                <ul className="header-icons">
                        <li><a href="https://github.com/iRzLi/dissonance"><i className="fab fa-github"></i></a></li>
                </ul>
                    <li>{goToChat}</li>
                    <li><LoginLogoutContainer /></li>
            </ul>
        </nav>
        <nav className="small-header">
            <div className="inner-small-header">
                <span className="logo"><i className="fab fa-discord"></i>Dissonance</span>
                <span className="bars-logo"><i className="fas fa-bars"></i></span>
            </div>
            
            {/* <ul className="header-dropdown">
                <li>Link1</li>
                <li>Link2</li>
                <li>Link3</li>
            </ul> */}
        </nav>
        </>
    );
};


export default header;