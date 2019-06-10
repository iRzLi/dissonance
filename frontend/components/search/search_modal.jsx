import React from 'react';

class searchModal extends React.Component {
    constructor(props){
        super(props);
        this.state={searchString:""};
        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(e){
        this.setState({searchString: e.target.value})
    }

    render(){

        let foundUsers=null;
        if(this.state.searchString){
            foundUsers = this.props.users.map((user)=>{

            })
        }

        return (
            <div id="searchModal">
                <div>
                    <form>
                        <input onChange={this.onSearch} type="text" value={this.state.searchString}/>
                    </form>
                </div>
                <div id="searchResults">
                    <ul>
                        {foundUsers}
                    </ul>
                </div>
            </div>
        );
    }
}

export default searchModal;