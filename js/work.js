document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        {
            title: "Workshop Coordinator & Instructor | Center for Entrepreneurship and Engineering Design",
            description: "Managing and instructing 80+ workshops for 1,200+ participants on the digital technologies offered in our MakerSpace.",
            thumb: "work-files/mspace.png",
            type: "image",
            links: [
                { label: "Link", url: "https://www.uottawa.ca/faculty-engineering/centre-entrepreneurship-engineering-design/facilities/richard-labbe-makerspace" }
            ]
        },
        {
            title: "Instructor | Engineering Outreach",
            description: "Taught STEM workshops to 500+ students across Ontario.",
            thumb: "work-files/outreach.png",
            type: "image",
            links: [
                { label: "Link", url: "https://www.uottawa.ca/faculty-engineering/outreach/about" }
            ]
        },
        
    ];

    const list = document.getElementById("project-list");

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