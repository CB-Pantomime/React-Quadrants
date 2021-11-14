import React from 'react';
import { Ghost } from 'react-kawaii';
import { Component } from 'react';

class MyGhost extends Component {

    render(){
        return (
            <div className="section">
                <Ghost size={200} mood={this.props.mood} color="#E0E4E8" />
            </div>
        )
    }

}

export default MyGhost;

