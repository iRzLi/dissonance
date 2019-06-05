import React from 'react';

class ServerLink extends React.Component {
    constructor(props) {
        super(props);
        // this.state={
        //     link: this.props.servers[parseInt(this.props.location.pathname.split("/")[2])].join_link,
        // };

    }

    // componentDidUpdate(oldProps){
        
    // }



    render() {
        // this.props.location.pathname.split("/")
        //     (3)["", "channel", "13"]
        // this.props.location.pathname.split("/")[2] = 13
        let link = "dissonance.join/" + this.props.servers[parseInt(this.props.location.pathname.split("/")[2])].join_link;
        return (
            <div id="serverLinkDiv">
                <div id="linkHeader"><span id="linkTitle">Inivte friends to dissonance</span> <span onClick={this.props.closeModal} ><i id="serverLinkClose" className="fas fa-times"></i></span> </div>
                <div className="linkInfo">Share this link with other to grant access to this server</div>
                <div id="serverLink">{link}</div>
                <div className="linkInfo">This link will never expire</div>

            </div>
        );
    }
}

export default ServerLink;