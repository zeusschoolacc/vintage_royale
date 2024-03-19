const button = document.getElementById("letsGetStarted");

button.addEventListener("mouseover", () => {
    button.className = "hovered";
});

button.addEventListener("mouseout", () => {
    button.className = "released";
});