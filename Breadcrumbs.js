/* ═══════════════════════════════════════════════════════
   BrawlZone — Breadcrumbs Automáticos
   Como usar: adiciona no fim do <body> de cada página:
   <script src="[caminho]/breadcrumbs.js"></script>

   Caminhos por profundidade:
   - Raiz:                   breadcrumbs.js
   - 1 pasta:                ../breadcrumbs.js
   - 2 pastas:               ../../breadcrumbs.js
═══════════════════════════════════════════════════════ */

(function () {

    /* ─── CSS ─── */
    const style = document.createElement("style");
    style.textContent = `
    .bz-breadcrumbs{
      max-width:1200px;
      margin:0 auto;
      padding:.75rem 3rem;
      display:flex;
      align-items:center;
      gap:.4rem;
      flex-wrap:wrap;
      font-size:.78rem;
      font-weight:700;
      color:rgba(255,255,255,.3);
      position:relative;
      z-index:1;
    }
    @media(max-width:700px){.bz-breadcrumbs{padding:.75rem 1.5rem;}}
    .bz-breadcrumbs a{
      color:rgba(255,255,255,.4);
      text-decoration:none;
      transition:color .2s;
      display:flex;
      align-items:center;
      gap:.3rem;
    }
    .bz-breadcrumbs a:hover{color:#fff;}
    .bz-breadcrumb-sep{
      color:rgba(255,255,255,.15);
      font-size:.7rem;
    }
    .bz-breadcrumb-current{
      color:rgba(255,255,255,.6);
      display:flex;
      align-items:center;
      gap:.3rem;
    }
    .bz-breadcrumb-wrap{
      background:rgba(255,255,255,.02);
      border-bottom:1px solid rgba(255,255,255,.05);
    }
  `;
    document.head.appendChild(style);

    /* ─── MAPA DE PÁGINAS ─── */
    const PAGE_MAP = {
        // Raiz
        "Página inicial": { label: "Início", emoji: "🏠", parent: null },

        // Brawlers
        "Brawlers": { label: "Brawlers", emoji: "👊", parent: "Página inicial" },
        "Buffies": { label: "Buffies", emoji: "🦊", parent: "Brawlers" },
        "Skins": { label: "Skins", emoji: "🎨", parent: "Brawlers" },
        "Damian": { label: "Damian", emoji: "🎤", parent: "Brawlers" },
        "MadEvil Manor": { label: "MadEvil Manor", emoji: "🤘", parent: "Brawlers" },

        // Temporadas
        "Temporadas": { label: "Updates", emoji: "📦", parent: "Página inicial" },

        // Guias
        "Guias": { label: "Guias", emoji: "📖", parent: "Página inicial" },

        // Notícias
        "Notícias": { label: "Notícias", emoji: "📰", parent: "Página inicial" },
        "Novidades": { label: "Novidades", emoji: "⚡", parent: "Notícias" },
        "Mudanças nos blings": { label: "Mudanças no Bling", emoji: "🔮", parent: "Notícias" },
        "Keep Brawl Alive": { label: "Keep Brawl Alive", emoji: "❤️‍🔥", parent: "Notícias" },
        "Notas de lançamento de abril de 2026": { label: "Notas Abril 2026", emoji: "📋", parent: "Notícias" },
        "Manutenção 28 de abril": { label: "Manutenção 28 Abr", emoji: "⚙️", parent: "Notícias" },

        // Mapas
        "Mapas": { label: "Mapas", emoji: "🗺️", parent: "Página inicial" },

        // Ranqueado
        "Ranqueado": { label: "Ranked", emoji: "🏆", parent: "Página inicial" },

        // Torneios
        "Torneios": { label: "Torneios", emoji: "🏅", parent: "Página inicial" },

        // Collabs
        "Collabs": { label: "Collabs", emoji: "🤝", parent: "Página inicial" },

        // Glossário
        "Glossário": { label: "Glossário", emoji: "📖", parent: "Página inicial" },
    };

    /* ─── DETECTAR PÁGINA ATUAL ─── */
    const path = window.location.pathname;
    const filename = decodeURIComponent(path.split("/").pop().replace(".html", ""));
    const depth = (path.match(/\//g) || []).length - 1;
    const base = depth <= 1 ? "./" : "../".repeat(depth - 1);

    const pageInfo = PAGE_MAP[filename];
    if (!pageInfo || filename === "Página inicial") return; // não mostrar na homepage

    /* ─── CONSTRUIR CADEIA ─── */
    function buildChain(name) {
        const chain = [];
        let current = name;
        while (current) {
            const info = PAGE_MAP[current];
            if (!info) break;
            chain.unshift({ name: current, ...info });
            current = info.parent;
        }
        return chain;
    }

    const chain = buildChain(filename);

    /* ─── GERAR HTML ─── */
    function getLink(name) {
        const routes = {
            "Página inicial": `${base}Página inicial.html`,
            "Brawlers": `${base}Brawlers/Brawlers.html`,
            "Buffies": `${base}Brawlers/Buffies.html`,
            "Skins": `${base}Brawlers/Skins.html`,
            "Temporadas": `${base}Temporadas/Temporadas.html`,
            "Guias": `${base}Guias/Guias.html`,
            "Notícias": `${base}Notícias/Notícias.html`,
            "Novidades": `${base}Notícias/Novidades.html`,
            "Mapas": `${base}Mapas/Mapas.html`,
            "Ranqueado": `${base}Ranqueado/Ranqueado.html`,
            "Torneios": `${base}Torneios/Torneios.html`,
            "Collabs": `${base}Collabs/Collabs.html`,
            "Glossário": `${base}Glossário/Glossário.html`,
        };
        return routes[name] || "#";
    }

    let html = '<div class="bz-breadcrumb-wrap"><nav class="bz-breadcrumbs" aria-label="Breadcrumb">';

    chain.forEach((item, i) => {
        const isLast = i === chain.length - 1;
        if (i > 0) html += '<span class="bz-breadcrumb-sep">›</span>';
        if (isLast) {
            html += `<span class="bz-breadcrumb-current">${item.emoji} ${item.label}</span>`;
        } else {
            html += `<a href="${getLink(item.name)}">${item.emoji} ${item.label}</a>`;
        }
    });

    html += '</nav></div>';

    /* ─── INSERIR APÓS A NAV ─── */
    const nav = document.querySelector("nav");
    if (nav) {
        nav.insertAdjacentHTML("afterend", html);
    }

})();