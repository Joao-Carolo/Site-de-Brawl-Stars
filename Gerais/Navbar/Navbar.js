window.addEventListener("scroll", () => {
    document.querySelector("nav").style.background = window.scrollY > 50
        ? "rgba(13,13,26,.97)"
        : "rgba(13,13,26,.75)";
});