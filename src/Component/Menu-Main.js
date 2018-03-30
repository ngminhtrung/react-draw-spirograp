import React, { Component } from 'react';

class MenuMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'lightyellow',
            color: 'black',
            ratio: 10,
            holeOffsetDistance: 50,
            animationDuration: 1000
        };
        this.setConfig = this.setConfig.bind(this);
    }

    setConfig(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const newConfig = {
            backgroundColor: this.state.backgroundColor,
            color: this.state.color,
            ratio: this.state.ratio,
            holeOffsetDistance: this.state.holeOffsetDistance,
            animationDuration: this.state.animationDuration
        }
        return (
            <div className="row orange">
                <div className="two wide column">
                    <button
                        className="ui button"
                        onClick={() => this.props.onGeneralConfigChange(newConfig)}>
                        <i className="pencil alternate icon"></i>Vẽ
                    </button>
                </div>
                <div className="fourteen wide centered column">
                    <form onChange={this.setConfig}>
                        <label> Mầu nền </label>
                        <input
                            type="color"
                            name="backgroundColor"
                            value={this.state.backgroundColor} />

                        <label> Màu viền </label>
                        <input
                            type="color"
                            name="color"
                            value={this.state.color}
                        />
                        <label> Tốc độ vẽ </label>
                        <input
                            type="range"
                            min="0"
                            max="5000"
                            name="animationDuration"
                            value={this.state.animationDuration}
                        />
                        <label> Tỷ lệ </label>
                        <input
                            type="range"
                            min="10"
                            max="100"
                            name="ratio"
                            value={this.state.ratio}
                        />
                        <label> Offset </label>
                        <input
                            type="range"
                            min="10"
                            max="100"
                            name="holeOffsetDistance"
                            value={this.state.holeOffsetDistance}
                        />
                    </form>
                </div>
            </div>
        )
    }
};

export default MenuMain;
