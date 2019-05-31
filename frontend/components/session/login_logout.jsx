import React from 'react';
import { Link } from 'react-router-dom';



class loginLogout extends React.Component {
    constructor(props) {
        super(props);
    }


    render(){

        let login_logout = <div><Link className="login-link" to="/login">Login</Link></div>;
        if (this.props.loggedIn) {
            login_logout = (
                <div>
                    <span onClick={()=>this.props.openModal()} className="login-link">Logout</span>
                </div>
            );
        }
        return(
            <>{login_logout}</>
        );
    }
}

export default loginLogout;