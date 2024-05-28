/*

NIGHT MODE

*/

const body = document.getElementById("body");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const text = document.getElementById("text");
const nav = document.getElementById("nav");

function nightModeToggle() {

    body.classList.toggle("night");
    sun.classList.toggle("night");
    moon.classList.toggle("night");
    text.classList.toggle("night");
    nav.classList.toggle("night");

    const isNightMode = body.classList.contains("night");
    localStorage.setItem("nightMode", isNightMode);
}

const isNightMode = localStorage.getItem("nightMode") === "true";
if (isNightMode) {
    body.classList.add("night");
    sun.classList.add("night");
    moon.classList.add("night");
    text.classList.add("night");
    nav.classList.add("night");
}

/*

DROPDOWNS

*/

function toggleDropdown2D() {
    document.getElementById("dropdown").classList.toggle("drop");
}