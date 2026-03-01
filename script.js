document.addEventListener("DOMContentLoaded", () => {
    // NAV INJECTION
    const nav = document.createElement("nav");
    if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
        nav.innerHTML = `
            <button id="theme-toggle">
                <img src="icons/blackcat.png" alt="Toggle Theme">
            </button>
        `;
    } else {
        nav.innerHTML = `
            <a href="index.html">&#8249; back</a>
            <button id="theme-toggle">
                <img src="icons/blackcat.png" alt="Toggle Theme">
            </button>
        `;
    }
    document.body.insertBefore(nav, document.body.firstChild);

    // THEME TOGGLE
    const toggle = document.getElementById("theme-toggle");
    const icon = toggle.querySelector("img");
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        icon.src = "icons/whitecat.png";
    }
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        icon.style.transform = "rotateY(90deg)";
        setTimeout(() => {
            icon.src = document.body.classList.contains("dark-mode")
                ? "icons/whitecat.png"
                : "icons/blackcat.png";
            icon.style.transform = "rotateY(0deg)";
        }, 150);
        localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
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
    const btn = document.getElementById('play-btn');
    if (music.paused) {
        music.play();
        btn.textContent = '⏸';
    } else {
        music.pause();
        btn.textContent = '▶';
    }
}