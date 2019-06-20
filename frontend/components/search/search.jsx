import React from 'react';

class search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedRoom: null,
        };
        this.selectRoom = this.selectRoom.bind(this);
    }

    componentDidUpdate(prevProps) {

        if (prevProps.match.params.channelId !== this.props.match.params.channelId) {
            if (this.props.mySelf.private_room_ids
                && this.props.mySelf.private_room_ids.includes(parseInt(this.props.match.params["channelId"]))) {
                this.setState({ selectedRoom: parseInt(this.props.match.params["channelId"]) });
            } else {
                this.setState({ selectedRoom: null });
            }
        }

    }


    selectRoom(id) {
        return e => {
            if (id !== this.state.selectedRoom) {
                this.props.requestPrivateRoom(id).then(
                    (res) => {
                        console.log(this.props);
                        this.props.history.push(`/channel/${this.props.privateServer.id}/${id}`);
                    });
            };
        };
    }

    componentDidMount(){
        if (this.props.mySelf.private_room_ids
            && this.props.mySelf.private_room_ids.includes(parseInt(this.props.match.params["channelId"]))) {
            this.setState({ selectedRoom: parseInt(this.props.match.params["channelId"]) });
        }
    }

    render(){
        let localSelectedRoom = null;
        if (this.state.selectedRoom !== null) {
            localSelectedRoom = this.state.selectedRoom;
        }

        let roomList = this.props.myPrivateRooms.map(room => {
            if (room.id === localSelectedRoom) {
                return <li id="selectedRoomLi" onClick={this.selectRoom(room.id)} key={"private" +room.id}><i className="fas fa-hashtag"></i> <div><span>{room.name}</span> </div></li>;
            }
            else {
                return <li className="noneSelected" onClick={this.selectRoom(room.id)} key={"private"+room.id}><i className="fas fa-hashtag"></i> <div><span>{room.name}</span> </div></li>;
            }

        });

        return (
            <>
                <div id="search-col" >
                    <div id="searchNav">
                        <div onClick={this.props.openModal} >Start a conversation</div>
                    </div>
                    <div id="directMessagesDiv">
                        <div id="DMText"><span>Direct Messages</span></div>
                        <ul id="DM-ul">
                            {roomList}
                        </ul>
                    </div>
                    <div id="roomBottom">
                        <img id="roomProfilePic" src={window.profile_picture} />
                        <div onClick={this.props.logout} id="logoutDoor"><i className="fas fa-door-open"></i><div id="roomLogout">Logout</div></div>
                        <ul>
                            <li id="profile-name">{this.props.mySelf.username}</li>
                            <li><span id="hashNum"><i className="fas fa-hashtag"></i>{this.props.mySelf.username_number}</span></li>
                        </ul>
                    </div>
                </div>
            </>
        )
        
    }
}

export default search;