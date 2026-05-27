// Initialize a global namespace registry for your individual page contents
window.PortfolioData = window.PortfolioData || {};

/**
 * Common layout rendering block
 */
window.renderContentGrid = function(containerId, dynamicData) {
    const listContainer = document.getElementById(containerId);
    if (!listContainer) return;

    listContainer.innerHTML = "";

    dynamicData.forEach(item => {
        const thumbAsset = item.type === "video"
            ? `<video autoplay muted loop playsinline><source src="${item.thumb}" type="video/mp4"></video>`
            : `<img src="${item.thumb}" alt="${item.title || 'Thumbnail'}" style="width:100%;height:100%;object-fit:cover;border-radius:8px;">`;

        const actionLinks = item.links && item.links.length
            ? item.links.map(link => `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label}</a>`).join("")
            : "";

        const itemMarkup = `
            <div class="project-item">
                <div class="project-thumb">${thumbAsset}</div>
                <div class="project-info">
                    <strong>${item.title}</strong>
                    <p>${item.description}</p>
                    ${actionLinks ? `<div class="project-links">${actionLinks}</div>` : ''}
                </div>
            </div>
        `;
        listContainer.insertAdjacentHTML('beforeend', itemMarkup);
    });
};

// Fire a single unified processing task as soon as the DOM tree construction has finalized
document.addEventListener("DOMContentLoaded", () => {
    // If the data script loaded before this script mounted, run immediately
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