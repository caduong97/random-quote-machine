import React, { Component } from 'react';
// import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';


class SocialButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
                <div>
                    <a id={this.props.id} href={this.props.linkTo} target="_blank" rel="noopener noreferrer">
                        <button  type="button" className="socialButton" style={{backgroundColor: this.props.buttonColor}}>
                            <i className={this.props.socialmedia}></i>
                        </button>
                    </a>
                </div>
            
        );
    }
}

export default SocialButton;