import { monthData, todayData } from './data.js';

const monthSvg = d3.select("svg.month");
const radiusScale = d3.scaleSqrt()
    .domain([0, 30000])
    .range([0, 50]);

const colorScale = d3.scaleSqrt()
    .domain([0, 30000])
    .range(["blue", "red"])


monthSvg
    .selectAll("circle")
    .data(monthData)
    .enter()
    .append("circle")
    .attr("cx", (d, i) => { return (i % 7) * 120 + 60 })
    .attr("cy", (d, i) => { return Math.floor(i / 7) * 100 + 60 })
    .attr("r", (d, i) => { return radiusScale(d) })
    .attr("fill", (d, i) => { return colorScale(d) })
