/* ==========================================
   PORTFOLIO SCRIPT.JS
   Mahesh Kumar Portfolio
========================================== */

/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 1000);
});

/* ==========================================
   TYPING EFFECT
========================================== */

const roles = [
    "Kotlin Android Developer",
    "Full Stack Developer",
    "Mobile App Developer",
    "Web Application Developer",
    "Software Engineer"
];

const typingElement = document.getElementById("typing");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

if (typingElement) {
    typeEffect();
}

/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters =
    document.querySelectorAll(".counter");

const counterObserver =
    new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const counter = entry.target;

                const target =
                    +counter.getAttribute("data-target");

                let count = 0;

                const speed = target / 100;

                const updateCounter = () => {

                    if (count < target) {

                        count += speed;

                        counter.innerText =
                            Math.ceil(count);

                        requestAnimationFrame(updateCounter);

                    } else {

                        counter.innerText =
                            target + "+";
                    }
                };

                updateCounter();

                counterObserver.unobserve(counter);
            }
        });

    }, {
        threshold: 0.5
    });

counters.forEach(counter => {
    counterObserver.observe(counter);
});

/* ==========================================
   DARK / LIGHT MODE
========================================== */

const themeBtn =
    document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const icon =
        themeBtn.querySelector("i");

    if (
        document.body.classList.contains("light-mode")
    ) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        localStorage.setItem("theme", "light");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        localStorage.setItem("theme", "dark");
    }
});

if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light-mode");

    themeBtn.innerHTML =
        '<i class="fas fa-sun"></i>';
}

/* ==========================================
   MOBILE MENU
========================================== */

const hamburger =
    document.querySelector(".hamburger");

const navLinks =
    document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");
});

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");
        });
    });

/* ==========================================
   SCROLL PROGRESS BAR
========================================== */

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    document.getElementById(
        "progress-bar"
    ).style.width = progress + "%";
});



/* ==========================================
   PROJECT FILTERING
========================================== */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter =
            button.getAttribute("data-filter");

        projectCards.forEach(card => {

            if (
                filter === "all" ||
                card.classList.contains(filter)
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";
            }
        });
    });
});

/* ==========================================
   AOS ANIMATION
========================================== */

AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

/* ==========================================
   PARTICLES.JS
========================================== */

particlesJS("particles-js", {

    particles: {

        number: {
            value: 80
        },

        color: {
            value: "#00e5ff"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: 3
        },

        line_linked: {

            enable: true,

            distance: 150,

            color: "#00e5ff",

            opacity: 0.4,

            width: 1
        },

        move: {

            enable: true,

            speed: 2,

            direction: "none",

            random: false,

            straight: false
        }
    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {
                enable: true,
                mode: "repulse"
            },

            onclick: {
                enable: true,
                mode: "push"
            }
        }
    },

    retina_detect: true
});

/* ==========================================
   EMAILJS
========================================== */

/*
==============================================
IMPORTANT

Replace:

YOUR_PUBLIC_KEY
YOUR_SERVICE_ID
YOUR_TEMPLATE_ID

with your EmailJS credentials

https://www.emailjs.com/
==============================================
*/

const submitBtn = document.querySelector("#contact-form button[type='submit']");
let lastSubmitTime = 0;

emailjs.init("hSbaxDXHxny0nHtri");

const contactForm =
    document.getElementById("contact-form");

contactForm.addEventListener("submit", e => {

    e.preventDefault();

    const now = Date.now();

    // 🔒 Spam protection (10 sec rule)
    if (now - lastSubmitTime < 10000) {
        showToast("Wait 10 seconds before sending again!");
        return;
    }

    lastSubmitTime = now;

    const name =
        contactForm.querySelector('input[type="text"]').value;

    const email =
        contactForm.querySelector('input[type="email"]').value;

    const message =
        contactForm.querySelector("textarea").value;

    // 🔥 Loader start
    submitBtn.innerText = "Sending...";
    submitBtn.disabled = true;

    emailjs.send(
        "service_4mkq18z",
        "template_uqanmqa",
        {
            name: name,
            email: email,
            message: message
        }
    )
    .then(() => {

        showToast("Message Sent Successfully! 🚀");
        contactForm.reset();

    })
    .catch(error => {

        console.error("EmailJS Error:", error);
        showToast("Failed to send message ❌");
    })
    .finally(() => {

        // 🔥 Loader stop
        submitBtn.innerText = "Send Message";
        submitBtn.disabled = false;
    });

});


function showToast(message) {
    let toast = document.getElementById("toast");

    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        document.body.appendChild(toast);

        toast.style.cssText = `
            position:fixed;
            bottom:30px;
            left:50%;
            transform:translateX(-50%);
            background:#00e5ff;
            color:#000;
            padding:12px 20px;
            border-radius:10px;
            font-weight:600;
            z-index:99999;
            opacity:0;
            transition:0.3s;
        `;
    }

    toast.innerText = message;
    toast.style.opacity = "1";

    setTimeout(() => {
        toast.style.opacity = "0";
    }, 2500);
}

/* ==========================================
   ACTIVE NAV LINK ON SCROLL
========================================== */

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
        ) {
            current =
                section.getAttribute("id");
        }
    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.classList.add("active");
        }
    });
});

/* ==========================================
   SMOOTH REVEAL ANIMATION
========================================== */

const revealElements =
    document.querySelectorAll(
        ".skill-card,.project-card,.glass-card,.counter-card"
    );

const revealObserver =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";
            }
        });

    }, {
        threshold: 0.2
    });

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(40px)";

    element.style.transition =
        "all 0.8s ease";

    revealObserver.observe(element);
});

/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const backToTop =
    document.createElement("button");

backToTop.innerHTML =
    '<i class="fas fa-arrow-up"></i>';

backToTop.id = "backToTop";

document.body.appendChild(backToTop);

backToTop.style.cssText = `
position:fixed;
right:20px;
bottom:20px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#00e5ff;
color:#000;
cursor:pointer;
display:none;
z-index:9999;
font-size:18px;
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"
    });
});

/* ==========================================
   END
========================================== */