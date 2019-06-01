import { connect } from 'react-redux';
import server from './server';
import { getMyServers } from '../../util/msp_util';

const msp = (state, ownProps) => {
    return {
        servers: getMyServers(state, ownProps.userId),
        selectServer: ownProps.selectServer,
    };
};
export default connect(msp)(server);