import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import LogoutModal from './logout_modal';
import { withRouter } from 'react-router-dom';


const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        closeModal: () => dispatch(closeModal())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogoutModal));