import React from 'react';
import ChatContainer from '../chat/chat_container';

class room extends React.Component {
    constructor(props) {
        super(props);
        this.inviteClick = this.inviteClick.bind(this);
        this.state={
            clicked: false,
        };
        this.showDrop = this.showDrop.bind(this);
    }

    showDrop(){
        if(this.state.clicked===false){
            this.setState({clicked:true});
        }else{
            this.setState({ clicked: false });
        }
    }

    inviteClick(e){
        e.stopPropagation();
        this.props.invite();
    }

    componentDidUpdate(){
        if (this.props.sessionId === this.props.myServerAdmin){
            document.getElementById("textChannels").scrollIntoView();
        }
    }

    
    render(){
        let carotOrClose = (<i onClick={this.showDrop} id="carotOrX" className="fas fa-angle-down"></i>)

        let dropDown =  (
            <div id="closedRoomDropDown"> 
                <div id="inviteLinkRow" className="dropDownRow" onClick={this.inviteClick}>
                    <i className="fas fa-user-plus"></i>
                    <div>Invite People</div>
                </div>
                <div className="dropDownRow" onClick={this.props.createRoom} >
                    <i className="fas fa-plus"></i>
                    <div>Create Room</div>
                </div>
            </div>
        );

        if (this.state.clicked === true){
            dropDown = (
                <div id="openRoomDropDown">
                    <div id="inviteLinkRow" className="dropDownRow" onClick={this.inviteClick}>
                        <i className="fas fa-user-plus"></i>
                        <div>Invite People</div>
                    </div>
                    <div className="dropDownRow" onClick={this.props.createRoom} >
                        <i className="fas fa-plus"></i>
                        <div>Create Room</div>
                    </div>
                </div>
            );
            carotOrClose = (<i onClick={this.showDrop} id="carotOrX" className="fas fa-times"></i>)
        }

        if (this.props.sessionId !== this.props.myServerAdmin) {
            carotOrClose = null;
            dropDown = null;
        }

        let addUser = null;
        if(this.props.sessionId===this.props.myServerAdmin){
            addUser = <i onClick={this.inviteClick} className="fas fa-user-plus"></i>;
        }
        let localSelectedRoom = this.props.rooms[0].id;
        if (this.props.selectedRoom !== null){
            localSelectedRoom = this.props.selectedRoom;
            
        }

        let roomList = this.props.rooms.map(room=> {
            if (room.id === localSelectedRoom){
                return <li id="selectedRoomLi" onClick={this.props.selectRoom(room.id)} key={room.id}><i className="fas fa-hashtag"></i> <div><span>{room.name}</span> </div> {addUser}</li>;
            }
            else {
                return <li className="noneSelected" onClick={this.props.selectRoom(room.id)} key={room.id}><i className="fas fa-hashtag"></i> <div><span>{room.name}</span> </div>{addUser}</li>;
            }

        });

        let textChannels = null;
        if (this.props.sessionId === this.props.myServerAdmin) {
            textChannels = <div id="textChannels"><span><i className="fas fa-angle-down"></i>Text Rooms</span><i onClick={this.props.createRoom} className="fas fa-plus newRoomPlus"></i><div id="newRoomBlurb">Create a new Room</div></div>
        } else {
            textChannels = <div id="textChannels"><span><i className="fas fa-angle-down"></i>Text Rooms</span></div>
        }

        return (
            <>
                <ul className="room-list">
                    <div id="roomNav"><span>{this.props.myServer.name}</span>{carotOrClose}</div>
                    {dropDown}
                    <div id="room-list-middle">
                        {textChannels}
                        <ul id="room-list-show-ul">
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
                </ul>
                < ChatContainer selectedRoomId={localSelectedRoom} />
            </>
        )
        // if (this.props.selectedRoom !== null) {....}
        // else {
        //     // DEFAULT ROOM
        //     return (
        //         <>
        //             <ul className="room-list">
        //                 <div id="roomNav"><span>{this.props.myServer.name}</span><i className="fas fa-angle-down"></i></div>
        //                 <li id="room-list-middle">
        //                     <div id="textChannels"><span><i className="fas fa-angle-down"></i>Text Channels</span><i className="fas fa-plus newRoomPlus"></i></div>
        //                     <ul id="room-list-show-ul">
        //                         {roomList}
        //                     </ul>
        //                 </li>
        //                 <div id="roomBottom">
        //                     <img id="roomProfilePic" src={window.profile_picture} />
        //                     <div onClick={this.props.logout} id="logoutDoor"><i class="fas fa-door-open"></i></div>
        //                     <ul>
        //                         <li id="profile-name">{this.props.mySelf.username}</li>
        //                         <li><span id="hashNum"><i className="fas fa-hashtag"></i>{this.props.mySelf.username_number}</span></li>
        //                     </ul>
        //                 </div>
        //             </ul>
        //             < ChatContainer selectedRoomId={this.props.rooms[0].id} />
        //         </>
        //     )
        // }

    }
}

export default room;