import { connect } from 'react-redux';
import Header from './header';
import {logout} from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';


const msp = state => {
    return {
        loggedIn: Boolean(state.session.id)
    };
};

const mdp = dispatch => {
    return {
        logout: ()=> dispatch(logout()),
    };
};



export default withRouter(connect(msp, mdp)(Header));