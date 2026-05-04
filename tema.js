/* ═══════════════════════════════════════════════════════
   BrawlZone — Sistema de Tema Escuro/Claro
   Como usar: adiciona no fim do <body> de cada página:
   <script src="[caminho]/tema.js"></script>

   O caminho muda conforme a pasta:
   - Raiz:                   tema.js
   - 1 pasta de profundidade: ../tema.js
   - 2 pastas:               ../../tema.js
═══════════════════════════════════════════════════════ */

(function () {

    /* ─── CSS DO TEMA CLARO ─────────────────────────────── */
    const lightCSS = `
    body.light-mode {
      background: #F0EDE8 !important;
      color: #1A1A2E !important;
    }

    /* NAVBAR */
    body.light-mode nav {
      background: rgba(240,237,232,.92) !important;
      border-bottom-color: rgba(0,0,0,.08) !important;
    }
    body.light-mode .nav-logo,
    body.light-mode .nav-links a {
      color: #1A1A2E !important;
    }
    body.light-mode .nav-links a:hover { color: #FF6B00 !important; }
    body.light-mode .nav-links a.active { color: #FF6B00 !important; }
    body.light-mode .nav-links a.active::after { background: #FF6B00 !important; }

    /* HEADERS E SECÇÕES ESCURAS */
    body.light-mode .page-header,
    body.light-mode .hero,
    body.light-mode .stats-section,
    body.light-mode .format-section,
    body.light-mode .members-section,
    body.light-mode .buffies-section,
    body.light-mode .trio-section,
    body.light-mode .ranks-section,
    body.light-mode .tasks-section,
    body.light-mode .rewards-section,
    body.light-mode .cta-section,
    body.light-mode .collab-section {
      background: #E8E4DE !important;
    }

    /* DARK2 → LIGHT2 */
    body.light-mode .dark2,
    body.light-mode [class*="dark2"],
    body.light-mode .sidebar-card,
    body.light-mode .wiki-sidebar .sidebar-card,
    body.light-mode .modal,
    body.light-mode .bz-modal,
    body.light-mode .how-card,
    body.light-mode .reward-card,
    body.light-mode .format-card,
    body.light-mode .rank-row,
    body.light-mode .map-card,
    body.light-mode .news-card,
    body.light-mode .update-card,
    body.light-mode .guide-card,
    body.light-mode .machine-card,
    body.light-mode .claw-machine-visual,
    body.light-mode .article-footer,
    body.light-mode .book-banner,
    body.light-mode .propass-banner,
    body.light-mode .collab-wrap,
    body.light-mode .reset-box,
    body.light-mode .lore-visual {
      background: #DEDAD4 !important;
      border-color: rgba(0,0,0,.1) !important;
    }

    /* DARK3 → LIGHT3 */
    body.light-mode .brawler-card,
    body.light-mode .skin-card,
    body.light-mode .ability-card,
    body.light-mode .buffie-member-card,
    body.light-mode .bmc-buffie,
    body.light-mode .build-card,
    body.light-mode .mode-card,
    body.light-mode .counter-item,
    body.light-mode .syn-card,
    body.light-mode .mission-card,
    body.light-mode .check-item,
    body.light-mode .task-card,
    body.light-mode .qa,
    body.light-mode .qa-q,
    body.light-mode .tip-item,
    body.light-mode .misc-item,
    body.light-mode .bug-item,
    body.light-mode .skin-item,
    body.light-mode .balance-card,
    body.light-mode .buffie-card,
    body.light-mode .buffie-type-card,
    body.light-mode .step-card,
    body.light-mode .stat-big-card,
    body.light-mode .modal-stat,
    body.light-mode .how-card,
    body.light-mode .highlight-card,
    body.light-mode .change-card,
    body.light-mode .shop-card,
    body.light-mode .update-card,
    body.light-mode .feature-pill,
    body.light-mode .brawler-buffie-card,
    body.light-mode .member-block,
    body.light-mode .infobox {
      background: #D4D0CA !important;
      border-color: rgba(0,0,0,.1) !important;
    }

    /* TEXTOS */
    body.light-mode .section-title,
    body.light-mode .art-h2,
    body.light-mode .hero-title,
    body.light-mode .page-title,
    body.light-mode .modal-title,
    body.light-mode .modal-name,
    body.light-mode .modal-skin-name,
    body.light-mode .brawler-name,
    body.light-mode .skin-name,
    body.light-mode .ability-name,
    body.light-mode .how-title,
    body.light-mode .format-card-title,
    body.light-mode .rank-name,
    body.light-mode .map-name,
    body.light-mode .reward-name,
    body.light-mode .syn-title,
    body.light-mode .tip-item,
    body.light-mode h1, body.light-mode h2, body.light-mode h3 {
      color: #1A1A2E !important;
    }

    body.light-mode .art-p,
    body.light-mode .section-desc,
    body.light-mode .page-desc,
    body.light-mode .hero-desc,
    body.light-mode .hero-subtitle,
    body.light-mode .ability-desc,
    body.light-mode .how-desc,
    body.light-mode .format-card-desc,
    body.light-mode .syn-desc,
    body.light-mode .reward-desc,
    body.light-mode .map-tip,
    body.light-mode .lore-p,
    body.light-mode .modal-desc,
    body.light-mode .modal-brawler,
    body.light-mode .modal-class,
    body.light-mode .card-desc,
    body.light-mode .news-excerpt,
    body.light-mode .balance-reason,
    body.light-mode .balance-change,
    body.light-mode .bmc-desc,
    body.light-mode .misc-text,
    body.light-mode .bug-item {
      color: rgba(26,26,46,.65) !important;
    }

    /* BARRAS E BORDERS */
    body.light-mode .stat-bar-wrap,
    body.light-mode .elo-bar-wrap,
    body.light-mode .mstat-bar {
      background: rgba(0,0,0,.08) !important;
    }
    body.light-mode .divider,
    body.light-mode .modal-section-title::after,
    body.light-mode .wiki-h2::after,
    body.light-mode .cat-group-line,
    body.light-mode .mode-group-line,
    body.light-mode .rarity-group-line,
    body.light-mode .section-group-label::after {
      background: rgba(0,0,0,.1) !important;
    }

    /* INPUTS E FILTROS */
    body.light-mode .search-input,
    body.light-mode .filter-tab,
    body.light-mode .theme-tab,
    body.light-mode .sort-select {
      background: rgba(0,0,0,.06) !important;
      border-color: rgba(0,0,0,.12) !important;
      color: #1A1A2E !important;
    }
    body.light-mode .search-input::placeholder { color: rgba(26,26,46,.35) !important; }
    body.light-mode .search-input:focus { border-color: #FF6B00 !important; }

    /* CHIPS E PILLS */
    body.light-mode .hero-pill,
    body.light-mode .map-brawler-chip,
    body.light-mode .ability-tag,
    body.light-mode .modal-extra,
    body.light-mode .req-chip,
    body.light-mode .card-tag,
    body.light-mode .brawler-chip,
    body.light-mode .feature-pill,
    body.light-mode .guia-tag,
    body.light-mode .map-meta-item,
    body.light-mode .skin-source,
    body.light-mode .view-btn {
      background: rgba(0,0,0,.07) !important;
      border-color: rgba(0,0,0,.1) !important;
      color: rgba(26,26,46,.6) !important;
    }

    /* BOXES INFO */
    body.light-mode .wiki-box.tip,
    body.light-mode .info-box.yellow,
    body.light-mode .article-tip,
    body.light-mode .box.warn {
      background: rgba(255,208,0,.1) !important;
      border-color: rgba(255,208,0,.3) !important;
    }
    body.light-mode .wiki-box.info,
    body.light-mode .info-box.blue,
    body.light-mode .box.info {
      background: rgba(59,130,246,.08) !important;
      border-color: rgba(59,130,246,.25) !important;
    }
    body.light-mode .wiki-box.warn,
    body.light-mode .article-warning,
    body.light-mode .box.warn {
      background: rgba(239,68,68,.08) !important;
      border-color: rgba(239,68,68,.2) !important;
    }
    body.light-mode .info-box.green,
    body.light-mode .box.success {
      background: rgba(34,197,94,.08) !important;
      border-color: rgba(34,197,94,.2) !important;
    }

    /* TABELAS */
    body.light-mode .wiki-table th { color: rgba(26,26,46,.4) !important; border-bottom-color: rgba(0,0,0,.1) !important; }
    body.light-mode .wiki-table td { color: rgba(26,26,46,.7) !important; border-bottom-color: rgba(0,0,0,.05) !important; }
    body.light-mode .reqs-table th { color: rgba(26,26,46,.4) !important; border-bottom-color: rgba(0,0,0,.1) !important; }
    body.light-mode .reqs-table td { color: rgba(26,26,46,.7) !important; border-bottom-color: rgba(0,0,0,.05) !important; }

    /* MODAL OVERLAY */
    body.light-mode .modal-overlay,
    body.light-mode .bz-overlay { background: rgba(0,0,0,.6) !important; }
    body.light-mode .bz-modal { background: #E8E4DE !important; border-color: rgba(0,0,0,.1) !important; }
    body.light-mode .bz-input { color: #1A1A2E !important; }
    body.light-mode .bz-input::placeholder { color: rgba(26,26,46,.35) !important; }
    body.light-mode .bz-input-wrap { border-bottom-color: rgba(0,0,0,.08) !important; }
    body.light-mode .bz-item:hover, body.light-mode .bz-item.selected { background: rgba(0,0,0,.06) !important; }
    body.light-mode .bz-item-title { color: #1A1A2E !important; }
    body.light-mode .bz-item-desc { color: rgba(26,26,46,.5) !important; }
    body.light-mode .bz-group-label { color: rgba(26,26,46,.3) !important; }
    body.light-mode .bz-group-label::after { background: rgba(0,0,0,.08) !important; }
    body.light-mode .bz-footer { border-top-color: rgba(0,0,0,.08) !important; color: rgba(26,26,46,.3) !important; }
    body.light-mode .bz-search-trigger { background: rgba(0,0,0,.07) !important; border-color: rgba(0,0,0,.12) !important; color: rgba(26,26,46,.55) !important; }
    body.light-mode .bz-clear { background: rgba(0,0,0,.1) !important; }

    /* FOOTER */
    body.light-mode footer { background: #D4D0CA !important; border-top-color: rgba(0,0,0,.08) !important; }
    body.light-mode .footer-bottom { border-top-color: rgba(0,0,0,.08) !important; }

    /* CURSOR */
    body.light-mode #cursor-ring { border-color: rgba(255,107,0,.5) !important; }

    /* SCROLLBAR */
    body.light-mode ::-webkit-scrollbar { width: 6px; }
    body.light-mode ::-webkit-scrollbar-track { background: #E8E4DE; }
    body.light-mode ::-webkit-scrollbar-thumb { background: rgba(0,0,0,.2); border-radius: 100px; }
  `;

    /* ─── INJETAR CSS ───────────────────────────────────── */
    const styleEl = document.createElement("style");
    styleEl.id = "bz-theme-style";
    styleEl.textContent = lightCSS;
    document.head.appendChild(styleEl);

    /* ─── BOTÃO FLUTUANTE ───────────────────────────────── */
    const btn = document.createElement("button");
    btn.id = "bzThemeBtn";
    btn.title = "Mudar tema";
    btn.setAttribute("aria-label", "Mudar entre tema escuro e claro");
    btn.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 600;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: none;
    background: rgba(255,255,255,.1);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255,255,255,.15);
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform .2s, background .3s, box-shadow .3s;
    cursor: none !important;
    box-shadow: 0 4px 16px rgba(0,0,0,.3);
  `;

    document.body.appendChild(btn);

    /* ─── HOVER ─────────────────────────────────────────── */
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.12)";
        btn.style.boxShadow = "0 6px 20px rgba(0,0,0,.4)";
    });
    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
        btn.style.boxShadow = "0 4px 16px rgba(0,0,0,.3)";
    });

    /* ─── LÓGICA DO TEMA ────────────────────────────────── */
    function applyTheme(theme) {
        if (theme === "light") {
            document.body.classList.add("light-mode");
            btn.textContent = "🌙";
            btn.style.background = "rgba(255,208,0,.15)";
            btn.style.borderColor = "rgba(255,208,0,.3)";
        } else {
            document.body.classList.remove("light-mode");
            btn.textContent = "☀️";
            btn.style.background = "rgba(255,255,255,.1)";
            btn.style.borderColor = "rgba(255,255,255,.15)";
        }
        localStorage.setItem("bz-theme", theme);
    }

    btn.addEventListener("click", () => {
        const current = localStorage.getItem("bz-theme") || "dark";
        applyTheme(current === "dark" ? "light" : "dark");
    });

    /* ─── INIT ──────────────────────────────────────────── */
    const saved = localStorage.getItem("bz-theme") || "dark";
    applyTheme(saved);

})();
