import React from 'react';
import { connect } from 'react-redux';
// import { closeModal, openModal } from '../../actions/modal_actions';
import PrivateChatComponent from './private_chat';
import { getMyPrivateMessages } from '../../util/msp_util';
import { createPrivateMessage, requestPrivateMessages, receivePrivateMessage } from '../../actions/private_message_actions';


// import { receiveUserMsg } from '../../actions/session_actions';


const msp = (state, ownProps) => {
    return {
        roomId: ownProps.selectedRoomId,
        roomName: state.entities.private_rooms[ownProps.selectedRoomId].name,
        messages: getMyPrivateMessages(state, ownProps.selectedRoomId),
        other_user: state.entities.users[ownProps.otherUserId],
        myself: state.entities.users[state.session.id],
        sessionId: state.session.id,
    };
};


const mdp = dispatch => {
    return {
        createMessage: (roomId, body) => dispatch(createPrivateMessage(roomId, body)),
        requestMessages: (roomId) => dispatch(requestPrivateMessages(roomId)),
        receiveMessage: (messageObj) => dispatch(receivePrivateMessage(messageObj)),
    };
};

export default connect(msp, mdp)(PrivateChatComponent);