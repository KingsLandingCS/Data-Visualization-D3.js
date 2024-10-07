import { monthData, todayData } from './data.js';

const monthSvg = d3.select("svg.month");

monthSvg
    .selectAll("circle")
    .data(monthData)
    .enter()
    .append("circle")
    .attr("cx", (d, i) => { return (i % 7) * 120 + 60 })
    .attr("cy", (d, i) => { return Math.floor(i / 7) * 100 + 60 })
    .attr("r", (d, i) => { return 5 })
