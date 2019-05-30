import React from 'react';
import {Link} from 'react-router-dom';

const header = (props) => {
    let login_logout = <Link className="login-link" to="/login">Login</Link>;
    if (props.loggedIn) {
        login_logout = <span onClick={props.logout} className="login-link">Logout</span>;
    }

    return (
        <>
        <nav className="header">
            <ul>
                <li className="logo"><i className="fab fa-discord"></i> Dissonance</li>
                {/* <li>Link1</li>
                <li>Link2</li>
                <li>Link3</li> */}
            </ul>
            <ul>
                <ul className="header-icons">
                    {/* <li><i className="fab fa-twitter"></i></li>
                    <li><i className="fab fa-facebook-square"></i></li>
                    <li><i className="fab fa-instagram"></i></li> */}
                        <li><a href="https://github.com/iRzLi/dissonance"><i className="fab fa-github"></i></a></li>
                </ul>
                <li>{login_logout}</li>
            </ul>
        </nav>
        <nav className="small-header">
            <div className="inner-small-header">
                <span className="logo"><i className="fab fa-discord"></i>Dissonance</span>
                <span className="bars-logo"><i className="fas fa-bars"></i></span>
            </div>
            
            <ul className="header-dropdown">
                <li>Link1</li>
                <li>Link2</li>
                <li>Link3</li>
            </ul>
        </nav>
        </>
    );
};


export default header;