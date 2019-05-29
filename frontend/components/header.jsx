import React from 'react';
import {Link} from 'react-router-dom';

const header = (props) => {
    let login_logout = <Link className="login-link" to="/login">Login</Link>;
    if (props.loggedIn) {
        login_logout = <Link onClick={props.logout} className="login-link" to="/">Logout</Link>;
    }

    return (
        <div className="header">
            <ul>
                <li className="logo"><i className="fab fa-discord"></i> Dissonance</li>
                <li>Link1</li>
                <li>Link2</li>
                <li>Link3</li>
            </ul>

            <ul className="header-icons">
                <li><i className="fab fa-twitter"></i></li>
                <li><i className="fab fa-facebook-square"></i></li>
                <li><i className="fab fa-instagram"></i></li>
                <li>{login_logout}</li>
            </ul>
        </div>
    );
};


export default header;