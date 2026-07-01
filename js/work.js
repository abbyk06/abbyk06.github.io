window.PortfolioData = window.PortfolioData || {};

window.PortfolioData.work = [
        {
        title: "IT Analyst @ the Royal College of Physicians and Surgeons of Canada",
        description: "Managing IT systems and provisioning end-user support across a 500+ person org. Handling technical asset mapping, and deploying endpoints secured via Microsoft Intune, Entra ID, and TPM encryption.",
        thumb: "work-files/RC.jpg",
        type: "image",
        links: [
            { label: "Link", url: "https://www.royalcollege.ca/" }
        ]
    },
    {
        title: "Workshop Coordinator & Instructor @ the Center for Entrepreneurship and Engineering Design",
        description: "Managing and instructing 80+ workshops for 1,200+ participants on the digital technologies offered in our MakerSpace.",
        thumb: "work-files/mspace.png",
        type: "image",
        links: [
            { label: "Link", url: "https://www.uottawa.ca/faculty-engineering/centre-entrepreneurship-engineering-design/facilities/richard-labbe-makerspace" }
        ]
    },
];

// Fallback execution check: triggers layout engine if DOM rendering cycle finished unexpectedly early
if (document.readyState !== "loading" && typeof window.renderContentGrid === "function") {
    window.renderContentGrid("work-list", window.PortfolioData.work);
}