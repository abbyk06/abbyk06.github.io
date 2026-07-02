document.addEventListener("DOMContentLoaded", () => {
    // NAV INJECTION
    const depth = window.location.pathname.split('/').filter(Boolean).length;
    const prefix = depth <= 1 ? "" : "../".repeat(depth - 1);

    const isRoot = window.location.pathname.endsWith("index.html") || window.location.pathname === "/";

    const nav = document.createElement("nav");


    // email
    const emailLink = document.getElementById('email-link');
    if (emailLink) {
        emailLink.addEventListener('click', function(e) {
            e.preventDefault();
            navigator.clipboard.writeText('abigail.kim@uottawa.ca').then(() => {
                this.textContent = 'Copied!';
                setTimeout(() => this.textContent = 'Email', 2000);
            });
        });
    }


    // --- SCROLL HIGHLIGHTING: bolds the nav-item for the section in view ---
    // Now tracks the whole viewport (page scrolls normally) instead of an
    // inner .scroll-container, since the hero pushes content into normal flow.
    const sections = document.querySelectorAll(".content-section");
    const navItems = document.querySelectorAll(".nav-item");

    if (sections.length && navItems.length) {
        const sectionOptions = {
            root: null,
            rootMargin: "-100px 0px -60% 0px", // accounts for the sticky header height
            threshold: 0
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    navItems.forEach((item) => item.classList.remove("active"));

                    const id = entry.target.getAttribute("id");
                    document
                        .querySelectorAll(`.nav-item[href="#${id}"]`)
                        .forEach((link) => link.classList.add("active"));
                }
            });
        }, sectionOptions);

        sections.forEach((section) => sectionObserver.observe(section));
    }
    // --- END OF SCROLL HIGHLIGHTING LOGIC ---


    // --- HERO → STICKY NAV TRANSITION ---
    // Reveals the sticky header once the hero has scrolled (mostly) out of view.
    const hero = document.getElementById("hero");
    const stickyNav = document.getElementById("sticky-nav");

    if (hero && stickyNav) {
        const heroObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    stickyNav.classList.toggle("visible", !entry.isIntersecting);
                });
            },
            {
                root: null,
                threshold: 0,
                rootMargin: "-80% 0px 0px 0px" // flips once ~80% of the hero has scrolled by
            }
        );

        heroObserver.observe(hero);
    }
    // --- END OF HERO / STICKY NAV LOGIC ---
});

// CURSOR TRAIL
const trail = document.querySelector(".cursor-trail");
let mouseX = 0, mouseY = 0;
let trailX = 0, trailY = 0;
const ease = 0.06;

document.addEventListener("mousemove", (e) => {
    // If it's the first move, snap the trail to the mouse immediately
    if (trailX === 0 && trailY === 0) {
        trailX = e.clientX;
        trailY = e.clientY;
    }
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateTrail() {
    trailX += (mouseX - trailX) * ease;
    trailY += (mouseY - trailY) * ease;
    if (trail) {
        trail.style.left = trailX + "px";
        trail.style.top = trailY + "px";
    }
    requestAnimationFrame(animateTrail);
}
animateTrail();

// COLOR PICKER
const colors = [
    "235,208,5",   // yellow
    "275,5,204",   // pink
];

let colorIndex = 0;

function setTrailColor(rgb) {
    if (!trail) return;
    trail.style.background = `radial-gradient(
        circle,
        rgba(${rgb}, 0.8) 0%,
        rgba(${rgb}, 0.6) 15%,
        rgba(${rgb}, 0.4) 30%,
        rgba(${rgb}, 0.1) 60%,
        rgba(${rgb}, 0) 80%
    )`;
}

const paletteBtn = document.getElementById("palette-btn");
if (paletteBtn) {
    paletteBtn.addEventListener("click", () => {
        colorIndex = (colorIndex + 1) % colors.length;
        setTrailColor(colors[colorIndex]);
        localStorage.setItem("cursor-color", colors[colorIndex]);
    });
}

const saved = localStorage.getItem("cursor-color");
if (saved && colors.includes(saved)) {
    colorIndex = colors.indexOf(saved);
    setTrailColor(saved);
} else {
    setTrailColor(colors[0]);
}

const video = document.getElementById("name-video");

const forwardSrc = "index-photos/name-black.mp4";
const reverseSrc = "index-photos/name-reverse.mp4";

let duration = 0;
let isReversed = false;

video.addEventListener("loadedmetadata", () => {
    duration = video.duration;
});

video.addEventListener("mouseenter", () => {
    if (isReversed) return;

    const currentPos = video.currentTime;
    isReversed = true;

    video.src = reverseSrc;

    video.addEventListener("loadedmetadata", function sync() {
        video.currentTime = Math.max(0, duration - currentPos);
        video.play();
        video.removeEventListener("loadedmetadata", sync);
    });
});

video.addEventListener("mouseleave", () => {
    if (!isReversed) return;

    const currentPos = video.currentTime;
    isReversed = false;

    video.src = forwardSrc;

    video.addEventListener("loadedmetadata", function sync() {
        video.currentTime = Math.max(0, duration - currentPos);
        video.playbackRate = 1.25;
        video.play();
        video.removeEventListener("loadedmetadata", sync);
    });
});