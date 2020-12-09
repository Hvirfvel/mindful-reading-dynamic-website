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

// Searchbar desktop med jQuery
/* let searchDesktop = document.getElementById("searchbar-nav");
let searchInput = document.querySelector("#searchbar input")

searchDesktop.addEventListener("click", showSearchInput);

function showSearchInput() {
    searchDesktop.classList.add("show");
    searchInput.classList.add("show");
} */

// #######################//////////////
let searchBtn = document.getElementById("submit");
/* let searchBarClicked; */

searchBtn.addEventListener("click", toggleSearch);






function toggleSearch() {
    
    /* searchBarClicked = true; */

    $('#searchbar').each(function() {
        $(this).replaceWith($('<form>' + this.innerHTML + '</form>'));
      });
      $('#submit').attr("type", "submit").addClass("active");
      $('#header form').attr("id", "searchbar").addClass("active");
      $('#searchbar input').addClass("active");

      $('#main-menu').addClass("hide");
      $('#header-logo').addClass("hide");
      console.log("hej"); 

            //Hide elements
    
    const outsideClicklistener = (event) => {
        /* console.log(searchBarClicked);  */
        var $target = $(event.target);
        /* searchBarClicked = false; */
        if(!$target.closest('#searchbar').length && 
        $('#searchbar input').is(":visible")) {
            
            /* if (!searchBarClicked) { */
                $('#searchbar').removeClass("active");
                $('#searchbar input').removeClass("active"  );
                $('#submit').attr("type", "button").removeClass("active");
                $('#main-menu').removeClass("hide");
                $('#header-logo').removeClass("hide");
    
                $('#header form').each(function() {
                    $(this).replaceWith($('<div id="searchbar">' + this.innerHTML + '</div>'));
                });
            /* } */
            removeDocClickListener();
        }
    }; 
    
    console.log("hu")

    const removeDocClickListener = () => {
        document.removeEventListener("click", outsideClicklistener)
    }
     
    $(document).click(outsideClicklistener) 
};
///////////////////////////////
/* var searchBarClicked;

$(document).ready(function(){
    $("#searchbar-nav").click(function(){
        searchBarClicked = true;
        $("#searchbar").addClass("active");
        $("#searchbar input").addClass("active");
        $("#searchbar-nav").addClass("active");
        $("#searchbar-nav p").addClass("active");
        $("#searchbar button#submit").addClass("active");
    });
}); */
/////////////////////////////////

//jQuery to close on outside click
/* $(document).on('click', function (closeElement){
    if($(closeElement.target).closest("#searchbar").length == 0) {
        $("#searchbar").removeClass("active hide");
    }
}); */

/////////////////////////////////////
//js solution
/* let searchContainer = document.getElementById('searchbar');
let searchInput = document.querySelector("#searchbar input");
let searchNav = document.getElementById("searchbar-nav");
let searchNavP = document.querySelector("#searchbar-nav p");
let searchBtn = document.querySelector("#searchbar button#submit");

var allInSearch = [searchContainer, searchInput, searchNav, searchNavP, searchBtn];

document.addEventListener('click', hideElement);

function hideElement(event) {
    console.log(searchBarClicked);
    
            if (!searchBarClicked) { 
                
                for (var i = 0; i < allInSearch.length; i++) {
                    var isClickInside = allInSearch[i].contains(event.target);
                
                    
                
                        if (!isClickInside) {
                            allInSearch[i].classList.remove("active");
                        }
            }
  }
  searchBarClicked = false;
} */
//////////////////////////////////


/* document.addEventListener('click', function(event) {
  var isClickInside = elementToClose.contains(event.target);

  if (!isClickInside) {
    elementToClose.classList.remove("active");
  }
}); */





/* Searchbar tablet/ mobile */
/* let searchInput = document.querySelector("#searchbar input"); */
/* let searchBtn = document.querySelector("#searchbar-nav");

searchInput.addEventListener("click", toggleSearchBtn);

function toggleSearchBtn() {
    searchBtn.classList.add("green-btn");
} */


//###########################
// Searchbar on max-width 960px
let windowSize = window.matchMedia("(max-width: 960px");

function searchSmallerMedia(windowSize) {
    if (windowSize.matches) {
        $('#searchbar').each(function() {
            $(this).replaceWith($('<form id="searchbar">' + this.innerHTML + '</form>'));
          });
        $('#submit').attr("type", "submit");

    }
}

windowSize.addListener(searchSmallerMedia);

searchSmallerMedia(windowSize);

//-----------------------------------------------------------------------
// Carousel book-section

const carouselSlide = document.querySelector('.book-section-slide');
const carouselBooks = document.querySelectorAll('.one-book');

// Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Clone of first 5 books -firstClone
for (let i = 4; i >= 0; i--) {
    var cloneFirst5 = carouselBooks[i].cloneNode(true);
    cloneFirst5.classList.add("one-book");
    cloneFirst5.classList.add("first-5-clone");
    carouselBooks[9].after(cloneFirst5);
}

// Clone of first 5 books -firstClone
for (let j = 5; j <= 9; j++) {
    var cloneLast5 = carouselBooks[j].cloneNode(true);
    cloneLast5.classList.add("one-book");
    cloneLast5.classList.add("last-5-clone");
    carouselBooks[0].before(cloneLast5);
}

// Counter
let counter = 5;
console.log(counter)
const size = carouselBooks[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button listeners

nextBtn.addEventListener('click', () => {
    if(counter >= carouselSlide.children.length - 5) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter += 5;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    console.log(counter + " next")
});

prevBtn.addEventListener('click', () => {
    if(counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter -= 5;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    console.log(counter + " prev")
});

carouselSlide.addEventListener('transitionend', () => {
    if(counter === 0) {
        carouselSlide.style.transition = 'none';
        counter = carouselBooks.length;
        console.log(counter);
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(counter === carouselSlide.children.length - 5) {
        carouselSlide.style.transition = 'none';
        console.log(carouselBooks.length + "length")
        counter = counter - carouselBooks.length;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

