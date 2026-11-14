
// 1. WELCOME MESSAGE

console.log("Welcome to Ahmad's Portfolio!");


// 2. SCROLL REVEAL ANIMATION

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {
    threshold: 0.15
});

sections.forEach((section) => {
    observer.observe(section);
});


// 3. BACK TO TOP BUTTON

const topButton = document.createElement("button");

topButton.textContent = "↑";
topButton.id = "backToTop";

document.body.appendChild(topButton);


// Show button when scrolling

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});


// Return to top when clicked

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// 4. DYNAMIC FOOTER YEAR

const footer = document.querySelector("footer");

if (footer) {

    footer.innerHTML = `
        <p>© ${new Date().getFullYear()}
        Ahmad Tasafee Shafee. All Rights Reserved.</p>
    `;

}
