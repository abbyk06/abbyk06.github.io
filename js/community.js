
document.addEventListener("DOMContentLoaded", () => {
    const community = [
        {
            title: "Senior Division Mentor @ Technovation",
            description: "Led 2 teams of highschool girls in building a mobile app and developing business plans to solve problems in their community.",
            links: [
                {
                    label: "Link",
                    url: "https://technovationchallenge.org/"
                }
            ]
        },
        {
            title: "Community Director @ uOttaHack",
            description: "Led the community team behind Ottawa's largest annual technology event to deliver over 20 events for 1,000+ people.",
            links: [
                {
                    label: "Link",
                    url: "https://www.uottahack.ca/"
                }
            ]
        },
        {
            title: "Go Code Girl Instructor @ Faculty of Engineering",
            description: "Taught coding & tech workshops for girls!",
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
