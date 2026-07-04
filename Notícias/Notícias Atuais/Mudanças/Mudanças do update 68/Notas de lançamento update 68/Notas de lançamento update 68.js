/* SIDEBAR ACTIVE */
const sections = document.querySelectorAll(".section[id]");
const navLinks = document.querySelectorAll(".sidebar-nav li a");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 140) current = s.id; });
    navLinks.forEach(a => { a.classList.remove("active-sec"); if (a.getAttribute("href") === "#" + current) a.classList.add("active-sec"); });
});

/* REVEAL */
const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
}, { threshold: 0.05 });
document.querySelectorAll(".reveal").forEach(el => revealObs.observe(el));

/* MOBILE MENU */
function openMobileMenu() { document.getElementById("mobileMenu").classList.add("open"); document.getElementById("mobileOverlay").classList.add("open"); document.body.style.overflow = "hidden"; }
function closeMobileMenu() { document.getElementById("mobileMenu").classList.remove("open"); document.getElementById("mobileOverlay").classList.remove("open"); document.body.style.overflow = ""; }
document.getElementById("hamburger").addEventListener("click", openMobileMenu);
document.getElementById("mobileClose").addEventListener("click", closeMobileMenu);
document.getElementById("mobileOverlay").addEventListener("click", closeMobileMenu);
document.querySelectorAll("#mobileMenu a").forEach(a => a.addEventListener("click", closeMobileMenu));

/* CURSOR */
const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
const cursorEl = document.getElementById("cursor");
const ringEl = document.getElementById("cursor-ring");
if (isTouchDevice) {
    cursorEl.style.display = "none";
    ringEl.style.display = "none";
} else {
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener("mousemove", e => { mx = e.clientX; my = e.clientY; cursorEl.style.left = mx + "px"; cursorEl.style.top = my + "px"; });
    (function anim() { rx += (mx - rx) * .12; ry += (my - ry) * .12; ringEl.style.left = rx + "px"; ringEl.style.top = ry + "px"; requestAnimationFrame(anim); })();
    document.querySelectorAll("a,button").forEach(el => {
        el.addEventListener("mouseenter", () => { cursorEl.style.width = "20px"; cursorEl.style.height = "20px"; ringEl.style.width = "50px"; ringEl.style.height = "50px"; });
        el.addEventListener("mouseleave", () => { cursorEl.style.width = "12px"; cursorEl.style.height = "12px"; ringEl.style.width = "36px"; ringEl.style.height = "36px"; });
    });
}
