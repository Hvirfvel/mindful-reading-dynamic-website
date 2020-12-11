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

//------------------------------------------------------------------------------------
// MQ
const mediaQuery = window.matchMedia("(min-width: 961px)")

mediaQuery.addEventListener('change', handleScreenChange);

function handleScreenChange(e) {
    if (e.matches) {

        // Carousel book-section ----------------
        const carouselSlide = document.querySelector('.book-section-slide');
        const carouselBooks = document.querySelectorAll('.one-book');

        const prevBtn = document.querySelector('#prevBtn');
        const nextBtn = document.querySelector('#nextBtn');

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

        // Search on click -------------

        const searchBtn = document.getElementById("submit");
        const searchbar = document.querySelector('#searchbar')

        searchBtn.addEventListener("click", toggleSearch);

        function toggleSearch() {
            $('#submit').toggleClass("active");
            $('#searchbar input').toggleClass("active");
            $('#searchbar').toggleClass("active");
            $('#header-logo').toggleClass("hide");

            //Hide elements
            document.addEventListener('click', outsideClick);
            function outsideClick(event) {
                if(event.target.closest('#searchbar')) return
                $('#searchbar').removeClass("active");
                $('#searchbar input').removeClass("active");
                $('#submit').removeClass("active");
                $('#header-logo').removeClass("hide");
                documentClick();
            } 
            function documentClick() {
                document.removeEventListener('click', outsideClick);
            }
        }

        //-----------------------------------------------------------------------
        // Categories popup

        const popupLink = document.querySelector('#browse-cat');
        const categoriesList = document.querySelector('#categories-list');
        const escapeBtn = document.querySelector('#escape-button');
        const readingSection = document.querySelector('#why-reading-section');

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

    }
    
}

handleScreenChange(mediaQuery);

