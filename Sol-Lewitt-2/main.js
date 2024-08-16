import { select, range } from 'd3';

// setting svg dimensions to browser dimension
const width = window.innerWidth;
const height = window.innerHeight;

// ----------CREATING SVG-----------
// (1) JS way
// const svg = document.createElementNS(
//   'http://www.w3.org/2000/svg',
//   'svg'
// );
// svg.setAttribute('width', width);
// svg.setAttribute('height', height);
// document.body.appendChild(svg);

// (2) D3 long way
// const svg = select('body').end('svg');
// svg.attr('width', width);
// svg.attr('height', height);

// (3) D3 short way (method-chaining)
const svg = d3
    .select('body')
    .append('svg')
    .attr('height', height)
    .attr('width', width);

// ---------CREATING FRONT MASK-----------
// (1) JS way
// const mask_front = document.createElementNS(
//   'http://www.w3.org/2000/svg',
//   'mask'
// );
// mask_front.setAttribute('id', 'mask_front');
// svg.appendChild(mask_front);

// (2) D3 way
svg
    .append("mask")
    .attr("id", "mask_front");

// -----------CREATING A CIRCLE IN FRONT MASK----------
// (1) JS way
// const circle_front = document.createElementNS(
//   'http://www.w3.org/2000/svg',
//   'circle'
// );
// circle_front.setAttribute('cx', width / 2);
// circle_front.setAttribute('cy', height / 2);
// circle_front.setAttribute('r', 250);
// circle_front.setAttribute('fill', 'white');
// mask_front.appendChild(circle_front);

// (2) D3 way
svg
    .select("#mask_front")
    .append("circle")
    .attr("cx", width / 2)
    .attr("cy", height / 2)
    .attr("r", 250)
    .attr("fill", "white")

// ----------CREATING HORIZONTAL BARS--------
// (1) JS way
// const m = 100;
// for (let i = 0; i < m; i++) {
//   const rect = document.createElementNS(
//     'http://www.w3.org/2000/svg',
//     'rect'
//   );
//   rect.setAttribute('y', 20 * i);
//   rect.setAttribute('width', 1000);
//   rect.setAttribute('height', 10);
//   rect.setAttribute('mask', 'url(#mask_front)');
//   svg.appendChild(rect);
// }

// (2) D3 long way
// const m = 100;
// const marks = [];

// for (let i = 0; i < m; i++) {
//   marks.push({
//     y: 20 * i,
//     width: width,
//     height: 10,
//     mask: 'url(#mask_front)',
//   });
// }

// svg
//   .selectAll('rect')
//   .data(marks)
//   .join('rect')
//   .attr('y', (d) => d.y)
//   .attr('width', (d) => d.width)
//   .attr('height', (d) => d.height)
//   .attr('mask', (d) => d.mask);

// (3) D3 short way
const m = 100;
svg
    // .selectAll('rect.horizontal') // calls class here
    .append("g")
    .selectAll("rect")
    .data(range(m))
    .join('rect')
    .attr('y', (d) => d * 20)
    .attr('width', width)
    .attr('height', 10)
    // .attr("class", "horizontal") // sets class here
    .attr('mask', 'url(#mask_front)');

// ---------CREATING BACK MASK ---------
// (1) JS way
// const mask_back = document.createElementNS(
//   'http://www.w3.org/2000/svg',
//   'mask'
// );
// mask_back.setAttribute('id', 'mask_back');
// svg.appendChild(mask_back);

// (2) D3 way
svg
    .append("mask")
    .attr("id", "mask_back")

// ---------CREATING A RECTANGLE ON BACK MASK---------
// (1) JS way
// const mask_back_rect = document.createElementNS(
//   'http://www.w3.org/2000/svg',
//   'rect'
// );
// mask_back_rect.setAttribute('width', width);
// mask_back_rect.setAttribute('height', height);
// mask_back_rect.setAttribute('fill', 'white');
// mask_back.appendChild(mask_back_rect);

// (2) D3 way
svg
    .select("#mask_back")
    .append("rect")
    .attr("height", height)
    .attr("width", width)
    .attr("fill", "white");

// ---------CREATING A CIRCLE ON BACK MASK--------
// (1) JS way
// const circle_back = document.createElementNS(
//   'http://www.w3.org/2000/svg',
//   'circle'
// );
// circle_back.setAttribute('cx', width / 2);
// circle_back.setAttribute('cy', height / 2);
// circle_back.setAttribute('r', 250);
// circle_back.setAttribute('fill', 'black');
// mask_back.appendChild(circle_back);

// (2) D3 way
svg
    .select("#mask_back")
    .append("circle")
    .attr("cx", width / 2)
    .attr("cy", height / 2)
    .attr("fill", "black")
    .attr("r", 250)

// --------CREATING VERTICAL BARS-----------
// (1) JS way
// const n = 100;
// for (let i = 0; i < n; i++) {
//   const rect = document.createElementNS(
//     'http://www.w3.org/2000/svg',
//     'rect'
//   );
//   rect.setAttribute('x', 20 * i);
//   rect.setAttribute('width', 10);
//   rect.setAttribute('height', 1000);
//   rect.setAttribute('mask', 'url(#mask_back)');
//   svg.appendChild(rect);
// }

// (2) D3 way
svg
    .selectAll("rect.vertical")
    .data(range(m))
    .join("rect")
    .attr("x", (d) => d * 20)
    .attr("width", 10)
    .attr("height", height)
    .attr("mask", "url(#mask_back)")
    .attr("class", "vertical");
