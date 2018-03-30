import React, { Component } from 'react';
import Siprograph from './Siprograph';

class Drawing extends Component {
    render() {
        const style = {
            backgroundColor: this.props.config.backgroundColor
        }
        console.log(this.props.config)
        return (
            <div className="row" style={style}>
                <svg width="600" height="600">
                    <Siprograph 
                        ratio={this.props.config.ratio} 
                        holeOffsetDistance={this.props.config.holeOffsetDistance} 
                        color={this.props.config.color}
                        animationDuration={this.props.config.animationDuration} />
                </svg>
            </div>
        )
    }
}

export default Drawing;