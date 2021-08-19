function drawer () {
    let navSelector = document.querySelector(".nav");
    navSelector.classList.toggle("toggle");
}
const hamburgerSelector = document.querySelector(".hamburger");
hamburgerSelector.addEventListener("click",drawer)