import { connect } from 'react-redux';
import search from './search';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import { requestPrivateRooms, requestPrivateRoom} from '../../actions/private_room_actions';
import { getMyPrivateRooms } from '../../util/msp_util';

const msp = (state, ownProps) => {
    return {
        privateServer: ownProps.privateServer,
        users: state.entities.users,
        mySelf: state.entities.users[state.session.id],
        sessionId: state.session.id,
        privateRooms: state.entities.privateRooms,
        myPrivateRooms: getMyPrivateRooms(state),
    };
};

const mdp = dispatch => {
    return {
        requestPrivateRooms: () => dispatch(requestPrivateRooms()),
        requestPrivateRoom: (id) => dispatch(requestPrivateRoom(id)),
        logout: () => dispatch(openModal("logout")),
        openModal: () => dispatch(openModal("searchModal"))
    };
};
export default withRouter(connect(msp, mdp)(search));