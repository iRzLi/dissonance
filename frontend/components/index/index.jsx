import React from 'react';
import ServerContainer from '../server/server_container';
import RoomContainer from '../room/room_container';

class Index extends React.Component {
    constructor(props){
        super(props);
        if (this.props.user.server_ids.includes(parseInt(this.props.match.params.id))) {
            this.state = {
                mounted: false,
                selectedServer: this.props.match.id,
            };
        }else {
            this.state = {
                mounted: false,
                selectedServer: this.props.user.server_ids[0],
            };
        }
        this.selectServer = this.selectServer.bind(this);
    }

    selectServer(id) {
        return e => {
            this.setState({ 
                selectedServer: id,
            });
            console.log(id);
        };
    }

    componentDidMount(){
        this.props.requestCurrentUser(this.props.userId).then(
            () => {
                if (this.props.user.server_ids.includes(parseInt(this.props.match.params.id))){
                    this.setState({
                        mounted: true,
                        selectedServer: this.props.match.params.id,
                    },()=>{
                            this.props.requestServer(this.props.match.params.id);
                    });
                }
                else {
                    this.setState({mounted: true},()=>{
                        this.props.requestServer(this.props.user.server_ids[0]);
                    });
                }
                
            }
        );
    }


    render(){
        let serverList = null;
        if(this.state.mounted===true){
            console.log(this.state.selectedServer);
            return (
                <div id="index-page">
                    <ServerContainer 
                    selectServer={this.selectServer} 
                    userId={this.props.userId} 
                    />
                    <RoomContainer 
                        selectedServerId={this.state.selectedServer}
                     />
                </div>
            );
        }
        else{
            return (
                <div id="index-page">
                    Loading...
                </div>
            );

        }

    }
}

export default Index;