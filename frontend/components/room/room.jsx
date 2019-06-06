import React from 'react';
import ChatContainer from '../chat/chat_container';

class room extends React.Component {
    constructor(props) {
        super(props);
    }

    
    render(){
        let roomList = this.props.rooms.map(room=> {
            return <li onClick={this.props.selectRoom(room.id)} key={room.id}><i className="fas fa-hashtag"></i> {room.name}</li>
        });

        if (this.props.selectedRoom!==null){
            return (
                <>
                    <ul className="room-list">
                        <div id="roomNav"><span>{this.props.myServer.name}</span><i className="fas fa-angle-down"></i></div>
                        <li id="room-list-middle">
                            <div id="textChannels"><span><i className="fas fa-angle-down"></i>Text Channels</span><i className="fas fa-plus"></i></div>
                            <ul id="room-list-show-ul">
                                {roomList}
                            </ul>
                        </li>
                        <div id="roomBottom">
                            <img id="roomProfilePic" src={window.profile_picture} />
                            <ul>
                                <li id="profile-name">{this.props.mySelf.username}</li>
                                <li><span id="hashNum"><i className="fas fa-hashtag"></i>{this.props.mySelf.username_number}</span></li>
                            </ul>
                        </div>
                    </ul>
                    < ChatContainer selectedRoomId={this.props.selectedRoom} />
                </>
            )
        }
        else {
            // DEFAULT ROOM
            return (
                <>
                    <ul className="room-list">
                        <div id="roomNav"><span>{this.props.myServer.name}</span><i className="fas fa-angle-down"></i></div>
                        <li id="room-list-middle">
                            <div id="textChannels"><span><i className="fas fa-angle-down"></i>Text Channels</span><i className="fas fa-plus"></i></div>
                            <ul id="room-list-show-ul">
                                {roomList}
                            </ul>
                        </li>
                        <div id="roomBottom">
                            <img id="roomProfilePic" src={window.profile_picture} />
                            <ul>
                                <li id="profile-name">{this.props.mySelf.username}</li>
                                <li><span id="hashNum"><i className="fas fa-hashtag"></i>{this.props.mySelf.username_number}</span></li>
                            </ul>
                        </div>
                    </ul>
                    < ChatContainer selectedRoomId={this.props.rooms[0].id} />
                </>
            )
        }

    }
}

export default room;