import { monthData, todayData } from './data.js';

const monthSvg = d3.select("svg.month");

monthSvg
    .selectAll("circle")
    .data(monthData)
    .enter()
    .append("circle")
    .attr("cx", (d, i) => { return i * 20 + 20 })
    .attr("cy", (d, i) => { return 40 })
    .attr("r", (d, i) => { return 5 })
