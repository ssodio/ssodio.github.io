const highlightNavbar = () => {
    const home = document.getElementById("home-tab");
    const portfolio = document.getElementById("portfolio-tab");
    const resume = document.getElementById("resume-tab");
    const contact = document.getElementById("contact-tab");
  
    home.addEventListener("click", (event) => {
        home.style.borderBottom = "2px solid #616161";
        portfolio.style.borderBottom = none;
        resume.style.borderBottom = none;
        contact.style.borderBottom = none;
    });
};

document.addEventListener("DOMContentLoaded", () => {
    highlightNavbar();
});