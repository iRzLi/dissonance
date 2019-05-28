import React from 'react';
import {Link} from 'react-router-dom';

const header = (props) => {
    return (
        <div className="header">
            <ul className="header-list-1" >
                <li><i className="fab fa-discord"></i></li>
                <li>Link1</li>
                <li>Link2</li>
                <li>Link3</li>
            </ul>

            <ul className="header-list-2" >
                <li><i className="fab fa-twitter"></i></li>
                <li><i className="fab fa-facebook-square"></i></li>
                <li><i className="fab fa-instagram"></i></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </div>
    );
};


export default header;