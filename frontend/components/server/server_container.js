import { connect } from 'react-redux';
import server from './server';
import { getMyServers } from '../../util/msp_util';
import { requestRoom } from '../../actions/room_actions';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
    return {
        myServer: state.entities.servers[ownProps.selectedServer],
        servers: getMyServers(state),
        selectServer: ownProps.selectServer,
        selectedServer: ownProps.selectedServer,
    };
};

const mdp = dispatch => {
    return {
        requestRoom: id => dispatch(requestRoom(id)),
        openModal: () => dispatch(openModal("serverOptions"))
    };
};
export default withRouter(connect(msp,mdp)(server));