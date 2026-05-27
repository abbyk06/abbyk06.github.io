window.PortfolioData = window.PortfolioData || {};

window.PortfolioData.work = [
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
    }
];

// Fallback execution check: triggers layout engine if DOM rendering cycle finished unexpectedly early
if (document.readyState !== "loading" && typeof window.renderContentGrid === "function") {
    window.renderContentGrid("work-list", window.PortfolioData.work);
}