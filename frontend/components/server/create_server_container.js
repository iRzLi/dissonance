import { withRouter } from 'react-router-dom';
import { closeModal, openModal } from '../../actions/modal_actions';
import CreateServerComponent from './create_server';
import { connect } from 'react-redux';
import {createServer} from '../../actions/server_actions';

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        createServer: (formServer) => dispatch(createServer(formServer)),
        openOptionsServerModal: () => dispatch(openModal("serverOptions")),
    };
};

export default withRouter(connect(null, mdp)(CreateServerComponent));