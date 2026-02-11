const toggle = document.getElementById("theme-toggle");

// Load saved pref
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggle.textContent = "☀️";
}


toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Animate
    toggle.style.transform = "rotateY(90deg)";
    setTimeout(() => {
        toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
        toggle.style.transform = "rotateY(0deg)";
    }, 150);

    // Save pref
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});


///////////////////////////////////////////////////////////////
const trail = document.querySelector(".cursor-trail");

let mouseX = 0;
let mouseY = 0;

let trailX = 0;
let trailY = 0;
const ease = 0.06;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
    // Smooth glide
    trailX += (mouseX - trailX) * ease;
    trailY += (mouseY - trailY) * ease;

    trail.style.left = trailX + "px";
    trail.style.top = trailY + "px";

    requestAnimationFrame(animate);
}

animate();

