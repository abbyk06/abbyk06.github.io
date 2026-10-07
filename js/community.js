
document.addEventListener("DOMContentLoaded", () => {
    const community = [
        {
            title: "VP Events @ Cybersecurity Club",
            description: "Planned cybersecurity events & workshops.",
            links: [
                {
                    label: "Link",
                    url: "https://uocybersec.com/"
                }
            ]
        },
        {
            title: "Senior Division Mentor @ Technovation",
            description: "Mentored 2 teams of highschool girls in building a mobile app.",
            links: [
                {
                    label: "Link",
                    url: "https://technovationchallenge.org/"
                }
            ]
        },
        {
            title: "Community Director @ uOttaHack",
            description: "Led the community team behind Ottawa's largest techn event to deliver 20+ events for 1,000+ people.",
            links: [
                {
                    label: "Link",
                    url: "https://www.uottahack.ca/"
                }
            ]
        },
        {
            title: "Go Code Girl Instructor @ Faculty of Engineering",
            description: "Taught coding & tech workshops for girls.",
            links: [
                {
                    label: "Link",
                    url: "https://www.uottawa.ca/faculty-engineering/events-all/go-code-girl"
                }
            ]
        }
    ];

    const list = document.getElementById("community-list");

    if (!list) return;

    community.forEach(item => {
        const links = (item.links ?? [])
            .map(link =>
                `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label}</a>`
            )
            .join(" · ");

        list.insertAdjacentHTML("beforeend", `
            <div class="list-item">
                <h3>${item.title}</h3>
                <p>${item.description}</p>

                ${links
                    ? `<div class="project-links">${links}</div>`
                    : ""
                }
            </div>
        `);
    });
});
