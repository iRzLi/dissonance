import { connect } from 'react-redux';
import serverModal from './server_modal';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';


const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
    };
};
export default withRouter(connect(null, mdp)(serverModal));