/* ==========================================
   TYPING ANIMATION
========================================== */

const typingElement = document.getElementById("typing");

const words = [
    "Full Stack Developer",
    "Competitive Programmer",
    "C++ Programmer",
    "Problem Solver",
    "Open Source Learner"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex === words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);

}

typeEffect();

/* ==========================================
   DARK / LIGHT MODE
========================================== */

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("light-theme")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        localStorage.setItem("theme", "light");

    }

    else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        localStorage.setItem("theme", "dark");

    }

});

/* ==========================================
   LOAD SAVED THEME
========================================== */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-theme");

    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

}

/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 350) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==========================================
   NAVBAR SHADOW
========================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 8px 20px rgba(0,0,0,.35)";

    }

    else {

        navbar.style.boxShadow = "none";

    }

});

/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(

    ".card, .timeline-item, .skill, .project-card, .profile-card, .contact-grid div"

);

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform =
                "translateY(0)";

        }

    });

},

{

    threshold: 0.2

}

);

revealElements.forEach(el => {

    el.style.opacity = "0";

    el.style.transform = "translateY(40px)";

    el.style.transition = ".7s";

    observer.observe(el);

});

/* ==========================================
   ACTIVE NAVIGATION LINK
========================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

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

/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(

            button.clientWidth,

            button.clientHeight

        );

        const radius = diameter / 2;

        circle.style.width = circle.style.height =
            `${diameter}px`;

        circle.style.left =
            `${e.clientX - button.offsetLeft - radius}px`;

        circle.style.top =
            `${e.clientY - button.offsetTop - radius}px`;

        circle.classList.add("ripple");

        const ripple = button.getElementsByClassName("ripple")[0];

        if (ripple) {

            ripple.remove();

        }

        button.appendChild(circle);

    });

});

/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log(
"Welcome to Parveen Kumar's Portfolio 🚀"
);