document.addEventListener("DOMContentLoaded", () => {
    // NAV INJECTION
    const nav = document.createElement("nav");
    if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
        nav.innerHTML = `
            <button id="theme-toggle">
                <img src="index-photos/blackcat.png" alt="Toggle Theme">
            </button>
        `;
    } else {
        nav.innerHTML = `
            <a href="index.html">&#8249; back</a>
            <button id="theme-toggle">
                <img src="index-photos/blackcat.png" alt="Toggle Theme">
            </button>
        `;
    }
    document.body.insertBefore(nav, document.body.firstChild);

    // THEME TOGGLE
    const toggle = document.getElementById("theme-toggle");
    const icon = toggle.querySelector("img");

    // Helper: apply dark mode visuals (bird + cat icon)
    function applyDarkMode(isDark) {
        const birdFront = document.querySelector(".transform-front img");
        const birdBack  = document.querySelector(".transform-back img");
        if (isDark) {
            icon.src = "index-photos/whitecat.png";
            if (birdFront) birdFront.src = "index-photos/bird-white.png";
            if (birdBack)  birdBack.src  = "index-photos/asc-bird-white.png";
        } else {
            icon.src = "index-photos/blackcat.png";
            if (birdFront) birdFront.src = "index-photos/bird-black.png";
            if (birdBack)  birdBack.src  = "index-photos/asc-bird-black.png";
        }
        const playIcon = document.getElementById("play-icon");
        if (playIcon) {
            const isPaused = document.getElementById("bg-music").paused;
            playIcon.src = isDark
            ? (isPaused ? "index-photos/play-white.png" : "index-photos/pause-white.png")
            : (isPaused ? "index-photos/play-black.png" : "index-photos/pause-black.png");
        }
    }

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        applyDarkMode(true);
    }

    // apply on toggle click
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");

        icon.style.transform = "rotateY(90deg)";
        setTimeout(() => {
            applyDarkMode(isDark);
            icon.style.transform = "rotateY(0deg)";
        }, 150);

        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
});

// CURSOR TRAIL
const trail = document.querySelector(".cursor-trail");
let mouseX = 0, mouseY = 0;
let trailX = 0, trailY = 0;
const ease = 0.06;

document.addEventListener("mousemove", (e) => {
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

////music
function toggleMusic() {
    const music = document.getElementById('bg-music');
    const icon = document.getElementById('play-icon');
    const isDark = document.body.classList.contains("dark-mode");

    icon.classList.add("spinning")

    setTimeout(() => {
        if (music.paused) {
            music.play();
            icon.src = isDark ? "index-photos/pause-white.png" : "index-photos/pause-black.png";
        } else {
            music.pause();
            icon.src = isDark ? "index-photos/play-white.png" : "index-photos/play-black.png";
        }
        icon.classList.remove("spinning");
    }, 150);
}