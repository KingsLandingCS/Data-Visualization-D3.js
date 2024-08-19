import { select, range, symbol } from 'd3';


const width = window.innerWidth;
const height = window.innerHeight;


const svg = d3
    .select('body')
    .append('svg')
    .attr('height', height)
    .attr('width', width);

svg
    .append("mask")
    .attr("id", "mask_front");


svg
    .select("#mask_front")
    .append("circle")
    .attr("cx", width / 2)
    .attr("cy", height / 2)
    .attr("r", 250)
    .attr("fill", "white")


const m = 100;
svg
    .append("g")
    .selectAll("rect")
    .data(range(m))
    .join('rect')
    .attr('y', (d) => d * 20)
    .attr('width', width)
    .attr('height', 10)
    .attr('mask', 'url(#mask_front)');


svg
    .append("mask")
    .attr("id", "mask_back")


svg
    .select("#mask_back")
    .append("rect")
    .attr("height", height)
    .attr("width", width)
    .attr("fill", "white");


svg
    .select("#mask_back")
    .append("circle")
    .attr("cx", width / 2)
    .attr("cy", height / 2)
    .attr("fill", "black")
    .attr("r", 250)


svg
    .selectAll("rect.vertical")
    .data(range(m))
    .join("rect")
    .attr("x", (d) => d * 20)
    .attr("width", 10)
    .attr("height", height)
    .attr("mask", "url(#mask_back)")
    .attr("class", "vertical");