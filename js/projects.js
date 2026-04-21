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
            title: "MP4 Editor",
            description: "Python script to add threshold and color invert to MP4 videos with custom black and white options.",
            thumb: "project-files/mp4converter.png",
            type: "image",
            tags:["Python"],
            links: [
                { label: "GitHub", url: "https://github.com/abbyk06/mp4thresholder" }
            ]
        },
        {
            title: "TouchDesigner #1",
            description: "Canada Day fireworks reconstructed and overlaid as a 3D particle system, displaced by brightness. Built using TOP to SOP; converted 2D video texture into 3D point geometry.",
            thumb: "project-files/touchdesigner1.webm",
            type: "video",
            tags:["Touch Designer"],
            links: []
        },
        {
            title: "Comment Data Analysis",
            description: "Bot detection analysis on Reddit comment data in a Jupyter Notebook with Python. Built to detect automated content using behavioral and linguistic features.",
            thumb: "project-files/deadinternet.png",
            type: "image",
            tags:["Python"],
            links: [
                { label: "GitHub", url: "https://github.com/abbyk06/DeadInternet" }
            ]
        }
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