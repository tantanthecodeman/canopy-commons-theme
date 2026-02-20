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
    const overlay = document.querySelector(".nav-overlay");

    if (!toggle || !nav || !overlay) return;

    toggle.addEventListener("click", function () {
        nav.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", function () {
        nav.classList.remove("active");
        overlay.classList.remove("active");
    });

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
const diagram = document.getElementById("interactive-diagram");
const outer = document.querySelector(".ring-outer");
const middle = document.querySelector(".ring-middle");
const inner = document.querySelector(".ring-inner");

if (diagram) {

    diagram.addEventListener("mousemove", (e) => {

        const rect = diagram.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        outer.style.transform = `rotate(${x * 40}deg)`;
        middle.style.transform = `rotate(${x * -60}deg)`;
        inner.style.transform = `rotate(${x * 80}deg)`;

    });

    diagram.addEventListener("mouseleave", () => {
        outer.style.transform = "";
        middle.style.transform = "";
        inner.style.transform = "";
    });
}

const revealElements = document.querySelectorAll(".reveal-on-scroll");

window.addEventListener("scroll", () => {
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});
const insight = document.querySelector(".insight-section");

if (insight) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                insight.classList.add("active");
            }
        });
    }, { threshold: 0.3 });

    observer.observe(insight);
}
document.addEventListener("DOMContentLoaded", function () {

    const steps = document.querySelectorAll(".timeline-step");

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach((entry, index) => {

            if (entry.isIntersecting) {

                setTimeout(() => {
                    entry.target.classList.add("active");
                }, index * 150);   // slight stagger

                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.35,          // wait until 35% visible
        rootMargin: "0px 0px -80px 0px"
    });

    steps.forEach(step => observer.observe(step));

});

document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".reveal-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("active");
                }, index * 120);
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));

});
document.addEventListener("DOMContentLoaded", function () {

    const resourceCards = document.querySelectorAll(".resource-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("active");
                }, index * 120);
            }
        });
    }, { threshold: 0.2 });

    resourceCards.forEach(card => observer.observe(card));

});
document.addEventListener("DOMContentLoaded", function () {

    const latestCards = document.querySelectorAll(".latest-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("active");
                }, index * 120);
            }
        });
    }, { threshold: 0.2 });

    latestCards.forEach(card => observer.observe(card));

});
const logoVariants = {
    blue: document.querySelector(".logo-blue"),
    pink: document.querySelector(".logo-pink"),
    yellow: document.querySelector(".logo-yellow"),
    white: document.querySelector(".logo-white")
};

function switchLogo(color) {
    Object.values(logoVariants).forEach(l => l.classList.remove("active"));
    logoVariants[color].classList.add("active");

    const wrapper = document.querySelector(".logo-wrapper");
    wrapper.classList.remove("rotate");
    void wrapper.offsetWidth;
    wrapper.classList.add("rotate");
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            if (entry.target.classList.contains("hero-section")) {
                switchLogo("blue");
            }

            if (entry.target.classList.contains("problem-section")) {
                switchLogo("pink");
            }

            if (entry.target.classList.contains("theory-section")) {
                switchLogo("yellow");
            }

            if (entry.target.classList.contains("footer")) {
                switchLogo("blue");
            }
        }
    });
}, { threshold: 0.6 });

document.querySelectorAll("section").forEach(section => {
    observer.observe(section);
});





