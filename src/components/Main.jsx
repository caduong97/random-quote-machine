import React, { Component } from 'react';
import axios from 'axios';

import QuoteBox from './QuoteBox'
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  

            colors: ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"],
            colorToDisplay: '',

            quotes: [],
            quoteToDisplay: {}
            
        };

        this.random = this.random.bind(this);
    }


    componentDidMount() {
        

        const dataUrl = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

        axios.get(dataUrl)
            .catch(error => console.log("BAD", error))
            .then(res => {
                const quotesData = res.data.quotes.map(obj => obj);
                this.setState({ 
                    quotes: quotesData
                });

                this.random();

            });

        

    }


    
    random = () => {
        //generate random color
        let ran1 = Math.floor(Math.random() * this.state.colors.length)
        
        let color = this.state.colors[ran1];

        this.setState({
            colorToDisplay: color
        });

        //generate random quote
        let ran2 = Math.floor(Math.random() * this.state.quotes.length)

        let randomQuote = this.state.quotes[ran2];

        this.setState({
            quoteToDisplay: randomQuote
        });

        console.log(this.state.quoteToDisplay);
   
    }


    render() {
        
        return (

            <div className="row main" style={{backgroundColor: this.state.colorToDisplay}}>
                <div className='col-lg-4'></div>
                <div className='col-lg-4'>
                    <QuoteBox 
                        color = {this.state.colorToDisplay}
                        random = {this.random}
                        randomQuote = {this.state.quoteToDisplay}
                    />
                </div>
            <div className='col-lg-4'></div>
    </div>
        );
    }
}

export default Main;