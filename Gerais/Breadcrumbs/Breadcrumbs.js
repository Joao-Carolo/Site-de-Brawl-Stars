function buildBreadcrumb() {
    const breadcrumb = document.getElementById("breadcrumb");
    if (!breadcrumb) return;

    const REPO_NAME = "Site-de-Brawl-Stars"; // nome do repositório a ignorar

    const parts = window.location.pathname
        .split("/")
        .filter(p => p !== "" && !p.endsWith(".html") && p !== REPO_NAME);

    let html = `<a href="${"../".repeat(parts.length)}Página inicial/Página inicial.html">🏠 Início</a>`;

    parts.forEach((part, i) => {
        const label = decodeURIComponent(part);
        const isLast = i === parts.length - 1;
        const href = "../".repeat(parts.length - 1 - i) + label + ".html";

        html += `<span class="breadcrumb-sep">›</span>`;

        if (isLast) {
            html += `<span class="breadcrumb-current">${label}</span>`;
        } else {
            html += `<a href="${href}">${label}</a>`;
        }
    });

    breadcrumb.innerHTML = html;
}

buildBreadcrumb();