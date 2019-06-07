import React from 'react';
import { Link } from 'react-router-dom';

const splashFooter = props => {
    return (
        <div className="splash-footer">
            <div className="splash-footer-section">
                <ul className="footer-text">
                    <h1>Ready to try Dissonance? It's free!</h1>
                    <span>JOIN OVER 250 MILLION PLAYERS TODAY</span>
                </ul>
                <ul className="signupdiv">
                    <Link to="/register" className="signupButton">Sign Up Now</Link>
                </ul>
            </div>
        </div>
    );
};

export default splashFooter;