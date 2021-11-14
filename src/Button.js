import React from 'react';
import { Component } from 'react';

class Button extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return (
            <section className="section">
                <button onClick={this.props.changeToTrue}>Click dat</button>
            </section>
        )
    }
    
}

export default Button;