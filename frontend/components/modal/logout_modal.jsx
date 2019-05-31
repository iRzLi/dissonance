import React from 'react';

class LogoutModal extends React.Component {
    constructor(props){
        super(props);
    }

    handleLogout(){
        this.props.logout().then(()=>{
            this.props.closeModal();
            this.props.history.push("/login");
        });
    }
    render(){
        return (
            <div className="logout-modal">
                <div className="modal-header">
                <h1>LOG OUT</h1>
                <h2>Are you sure you want to log out?</h2>
                </div>
                <div className="modal-buttons">
                    <span className="modal-cancel" onClick={this.props.closeModal}>Cancel</span>
                    <span className="modal-logout-button" onClick={()=>this.handleLogout()}>Log Out</span>
                </div>
            </div>
        );
    }
}

export default LogoutModal;