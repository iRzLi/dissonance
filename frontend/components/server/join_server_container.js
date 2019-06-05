import { withRouter } from 'react-router-dom';
import { closeModal, openModal } from '../../actions/modal_actions';
import JoinServerComponent from './join_server';
import { connect } from 'react-redux';
import { joinServer } from '../../actions/server_actions';

const msp = (state, ownProps) => {
    return {
        selectedContainer: ownProps.selectedContainer,
        goBack: ownProps.selectContainer(0),
        errors: state.errors.server,
    };
};

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        joinServer: (joinLink) => dispatch(joinServer(joinLink)),
        openOptionsServerModal: () => dispatch(openModal("serverOptions")),
    };
};

export default withRouter(connect(msp, mdp)(JoinServerComponent));