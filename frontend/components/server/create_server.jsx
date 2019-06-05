import React from 'react';

class CreateServer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", disabled: true};
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    handleBack(){
        this.props.closeModal();
        this.props.openOptionsServerModal();
    }

    onChangeHandler(e){
        if (e.target.value === "") {
            this.setState({
                name: e.target.value,
                disabled: true
            });
        } else {
            this.setState({
                name: e.target.value,
                disabled: false
            });
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createServer(this.state).then(
            (res)=>{
                // debugger
                this.props.closeModal();
                // this.props.history.push(`/channel/${res.res.server.id}`);
            }
        );
    }

    render(){
        return (
        <div id="createServerDiv">
            <section>
                <div className="server-creat-title">CREATE YOUR SERVER</div>
                <div>By creating a server, you will have access to free text chat to use amongst your friends.</div>
                <div id="server-preview" >{firstChars(this.state.name)}</div>
            <form onSubmit={this.handleSubmit}>
                <ul>
                    <li> <label>Server Name</label></li>
                    <li> <input onChange={this.onChangeHandler} id="createInput" type="text" placeholder="Enter a server name" value={this.state.name} /></li>
                    <li><label> Server Region </label></li>
                            <li><div className="server-region" ><i className="fas fa-flag-usa"></i> US East</div></li>
                </ul>
                <ul className="create-bottom">
                    <li onClick={this.handleBack} ><i className="fas fa-arrow-left"></i> Back</li>
                    <li><input id="createServerSubmitButton" disabled={this.state.disabled} type="submit" value="Create" /></li>
                </ul>
            </form>
            </section>
        </div>
        )
    }
}

export default CreateServer;

const firstChars = (string) => {
    if(string===""){
        return " ";
    }
    const array = string.split(" ");
    let charStr = "";
    for (let index = 0; index < array.length; index++) {
        if (array[index][0]){
            charStr += array[index][0];
        }
    }
    return charStr;
}