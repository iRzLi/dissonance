import React from 'react';
import { merge } from 'lodash';

class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = merge({}, this.state);
        this.props.processForm(user);
        this.setState({
            email:"",
            username: "",
            password: "",
        });
    }

    handleOnChange(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }

    render() {
        let errors = this.props.errors.map(error => {
            return <li>{error}</li>;
        });

        let usernamePart = null;
        if(this.props.formType==="Signup"){
            usernamePart = (
                <label>Username
                    <input type="text" value={this.state.username} onChange={this.handleOnChange("username")} />
                </label>
            );
        }

        return (
            <form onSubmit={this.handleSubmit} >
                <ul>{errors}</ul>
                <label>Email
                    <input type="text" value={this.state.email} onChange={this.handleOnChange("email")} />
                </label>

                {usernamePart}

                <label>Password
                    <input type="password" value={this.state.password} onChange={this.handleOnChange("password")} />
                </label>
                
                <input type="submit" value={this.props.formType} />
            </form>
        )
    }
}

export default SessionForm;