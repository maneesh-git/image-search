import React from 'react';

class SearchBar extends React.Component {
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    //The above function can be replaced using a single line as the following in input field
    //    <input type="text" onChange={(event) => console.log(event.target.value)}> 

    state = { term : ''};
    
    // By default the form submits on Enter or the browser automatically submits the form
    // and the window is refreshed. So empty input fields are shown in the form.
    // We override it here so it prevents that.
    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.onSubmit(this.state.term);
    };

    render () {
        return (
            <div className="ui segment">
                <form onSubmit={ this.onFormSubmit } className="ui form">
                    <div className="field">
                        <label>Image Search </label>
                        <input 
                            type="text" 
                            value = {this.state.term} 
                            onChange={e=> this.setState( { term : e.target.value } ) } 
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;