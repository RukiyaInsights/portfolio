document.addEventListener("DOMContentLoaded", () => {

const heroText =
"Exploring Artificial Intelligence, Full-Stack Development, and Modern Web Technologies.";

let index = 0;
let isDeleting = false;

function typeLoop() {
    const el = document.getElementById("typing-text");
    if (!el) return;

    if (!isDeleting) {
        el.innerHTML = heroText.substring(0, index);
        index++;

        if (index > heroText.length) {
            isDeleting = true;
            setTimeout(typeLoop, 1500);
            return;
        }
    } else {
        el.innerHTML = heroText.substring(0, index);
        index--;

        if (index === 0) {
            isDeleting = false;
        }
    }

    setTimeout(typeLoop, isDeleting ? 40 : 70);
}

typeLoop();

const typeElements = document.querySelectorAll(".type-on-scroll");

const typeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting && !entry.target.classList.contains("done")) {

            const text = entry.target.getAttribute("data-text");
            let i = 0;

            entry.target.classList.add("done");
            entry.target.innerHTML = "";

            function type() {
                if (i < text.length) {
                    entry.target.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, 20);
                }
            }

            type();
        }
    });
}, { threshold: 0.5 });

typeElements.forEach(el => typeObserver.observe(el));

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".side-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (window.scrollY >= top - height / 3) {
            current = section.id;
        }
    });

    links.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function changeSlide() {

    if (slides.length === 0) return;

    slides[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add("active");
}

setInterval(changeSlide, 12000);

const skillSection = document.querySelector(".skills-section");
const fills = document.querySelectorAll(".fill");

const skillObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            fills.forEach(fill => {

                if (fill.classList.contains("html")) fill.style.width = "80%";
                else if (fill.classList.contains("css")) fill.style.width = "82%";
                else if (fill.classList.contains("js")) fill.style.width = "80%";
                else if (fill.classList.contains("php")) fill.style.width = "63%";
                else if (fill.classList.contains("python")) fill.style.width = "58%";
                else if (fill.classList.contains("ai")) fill.style.width = "50%";
                else fill.style.width = "0%";
            });

        } else {

            fills.forEach(fill => {
                fill.style.width = "0%";
            });
        }
    });

}, { threshold: 0.5 });

if (skillSection) {
    skillObserver.observe(skillSection);
}

window.toggleMenu = function () {
    document.getElementById("sideMenu").classList.toggle("open");
};

window.closeMenu = function () {
    document.getElementById("sideMenu").classList.remove("open");
};
const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealSections);
revealSections();

});
document.addEventListener("click", function(e){
    const menu = document.getElementById("sideMenu");
    const icon = document.querySelector(".menu-icon");

    if (!menu.contains(e.target) && !icon.contains(e.target)) {
        menu.classList.remove("open");
    }
});


window.addEventListener("load", () => {

    setTimeout(() => {

        const preloader = document.getElementById("preloader");

        preloader.style.transition = "opacity 1s ease";
        preloader.style.opacity = "1";

        setTimeout(() => {
            preloader.style.display = "none";
        }, 1000);

    }, 4500);

});
document.addEventListener("DOMContentLoaded", () => {

    const dot = document.querySelector(".cursor-dot");
    const outline = document.querySelector(".cursor-outline");

    if (!dot || !outline) return;

    window.addEventListener("mousemove", (e) => {

        const x = e.clientX;
        const y = e.clientY;

        dot.style.left = x + "px";
        dot.style.top = y + "px";

        outline.style.left = x + "px";
        outline.style.top = y + "px";
    });

});