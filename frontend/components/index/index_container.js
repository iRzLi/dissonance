import React from 'react';
import { connect } from 'react-redux';
import { requestCurrentUser } from '../../actions/session_actions';
import IndexComponent from './index';
import {withRouter} from 'react-router-dom';
import { requestServer } from '../../actions/server_actions';
import {requestPrivateRooms} from '../../actions/private_room_actions';

const msp = (state) => {
    return {
        userId: state.session.id,
        user: state.entities.users[state.session.id],
    };
};


const mdp = dispatch => {
    return {
        requestPrivateRooms: () => dispatch(requestPrivateRooms()),
        requestCurrentUser: id => dispatch(requestCurrentUser(id)),
        requestServer: id => dispatch(requestServer(id)),
    };
};

export default withRouter(connect(msp,mdp)(IndexComponent));