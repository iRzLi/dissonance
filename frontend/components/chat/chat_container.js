import React from 'react';
import { connect } from 'react-redux';
import ChatComponent from './chat';
import { getMyMessages } from '../../util/msp_util';
import {createMessage, requestMessages, receiveMessage} from '../../actions/message_actions';

const msp = (state, ownProps) => {
    return {
        roomId: ownProps.selectedRoomId,
        messages: getMyMessages(state, ownProps.selectedRoomId),
        users: state.entities.users,
    };
};


const mdp = dispatch => {
    return {
        createMessage: (roomId, body) => dispatch(createMessage(roomId,body)),
        requestMessages: (roomId) => dispatch(requestMessages(roomId)),
        receiveMessage: (messageObj) => dispatch(receiveMessage(messageObj)),
    };
};

export default connect(msp, mdp)(ChatComponent);