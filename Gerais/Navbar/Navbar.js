function getBasePath() {
    const REPO_NAME = "Site-de-Brawl-Stars";
    const parts = window.location.pathname
        .split("/")
        .filter(p => p !== "" && !p.endsWith(".html") && p !== REPO_NAME);
    return "../".repeat(parts.length);
}

/* Lista de todos os idiomas suportados pelo Brawl Stars */
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
    const currentLangObj = AVAILABLE_LANGS.find(l => l.code === currentLang) || { flag: "🇵🇹", name: "Português" };

    const langOptionsHtml = AVAILABLE_LANGS.map(l =>
        `<button class="lang-option${l.code === currentLang ? ' active' : ''}" onclick="setLang('${l.code}')">${l.flag} ${l.name}</button>`
    ).join("");

    const navHtml = `
        <nav>
            <div class="nav-logo">
                <span class="star"><img class="logo" src="${basePath}Gerais/Logo.png" alt="Logo"></span>
                <span class="zone"><a href="${basePath}Página inicial/Página inicial">BrawlZone</a></span>
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