import React from 'react';

class ServerOptions extends React.Component{
    constructor(props){
        super(props);
        this.createServer = this.createServer.bind(this);
        this.joinServer = this.joinServer.bind(this);
    }

    createServer() {
        this.props.goCreate();
    }

    joinServer(){
        this.props.goJoin();
    }

    render(){
        return(
            <div className="server-options">
                <div className="options-div">
                    <div className="header" >OH, ANOTHER SERVER HUH?</div>
                    <section className="server-options-section">
                    <ul onClick={this.createServer} className="server-choice">
                        <li className="server-choice-title-c">CREATE</li>
                        <li className="server-choice-body">Create a new server and invite your friends. It's free!</li>
                        <li > <div id="createServerImg"> </div></li>
                        <li> <button id="createServerButton">Create a server</button></li>
                    </ul>
                    <img id="server-choice-img-left" src={window.modal_left}/>
                    <ul onClick={this.joinServer} className="server-choice">
                        <li className="server-choice-title-j">JOIN</li>
                        <li className="server-choice-body" >Enter an instant invite and join your friends's server</li>
                        <li id="joinServerImg"></li>
                        <li> <button id="joinServerButton">Join a server</button></li>
                    </ul>
                    <img id="server-choice-img-right" src={window.modal_right} />
                </section>
                </div>
            </div>
        );
    }

}


export default ServerOptions;