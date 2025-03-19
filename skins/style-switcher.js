/* ======================= toggle style switcher =========== */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
// hide style - switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/* ======================= Theme Colors ======================= */
const alternateStyles = document.querySelectorAll(".alternate-style");  
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    })
}
/* ======================= theme light and dark mode ======================= */
const dayNightToggler = document.querySelector(".day-night");
dayNightToggler.addEventListener("click", () => {
    dayNightToggler.querySelector("i").classList.toggle("fa-sun");
    dayNightToggler.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNightToggler.querySelector("i").classList.add("fa-sun");
    } else {
        dayNightToggler.querySelector("i").classList.add("fa-moon");
    }
})


