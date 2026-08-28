// Current year
document.getElementById("year").textContent =
    new Date().getFullYear();


// Smooth reveal animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";
            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach((section) => {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(30px)";

    section.style.transition =
        "all 0.7s ease";

    observer.observe(section);

});
