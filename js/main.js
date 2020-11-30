// Hamburger menu

let menuToggle = document.querySelector("#menuToggle");
let menuContainer = document.querySelector("#dropdown-container");

menuToggle.addEventListener("click", toggleHamburger);

function toggleHamburger() {
    menuToggle.classList.toggle("change");
    menuContainer.classList.toggle("show");
}

// Categories dropdown
let categoriesBtn = document.querySelector("#dropdown-categories .dropbtn");
let categoriesMenu = document.querySelector("#categories-ul");

categoriesBtn.addEventListener("click", toggleCategories);

function toggleCategories() {
    categoriesMenu.classList.toggle("show");
}

// Carousel

/* var slides = document.querySelectorAll(".carousel-cell");
var buttons = document.querySelectorAll("#slide-nav-auto .btn");
var currentSlide = 1; */

// Manual navigation
/* var manualNav = function(manual) {
    slides.forEach((carousel-cell) => {
        carousel-cell.classList.remove("active");

        buttons.forEach((btn) => {
            carousel-cell.classList.remove("active");
        });
    });

    slides[manual].classList.add("active");
    buttons[manual].classList.add("active");
}

buttons.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
}); */

/*Pseudokod
Bild 1 aktiv + knapp 1 aktiv
Klicka på knapp 2 = bild 2 + knapp 2 aktiv (remove aktiv från bild 1 o knapp 1)
*/
/* let slides = document.querySelectorAll(".carousel-cell");
let buttons = document.querySelectorAll("#slide-nav-auto.btn");
let currentSlide = 1;

function manualNav {
    
} */


