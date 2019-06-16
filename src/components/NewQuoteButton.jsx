import React, { Component } from 'react';

class NewQuoteButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  
        };
    }

    
        
    render() {
        return (
            <div>
                <button type="button" id="new-quote" className="newQuote" onClick={this.props.random} style={{backgroundColor: this.props.buttonColor}}>New quote</button>
            </div>
        );
    }
}

export default NewQuoteButton;