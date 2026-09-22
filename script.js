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


/* Premium ENTER transition */
(() => {
 const overlay=document.getElementById("page-transition");
 if(!overlay)return;
 const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
 const isEnter=el=>{
   if(!el)return false;
   const text=(el.textContent||"").trim().toLowerCase();
   const attrs=((el.getAttribute("aria-label")||"")+" "+(el.getAttribute("title")||"")+" "+(el.id||"")+" "+(typeof el.className==="string"?el.className:"")).toLowerCase();
   return text==="enter" || attrs.includes("enter");
 };
 document.addEventListener("click",e=>{
   const el=e.target.closest("a,button,[role='button']");
   if(!el||!isEnter(el))return;
   const target=el.getAttribute("data-target")||el.getAttribute("href");
   if(!target||target==="#"||target.toLowerCase().startsWith("javascript:"))return;
   let url;
   try{url=new URL(target,location.href)}catch(_){return}
   if(url.origin!==location.origin)return;
   e.preventDefault();
   const r=el.getBoundingClientRect();
   overlay.style.setProperty("--transition-x",((r.left+r.width/2)/innerWidth*100)+"%");
   overlay.style.setProperty("--transition-y",((r.top+r.height/2)/innerHeight*100)+"%");
   el.classList.add("enter-transitioning");
   if(reduced){location.href=target;return}
   overlay.classList.add("is-active");
   setTimeout(()=>location.href=target,820);
 },true);
})();
