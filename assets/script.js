const navLinks = Array.from(document.querySelectorAll(".nav-links a[data-scroll]"));
const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

const setActiveLink = () => {
    const scrollPos = window.scrollY + 140;
    let activeIndex = -1;

    sections.forEach((section, index) => {
        if (section.offsetTop <= scrollPos) {
            activeIndex = index;
        }
    });

    navLinks.forEach((link, index) => {
        link.classList.toggle("active", index === activeIndex);
    });
};

window.addEventListener("scroll", setActiveLink, { passive: true });
setActiveLink();
