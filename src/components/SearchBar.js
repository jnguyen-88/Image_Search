import React from 'react';




class SearchBar extends React.Component {
    state = { term: '' };


    // use arrow function to have 'this' point to SearchBar class.
    // having a regular function expression will leave 'this' as undefined
    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.runSubmit(this.state.term)
    };

    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={(e) => {this.setState({ term: e.target.value })}}
                        />
                    </div>
                </form>
            </div>
        ) 
    };
};

export default SearchBar;