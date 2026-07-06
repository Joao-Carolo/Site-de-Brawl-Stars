const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
const cursorEl = document.getElementById("cursor");
const ringEl = document.getElementById("cursor-ring");
if (isTouchDevice) {
    cursorEl.style.display = "none";
    ringEl.style.display = "none";
} else {
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener("mousemove", e => {
        mx = e.clientX; my = e.clientY;
        cursorEl.style.left = mx + "px";
        cursorEl.style.top = my + "px";
    });
    (function anim() {
        rx += (mx - rx) * .12;
        ry += (my - ry) * .12;
        ringEl.style.left = rx + "px";
        ringEl.style.top = ry + "px";
        requestAnimationFrame(anim);
    })();
    document.querySelectorAll("a, button, [onclick], [role='button'], .brawler-card, .skin-card, .brawler-nano-card, .brawler-buffie-card, .brawler-nano-header, .node-header, .folder-header, .how-card, .buffie-type-card, .machine-card").forEach(el => {
        el.addEventListener("mouseenter", () => {
            cursorEl.style.width = "20px";
            cursorEl.style.height = "20px";
            ringEl.style.width = "50px";
            ringEl.style.height = "50px";
        });
        el.addEventListener("mouseleave", () => {
            cursorEl.style.width = "12px";
            cursorEl.style.height = "12px";
            ringEl.style.width = "36px";
            ringEl.style.height = "36px";
        });
    });
}