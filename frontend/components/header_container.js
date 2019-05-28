import { connect } from 'react-redux';
import Header from './header';


const msp = state => {
    return {
        loggedIn: Boolean(state.session.id)
    };
};



export default connect(msp)(Header);