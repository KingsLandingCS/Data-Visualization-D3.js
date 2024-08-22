// const headerTag = document.querySelector("h1");

// headerTag.innerHTML = "Hello Zubi!";
// headerTag.style.backgroundColor = "var(--primary-orange)";
// headerTag.style.fontSize = "64px";

const headerTags = document.querySelectorAll("h1");

// headerTags.forEach((h1) => {

//     const hue = 360 * Math.random();
//     h1.style.backgroundColor = "hsl(" + hue + ", 100%, 50%)";

// })

headerTags.forEach((h1, index) => {
    h1.innerHTML = "This is tag number " + index;
})