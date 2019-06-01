import { connect } from 'react-redux';
import server from './server';
import { getMyServers } from '../../util/msp_util';
import { requestRoom } from '../../actions/room_actions';

const msp = (state, ownProps) => {
    return {
        allServers: state.entities.servers,
        servers: getMyServers(state, ownProps.userId),
        selectServer: ownProps.selectServer,
        selectedServer: ownProps.selectedServer,
    };
};

const mdp = dispatch => {
    return {
        requestRoom: id => dispatch(requestRoom(id)),
    };
};
export default connect(msp,mdp)(server);