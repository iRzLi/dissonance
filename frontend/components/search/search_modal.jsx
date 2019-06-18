import React from 'react';

class searchModal extends React.Component {
    constructor(props){
        super(props);
        this.state={searchString:""};
        this.onSearch = this.onSearch.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onSearch(e){
        this.setState({searchString: e.target.value})
    }

    onClickHandler(id){
        return function (e) {
            console.log(id);
        }
    }

    render(){

        let image = <img src={window.direction} className="picture direction" />;

        const usersArr = Object.values(this.props.users);
        let foundUsers=null;
        let message = null;
        let endingMessage = <div className="message ending-msg">Search for a conversation now</div>;
        if(this.state.searchString){
            image = null;
            message = <li className="message">Searching through all users that you are currently in a server with</li>
            endingMessage = <div className="message ending-msg">Click on a user to start a conversation</div>
            foundUsers = usersArr.map((user)=>{
                if(this.state.searchString.includes("#")){
                    if (user.username.toLowerCase().includes(this.state.searchString.split("#")[0].toLowerCase())){
                        if (user.username_number.toString().includes(this.state.searchString.split("#")[1])) {
                            return <li className="found-user-li" key={user.id} onClick={this.onClickHandler(user.id)} >{user.username}#{user.username_number}</li>
                        }
                    }
                }else {
                    if (user.username.toLowerCase().includes(this.state.searchString.toLowerCase())) {
                        return <li className="found-user-li" key={user.id} onClick={this.onClickHandler(user.id)} >{user.username}#{user.username_number}</li>
                    }
                }
            })
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