import React from 'react';
import ServerContainer from '../server/server_container';

class Index extends React.Component {
    constructor(props){
        super(props);
        if (this.props.user.server_ids.includes(parseInt(this.props.match.params.serverId))) {
            this.state = {
                mounted: false,
                selectedServer: parseInt(this.props.match.params.serverId),
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
            this.setState({ selectedServer: id }, ()=>{
                if (parseInt(this.props.match.params.serverId) !== id) {
                    this.props.history.push(`/channel/${id}`);
                }
            });
        };
    }

    componentDidUpdate(prevProps){
        if (prevProps.match.params.serverId !== this.props.match.params.serverId){
            if (this.props.user.server_ids.includes(parseInt(this.props.match.params.serverId))){
                this.props.requestServer(parseInt(this.props.match.params.serverId)).then(
                    res => {
                        if(res.res.server.public === false){
                            this.props.requestPrivateRooms();
                        }
                    }
                );
                if (this.state.selectedServer !== this.props.match.params.serverId ){
                    this.setState({ selectedServer: parseInt(this.props.match.params.serverId)})
                }
            }else {
                this.setState({ selectedServer: this.props.user.server_ids[0] })
            }
        }
    }

    componentDidMount(){
        this.props.requestCurrentUser(this.props.userId).then(
            () => {
                if (this.props.user.server_ids.includes(parseInt(this.props.match.params.serverId))){
                    this.setState({
                        selectedServer: parseInt(this.props.match.params.serverId),
                    },()=>{
                            this.props.requestServer(parseInt(this.props.match.params.serverId)).then(
                                res => {
                                    if (res.res.server.public === false) {
                                        this.props.requestPrivateRooms();
                                    }
                                }
                            );
                    });
                }
                else {
                    this.props.requestServer(this.props.user.server_ids[0]).then(
                        res => {
                            if (res.res.server.public === false) {
                                this.props.requestPrivateRooms();
                            }else {
                                this.props.history.push(`/channel/${res.res.server.id}`);
                            }
                        }
                    );
                }
                
            }
        );
    }


    render(){
        // if(this.state.mounted===true){
            return (
                <div id="index-page">
                    <ServerContainer
                    selectServer={this.selectServer} 
                    userId={this.props.userId} 
                    selectedServer={this.state.selectedServer}
                    />
                </div>
            );
        // }
        // else{
        //     return (
        //         <div id="index-page">
        //         </div>
        //     );

        // }

    }
}

export default Index;