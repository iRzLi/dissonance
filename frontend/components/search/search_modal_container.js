import { connect } from 'react-redux';
import searchModal from './search_modal';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import { createPrivateRoom } from '../../actions/private_room_actions';

const msp = (state, ownProps) => {
    return {
        users: state.entities.users,
        mySelf: state.entities.users[state.session.id],
        sessionId: state.session.id,
    };
};

const mdp = dispatch => {
    return {
        createPrivateRoom: (form) => dispatch(createPrivateRoom(form)),
        closeModal: () => dispatch(closeModal())
    };
};
export default withRouter(connect(msp, mdp)(searchModal));