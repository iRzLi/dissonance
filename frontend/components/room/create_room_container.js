import { withRouter } from 'react-router-dom';
import { closeModal, openModal } from '../../actions/modal_actions';
import CreateServerComponent from './create_room';
import { connect } from 'react-redux';
import { createRoom } from '../../actions/room_actions';


//  form needs :name and :server_id
const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        createRoom: (formRoom) => dispatch(createRoom(formRoom)),
    };
};

export default withRouter(connect(null, mdp)(CreateServerComponent));