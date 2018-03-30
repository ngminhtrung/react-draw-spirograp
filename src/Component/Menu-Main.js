import React, { Component } from 'react';

class MenuMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "lightyellow",
            ratio: 5,
            holeOffsetDistance: 70,
            color: "black",
            animationDuration: 1500
        };
        this.setConfig = this.setConfig.bind(this);
    }

    setConfig(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const newConfig = {...this.state};

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
                            defaultValue={this.state.backgroundColor} />

                        <label> Màu viền </label>
                        <input
                            type="color"
                            name="color"
                            defaultValue={this.state.color}
                        />
                        <label> Tốc độ vẽ </label>
                        <input
                            type="range"
                            min="0"
                            max="5000"
                            name="animationDuration"
                            defaultValue={this.state.animationDuration}
                        />
                        <label> Tỷ lệ </label>
                        <input
                            type="range"
                            min="10"
                            max="100"
                            name="ratio"
                            defaultValue={this.state.ratio}
                        />
                        <label> Offset </label>
                        <input
                            type="range"
                            min="10"
                            max="100"
                            name="holeOffsetDistance"
                            defaultValue={this.state.holeOffsetDistance}
                        />
                    </form>
                </div>
            </div>
        )
    }
};

export default MenuMain;
