function openMobileMenu() {
    document.getElementById("mobileMenu").classList.add("open");
    document.getElementById("mobileOverlay").classList.add("open");
    document.body.style.overflow = "hidden";
}
function closeMobileMenu() {
    document.getElementById("mobileMenu").classList.remove("open");
    document.getElementById("mobileOverlay").classList.remove("open");
    document.body.style.overflow = "";
}
document.getElementById("hamburger").addEventListener("click", openMobileMenu);
document.getElementById("mobileClose").addEventListener("click", closeMobileMenu);
document.getElementById("mobileOverlay").addEventListener("click", closeMobileMenu);
document.querySelectorAll("#mobileMenu a").forEach(a => a.addEventListener("click", closeMobileMenu));