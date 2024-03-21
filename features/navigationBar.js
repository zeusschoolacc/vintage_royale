const hook = document.querySelector(".hook");
const navContainer = document.querySelector("nav");
const navBar = [...document.querySelectorAll(".desktop>a")];
const slideBar = document.querySelector(".slide-bar");
const mobileButtons = document.querySelector(".navButtons");
const wow = window.matchMedia("(min-width: 520px)");
navBar.push(slideBar);

navBar.forEach((nav) => {
    nav.addEventListener("mouseout", () => {
        nav.style.transitionDuration = "1s";
    });
});

slideBar.addEventListener("click", () => {
    if(navContainer.classList.contains("unactive")) {
        navContainer.style.transitionDuration = "1s";
        setTimeout(() => {
            mobileButtons.style.transitionDuration = "1s";
            mobileButtons.style["display"] = "flex"
        }, 800);
        navContainer.classList.add("active");
        navContainer.classList.remove("unactive");
    }
    else {
        navContainer.style.transitionDuration = "1s";
        navContainer.classList.add("unactive");
        navContainer.classList.remove("active");
        mobileButtons.style["display"] = "none";
    }
});

wow.addEventListener("change", () => {
    if(wow.matches) {
        navContainer.classList.remove("active");
        navContainer.classList.add("unactive");
        mobileButtons.style["display"] = "none";
        mobileButtons.style["color"] = "green";
    }
});