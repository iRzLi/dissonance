import { withRouter } from 'react-router-dom';
import { closeModal, openModal } from '../../actions/modal_actions';
import ServerLinkComponent from './server_link';
import { connect } from 'react-redux';

const msp = (state) => {
    return {
        servers: state.entities.servers,
    };
};

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
    };
};

export default withRouter(connect(msp, mdp)(ServerLinkComponent));