import { withRouter } from 'react-router-dom';
import { closeModal, openModal } from '../../actions/modal_actions';
import JoinServerComponent from './join_server';
import { connect } from 'react-redux';
import { joinServer } from '../../actions/server_actions';

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        joinServer: (joinLink) => dispatch(joinServer(joinLink)),
        openOptionsServerModal: () => dispatch(openModal("serverOptions")),
    };
};

export default withRouter(connect(null, mdp)(JoinServerComponent));