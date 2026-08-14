/* FILTROS */
document.querySelectorAll(".filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
        document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        const f = chip.dataset.f;
        let visible = 0;
        document.querySelectorAll(".collab-card").forEach(card => {
            if (f === "all" || card.dataset.cat === f) { card.classList.remove("hidden"); visible++; }
            else card.classList.add("hidden");
        });
        document.getElementById("noResults").style.display = visible === 0 ? "block" : "none";
    });
});

/* REVEAL */
const observer = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }); }, { threshold: 0.06 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

/* CURSOR */
// Desativar cursor personalizado em dispositivos touch
const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
if (isTouchDevice) {
    document.getElementById("cursor").style.display = "none";
    document.getElementById("cursor-ring").style.display = "none";
    document.body.style.cursor = "auto";
    document.querySelectorAll("*").forEach(el => el.style.cursor = "");
} else {
    // Todo o código do cursor fica aqui dentro
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursor-ring");
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener("mousemove", e => { mx = e.clientX; my = e.clientY; cursor.style.left = mx + "px"; cursor.style.top = my + "px"; });
    (function anim() { rx += (mx - rx) * .12; ry += (my - ry) * .12; ring.style.left = rx + "px"; ring.style.top = ry + "px"; requestAnimationFrame(anim); })();
}
const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursor-ring");
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener("mousemove", e => { mx = e.clientX; my = e.clientY; cursor.style.left = mx + "px"; cursor.style.top = my + "px"; });
(function anim() { rx += (mx - rx) * .12; ry += (my - ry) * .12; ring.style.left = rx + "px"; ring.style.top = ry + "px"; requestAnimationFrame(anim); })();
document.querySelectorAll("a,button,.collab-card,.tl-item").forEach(el => {
    el.addEventListener("mouseenter", () => { cursor.style.width = "20px"; cursor.style.height = "20px"; ring.style.width = "50px"; ring.style.height = "50px"; });
    el.addEventListener("mouseleave", () => { cursor.style.width = "12px"; cursor.style.height = "12px"; ring.style.width = "36px"; ring.style.height = "36px"; });
});