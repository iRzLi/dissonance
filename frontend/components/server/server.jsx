import React from 'react';

class server extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let ServerList = this.props.servers.map((server, i) => {
            if(i === 0){
                return <div className="home-server" key={i}><li  key={server.id} onClick={this.props.selectServer(server.id)} >{server.name}</li></div>
            }
            else{
                return <li key={server.id} onClick={this.props.selectServer(server.id)} >{server.name}</li>
            }
        });
        return(
            <ul className="server-list">{ServerList}</ul>
        );
    }
}

export default server;