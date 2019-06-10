import { connect } from 'react-redux';
import searchModal from './search_modal';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
    return {
        serverId: ownProps.selectedServerId,
        privateServer: ownProps.privateServer,
        users: state.entities.users,
        mySelf: state.entities.users[state.session.id],
        sessionId: state.session.id,
    };
};

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};
export default withRouter(connect(msp, mdp)(searchModal));