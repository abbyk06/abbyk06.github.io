document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        {
            title: "uOttawa Course Visualizer",
            description: "Interactive course visualizer for CSI and MAT courses at uOttawa.",
            thumb: "project-files/courseViz.png",
            type: "image",
            tags: ["HTML", "CSS"],
            links: [
                { label: "GitHub", url: "https://github.com/abbyk06/courseViz" },
                { label: "Link", url: "https://course-viz.vercel.app/" }
            ]
        },
        {
            title: "PowerShell Script Collection",
            description: "Scripts to moniter CPU & memory usage and machine's network activity.",
            thumb: "project-files/__.png",
            type: "image",
            tags: ["PowerShell"],
            links: [
                { label: "GitHub", url: "https://github.com/abbyk06/powershell-scripts" }
            ]
        },
        {
            title: "Hotel Database Management",
            description: "Hotel management system for managing hotels, rooms, employees, customers, and bookings.",
            thumb: "project-files/hotel.png",
            type: "image",
            tags: ["Java", "JSP", "PostgreSQL ", "Apache Tomcat", "Maven"],
            links: [
                { label: "GitHub", url: "https://github.com/Paiges5678/E-Hotel" }
            ]
        },
        {
            title: "Custom Font Maker",
            description: "Turns handwriting or images into a custom font.",
            thumb: "project-files/cust-font.png",
            type: "image",
            tags: ["Javascript", "HTML", "CSS"],
            links: [
                { label: "GitHub", url: "https://github.com/abbyk06/custom-font" },
                { label: "Link", url: "https://custom-font-chi.vercel.app/" }
            ]
        },

    ];

    const list = document.getElementById("project-list");

    projects.forEach(p => {
        const thumb = p.type === "video"
            ? `<video autoplay muted loop><source src="${p.thumb}" type="video/webm"></video>`
            : `<img src="${p.thumb}" alt="${p.title}" style="width:100%;height:100%;object-fit:cover;border-radius:8px;">`;

        const tags = (p.tags ?? []).map(t =>
            `<span class="project-tag">${t}</span>`
        ).join("");

        const links = p.links.map(l =>
            `<a href="${l.url}" target="_blank">${l.label}</a>`
        ).join("");

        list.innerHTML += `
            <div class="project-item">
                <div class="project-thumb">${thumb}</div>
                <div class="project-info">
                    <strong>${p.title}</strong>
                    <p>${p.description}</p>
                    <div class="project-tags">${tags}</div>
                    <div class="project-links">${links}</div>
                </div>
            </div>
        `;
    });
});