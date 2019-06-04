import React from 'react';
import RoomContainer from '../room/room_container';

class server extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedRoom: null,
        };
        this.selectRoom = this.selectRoom.bind(this);
    }

    componentDidUpdate(prevProps){
        // if(this.props.myServer.public===true){
        //     this.setState({ selectedRoom: this.props.myServer.room_ids[0]});
        // }else {
        //     this.setState({ selectedRoom: null });
        // }
    }

    selectRoom(id) {
        return e => {
            this.setState({mounted:false}, () => {
                this.props.requestRoom(id).then(
                    () => this.setState({ selectedRoom: id, mounted:true })
                );
            });
            
            // this.setState({selectRoom:id}, ()=>{
            //     this.props.history.push(`/channel/${this.props.selectedServer}/${id}`);
            // });
        };
    }

    // componentDidMount(){
    //     if(this.state.selectedRoom!==null){
    //         this.setState({ mounted: false }, () => {
    //             this.props.requestRoom(this.state.selectedRoom).then(
    //                 () => this.setState({mounted: true })
    //             );
    //         });
    //     }
    // }

    render(){
        let ServerList = this.props.servers.map((server, i) => {
            //  FIRST SERVER || HOME SERVER
            if(i === 0){
                //  IF SELECTED OR NOT
                if (this.props.selectedServer===server.id){
                    return <div className="home-server" key={i}><li className="server-li-ele" id="selected-server" key={server.id} onClick={this.props.selectServer(server.id)} ><span>{server.name}</span></li></div>
                }else{
                    return <div className="home-server" key={i}><li className="server-li-ele"  key={server.id} onClick={this.props.selectServer(server.id)} ><span>{server.name}</span></li></div>
                }
            }
            else{
                if (this.props.selectedServer === server.id){
                    return <li className="server-li-ele" id="selected-server" key={server.id} onClick={this.props.selectServer(server.id)} ><span>{server.name}</span></li>
                }else{
                    return <li className="server-li-ele" key={server.id} onClick={this.props.selectServer(server.id)} ><span>{server.name}</span></li>
                }
            }
        });
        if (this.props.myServer && this.props.myServer.public === true) {
            return (
                <>
                <ul className="server-list">
                    {ServerList}
                        <li onClick={this.props.openModal} ><span><i className="fas fa-plus"></i></span></li>
                </ul>
                    <RoomContainer selectedRoom={this.state.selectedRoom} selectRoom={this.selectRoom} selectedServerId={this.props.selectedServer} />
                </>
            );
        }else {
            //  MAKE THIS PRIVATE MESSAING PORTION
            //  if (this.props.myServer && this.props.myServer.public === false)
            //  PrivateRoomContainer?
            return  (
                <ul className="server-list">
                    {ServerList}
                    <li onClick={this.props.openModal} ><span><i className="fas fa-plus"></i></span></li>
                </ul>
            );
        }
    }
}

export default server;