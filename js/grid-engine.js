
// Initialize a global namespace registry for your individual page contents
window.PortfolioData = window.PortfolioData || {};

/**
 * Render simple text-based content lists.
 **/
window.renderContentGrid = function(containerId, dynamicData) {
    const listContainer = document.getElementById(containerId);
    if (!listContainer) return;

    listContainer.innerHTML = "";

    dynamicData.forEach(item => {
        const actionLinks = item.links && item.links.length
            ? `
                <div class="project-links">
                    ${item.links.map(link => `
                        <a href="${link.url}" target="_blank" rel="noopener noreferrer">
                            ${link.label}
                        </a>
                    `).join(" · ")}
                </div>
            `
            : "";

        const itemMarkup = `
            <div class="list-item">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                ${actionLinks}
            </div>
        `;

        listContainer.insertAdjacentHTML("beforeend", itemMarkup);
    });
};

// Render content once the DOM has loaded
document.addEventListener("DOMContentLoaded", () => {
    if (window.PortfolioData.work) {
        window.renderContentGrid("work-list", window.PortfolioData.work);
    }

    if (window.PortfolioData.projects) {
        window.renderContentGrid("project-list", window.PortfolioData.projects);
    }

    if (window.PortfolioData.community) {
        window.renderContentGrid("community-list", window.PortfolioData.community);
    }
});
