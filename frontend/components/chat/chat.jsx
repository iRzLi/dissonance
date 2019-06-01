import React from 'react';

class Chat extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            body: "",
        };
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    componentDidMount(){
        this.props.requestMessages(this.props.roomId).then(
            () => document.getElementById('bottom-message').scrollIntoView(false)
        );
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.createMessage(this.props.roomId, this.state).then(
            (res)=>{
                /*** 
                 * res is a pojo
                 * {
                 *  type: "RECEIVE_MESSAGE",
                 *  res: {message:{messageObj}}
                 *  on cable listen should just dispatch
                 *  this.props.receiveMessage(res.res.message)
                 * }
                */
                this.setState({body:""});
                document.getElementById('bottom-message').scrollIntoView(false);
                document.getElementById("message-submit").setAttribute("disabled","");
            }
        );
    }

    handleOnChange(e) {
            this.setState({ body: e.target.value });
            if(e.target.value===""){
                document.getElementById("message-submit").setAttribute("disabled","");
            }else {
                document.getElementById("message-submit").removeAttribute("disabled");
            }
    }
    
    render() {
        let messages = this.props.messages.map((message)=>{
            return (
                <li key={message.id} >
                <span className="message-name">
                    {this.props.users[message.user_id].username}#
                    {this.props.users[message.user_id].username_number}:
                </span>
                {message.body}</li>);
        });
        return (
            <div className="chat-page">
                <ul className="messages" >
                    {messages}
                    <li id="bottom-message"></li>
                </ul>
                <form className="message-box" onSubmit={this.handleSubmit}>
                    <input onChange={this.handleOnChange} type="text" value={this.state.body} />
                    <input id="message-submit" type="submit" value="Submit" disabled />
                </form>
            </div>
        );
    }
}

export default Chat;