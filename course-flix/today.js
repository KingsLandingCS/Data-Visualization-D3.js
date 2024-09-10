const todayData = [20, 30, 50, 6, 4, 2, 5, 20, 24, 32,
    40, 59, 68, 89, 100, 112, 109, 101,
    78, 56, 32, 31, 12, 1];


const todaySvg = d3.select("svg");
const rectTags = d3.selectAll("rect");

rectTags
    .data(todayData)
    .attr("width", (d, i) => { return d })
    .attr("y", (d, i) => { return 50 * i })
    .attr("x", 0)
    .arrt("height", 40)