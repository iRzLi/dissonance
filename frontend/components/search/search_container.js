import { connect } from 'react-redux';
import search from './search';
import { openModal } from '../../actions/modal_actions';
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
        logout: () => dispatch(openModal("logout")),
        openModal: () => dispatch(openModal("searchModal"))
    };
};
export default withRouter(connect(msp, mdp)(search));