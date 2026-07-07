const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("visible");
    });
}, { threshold: 0.05 });

document.querySelectorAll(".reveal").forEach(el => revealObs.observe(el));
