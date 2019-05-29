import React from 'react';
import { Link } from 'react-router-dom';

const splashFooter = props => {
    return (
        <div className="splash-footer">
            <span>
                <div className="footer-text">
                    <h1>Ready to try Discord? It's free!</h1>
                    <span>JOIN OVER 250 MILLION PLAYERS TODAY</span>
                </div>
                <div className="signupdiv">
                    <Link to="/register" className="signupButton">Sign Up Now</Link>
                </div>
            </span>
        </div>
    );
};

export default splashFooter;