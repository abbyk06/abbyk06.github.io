const NAMESPACE = "abbyk06";
const KEY = "portfolio-likes";

async function loadLikes() {
    try {
        const res = await fetch(`https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}`);
        const data = await res.json();
        console.log("like load response:", data); // check this in devtools
        document.getElementById("like-count").textContent = data.count ?? 0;
    } catch (e) {
        console.error("load failed:", e);
        document.getElementById("like-count").textContent = "0";
    }
}

async function handleLike() {
    const btn = document.getElementById("like-btn");

    try {
        const res = await fetch(`https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/up`);
        const data = await res.json();
        document.getElementById("like-count").textContent = data.count;

        btn.textContent = "💞";
        btn.classList.add("pop");
        setTimeout(() => {
            btn.classList.remove("pop");
            btn.textContent = "💕";
        }, 500);
    } catch {
        console.error("Like failed");
    }
}

document.addEventListener("DOMContentLoaded", loadLikes);