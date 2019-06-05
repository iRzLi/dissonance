
import { withRouter } from 'react-router-dom';
import { closeModal, openModal } from '../../actions/modal_actions';
import ServerOptions from './server_options';
import { connect } from 'react-redux';

const msp = (state, ownProps) => {
    return {
        selectedContainer: ownProps.selectedContainer,
        goCreate: ownProps.selectContainer(1),
        goJoin: ownProps.selectContainer(2),
    };
};


const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
    };
};

export default withRouter(connect(msp, mdp)(ServerOptions));