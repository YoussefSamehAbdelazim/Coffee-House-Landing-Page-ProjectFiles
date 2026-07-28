// ================= PRELOADER =================


window.addEventListener("load", () => {


    const preloader = document.querySelector(".preloader");


    setTimeout(() => {


        preloader.style.opacity = "0";


        setTimeout(() => {


            preloader.style.display = "none";


        }, 500);



    }, 800);



});






// ================= MOBILE MENU =================



const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector("nav");

const navLinks = document.querySelectorAll("nav ul li a");





menuBtn.addEventListener("click", () => {


    nav.classList.toggle("active");


    menuBtn.classList.toggle("active");


});





// Close Menu After Clicking Link


navLinks.forEach(link => {


    link.addEventListener("click", () => {


        nav.classList.remove("active");


    });



});







// ================= STICKY HEADER =================



const header = document.querySelector("header");





window.addEventListener("scroll", () => {



    if(window.scrollY > 100){


        header.classList.add("sticky");

    }

    else{


        header.classList.remove("sticky");


    }



});







// ================= BACK TO TOP =================



const backToTop = document.querySelector("#backToTop");





window.addEventListener("scroll", () => {



    if(window.scrollY > 400){


        backToTop.classList.add("show");


    }

    else{


        backToTop.classList.remove("show");


    }



});





backToTop.addEventListener("click", () => {


    window.scrollTo({


        top:0,


        behavior:"smooth"


    });



});






// ================= ACTIVE NAV LINK =================



const sections = document.querySelectorAll("section");





window.addEventListener("scroll", () => {



    let current = "";



    sections.forEach(section => {



        const sectionTop = section.offsetTop - 150;


        const sectionHeight = section.clientHeight;



        if(
            scrollY >= sectionTop &&
            scrollY < sectionTop + sectionHeight
        ){


            current = section.getAttribute("id");


        }



    });





    navLinks.forEach(link => {



        link.classList.remove("active");



        if(link.getAttribute("href") === "#" + current){


            link.classList.add("active");


        }



    });



});

/* ================= SWIPER REVIEWS ================= */


const swiper = new Swiper(".reviews-slider", {


    loop: true,


    grabCursor: true,


    spaceBetween: 30,


    autoplay: {


        delay: 3500,


        disableOnInteraction: false,


    },


    pagination: {


        el: ".swiper-pagination",


        clickable: true,


    },


    breakpoints: {


        0: {


            slidesPerView: 1,


        },


        600: {


            slidesPerView: 2,


        },


        992: {


            slidesPerView: 3,


        }



    }



});







// ================= SCROLL REVEAL =================



const revealElements = document.querySelectorAll(
    ".about-wrapper, .menu-card, .offer-box, .gallery-item, .review-card, .contact-box, .contact-form"
);





const revealOnScroll = () => {



    const windowHeight = window.innerHeight;



    revealElements.forEach(element => {



        const elementTop = element.getBoundingClientRect().top;



        if(elementTop < windowHeight - 100){



            element.classList.add("reveal");

            element.classList.add("active");



        }



    });



};





window.addEventListener(
    "scroll",
    revealOnScroll
);



window.addEventListener(
    "load",
    revealOnScroll
);








// ================= IMAGE LAZY LOAD FALLBACK =================



const images = document.querySelectorAll("img");



images.forEach(img => {



    img.addEventListener("error", () => {



        img.src = "images/default.jpg";



    });



});







// ================= CONTACT FORM =================



const contactForm = document.querySelector(".contact-form");





if(contactForm){



    contactForm.addEventListener("submit", (e)=>{



        e.preventDefault();



        alert(
            "Thank you! Your message has been sent successfully."
        );



        contactForm.reset();



    });



}







// ================= CURRENT YEAR =================



const year = document.querySelector(".footer-bottom p");



if(year){



    year.innerHTML =
    `© ${new Date().getFullYear()} Coffee House. All Rights Reserved.`;



}







// ================= PREVENT EMPTY LINKS =================



const emptyLinks = document.querySelectorAll(
    'a[href="#"]'
);



emptyLinks.forEach(link => {



    link.addEventListener("click", (e)=>{


        e.preventDefault();


    });



});
