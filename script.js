    document.addEventListener("DOMContentLoaded", () => {
        // NAV INJECTION
        const depth = window.location.pathname.split('/').filter(Boolean).length;
        const prefix = depth <= 1 ? "" : "../".repeat(depth - 1);

        const isRoot = window.location.pathname.endsWith("index.html") || window.location.pathname === "/";

        const nav = document.createElement("nav");
        if (isRoot) {
            nav.innerHTML = `
                <button id="theme-toggle">
                    <img src="${prefix}index-photos/blackcat.png" alt="Toggle Theme">
                </button>
            `;
        } else {
            nav.innerHTML = `
                <a href="${prefix}index.html">&#8619; </a>
                <button id="theme-toggle">
                    <img src="${prefix}index-photos/blackcat.png" alt="Toggle Theme">
                </button>
            `;
        }
        document.body.insertBefore(nav, document.body.firstChild);

        const toggle = document.getElementById("theme-toggle");
        const icon = toggle.querySelector("img");

        function applyDarkMode(isDark) {
            const birdFront = document.querySelector(".transform-front img");
            const birdBack  = document.querySelector(".transform-back img");
            const kitty = document.querySelector(".peeking-kitty");
            const nameVideo = document.getElementById("name-video");

            if (isDark) {
                icon.src = `${prefix}index-photos/whitecat.png`;
                if (birdFront) birdFront.src = `${prefix}index-photos/bird-white.png`;
                if (birdBack)  birdBack.src  = `${prefix}index-photos/asc-bird-white.png`;
                if (kitty)     kitty.src     = `${prefix}index-photos/kitty-white.png`;
            } else {
                icon.src = `${prefix}index-photos/blackcat.png`;
                if (birdFront) birdFront.src = `${prefix}index-photos/bird-black.png`;
                if (birdBack)  birdBack.src  = `${prefix}index-photos/asc-bird-black.png`;
                if (kitty)     kitty.src     = `${prefix}index-photos/kitty-black.png`;
            }

            // Video swap — same logic for both directions
            if (nameVideo) {
                const newSrc = `${prefix}index-photos/${isDark ? "name-white" : "name-black"}.mp4`;
                nameVideo.pause();
                nameVideo.removeAttribute("src");
                nameVideo.load();
                nameVideo.src = newSrc;
                nameVideo.load();
                nameVideo.addEventListener("canplay", () => {
                    nameVideo.play();
                }, { once: true });
                nameVideo.addEventListener("ended", () => {
                    nameVideo.currentTime = nameVideo.duration - 0.001;
                    nameVideo.pause();
                }, { once: true });
            }

            const playIcon = document.getElementById("play-icon");
            if (playIcon) {
                const isPaused = document.getElementById("bg-music")?.paused ?? true;
                playIcon.src = isDark
                    ? (isPaused ? `${prefix}index-photos/play-white.png` : `${prefix}index-photos/pause-white.png`)
                    : (isPaused ? `${prefix}index-photos/play-black.png` : `${prefix}index-photos/pause-black.png`);
            }
        }

        // Apply on page load
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark-mode");
            applyDarkMode(true);
        }

        // Apply on toggle click
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
        "235,5,204",   // pink
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

    // MUSIC
    function toggleMusic() {
        const music = document.getElementById('bg-music');
        const icon = document.getElementById('play-icon');
        const isDark = document.body.classList.contains("dark-mode");

        icon.classList.add("spinning");

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

    const video = document.getElementById("name-video");

    setTimeout(() => {
        video.play();
    }, 1000);


    video.addEventListener("loadedmetadata", () => {
        if (video.currentTime === 0 && !video.played.length) return;
        video.currentTime = video.duration - 0.001;
        video.pause();
    });

    