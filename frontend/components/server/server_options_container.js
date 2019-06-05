
import { withRouter } from 'react-router-dom';
import { closeModal, openModal } from '../../actions/modal_actions';
import ServerOptions from './server_options';
import { connect } from 'react-redux';

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        openCreateServerModal: () => dispatch(openModal("createServer")),
        openJoinServerModal: () => dispatch(openModal("joinServer")),
    };
};

export default withRouter(connect(null, mdp)(ServerOptions));