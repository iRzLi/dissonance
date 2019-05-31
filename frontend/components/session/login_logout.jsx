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
                    <Link to="/login" onClick={()=>this.props.openModal()} className="login-link">Logout</Link>
                </div>
            );
        }
        return(
            <>{login_logout}</>
        );
    }
}

export default loginLogout;