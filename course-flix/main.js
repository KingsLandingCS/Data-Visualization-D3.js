// const headerTag = document.querySelector("h1");

// headerTag.innerHTML = "Hello Zubi!";
// headerTag.style.backgroundColor = "var(--primary-orange)";
// headerTag.style.fontSize = "64px";

// const headerTags = document.querySelectorAll("h1");

// headerTags.forEach((h1) => {

//     const hue = 360 * Math.random();
//     h1.style.backgroundColor = "hsl(" + hue + ", 100%, 50%)";

// })

// headerTags.forEach((h1, index) => {
//     h1.innerHTML = "This is tag number " + index;
// })



// const rectTags = document.querySelectorAll("rect");



// rectTags.forEach((tag, i) => {

//     // const width = 100 + 300 * i;
//     const width = data[i];
//     tag.setAttribute("width", width + "px");
// })



const data = [550, 420, 731, 420];

const todaySvg = document.querySelector("svg");

data.forEach((d, i) => {

    const rectTag = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rectTag.setAttribute("x", "20");
    rectTag.setAttribute("y", "20");
    rectTag.setAttribute("width", "200");
    rectTag.setAttribute("height", "40");


    todaySvg.append(rectTag);
})