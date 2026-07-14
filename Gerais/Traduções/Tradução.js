const TRANSLATIONS = {
    pt: {
        // NAVBAR
        nav_novidades: "Novidades",
        nav_brawlers: "Brawlers",
        nav_updates: "Updates",
        nav_guias: "Guias",
        nav_pesquisar: "Pesquisar",

        // FOOTER
        footer_desc: "O fan site português de Brawl Stars. Guias, novidades, brawlers e tudo o mais — tudo em português.",
        footer_col_conteudo: "Conteúdo",
        footer_col_recursos: "Recursos",
        footer_col_site: "Site",
        footer_link_brawlers: "Brawlers",
        footer_link_updates: "Updates",
        footer_link_guias: "Guias",
        footer_link_skins: "Skins",
        footer_link_buffies: "Buffies",
        footer_link_eventos: "Eventos",
        footer_link_torneios: "Torneios",
        footer_link_glossario: "Glossário",
        footer_link_collabs: "Collabs",
        footer_link_ranked: "Ranked",
        footer_link_noticias: "Notícias",
        footer_copyright: "© 2026 BrawlZone — Fan site não oficial",
        footer_disclaimer: "Brawl Stars é propriedade da Supercell",

        // BREADCRUMB
        breadcrumb_inicio: "Início",

        //Página inicial
        start_title: "BrawlZone — O Teu Fan Site de Brawl Stars",

        //Página inicial - Hero Section
        start_hero_badge: "O Fan Site Português nº1",
        start_hero_line1: "O universo de",
        start_hero_line2: "Brawl Stars",
        start_hero_desc: "Tudo o que precisas — brawlers, guias, updates e as últimas novidades do jogo. Sempre atualizado.",
        start_hero_btn_brawlers: "🎮 Ver Brawlers",
        start_hero_btn_novidades: "📰 Últimas Novidades",
        start_hero_stat_label3: "Horas de Jogo",

        //Página inicial - Novidades
        start_novidades_title: "Últimas Novidades",
        start_novidades_p: "Sempre Atualizado",
        start_novidades_btn: "Ver Todas →",
    },
    en: {
        // NAVBAR
        nav_novidades: "News",
        nav_brawlers: "Brawlers",
        nav_updates: "Updates",
        nav_guias: "Guides",
        nav_pesquisar: "Search",

        // FOOTER
        footer_desc: "The Brawl Stars fan site. Guides, news, brawlers and everything else — now in English too.",
        footer_col_conteudo: "Content",
        footer_col_recursos: "Resources",
        footer_col_site: "Site",
        footer_link_brawlers: "Brawlers",
        footer_link_updates: "Updates",
        footer_link_guias: "Guides",
        footer_link_skins: "Skins",
        footer_link_buffies: "Buffies",
        footer_link_eventos: "Events",
        footer_link_torneios: "Tournaments",
        footer_link_glossario: "Glossary",
        footer_link_collabs: "Collabs",
        footer_link_ranked: "Ranked",
        footer_link_noticias: "News",
        footer_copyright: "© 2026 BrawlZone — Unofficial fan site",
        footer_disclaimer: "Brawl Stars is property of Supercell",

        // BREADCRUMB
        breadcrumb_inicio: "Home",

        //Página inicial
        start_title: "BrawlZone — Your Brawl Stars Fan Site",

        //Página inicial - Hero Section
        start_hero_badge: "Portuguese's #1 Fan Site",
        start_hero_line1: "The universe of",
        start_hero_line2: "Brawl Stars",
        start_hero_desc: "Everything you need — brawlers, guides, updates and the latest news from the game. Always updated.",
        start_hero_btn_brawlers: "🎮 See Brawlers",
        start_hero_btn_novidades: "📰 Latest News",
        start_hero_stat_label3: "Hours Played",

        //Página inicial - Novidades
        start_novidades_title: "Latest News",
        start_novidades_p: "Always Updated",
        start_novidades_btn: "See All →",
    }
};

/* Devolve o idioma atual guardado, ou "pt" por defeito */
function getCurrentLang() {
    return localStorage.getItem("brawlzone_lang") || "pt";
}

/* Muda o idioma e recarrega a página */
function setLang(lang) {
    localStorage.setItem("brawlzone_lang", lang);
    location.reload();
}

/* Aplica as traduções a todos os elementos com data-i18n */
function applyTranslations() {
    const lang = getCurrentLang();
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.pt;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        if (dict[key]) el.textContent = dict[key];
    });

    // Atributos como placeholder, title, etc.
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (dict[key]) el.placeholder = dict[key];
    });
}

// Corre automaticamente quando o script é carregado
applyTranslations();