// .createElementNS("http://www.w3.org/2000/svg", "svg");

// svg
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width", "960");
svg.setAttribute("height", "960");
document.body.appendChild(svg);

// second svg
const rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
rect.setAttribute("width", "100");
rect.setAttribute("height", "100");
svg.appendChild(rect);