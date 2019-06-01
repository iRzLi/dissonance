import React from 'react';

class Chat extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.requestMessages(this.props.roomId);
    }
    componentWillUnmount(){
    }

    render() {
        let messages = this.props.messages.map((message)=>{
            return <li key={message.id} >{this.props.users[message.user_id].username} : {message.body}</li>;
        });
        return (
            <ul>{messages}</ul>
        );
    }
}

export default Chat;