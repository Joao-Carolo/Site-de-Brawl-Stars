const BREADCRUMB_TRANSLATIONS = {
    pt: {
        "Brawlers": "Brawlers",
        "Notícias": "Notícias",
        "Guias": "Guias",
        "Skins": "Skins",
        "Página inicial": "Página inicial",
    },
    en: {
        "Brawlers": "Brawlers",
        "Notícias": "News",
        "Guias": "Guides",
        "Skins": "Skins",
        "Página inicial": "Home Page",
    }
};

function buildBreadcrumb() {
    const breadcrumb = document.getElementById("breadcrumb");
    if (!breadcrumb) return;

    const REPO_NAME = "Site-de-Brawl-Stars"; // nome do repositório a ignorar
    const lang = typeof getCurrentLang === "function" ? getCurrentLang() : "pt";
    const dict = BREADCRUMB_TRANSLATIONS[lang] || BREADCRUMB_TRANSLATIONS.pt;

    const parts = window.location.pathname
        .split("/")
        .filter(p => p !== "" && !p.endsWith(".html") && p !== REPO_NAME);

    const inicioText = (typeof TRANSLATIONS !== "undefined" && TRANSLATIONS[lang]?.breadcrumb_inicio) || "Início";
    let html = `<a href="${"../".repeat(parts.length)}Página inicial/Página inicial.html" data-i18n="breadcrumb_inicio">🏠 ${inicioText}</a>`;

    parts.forEach((part, i) => {
        const original = decodeURIComponent(part);
        const label = dict[original] || original;
        const isLast = i === parts.length - 1;
        const href = "../".repeat(parts.length - 1 - i) + part + ".html";

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