document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("panel-link")) {
            e.preventDefault();
            const key = e.target.dataset.panel;
            const data = panelData[key];
            if (!data) return;

            // get position of the clicked link
            const rect = e.target.getBoundingClientRect();

            const panel = document.getElementById("side-panel");
            const content = document.getElementById("panel-content");

            content.innerHTML = `
                <h2>${data.title}</h2>
                <p>${data.text}</p>
                ${data.images.map(src => `<img src="${src}" alt="">`).join("")}
            `;

            // position panel near the clicked word
            panel.style.top = rect.top - 60 + "px";

            panel.classList.add("open");
        }
    });

    document.getElementById("close-panel")?.addEventListener("click", closePanel);

    function closePanel() {
        document.getElementById("side-panel").classList.remove("open");
    }
});