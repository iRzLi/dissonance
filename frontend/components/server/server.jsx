import React from 'react';
import RoomContainer from '../room/room_container';
import SearchContainer from '../search/search_container';

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
        if (prevProps.match.params.serverId !== this.props.match.params.serverId) {
            this.setState({ selectedRoom: null});
        }
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
                    return (
                        <div className="home-server" key={i}>
                            <li className="server-li-ele" id="selected-server" key={server.id} onClick={this.props.selectServer(server.id)} >
                                <div className="selected-content" ><i className="fab fa-discord"></i></div>
                                <div className="selected-shifting-div"></div>
                                <div className="home-border"></div>
                            </li>
                        </div>)
                }else{
                    return (
                        <div className="home-server" key={i}>
                            <li className="server-li-ele" key={server.id} onClick={this.props.selectServer(server.id)} >
                                <div className="server-content"><i className="fab fa-discord"></i></div>
                                <div className="shifting-div"></div>
                                <div className="home-border"></div>
                            </li>
                        </div>
                    )
                }
            }
            else{
                //  all servers that are not the private server
                if (this.props.selectedServer === server.id){
                    return <li className="server-li-ele" id="selected-server" key={server.id} onClick={this.props.selectServer(server.id)} >
                        <div className="selected-content">{firstChars(server.name)}</div>
                        <div className="selected-shifting-div"></div>
                        </li>
                }else{
                    return <li className="server-li-ele" key={server.id} onClick={this.props.selectServer(server.id)} >
                        <div className="server-content">{firstChars(server.name)}</div>
                        <div className="shifting-div"></div>
                        </li>
                }
            }
        });


        //  renders here
        if (this.props.myServer && this.props.myServer.public === true) {
            return (
                <>
                <div className="server-list-div">
                <ul className="server-list">
                    {ServerList}
                            <li className="server-list-options" onClick={this.props.openModal} >
                                <div className="server-content"><i className="fas fa-plus"></i></div>
                                <div className="shifting-div"></div>
                            </li>
                </ul>
                </div>
                    <RoomContainer selectedRoom={this.state.selectedRoom} selectRoom={this.selectRoom} selectedServerId={this.props.selectedServer} />
                </>
            );
        }else {
            //  MAKE THIS PRIVATE MESSAING PORTION
            //  if (this.props.myServer && this.props.myServer.public === false)
            //  PrivateRoomContainer?
            /****
             * 
             * Make another container here that has props
             * that include all users within the selected server
             * users can create a dm room in that container/component
             * also have the id for the private server so you can redirect them
             * 
             * -----------------
             * 
             * Allow for users to search through users 
             * through username and username number
             * 
             */
            return  (
                <>
                    <div className="server-list-div">
                        <ul className="server-list">
                            {ServerList}
                            <li className="server-list-options" onClick={this.props.openModal} >
                                <div className="server-content"><i className="fas fa-plus"></i></div>
                                <div className="shifting-div"></div>
                            </li>
                        </ul>
                    </div>
                <SearchContainer privateServer={this.props.myServer} />
                </>
            );
        }
    }
}

export default server;

const firstChars = (string)=>{
    const array = string.split(" ");
    let charStr = "";
    for (let index = 0; index < array.length; index++) {
        charStr += array[index][0];
    }
    return charStr;
}