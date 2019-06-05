import React from 'react';
import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_actions';
import ChatComponent from './chat';
import { getMyMessages } from '../../util/msp_util';
import {createMessage, requestMessages, receiveMessage} from '../../actions/message_actions';
import {receiveUserMsg} from '../../actions/session_actions';
const msp = (state, ownProps) => {
    return {
        roomId: ownProps.selectedRoomId,
        roomName: state.entities.rooms[ownProps.selectedRoomId].name,
        messages: getMyMessages(state, ownProps.selectedRoomId),
        users: state.entities.users,
        sessionId: state.session.id,
        myServerAdmin: state.entities.servers[state.entities.rooms[ownProps.selectedRoomId].server_id].admin_id,
    };
};


const mdp = dispatch => {
    return {
        createMessage: (roomId, body) => dispatch(createMessage(roomId,body)),
        requestMessages: (roomId) => dispatch(requestMessages(roomId)),
        receiveMessage: (messageObj) => dispatch(receiveMessage(messageObj)),
        receiveUserMsg: (obj) => dispatch(receiveUserMsg(obj)),
        openModal: () => dispatch(openModal('serverLink')),
    };
};

export default connect(msp, mdp)(ChatComponent);