import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LogoutModalContainer from './logout_modal_container.jsx';
import ServerOptionsContainer from '../../components/server/server_options_container';
import JoinServerContainer from '../../components/server/join_server_container';
import CreateServerContainer from '../../components/server/create_server_container';
import ServerModalContainer from '../../components/server/server_modal_container';
import ServerLinkContainer from '../../components/server/server_link_container';
import CreateRoomContainer from '../room/create_room_container';
import SearchModalContainer from '../search/search_modal_container';

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'logout':
            component = <LogoutModalContainer />;
            break;
        case 'serverModal':
            component = <ServerModalContainer />;
            break;
        case 'serverLink':
            component = <ServerLinkContainer />;
            break;
        case 'createRoom':
            component = <CreateRoomContainer />;
            break;
        case 'searchModal':
            component = <SearchModalContainer />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);