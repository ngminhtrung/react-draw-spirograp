import React, { Component } from 'react';
import {
    select as d3Select,
    path as d3Path,
    easeLinear as d3EaseLinear,
} from 'd3';

class Spirograph extends Component {
    constructor(props) {
        super(props);
        this.createSpirographInside = this.createSpirographInside.bind(this);
        this.createSvgPath = this.createSvgPath.bind(this);
        this.createSpirograph = this.createSpirograph.bind(this);
    }

    componentDidMount() {
        this.createSpirograph(this.props);
    }

    shouldComponentUpdate(nextProps, nextState) {

        const reducer = (value1, value2) => (value1 || value2);

        const isPropsChanged = 
                Object.keys(nextProps)
                    .filter(state => state !== "backgroundColor")
                    .map(state => {
                        if (nextProps[state] === this.props[state]) { return true;}
                        else { return false}
                    })
                    .reduce(reducer);

        return isPropsChanged;

    }

    componentDidUpdate(nexProps, nextState, snapshot) {
        this.createSpirograph(nexProps);
    }

    render() {
        return <g className="chart" >
            <g/>
        </g>;
    }

    createSpirographOutside(fixedCircleRadius, k, holeOffsetDistance) {
        const tau = 2 * Math.PI; // http://tauday.com/tau-manifesto
        let path = d3Path();
        let R = fixedCircleRadius;
        let r = R / k;
        let p = holeOffsetDistance;

        for (var i = 0; i < 1.0001; i += 0.001) {
            let t = i * tau;
            let nextPoint = {
                x: (R + r) * Math.cos(t) - p * Math.cos(((R + r) / r) * t),
                y: (R + r) * Math.sin(t) - p * Math.sin(((R + r) / r) * t)
            };

            (path.toString() === "") ? path.moveTo(nextPoint.x, nextPoint.y) : path.lineTo(nextPoint.x, nextPoint.y);
        }

        return path;
    };

    createSpirographInside(fixedCircleRadius, k, holeOffsetDistance) {
        const tau = 2 * Math.PI; // http://tauday.com/tau-manifesto
        let path = d3Path();
        let R = fixedCircleRadius;
        let r = R / k;
        let ρ = holeOffsetDistance;

        for (var i = 0; i < 1.0001; i += 0.001) {
            let t = i * tau;
            let nextPoint = {
                x: (R - r) * Math.cos(t) + ρ * Math.cos(((R - r) / r) * t),
                y: (R - r) * Math.sin(t) - ρ * Math.sin(((R - r) / r) * t)
            };

            (path.toString() === "") ? path.moveTo(nextPoint.x, nextPoint.y) : path.lineTo(nextPoint.x, nextPoint.y);
        }

        return path;
    }

    createSvgPath(size, strokeColor) {
        const centerPoint = {
            x: size.width / 2,
            y: size.height / 2
        }
        let svg;
        let svgPath;

        d3Select(".graph").remove();

        svg = d3Select(".chart")
            .append("g")
            .attr("class", "graph")
            .attr("transform", `translate(${centerPoint.x}, ${centerPoint.y})`)

        svgPath = svg.append("path")
            .attr("class", "drawing-arc")
            .style("stroke", strokeColor)
            .style("stroke-width", "2px")
            .style("fill", "none");
        return svgPath;

    }

    createSpirograph(config) {
        let path;
        let svgPath;
        let totalLength;
        const size = {
            width: 600,
            height: 600
        };

        svgPath = this.createSvgPath(size, config.color);

        path = this.createSpirographInside(
            100,
            config.ratio,
            config.holeOffsetDistance);

        let myArc;

        myArc = svgPath
            .attr("d", path.toString())

        totalLength = myArc.node().getTotalLength();

        myArc
            .style("stroke-dasharray", `${totalLength} ${totalLength}`)
            .style("stroke-dashoffset", totalLength)
            .transition()
            .duration(config.animationDuration)
            .ease(d3EaseLinear)
            .style("stroke-dashoffset", 0)
    }
}

export default Spirograph;