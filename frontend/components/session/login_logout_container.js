import { connect } from 'react-redux';
import LoginLogout from './login_logout';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';


const msp = state => {
    return {
        loggedIn: Boolean(state.session.id)
    };
};

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout()),
        openModal: ()=> dispatch(openModal("logout"))
    };
};

export default connect(msp, mdp)(LoginLogout);