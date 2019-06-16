import React, { Component } from 'react';
import SocialButton from './SocialButton'
import NewQuoteButton from './NewQuoteButton'


class QuoteBox extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div id="quote-box" className="quoteBox">
                <i className="fa fa-quote-left" style={{color: this.props.color, WebkitTransition: "1.5s", transition: "1.5s"}}></i>
                <span id="text" style={{color: this.props.color, WebkitTransition: "1.5s", transition: "1.5s"}}>{this.props.randomQuote.quote}</span>
                <div id="author" style={{color: this.props.color, WebkitTransition: "1.5s", transition: "1.5s"}}>- {this.props.randomQuote.author}</div>
                <SocialButton 
                    socialmedia="fab fa-twitter"
                    buttonColor= {this.props.color}
                    id = "tweet-quote"
                    linkTo = "https://twitter.com/intent/tweet"
                />
                <SocialButton 
                    socialmedia="fab fa-tumblr" 
                    buttonColor= {this.props.color}
                    id = ""
                    linkTo = "https://www.tumblr.com"
                />
                <NewQuoteButton 
                    color = {this.props.colors}
                    buttonColor= {this.props.color}
                    random = {this.props.random}
                />
            </div>
        );
    }
}

export default QuoteBox;