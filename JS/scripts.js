
//Allows carousel scroll behavior
let currentIndex = 0;

function moveLeft() {
    const cards = document.querySelector('.cards');
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = cards.children.length - 3;
    }
    updateCarousel(cards);
}

function moveRight() {
    const cards = document.querySelector('.cards');
    if (currentIndex < cards.children.length - 3) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel(cards);
}

function updateCarousel(cards) {
    const cardWidth = cards.children[0].offsetWidth;
    cards.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}


//Offset for section scrolls
const navHeight = document.querySelector('.navBar').offsetHeight;
document.documentElement.style.setProperty('--scroll-padding', navHeight + "px");



//Active link scroll behavior in the navbar
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150; // Adjust offset for fixed nav height
            if (scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });
});


//Display submit message once submit button is clicked for the contact form
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");
    const message = document.getElementById("message");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Display the message
        message.classList.remove("hidden");

        //clear the form fields
        form.reset();
    });
});


//Display submit message once submit button is clicked for the footer subscribe form
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("subscribeFooter");
    const message = document.getElementById("messageFooter");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Display the message
        message.classList.remove("hidden");

        //clear the form fields
        form.reset();
    });
});

//Display submit message once submit button is clicked for the hero subscribe form
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("subscribeHero");
    const message = document.getElementById("messageHero");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Display the message
        message.classList.remove("hidden");

        //clear the form fields
        form.reset();
    });
});


