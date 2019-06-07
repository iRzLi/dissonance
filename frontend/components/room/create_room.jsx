import React from 'react';

class CreateRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "", 
            server_id: parseInt(this.props.location.pathname.split("/")[2]),
            blank: false,
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangeHandler(e) {
        this.setState({
            name: e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.name===""){
            this.setState({blank:true});
        }else{
            this.props.createRoom(this.state);
            this.props.closeModal();
   0     }
    }

    render() {
        let errors = null;
        if (this.state.blank===true){
            errors = <div id="createRoomError">This field is required</div>;
        }
        return (
            <div id="createRoomDiv">
                <div id="createRoomHeader">
                    <h2>create text room</h2>
                    <span>in Text Rooms</span>
                </div>
                <form onSubmit={this.handleSubmit}>
                <section id="createRoomBody">
                    <label>Room Type</label>
                    <div id="channelTypeText" >
                            <i className="fas fa-check-square"></i>
                            <i className="fas fa-hashtag"></i> 
                            <span>Text Room</span>
                    </div>
                    <label>Room Name</label>
                    <input id="channelNameInput" onChange={this.onChangeHandler} value={this.state.name}/>
                        {errors}
                </section>
                <div id="createRoomBottom">
                    <span onClick={this.props.closeModal} >Cancel</span>
                    <input type="submit" value="Create Room" />
                </div>

                </form>
            </div>
        )
    }
}

export default CreateRoom;
