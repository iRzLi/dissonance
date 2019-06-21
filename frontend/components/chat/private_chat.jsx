import React from 'react';

class PrivateChat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: "",
            disabled: true,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }


    componentDidMount() {
        this.props.requestMessages(this.props.roomId);
        App.room = App.cable.subscriptions.create(
            { channel: "ChatChannel", id: "Private"+this.props.roomId },
            {
                received: obj => {
                    obj["private_message"] = obj["message"];
                    this.props.receiveMessage(obj);
                },
                speak: function (messageObj) {
                    return this.perform("speak", messageObj);
                }
            }
        );
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.createMessage(this.props.roomId, this.state).then(
            (res) => {
                /*** 
                 * res is a pojo
                 * {
                 *  type: "RECEIVE_MESSAGE",
                 *  res: {message:{messageObj}}
                 *  on cable listen should just dispatch
                 *  this.props.receiveMessage(res.res.message)
                 * }
                 * pass users as well and change reducer of user if user doesnt exist
                */


                App.room.speak({ message: res.res.private_message, id: "Private" + this.props.roomId, user: this.props.myself });
                this.setState({ body: "", disabled: true });
            }
        );
    }

    handleOnChange(e) {
        // this.setState({ body: e.target.value });
        if (e.target.value === "") {
            // document.getElementById("message-submit").setAttribute("disabled","");
            this.setState({
                body: e.target.value,
                disabled: true
            });
        } else {
            // document.getElementById("message-submit").removeAttribute("disabled");
            this.setState({
                body: e.target.value,
                disabled: false
            });
        }
    }
    componentDidUpdate(prevProps) {
        document.getElementById('bottom-message').scrollIntoView(false);
        if (this.props.roomId !== prevProps.roomId) {
            App.room.unsubscribe();
            App.room = App.cable.subscriptions.create(
                { channel: "ChatChannel", id: "Private" + this.props.roomId },
                {
                    received: obj => {
                        obj["private_message"] = obj["message"];
                        this.props.receiveMessage(obj);
                    },
                    speak: function (messageObj) {
                        return this.perform("speak", messageObj);
                    }
                }
            );
        }
    }

    componentWillUnmount() {
        if (App.room) {
            App.room.unsubscribe();
        }
    }

    render() {
        let groupedMessages = [];
        let allMessages = this.props.messages.slice();
        while (allMessages.length !== 0) {
            let bodies = [];
            let curr_user_id = allMessages[0].user_id;

            let currUser = this.props.other_user;
            let currName = this.props.other_user.username;
            let currNum = this.props.other_user.username_number;
            if (allMessages[0].user_id == this.props.sessionId){
                currName = this.props.myself.username;
                currNum = this.props.myself.username_number;
                currUser = this.props.myself
            }

            let custkey = currName + currNum + allMessages[0].id;
            let date = new Date(allMessages[0].created_at)
            let time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
            let printDate = date.toLocaleDateString("en-US");
            let withinOneMinute = true;
            while (allMessages[0] && withinOneMinute) {
                let date2 = new Date(allMessages[0].created_at);
                if (date2.getTime() - date.getTime() > 60000) {
                    withinOneMinute = false;
                } else {
                    if (allMessages[0].body.length > 100) {
                        let spacedBody = splitString(allMessages[0].body);
                        bodies.push(<li key={allMessages[0].id} >{spacedBody}</li>);
                    } else {
                        // bodies.push(<li word-wrap="break-word" key={allMessages[0].id} >{allMessages[0].body}</li>);
                        bodies.push(<li key={allMessages[0].id} >{allMessages[0].body}</li>);
                    }
                    allMessages.shift();
                }
            }

            groupedMessages.push(
                <li key={custkey}>
                    <div className="message-group">
                        <img className="profile-picture" src={currUser.profile_picture} />
                        <div className="message-name">
                            {currName} <span className="datetime"> {printDate} {time}</span>
                        </div>
                        <ul className="message-body">
                            {bodies}
                        </ul>
                    </div>
                </li>
            );
        }

        return (
            <div className="chat-page">
                <div className="chat-nav"><span><i className="fas fa-hashtag"></i> <span className="chat-nav-title">{this.props.roomName}</span></span> </div>
                <ul className="messages" >
                    {groupedMessages}
                    <li id="bottom-message"></li>
                </ul>
                <form className="message-box" onSubmit={this.handleSubmit}>
                    <input id="message-input" placeholder={`Message #${this.props.roomName}`} onChange={this.handleOnChange} type="text" value={this.state.body} />
                    <input id="message-submit" type="submit" value="Submit" disabled={this.state.disabled} />
                </form>
            </div>
        );
    }
}


const splitString = str => {
    let oldstring = str.slice(0);
    let newString = "";
    let i = 0;
    for (i = 0; i < oldstring.length / 50; i++) {
        let start = i * 50;
        let end = (i + 1) * 50;
        if (oldstring.slice(start, end).includes(' ') !== true) {
            newString += oldstring.slice(start, end) + '\n';
        } else {
            newString += oldstring.slice(start, end);
        }
    }
    let endingPart = (i + 1) * 100;
    newString += oldstring.slice(endingPart);
    return newString;
}

export default PrivateChat;