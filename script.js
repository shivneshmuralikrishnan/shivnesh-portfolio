const enterButton = document.getElementById("enterButton");
const introScreen = document.getElementById("introScreen");
const mainSite = document.getElementById("mainSite");

enterButton.addEventListener("click", () => {
    introScreen.classList.add("hide");

    setTimeout(() => {
        mainSite.classList.add("show");
    }, 250);

    setTimeout(() => {
        introScreen.style.display = "none";
    }, 1300);
});

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(17,24,39,.94)";
    } else {
        navbar.style.background = "rgba(17,24,39,.72)";
    }
});

const card = document.querySelector(".profile-card");

if (card) {
    card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const rotateX = (y / rect.height - .5) * -8;
        const rotateY = (x / rect.width - .5) * 8;

        card.style.transform =
            `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform =
            "perspective(700px) rotateX(0deg) rotateY(0deg)";
    });
}

const animatedItems = document.querySelectorAll(
    ".section, .work-card, .skill, .timeline-item, .education-card"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    { threshold: .12 }
);

animatedItems.forEach((item) => {
    item.classList.add("reveal");
    observer.observe(item);
});
