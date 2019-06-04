import React from 'react';
import ChatContainer from '../chat/chat_container';

class room extends React.Component {
    constructor(props) {
        super(props);
    }

    
    render(){
        let roomList = this.props.rooms.map(room=> {
            return <li onClick={this.props.selectRoom(room.id)} key={room.id}>#{room.name}</li>
        });

        if (this.props.selectedRoom!==null){
            return (
                <>
                <ul className="room-list">{roomList}</ul>
                    < ChatContainer selectedRoomId={this.props.selectedRoom} />
                </>
            )
        }
        else {
            // DEFAULT ROOM
            return (
                <>
                    <ul className="room-list">{roomList}</ul>
                    < ChatContainer selectedRoomId={this.props.rooms[0].id} />
                </>
            )
        }

    }
}

export default room;