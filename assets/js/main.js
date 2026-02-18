document.addEventListener("DOMContentLoaded", function () {

    const animatedElements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    animatedElements.forEach(el => observer.observe(el));

});
document.addEventListener("DOMContentLoaded", function () {

    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".site-nav");

    if (toggle && nav) {
        toggle.addEventListener("click", function () {
            nav.classList.toggle("active");
        });
    }

});
document.addEventListener("DOMContentLoaded", function () {

    const header = document.getElementById("site-header");
    const hover = document.getElementById("nav-hover");
    const navLinks = document.querySelectorAll(".nav-pill li");
    const navPill = document.querySelector(".nav-pill");

    /* Scroll blur */
    window.addEventListener("scroll", function () {
        if (window.scrollY > 20) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    /* Sliding hover */
    navLinks.forEach(link => {

        link.addEventListener("mouseenter", function () {
            const rect = link.getBoundingClientRect();
            const parentRect = navPill.getBoundingClientRect();

            hover.style.width = rect.width + "px";
            hover.style.left = (rect.left - parentRect.left) + "px";
            hover.style.opacity = "1";
        });

    });

    /* Reset when leaving nav entirely */
    navPill.addEventListener("mouseleave", function () {
        hover.style.opacity = "0";
    });

});
document.addEventListener("DOMContentLoaded", function () {

    const header = document.getElementById("site-header");
    const hover = document.getElementById("nav-hover");
    const navLinks = document.querySelectorAll(".nav-pill li");
    const navPill = document.querySelector(".nav-pill");

    /* HEADER SCROLL */
    window.addEventListener("scroll", function () {
        if (window.scrollY > 20) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    /* NAV SLIDE */
    navLinks.forEach(link => {
        link.addEventListener("mouseenter", function () {
            const rect = link.getBoundingClientRect();
            const parentRect = navPill.getBoundingClientRect();

            hover.style.width = rect.width + "px";
            hover.style.left = (rect.left - parentRect.left) + "px";
            hover.style.opacity = "1";
        });
    });

    navPill.addEventListener("mouseleave", function () {
        hover.style.opacity = "0";
    });

    /* SCROLL REVEAL */
    const reveals = document.querySelectorAll(".reveal-on-scroll");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.2
    });

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });

});


