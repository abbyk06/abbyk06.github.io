
document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        {
            title : "Ticket Triage System",
            description : "Ruby on Rails web app for searching ticket keywords and identifying the appropriate person to assign the tickets to, containerized with Docker.",
            tags: ["Ruby on Rails", "Docker", "HTML", "CSS"],
            links:[
                {label: "Github", url : "https://github.com/abbyk06/servicedesk_triage"}
            ]
        },
        {
            title: "uOttawa Course Visualizer",
            description: "Interactive course visualizer for CSI and MAT courses at uOttawa.",
            tags: ["HTML", "CSS"],
            links: [
                { label: "GitHub", url: "https://github.com/abbyk06/courseViz" },
                { label: "Link", url: "https://course-viz.vercel.app/" }
            ]
        },
        {
            title: "PowerShell Script Collection",
            description: "Scripts to monitor CPU & memory usage and machine's network activity.",
            tags: ["PowerShell"],
            links: [
                { label: "GitHub", url: "https://github.com/abbyk06/powershell-scripts" }
            ]
        },
        {
            title: "Hotel Database Management",
            description: "Hotel management system for managing hotels, rooms, employees, customers, and bookings.",
            tags: ["Java", "JSP", "PostgreSQL", "Apache Tomcat", "Maven"],
            links: [
                { label: "GitHub", url: "https://github.com/Paiges5678/E-Hotel" }
            ]
        },
        {
            title: "Custom Font Maker",
            description: "Turns handwriting or images into a custom font.",
            tags: ["JavaScript", "HTML", "CSS"],
            links: [
                { label: "GitHub", url: "https://github.com/abbyk06/custom-font" },
                { label: "Link", url: "https://custom-font-chi.vercel.app/" }
            ]
        }
    ];

    const list = document.getElementById("project-list");

    if (!list) return;

    projects.forEach(p => {
        const tags = (p.tags ?? [])
            .map(tag => `<span class="project-tag">${tag}</span>`)
            .join(" ");

        const links = (p.links ?? [])
            .map(link =>
                `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label}</a>`
            )
            .join(" · ");

        list.insertAdjacentHTML("beforeend", `
            <div class="list-item">
                <h3>${p.title}</h3>
                <p>${p.description}</p>

                ${tags
                    ? `<div class="project-tags">${tags}</div>`
                    : ""
                }

                ${links
                    ? `<div class="project-links">${links}</div>`
                    : ""
                }
            </div>
        `);
    });
});

