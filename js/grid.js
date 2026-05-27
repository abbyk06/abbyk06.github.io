/**
 * Shared utility to build cards dynamically across all sections.
 * @param {string} containerId - The HTML element ID where cards will render.
 * @param {Array} dynamicData  - The data array containing titles, descriptions, images, etc.
 */
function renderContentGrid(containerId, dynamicData) {
    const listContainer = document.getElementById(containerId);
    if (!listContainer) {
        console.warn(`Grid Engine: Container target '#${containerId}' was not found on the page.`);
        return;
    }

    // Clear any temporary boilerplate placeholder content out safely
    listContainer.innerHTML = "";

    dynamicData.forEach(item => {
        // Construct the media asset thumbnail slot (supports both video and images)
        const thumbAsset = item.type === "video"
            ? `<video autoplay muted loop playsinline><source src="${item.thumb}" type="video/mp4"></video>`
            : `<img src="${item.thumb}" alt="${item.title || 'Thumbnail'}">`;

        // Map and parse out active external hyperlinks
        const actionLinks = item.links && item.links.length
            ? item.links.map(link => `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label}</a>`).join("")
            : "";

        // Build out layout block structures safely
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
}