import {
    path as d3Path,
    select as d3Select
} from 'd3';

const createSpirograph = {
    inside: createSpirographInside,
    outside: createSpirographOutside
};

const tau = Math.PI * 2;
const size = {
    width: 600,
    height: 600
};

const fixedCircleRadius = size.width / 2 - 60;
cosnt dotRadius = 3;
const centerPoint = {
    x: size.width /2,
    y: size.height /2
}
let svg;

svg = d3Select(".drawing").append("svg")
        .attr("width", size.width)
        .attr("height", size.height)
        .attr("fill", "black")
        .append("g")
        .attr("transform", `translate(${centerPoint.x}, ${centerPoint.y})`);


function createSpirographInside(fixedCircleRadius, k, holeOffsetDistance) {
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
};

function createSpirographOutside(fixedCircleRadius, k, holeOffsetDistance) {
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