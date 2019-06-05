import React from 'react';
import ServerOptionsContainer from '../../components/server/server_options_container';
import JoinServerContainer from '../../components/server/join_server_container';
import CreateServerContainer from '../../components/server/create_server_container';

class ServerModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected: 0 };
        this.selectContainer = this.selectContainer.bind(this);
    }

    // GO BACK would be 0
    // Create is 1
    // Join is 2
    selectContainer(num){
        return e => {
            this.setState({selected: num});
        };
    }


    render() {
        let shiftClass = "containerShifted1";
        if(this.state.selected!==0){
            shiftClass = "containerShifted2";
        }


        return (
            <div id="serverModalMain">
                <div id="mainServerContainer" className={shiftClass} >
                    <ServerOptionsContainer selectedContainer={this.state.selected} selectContainer={this.selectContainer} />
                    <CreateServerContainer selectedContainer={this.state.selected} selectContainer={this.selectContainer} />
                    <JoinServerContainer selectedContainer={this.state.selected} selectContainer={this.selectContainer} />
                </div>
            </div>
        );
    }
}

export default ServerModal;