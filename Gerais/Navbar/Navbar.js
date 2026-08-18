function getBasePath() {
    const REPO_NAME = "Site-de-Brawl-Stars";
    const parts = window.location.pathname
        .split("/")
        .filter(p => p !== "" && !p.endsWith(".html") && p !== REPO_NAME);
    return "../".repeat(parts.length);
}

/* Lista de todos os idiomas suportados */
const AVAILABLE_LANGS = [
    { code: "en", flag: "🇬🇧", name: "English" },
    { code: "fr", flag: "🇫🇷", name: "Français" },
    { code: "de", flag: "🇩🇪", name: "Deutsch" },
    { code: "es", flag: "🇪🇸", name: "Español" },
    { code: "it", flag: "🇮🇹", name: "Italiano" },
    { code: "zh-cn", flag: "🇨🇳", name: "简体中文" },
    { code: "zh-tw", flag: "🇹🇼", name: "繁體中文" },
    { code: "ja", flag: "🇯🇵", name: "日本語" },
    { code: "ko", flag: "🇰🇷", name: "한국어" },
    { code: "pt", flag: "🇵🇹", name: "Português" },
    { code: "ru", flag: "🇷🇺", name: "Русский" },
    { code: "nl", flag: "🇳🇱", name: "Nederlands" },
    { code: "tr", flag: "🇹🇷", name: "Türkçe" },
    { code: "fi", flag: "🇫🇮", name: "Suomi" },
    { code: "ms", flag: "🇲🇾", name: "Bahasa Melayu" },
    { code: "vi", flag: "🇻🇳", name: "Tiếng Việt" },
    { code: "th", flag: "🇹🇭", name: "ภาษาไทย" },
    { code: "id", flag: "🇮🇩", name: "Bahasa Indonesia" },
    { code: "ar", flag: "🇸🇦", name: "العربية" },
    { code: "pl", flag: "🇵🇱", name: "Polski" },
    { code: "he", flag: "🇮🇱", name: "עברית" },
];

/* Configuração de cada Zone: nome exibido, link da logo (home) e links da navbar.
   basePath é aplicado depois, na hora de montar o HTML. */
// Cada zona define dois estados para a logo/nome, consoante estejas ou não
// já na Página Inicial dessa zona:
//   - "onHome"    → mostra o logo/nome da Supercellzone (o centro), porque subir mais não faz sentido
//   - "elsewhere" → mostra o logo/nome da própria zona, a apontar para a Página Inicial dela
// homeHref/nome são caminhos e textos FIXOS (relativos à própria página), definidos manualmente.
const ZONES = {
    supercellzone: {
        onHome: { nome: "Supercellzone", homeHref: "Página inicial.html" },
        elsewhere: { nome: "Supercellzone", homeHref: "Página inicial.html" },
        links: [
            { label: "Sobre", href: "#sobre", key: "sobre", i18n: "nav_sz_sobre" },
            { label: "Zones", href: "#zonas", key: "zonas", i18n: "nav_sz_zonas" },
            { label: "Novidades", href: "#novidades", key: "novidades", i18n: "nav_sz_novidades" },
        ]
    },
    brawlzone: {
        onHome: { nome: "Supercellzone", homeHref: "../../Página inicial.html" },
        elsewhere: { nome: "BrawlZone", homeHref: "Página inicial/Página inicial.html" },
        links: [
            { label: "Novidades", href: `Notícias/Novidades.html`, key: "novidades", i18n: "nav_novidades" },
            { label: "Brawlers", href: `Brawlers/Brawlers/Brawlers.html`, key: "brawlers", i18n: "nav_brawlers" },
            { label: "Updates", href: `Temporadas/Temporadas.html`, key: "updates", i18n: "nav_updates" },
            { label: "Guias", href: `Guias/Guias.html`, key: "guias", i18n: "nav_guias" },
        ]
    },
    rise: {
        onHome: { nome: "Supercellzone", homeHref: "../../Página inicial.html" },
        elsewhere: { nome: "R.I.S.E Zone", homeHref: "Página inicial.html" },
        links: [
            { label: "Heróis", href: "#heroi-lista", key: "herois", i18n: "nav_rise_herois" },
            { label: "A Tower", href: "#tower", key: "tower", i18n: "nav_rise_tower" },
        ]
    }
};

function buildNavbar(activeLink = "", zone = "brawlzone", isHome = false) {
    const basePath = getBasePath();
    const zoneConfig = ZONES[zone] || ZONES.brawlzone;
    const logoState = isHome ? zoneConfig.onHome : zoneConfig.elsewhere;

    // Links da própria zone: se o href não começar por # ou http, prefixa com basePath
    const links = zoneConfig.links.map(l => ({
        ...l,
        href: (l.href.startsWith("#") || l.href.startsWith("http"))
            ? l.href
            : `${basePath}${l.href}`
    }));

    const linksHtml = links.map(l =>
        `<li><a href="${l.href}"${l.key === activeLink ? ' class="active"' : ''}><span data-i18n="${l.i18n}">${l.label}</span></a></li>`
    ).join("");

    const currentLang = getCurrentLang();
    const currentLangObj = AVAILABLE_LANGS.find(l => l.code === currentLang) || { flag: "🇵🇹", name: "Português" };
    const langOptionsHtml = AVAILABLE_LANGS.map(l =>
        `<button class="lang-option${l.code === currentLang ? ' active' : ''}" onclick="setLang('${l.code}')">${l.flag} ${l.name}</button>`
    ).join("");

    const navHtml = `
        <nav>
            <div class="nav-logo">
                <span class="star"><img class="logo" src="${basePath}Gerais/Logo.png" alt="Logo"></span>
                <span class="zone"><a href="${logoState.homeHref}">${logoState.nome}</a></span>
            </div>
            <ul class="nav-links">${linksHtml}</ul>
            <div class="lang-switcher">
                <button class="lang-toggle" id="langToggle">
                    ${currentLangObj.flag} <span data-i18n="nav_idioma">Idioma</span> ▾
                </button>
                <div class="lang-dropdown" id="langDropdown">
                    ${langOptionsHtml}
                </div>
            </div>
            <button class="hamburger" id="hamburger">
                <span></span><span></span><span></span>
            </button>
        </nav>`;
    document.body.insertAdjacentHTML("afterbegin", navHtml);
    document.getElementById("mobileMenu").insertAdjacentHTML("beforeend", `
        <div class="mobile-lang-switcher">
            <button class="lang-toggle" id="mobileLangToggle">
                ${currentLangObj.flag} <span data-i18n="nav_idioma">Idioma</span> ▾
            </button>
            <div class="lang-dropdown" id="mobileLangDropdown">
                ${langOptionsHtml}
            </div>
        </div>
    `);
    document.getElementById("mobileLangToggle").addEventListener("click", e => {
        e.stopPropagation();
        document.getElementById("mobileLangDropdown").classList.toggle("open");
    });
    // Toggle do dropdown
    const langToggle = document.getElementById("langToggle");
    const langDropdown = document.getElementById("langDropdown");
    langToggle.addEventListener("click", e => {
        e.stopPropagation();
        langDropdown.classList.toggle("open");
    });
    document.addEventListener("click", () => {
        langDropdown.classList.remove("open");
    });
    // Scroll effect
    window.addEventListener("scroll", () => {
        document.querySelector("nav").style.background = window.scrollY > 50
            ? "rgba(13,13,26,.97)"
            : "rgba(13,13,26,.75)";
    });
}