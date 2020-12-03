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

// Searchbar desktop
let searchDesktop = document.getElementById("searchbar-nav");
let searchInput = document.querySelector("#searchbar input")

searchDesktop.addEventListener("click", showSearchInput);

function showSearchInput() {
    searchDesktop.classList.add("show");
    searchInput.classList.add("show");
}




