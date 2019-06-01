import React from 'react';
import RoomContainer from '../room/room_container';

class server extends React.Component{
    constructor(props){
        super(props);
        if (this.props.allServers[this.props.selectedServer]){
            this.state = {
                mounted: true,
                selectedRoom: this.props.allServers[this.props.selectedServer].room_ids[0],
            };
        }else {
            this.state = {
                mounted: true,
                selectedRoom: null,
            };
        }
        this.selectRoom = this.selectRoom.bind(this);
    }

    selectRoom(id) {
        return e => {
            this.setState({mounted:false}, () => {
                this.props.requestRoom(id).then(
                    () => this.setState({ selectedRoom: id, mounted:true })
                );
            });
            
        };
    }

    componentDidMount(){
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
        if (this.state.mounted === true && this.state.selectedRoom) {
            return (
                <>
                <ul className="server-list">{ServerList}</ul>
                    <RoomContainer selectedRoom={this.state.selectedRoom} selectRoom={this.selectRoom} selectedServerId={this.props.selectedServer} />
                </>
            );
        }else {
            return  (
                <ul className="server-list">{ServerList}</ul>
            );
        }
    }
}

export default server;