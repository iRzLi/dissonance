import React from 'react';
import { merge } from 'lodash';
import { Link } from 'react-router-dom';

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
        let inputs = document.getElementsByTagName('input');
        let labels = document.getElementsByTagName('label');

        //SIGNUP
        if (this.props.formType==="Signup"){
            //IF FIELDS ARE FILLED OUT
            if(this.state.email && this.state.username && this.state.password){
                this.props.processForm(user);
                this.setState({
                    email: "",
                    username: "",
                    password: "",
                });
            }
            //NOT FILLED
            else {
                for (let i = 0; i < labels.length; i++) {
                    if(!inputs[i].value){
                        labels[i].classList.remove("inputlabel");
                        inputs[i].classList.remove("inputfield");
                        labels[i].classList.add("empty-submit-label");
                        inputs[i].classList.add("empty-submit-field");
                    }
                }
            }
        }
        //LOGIN
        else {
            //IF FIELDS ARE FILLED OUT
            if (this.state.email && this.state.password) {
                this.props.processForm(user);
                this.setState({
                    email: "",
                    password: "",
                });
            }
            //NOT FILLED
            else{
                for (let i = 0; i < labels.length; i++) {
                    if (!inputs[i].value) {
                        labels[i].classList.remove("inputlabel");
                        inputs[i].classList.remove("inputfield");
                        labels[i].classList.add("empty-submit-label");
                        inputs[i].classList.add("empty-submit-field");
                    }
                }
            }
        }
    }

    handleOnChange(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }

    render() {

        let text1 = null;
        let text2=null;

        if (this.props.formType==="Signup"){
            text1 = (
                <div className="form-header" >
                    <h1>Create an account</h1>
                </div>

            );
            text2 = <Link className="alternate" to="/login">Already have an account?</Link>
        }else{
            text1 = (
                <div className="form-header" >
                    <h1>Welcome back!</h1>
                    <span>We're so excited to see you again!</span>
                </div>

            );
            text2 = <div>Need an account? <Link className="alternate" to="/register">Register</Link></div>
        }



        let errors = this.props.errors.map((error,i) => {
            return <li key={i} >{error}</li>;
        });

        let usernamePart = null;
        if(this.props.formType==="Signup"){
            usernamePart = (
                <>
                    <label className="inputlabel">Username</label>
                    <br />
                    <input className="inputfield" type="text" pattern=".{2,}" title="2 characters minimum" value={this.state.username} onChange={this.handleOnChange("username")} />
                    
                </>
            );
        }

        return (
            <div className="form-div">
                <div className="form-flex">
                <div className="logo"><i className="fab fa-discord"></i> Dissonance</div>
                <form onSubmit={this.handleSubmit} >
                    <ul>{errors}</ul>
                    {text1}
                        <label className="inputlabel">Email  </label>
                        <br/>
                        <input className="inputfield" type="email"  value={this.state.email} onChange={this.handleOnChange("email")} />
                       
                    
                    
                    {usernamePart}
                        <label className="inputlabel">Password
                        </label>
                        <input className="inputfield" type="password" pattern=".{6,}"  title="6 characters minimum" value={this.state.password} onChange={this.handleOnChange("password")} />
                        <br />
                    
                    
                    
                    <input type="submit" value={this.props.formType} />
                        {text2}
                </form>
                </div>
            </div>
        )
    }
}

export default SessionForm;