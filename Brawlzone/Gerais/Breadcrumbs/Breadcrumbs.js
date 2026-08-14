const BREADCRUMB_TRANSLATIONS = {
    pt: {
        "Página inicial": "Início",
        "Brawlers": "Brawlers",
        "Notícias": "Notícias",
        "Novidades": "Novidades",
        "Guias": "Guias",
        "Skins": "Skins",
        "Eventos": "Eventos",
        "Torneios": "Torneios",
        "Temporadas": "Temporadas",
        "Glossário": "Glossário",
        "Mapas": "Mapas",
        "Ranqueado": "Ranqueado",
        "Collabs": "Collabs",
        "Poderes": "Poderes",
        "Nanopoderes": "Nanopoderes",
        "Buffies": "Buffies",
        "Coisas específicas": "Específicos",
        "Brawlers Específicos": "Brawlers",
        "Trios": "Trios",
        "Notícias Atuais": "Notícias Atuais",
        "Mudanças": "Mudanças",
        "Keep Brawl Alive": "Keep Brawl Alive",
        "MadEvil Manor": "MadEvil Manor",
        "Mudanças nos blings": "Mudanças nos blings",
        "Manutenção 28 de abril": "Manutenção 28 de abril",
        "Notas de lançamento de abril de 2026": "Notas de abril 2026",
        "Notas de lançamento update 68": "Notas update 68",
    },
    en: {
        "Página inicial": "Home",
        "Brawlers": "Brawlers",
        "Notícias": "News",
        "Novidades": "News",
        "Guias": "Guides",
        "Skins": "Skins",
        "Eventos": "Events",
        "Torneios": "Tournaments",
        "Temporadas": "Seasons",
        "Glossário": "Glossary",
        "Mapas": "Maps",
        "Ranqueado": "Ranked",
        "Collabs": "Collabs",
        "Poderes": "Powers",
        "Nanopoderes": "Nanopowers",
        "Buffies": "Buffies",
        "Coisas específicas": "Specific",
        "Brawlers Específicos": "Brawlers",
        "Trios": "Trios",
        "Notícias Atuais": "Current News",
        "Mudanças": "Changes",
        "Keep Brawl Alive": "Keep Brawl Alive",
        "MadEvil Manor": "MadEvil Manor",
        "Mudanças nos blings": "Bling changes",
        "Manutenção 28 de abril": "April 28 maintenance",
        "Notas de lançamento de abril de 2026": "April 2026 notes",
        "Notas de lançamento update 68": "Update 68 notes",
    },
    es: {
        "Página inicial": "Inicio",
        "Brawlers": "Brawlers",
        "Notícias": "Noticias",
        "Novidades": "Novedades",
        "Guias": "Guías",
        "Skins": "Skins",
        "Eventos": "Eventos",
        "Torneios": "Torneos",
        "Temporadas": "Temporadas",
        "Glossário": "Glosario",
        "Mapas": "Mapas",
        "Ranqueado": "Clasificatorio",
        "Collabs": "Colaboraciones",
        "Poderes": "Poderes",
        "Nanopoderes": "Nanopoderes",
        "Buffies": "Buffies",
        "Coisas específicas": "Específicos",
        "Brawlers Específicos": "Brawlers",
        "Trios": "Tríos",
        "Notícias Atuais": "Noticias actuales",
        "Mudanças": "Cambios",
        "Keep Brawl Alive": "Keep Brawl Alive",
        "MadEvil Manor": "MadEvil Manor",
        "Mudanças nos blings": "Cambios en blings",
        "Manutenção 28 de abril": "Mantenimiento 28 de abril",
        "Notas de lançamento de abril de 2026": "Notas de abril 2026",
        "Notas de lançamento update 68": "Notas update 68",
    },
};

const BREADCRUMB_HREF_OVERRIDES = {
    "Notícias/Novidades": "Notícias/Novidades.html",
    "Eventos/Keep Brawl Alive": "Eventos/Keep Brawl Alive.html",
    "Notícias/Notícias Atuais/Mudanças nos blings": "Notícias/Notícias Atuais/Mudanças nos blings.html",
    "Notícias/Notícias Atuais/Mudanças/Manutenção 28 de abril":
        "Notícias/Notícias Atuais/Mudanças/Manutenção 28 de abril.html",
    "Notícias/Notícias Atuais/Mudanças/Notas de lançamento de abril de 2026":
        "Notícias/Notícias Atuais/Mudanças/Notas de lançamento de abril de 2026.html",
    "Brawlers/Coisas específicas/Brawlers Específicos/Damian":
        "Brawlers/Coisas específicas/Brawlers Específicos/Damian.html",
    "Brawlers/Coisas específicas/Brawlers Específicos/Shelly":
        "Brawlers/Coisas específicas/Brawlers Específicos/Shelly.html",
    "Brawlers/Coisas específicas/Trios/MadEvil Manor":
        "Brawlers/Coisas específicas/Trios/MadEvil Manor.html",
};

const BREADCRUMB_NO_LINK = new Set([
    "Notícias Atuais",
    "Mudanças",
    "Coisas específicas",
    "Brawlers Específicos",
    "Trios",
    "Poderes Fixos",
    "Poderes de Eventos",
    "Mudanças do update 68",
    "Notas de lançamento update 68",
]);

const REPO_NAME = "Site-de-Brawl-Stars";

function getPathParts() {
    const segments = window.location.pathname
        .split("/")
        .filter((part) => part !== "" && part !== REPO_NAME);

    return segments.map((segment) => {
        const decoded = decodeURIComponent(segment);
        return decoded.replace(/\.html$/i, "");
    });
}

function collapseConsecutive(parts) {
    if (!parts.length) return [];

    const items = [{ part: parts[0], endIndex: 0 }];
    for (let i = 1; i < parts.length; i++) {
        const last = items[items.length - 1];
        if (parts[i] === last.part) {
            last.endIndex = i;
        } else {
            items.push({ part: parts[i], endIndex: i });
        }
    }
    return items;
}

function breadcrumbHref(parts, endIndex) {
    const depth = parts.length - 1 - endIndex;
    const prefix = "../".repeat(depth);
    const pathKey = parts.slice(0, endIndex + 1).join("/");

    if (BREADCRUMB_HREF_OVERRIDES[pathKey]) {
        return prefix + BREADCRUMB_HREF_OVERRIDES[pathKey];
    }

    return prefix + pathKey + "/" + parts[endIndex] + ".html";
}

function translatePart(part, dict) {
    return dict[part] || part;
}

function buildBreadcrumb() {
    const breadcrumb = document.getElementById("breadcrumb");
    if (!breadcrumb) return;

    const lang = typeof getCurrentLang === "function" ? getCurrentLang() : "pt";
    const dict = BREADCRUMB_TRANSLATIONS[lang] || BREADCRUMB_TRANSLATIONS.pt;
    const parts = getPathParts();

    if (!parts.length) return;

    const inicioText =
        (typeof TRANSLATIONS !== "undefined" && TRANSLATIONS[lang]?.breadcrumb_inicio) ||
        dict["Página inicial"] ||
        "Início";

    const homeHref = "../".repeat(Math.max(parts.length - 1, 0)) + "Página inicial/Página inicial.html";
    let html = `<a href="${homeHref}" data-i18n="breadcrumb_inicio">${inicioText}</a>`;

    const items =
        parts.length === 1 && parts[0] === "Página inicial"
            ? []
            : collapseConsecutive(parts);

    items.forEach((item, index) => {
        const label = translatePart(item.part, dict);
        const isLast = index === items.length - 1;
        const canLink = !isLast && !BREADCRUMB_NO_LINK.has(item.part);

        html += `<span class="breadcrumb-sep">›</span>`;

        if (isLast) {
            html += `<span class="breadcrumb-current">${label}</span>`;
        } else if (canLink) {
            html += `<a href="${breadcrumbHref(parts, item.endIndex)}">${label}</a>`;
        } else {
            html += `<span class="breadcrumb-muted">${label}</span>`;
        }
    });

    breadcrumb.innerHTML = html;
}

buildBreadcrumb();
