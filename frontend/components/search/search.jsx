import React from 'react';

class search extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
                <div id="search-col" >
                    <div id="searchNav">
                        <div onClick={this.props.openModal} >Start a conversation</div>
                    </div>
                    <div id="directMessagesDiv">
                        <div id="DMText"><span>Direct Messages</span></div>
                        <ul id="DM-ul">
                            <li>Temp</li>
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