const toggle = document.getElementById("theme-toggle");
const icon = toggle.querySelector("img"); // select the image inside the button

// Load saved preference
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    icon.src = "icons/whitecat.png"; // switch to white cat for dark mode
}

// Click to toggle
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Animate rotation
    icon.style.transform = "rotateY(90deg)";
    setTimeout(() => {
        icon.src = document.body.classList.contains("dark-mode") ? "icons/whitecat.png" : "icons/blackcat.png";
        icon.style.transform = "rotateY(0deg)";
    }, 150);

    // Save preference
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

