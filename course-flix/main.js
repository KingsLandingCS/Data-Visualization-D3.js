// const headerTag = document.querySelector("h1");

// headerTag.innerHTML = "Hello Zubi!";
// headerTag.style.backgroundColor = "var(--primary-orange)";
// headerTag.style.fontSize = "64px";

const headerTags = document.querySelectorAll("h1");

headerTags.forEach((h1) => {

    h1.style.backgroundColor = "#ffff00";
    h1.style.fontSize = "42px";
})