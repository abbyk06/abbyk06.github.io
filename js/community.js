document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        {
            title: "Senior Division Mentor @ Technovation",
            description: "Leading 2 teams of girls in building a mobile app and developping business plans to solve problems in their community.",
            thumb: "community-files/technovation.png",
            type: "image",
            links: [
                { label: "Link", url: "https://technovationchallenge.org/" }
            ]
        },
        {
            title: "Community Director @ uOttaHack",
            description: "Led the community team behind Ottawa's largest annual technology event to deliver over 20 events for 1,000+ people.",
            thumb: "community-files/uottahack.png",
            type: "image",
            links: [
                { label: "Link", url: "https://www.uottahack.ca/" }
            ]
        },
        {
            title: "Go Code Girl Instructor @ Faculty of Engineering",
            description: "Teaching coding & tech workshops to girls!",
            thumb: "community-files/outreach.png",
            type: "image",
            links: [
                { label: "Link", url: "https://www.uottawa.ca/faculty-engineering/events-all/go-code-girl" }
            ]
        },
    ];

    const list = document.getElementById("community-list");

    projects.forEach(p => {
        const thumb = p.type === "video"
            ? `<video autoplay muted loop><source src="${p.thumb}" type="video/webm"></video>`
            : `<img src="${p.thumb}" alt="${p.title}" style="width:100%;height:100%;object-fit:cover;border-radius:8px;">`;

        const links = p.links.map(l =>
            `<a href="${l.url}" target="_blank">${l.label}</a>`
        ).join("");

        list.innerHTML += `
            <div class="project-item">
                <div class="project-thumb">${thumb}</div>
                <div class="project-info">
                    <strong>${p.title}</strong>
                    <p>${p.description}</p>
                    <div class="project-links">${links}</div>
                </div>
            </div>
        `;
    });
});