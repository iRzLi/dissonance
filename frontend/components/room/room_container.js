import React from 'react';
import { connect } from 'react-redux';
import { requestRoom } from '../../actions/room_actions';
import RoomComponent from './room';
import { getMyRooms } from '../../util/msp_util';

const msp = (state, ownProps) => {
    return {
        serverId: ownProps.selectedServerId,
        rooms: getMyRooms(state, ownProps.selectedServerId),
        selectedRoom: ownProps.selectedRoom,
        selectRoom: ownProps.selectRoom,
        myServer: state.entities.servers[ownProps.selectedServerId],
        mySelf: state.entities.users[state.session.id],
    };
};


const mdp = dispatch => {
    return {
        requestRoom: id => dispatch(requestRoom(id)),
    };
};


export default connect(msp, mdp)(RoomComponent);