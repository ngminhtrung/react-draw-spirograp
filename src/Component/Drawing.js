import React, { Component } from 'react';
import Spirograph from './Spirograph';

class Drawing extends Component {
    render() {
        const style = {
            backgroundColor: this.props.config.backgroundColor
        }
        return (
            <div className="row" style={style}>
                <svg width="600" height="600">
                    <Spirograph 
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