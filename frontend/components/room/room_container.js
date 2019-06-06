import React from 'react';
import { connect } from 'react-redux';
import { requestRoom } from '../../actions/room_actions';
import RoomComponent from './room';
import { getMyRooms } from '../../util/msp_util';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
    return {
        serverId: ownProps.selectedServerId,
        rooms: getMyRooms(state, ownProps.selectedServerId),
        selectedRoom: ownProps.selectedRoom,
        selectRoom: ownProps.selectRoom,
        myServer: state.entities.servers[ownProps.selectedServerId],
        mySelf: state.entities.users[state.session.id],
        sessionId: state.session.id,
        myServerAdmin: state.entities.servers[ownProps.selectedServerId].admin_id,
    };
};


const mdp = dispatch => {
    return {
        requestRoom: id => dispatch(requestRoom(id)),
        logout: () => dispatch(openModal("logout")),
        invite: () => dispatch(openModal('serverLink')),
        createRoom: () => dispatch(openModal('createRoom')),
    };
};


export default connect(msp, mdp)(RoomComponent);