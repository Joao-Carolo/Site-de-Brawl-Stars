function getBasePath() {
    const REPO_NAME = "Site-de-Brawl-Stars";
    const parts = window.location.pathname
        .split("/")
        .filter(p => p !== "" && !p.endsWith(".html") && p !== REPO_NAME);
    return "../".repeat(parts.length);
}

function buildNavbar(activeLink = "") {
    const basePath = getBasePath();

    const links = [
        { label: "Novidades", href: `${basePath}Notícias/Novidades.html`, key: "novidades", i18n: "nav_novidades" },
        { label: "Brawlers", href: `${basePath}Brawlers/Brawlers/Brawlers.html`, key: "brawlers", i18n: "nav_brawlers" },
        { label: "Updates", href: `${basePath}Temporadas/Temporadas.html`, key: "updates", i18n: "nav_updates" },
        { label: "Guias", href: `${basePath}Guias/Guias.html`, key: "guias", i18n: "nav_guias" },
    ];

    const linksHtml = links.map(l =>
        `<li><a href="${l.href}"${l.key === activeLink ? ' class="active"' : ''}><span data-i18n="${l.i18n}">${l.label}</span></a></li>`
    ).join("");

    const currentLang = getCurrentLang();

    const navHtml = `
        <nav>
            <div class="nav-logo">
                <span class="star"><img class="logo" src="${basePath}Gerais/Logo.png" alt="Logo"></span>
                <span class="zone">BrawlZone</span>
            </div>
            <ul class="nav-links">${linksHtml}</ul>
            <div class="lang-switcher">
                <button onclick="setLang('pt')" class="lang-btn${currentLang === 'pt' ? ' active' : ''}" title="Português">🇵🇹</button>
                <button onclick="setLang('en')" class="lang-btn${currentLang === 'en' ? ' active' : ''}" title="English">🇬🇧</button>
                <button onclick="setLang('es')" class="lang-btn${currentLang === 'es' ? ' active' : ''}" title="Español">🇪🇸</button>
            </div>
            <button class="hamburger" id="hamburger">
                <span></span><span></span><span></span>
            </button>
        </nav>`;

    document.body.insertAdjacentHTML("afterbegin", navHtml);

    // Scroll effect
    window.addEventListener("scroll", () => {
        document.querySelector("nav").style.background = window.scrollY > 50
            ? "rgba(13,13,26,.97)"
            : "rgba(13,13,26,.75)";
    });
}
