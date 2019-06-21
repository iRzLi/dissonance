import React from 'react';

class searchModal extends React.Component {
    constructor(props){
        super(props);
        this.state={searchString:""};
        this.onSearch = this.onSearch.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
        this.errors = null;
    }

    onSearch(e){
        this.setState({ searchString: e.target.value, errors: null})
    }

    onClickHandler(id){
        return e => {
            e.preventDefault();
            this.props.createPrivateRoom({
                user1_id: this.props.sessionId,
                user2_id: id,
            }).then(
                res=>{
                    this.setState({ errors: null })
                    this.props.closeModal();
                },
                err =>{
                    this.setState({errors: "This conversation already exists"})
                }
            )
        }
    }

    componentDidUpdate(){
        if(this.state.errors!==null){
            document.getElementById("PrivateRoomError").scrollIntoView();
        }
    }


    render(){

        let image = <img src={window.direction} className="picture direction" />;

        let errorMsg = null;
        if (this.state.errors !== null) {
            errorMsg = <div id="PrivateRoomError">{this.state.errors}</div>
        }

        const usersArr = Object.values(this.props.users);
        let foundUsers=[];
        let message = null;
        let endingMessage = <div className="message ending-msg">Search for a conversation now</div>;


        if(this.state.searchString){
            image = null;
            message = <li className="message">Searching through all users that you are currently in a server with</li>
            endingMessage = <div className="message ending-msg">Click on a user to start a conversation</div>
            
            usersArr.forEach((user)=>{
                if(this.state.searchString.includes("#")){
                    if (user.id !== this.props.sessionId && user.username.toLowerCase().includes(this.state.searchString.split("#")[0].toLowerCase())){
                        if (user.username_number.toString().includes(this.state.searchString.split("#")[1])) {
                            foundUsers.push(<li className="found-user-li" key={user.id} onClick={this.onClickHandler(user.id)} >{user.username}#{user.username_number}</li>)
                        }
                    }
                }else {
                    if (user.id!==this.props.sessionId && user.username.toLowerCase().includes(this.state.searchString.toLowerCase())) {
                        foundUsers.push(<li className="found-user-li" key={user.id} onClick={this.onClickHandler(user.id)} >{user.username}#{user.username_number}</li>)
                    }
                }
            })
        }
        
        if(foundUsers.length===0){
            foundUsers = null;
        }

        return (
            <div id="searchModal">
                <div>
                    <form>
                        <input className="dark-input" onChange={this.onSearch}
                         type="text" value={this.state.searchString}
                         placeholder = "Guest#123"/>
                    </form>
                </div>
                <div id="searchResults">
                    {image}
                    <ul id="searchResultsList">
                        {errorMsg}
                        {message}
                        {foundUsers}
                    </ul>
                </div>
                {endingMessage}
            </div>
        );
    }
}

export default searchModal;