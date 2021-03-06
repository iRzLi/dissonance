import { withRouter } from 'react-router-dom';
import { closeModal, openModal } from '../../actions/modal_actions';
import CreateServerComponent from './create_server';
import { connect } from 'react-redux';
import {createServer} from '../../actions/server_actions';

const msp = (state, ownProps) => {
    return {
        selectedContainer: ownProps.selectedContainer,
        goBack: ownProps.selectContainer(0),
    };
};

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        createServer: (formServer) => dispatch(createServer(formServer)),
        openServerLinkModal: () => dispatch(openModal("serverLink"))
    };
};

export default withRouter(connect(msp, mdp)(CreateServerComponent));