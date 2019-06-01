import React from 'react';
import ChatContainer from '../chat/chat_container';

class room extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectedRoom: null}
        this.selectRoom = this.selectRoom.bind(this);
    }

    selectRoom(id){
        return e => {
            this.props.requestRoom(id).then(
                () => this.setState({ selectedRoom: id })
            );
        };
    }
    render(){
        let roomList = this.props.rooms.map(room=> {
            return <li onClick={this.selectRoom(room.id)} key={room.id}>#{room.name}</li>
        });

        if (this.state.selectedRoom!==null){
            return (
                <>
                <ul className="room-list">{roomList}</ul>
                    < ChatContainer selectedRoomId={this.state.selectedRoom} />
                </>

            )
        }
        else {
            return (
                <ul className="room-list">{roomList}</ul>
            )
        }

    }
}

export default room;