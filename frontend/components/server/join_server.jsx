import React from 'react';

class JoinServer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { link: "", disabled: true };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    handleBack() {
        this.props.closeModal();
        this.props.openOptionsServerModal();
    }

    onChangeHandler(e) {
        if (e.target.value === "") {
            this.setState({
                link: e.target.value,
                disabled: true
            });
        } else {
            this.setState({
                link: e.target.value,
                disabled: false
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let link = this.state.link.split("dissonance.join/")[1];
        this.props.joinServer(link).then(
            (res) => {
                this.props.closeModal();
            }
        );
    }

    render() {
        let errors = null;
        if(this.props.errors[0]){
            errors = <span id="serverErrors"> ({this.props.errors[0]}) </span>;
        }
        return (
            <div id="joinServerDiv">
                <section>
                    <div className="server-join-title">JOIN A SERVER</div>
                    <div>Enter an instant invite below to join an existing server. The invite will look something like this:</div>
                    <div id="link-example" >dissonance.join/WWTf4oGso9qmJVd8S0RBUQ</div>
                    <form onSubmit={this.handleSubmit}>
                        <ul>
                            <li> <input onChange={this.onChangeHandler} id="joinInput" type="text" value={this.state.link} /></li>
                            <li><label>Enter an instant invite{errors}</label></li>
                        </ul>
                        <ul className="join-bottom">
                            <li onClick={this.handleBack} ><i className="fas fa-arrow-left"></i> Back</li>
                            <li><input id="joinServerSubmitButton" disabled={this.state.disabled} type="submit" value="Join" /></li>
                        </ul>
                    </form>
                </section>
            </div>
        )
    }
}

export default JoinServer;
