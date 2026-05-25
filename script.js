    document.addEventListener("DOMContentLoaded", () => {
        // NAV INJECTION
        const depth = window.location.pathname.split('/').filter(Boolean).length;
        const prefix = depth <= 1 ? "" : "../".repeat(depth - 1);

        const isRoot = window.location.pathname.endsWith("index.html") || window.location.pathname === "/";

        const nav = document.createElement("nav");


        // email
        document.getElementById('email-link').addEventListener('click', function(e) {
            e.preventDefault();
            navigator.clipboard.writeText('abigail.kim@uottawa.ca').then(() => {
                this.textContent = 'Copied!';
                setTimeout(() => this.textContent = 'Email', 2000);
            });
        });
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

    setTimeout(() => {
        video.play();
    }, 1000);


    video.addEventListener("loadedmetadata", () => {
        if (video.currentTime === 0 && !video.played.length) return;
        video.currentTime = video.duration - 0.001;
        video.pause();
    });

    