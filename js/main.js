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

//-----------------------------------------------------------------------
// Search on click

let searchBtn = document.getElementById("submit");
const searchbar = document.querySelector('#searchbar')

searchBtn.addEventListener("click", toggleSearch);

function toggleSearch() {

    $('#searchbar').each(function() {
        $(this).replaceWith($('<form>' + this.innerHTML + '</form>'));
      });
      $('#submit').attr("type", "submit").addClass("active");
      $('#header form').attr("id", "searchbar").addClass("active");
      $('#searchbar input').addClass("active");

      $('#header-logo').addClass("hide");

    //Hide elements

    document.addEventListener('click', outsideClick);
    function outsideClick(event) {
        if(event.target.closest('#searchbar')) return
        $('#searchbar').removeClass("active");
        $('#searchbar input').removeClass("active"  );
        $('#submit').attr("type", "button").removeClass("active");
        $('#header-logo').removeClass("hide");

        $('#header form').each(function() {
            $(this).replaceWith($('<div id="searchbar">' + this.innerHTML + '</div>'));
        });
        /* location.reload(); */
    };
};

//-----------------------------------------------------------------------
// Search on click tidigare lösning

/* let searchBtn = document.getElementById("submit");

searchBtn.addEventListener("click", toggleSearch);

function toggleSearch() {

    $('#searchbar').each(function() {
        $(this).replaceWith($('<form>' + this.innerHTML + '</form>'));
      });
      $('#submit').attr("type", "submit").addClass("active");
      $('#header form').attr("id", "searchbar").addClass("active");
      $('#searchbar input').addClass("active");

      $('#header-logo').addClass("hide");

    //Hide elements
    const outsideClicklistener = (event) => {
        var $target = $(event.target);
        if(!$target.closest('#searchbar').length && 
        $('#searchbar input').is(":visible")) {
            
                $('#searchbar').removeClass("active");
                $('#searchbar input').removeClass("active"  );
                $('#submit').attr("type", "button").removeClass("active");
                $('#header-logo').removeClass("hide");
    
                $('#header form').each(function() {
                    $(this).replaceWith($('<div id="searchbar">' + this.innerHTML + '</div>'));
                });
            removeDocClickListener();
        }
    }; 

    const removeDocClickListener = () => {
        document.removeEventListener("click", outsideClicklistener)
    }
     
    $(document).click(outsideClicklistener) 
}; */

//-----------------------------------------------------------------------
// Searchbar on tablet and mobile

const windowSize = window.matchMedia("(max-width: 960px");

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

// MQ
const mediaQuery = window.matchMedia("(min-width: 961px)")

function handleScreenChange(e) {
    if (e.matches) {

        // Clone first 5 books
        for (let i = 4; i >= 0; i--) {
            var cloneFirst5 = carouselBooks[i].cloneNode(true);
            cloneFirst5.classList.add("one-book");
            cloneFirst5.classList.add("first-5-clone");
            carouselBooks[9].after(cloneFirst5);
        }

        // Clone last 5 books
        for (let j = 5; j <= 9; j++) {
            var cloneLast5 = carouselBooks[j].cloneNode(true);
            cloneLast5.classList.add("one-book");
            cloneLast5.classList.add("last-5-clone");
            carouselBooks[0].before(cloneLast5);
        }

        // Counter
        let counter = 5;
        const size = carouselBooks[0].clientWidth;

        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

        //Button listeners
        nextBtn.addEventListener('click', () => {
            if(counter >= carouselSlide.children.length - 5) return;
            carouselSlide.style.transition = 'transform 0.4s ease-in-out';
            counter += 5;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        });

        prevBtn.addEventListener('click', () => {
            if(counter <= 0) return;
            carouselSlide.style.transition = 'transform 0.4s ease-in-out';
            counter -= 5;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        });

        carouselSlide.addEventListener('transitionend', () => {
            if(counter === 0) {
                carouselSlide.style.transition = 'none';
                counter = carouselBooks.length;
                carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
            }
            if(counter === carouselSlide.children.length - 5) {
                carouselSlide.style.transition = 'none';
                counter = counter - carouselBooks.length;
                carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
            }
        });
    }
    
}
mediaQuery.addListener(handleScreenChange)

handleScreenChange(mediaQuery)

//-----------------------------------------------------------------------
// Categories popup

let popupLink = document.querySelector('#browse-cat');
let categoriesList = document.querySelector('#categories-list');
let escapeBtn = document.querySelector('#escape-button');
let readingSection = document.querySelector('#why-reading-section');

popupLink.addEventListener('click', openCategories);
escapeBtn.addEventListener('click', closeCategories);

function openCategories() {
    popupLink.classList.add('hide');
    categoriesList.classList.add('active');
    readingSection.style.marginTop = '100px';
}

function closeCategories() {
    popupLink.classList.remove('hide');
    categoriesList.classList.remove('active');
    readingSection.style.marginTop = '240px';
}