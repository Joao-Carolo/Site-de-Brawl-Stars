// ==========================================================================
// Project RISE Zone — Heróis
// Grid agrupada por classe, filtros, pesquisa e modal de detalhe.
// Dados vêm de HEROIS (Gerais/Constantes/Project RISE Zone/Herois.js)
// ==========================================================================

let currentClassFilter = "all";
let currentSearch = "";

function getHerois() {
    return typeof HEROIS !== "undefined" ? HEROIS : [];
}

function isHeroiConhecido(h) {
    return !!(h && h.nome);
}

function buildFilterTabs() {
    const wrap = document.getElementById("herois-filters");
    if (!wrap) return;
    const herois = getHerois();
    const classes = [...new Set(herois.filter(isHeroiConhecido).map(h => h.classe).filter(Boolean))].sort();

    let html = `<button class="herois-filter-tab active" data-classe="all">Todos</button>`;
    classes.forEach(c => {
        html += `<button class="herois-filter-tab" data-classe="${c}">${c}</button>`;
    });
    wrap.innerHTML = html;

    wrap.querySelectorAll(".herois-filter-tab").forEach(tab => {
        tab.addEventListener("click", () => {
            wrap.querySelectorAll(".herois-filter-tab").forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            currentClassFilter = tab.dataset.classe;
            renderHerois();
        });
    });
}

function heroInitial(h) {
    return h.nome ? h.nome.charAt(0) : "?";
}

function buildHeroCardHtml(h, delayIndex) {
    const conhecido = isHeroiConhecido(h);
    const cls = conhecido ? "" : "hero-card-unknown";
    const badge = h.isStarter ? `<div class="hero-card-badge">Starter</div>` : "";
    const nome = h.nome || "Por revelar";
    const classe = h.classe || "";
    const familia = h.familia || "";
    return `
      <div class="hero-card ${cls}" style="animation-delay:${delayIndex * 0.04}s" data-hero-nome="${nome}">
        ${badge}
        <div class="hero-card-img">${heroInitial(h)}</div>
        <p class="hero-card-name">${nome}</p>
        ${classe ? `<p class="hero-card-class">${classe}</p>` : ""}
        ${familia ? `<p class="hero-card-family">${familia}</p>` : ""}
      </div>`;
}

function renderHerois() {
    const content = document.getElementById("herois-content");
    const noResults = document.getElementById("herois-no-results");
    const resultsInfo = document.getElementById("herois-results-info");
    if (!content) return;

    const herois = getHerois();
    const s = currentSearch.toLowerCase().trim();

    const filtered = herois.filter(h => {
        const classMatch = currentClassFilter === "all" || h.classe === currentClassFilter;
        const searchMatch = s === "" || (h.nome && h.nome.toLowerCase().includes(s)) || (h.familia && h.familia.toLowerCase().includes(s));
        return classMatch && searchMatch;
    });

    if (resultsInfo) {
        resultsInfo.textContent = `${filtered.length} herói${filtered.length !== 1 ? "s" : ""} encontrado${filtered.length !== 1 ? "s" : ""}`;
    }

    if (filtered.length === 0) {
        content.innerHTML = "";
        if (noResults) noResults.style.display = "block";
        return;
    }
    if (noResults) noResults.style.display = "none";

    // Agrupar: conhecidos por classe, depois "Por revelar" no fim
    const conhecidos = filtered.filter(isHeroiConhecido);
    const porRevelar = filtered.filter(h => !isHeroiConhecido(h));

    const classes = [...new Set(conhecidos.map(h => h.classe).filter(Boolean))].sort();
    let html = "";
    let cardIndex = 0;

    classes.forEach(classe => {
        const grupo = conhecidos.filter(h => h.classe === classe);
        if (!grupo.length) return;
        html += `
      <div class="herois-group">
        <div class="herois-group-header">
          <div class="herois-group-title">${classe}</div>
          <div class="herois-group-line"></div>
          <div class="herois-group-count">${grupo.length} herói${grupo.length !== 1 ? "s" : ""}</div>
        </div>
        <div class="herois-grid">
          ${grupo.map(h => buildHeroCardHtml(h, cardIndex++)).join("")}
        </div>
      </div>`;
    });

    // Heróis sem classe atribuída (conhecidos)
    const semClasse = conhecidos.filter(h => !h.classe);
    if (semClasse.length) {
        html += `
      <div class="herois-group">
        <div class="herois-group-header">
          <div class="herois-group-title">Outros</div>
          <div class="herois-group-line"></div>
          <div class="herois-group-count">${semClasse.length} herói${semClasse.length !== 1 ? "s" : ""}</div>
        </div>
        <div class="herois-grid">
          ${semClasse.map(h => buildHeroCardHtml(h, cardIndex++)).join("")}
        </div>
      </div>`;
    }

    if (porRevelar.length) {
        html += `
      <div class="herois-group">
        <div class="herois-group-header">
          <div class="herois-group-title">Por revelar</div>
          <div class="herois-group-line"></div>
          <div class="herois-group-count">${porRevelar.length} herói${porRevelar.length !== 1 ? "s" : ""}</div>
        </div>
        <div class="herois-grid">
          ${porRevelar.map(h => buildHeroCardHtml(h, cardIndex++)).join("")}
        </div>
      </div>`;
    }

    content.innerHTML = html;

    // Attach click handlers para abrir o modal
    content.querySelectorAll(".hero-card").forEach(card => {
        card.addEventListener("click", () => {
            const nome = card.dataset.heroNome;
            const h = herois.find(x => (x.nome || "Por revelar") === nome);
            if (h) openHeroModal(h);
        });
    });
}

function openHeroModal(h) {
    const overlay = document.getElementById("heroModalOverlay");
    if (!overlay) return;

    const conhecido = isHeroiConhecido(h);
    document.getElementById("heroModalImg").textContent = heroInitial(h);
    document.getElementById("heroModalName").textContent = h.nome || "Por revelar";

    const tagsWrap = document.getElementById("heroModalTags");
    let tagsHtml = "";
    if (h.classe) tagsHtml += `<span class="hero-modal-tag">${h.classe}</span>`;
    if (h.familia) tagsHtml += `<span class="hero-modal-tag">${h.familia}</span>`;
    if (h.isStarter) tagsHtml += `<span class="hero-modal-tag">Starter</span>`;
    tagsWrap.innerHTML = tagsHtml;

    const body = document.getElementById("heroModalBody");
    const rows = [
        { label: "Família", value: h.familia },
        { label: "Classe", value: h.classe },
        { label: "Habilidade", value: h.habilidade },
        { label: "Ultimate", value: h.ultimate },
    ];
    body.innerHTML = rows.map(r => `
      <div class="hero-modal-row">
        <div class="hero-modal-row-label">${r.label}</div>
        <div class="hero-modal-row-value${r.value ? "" : " unknown"}">${r.value || "Informação ainda por confirmar"}</div>
      </div>
    `).join("");

    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeHeroModal() {
    const overlay = document.getElementById("heroModalOverlay");
    if (!overlay) return;
    overlay.classList.remove("open");
    document.body.style.overflow = "";
}

function updateHeaderCount() {
    const el = document.getElementById("herois-header-count");
    if (el) el.textContent = getHerois().length;
    const conhecidosEl = document.getElementById("herois-header-conhecidos");
    if (conhecidosEl) conhecidosEl.textContent = getHerois().filter(isHeroiConhecido).length;
}

document.addEventListener("DOMContentLoaded", () => {
    updateHeaderCount();
    buildFilterTabs();
    renderHerois();

    const searchInput = document.getElementById("heroisSearch");
    if (searchInput) {
        searchInput.addEventListener("input", e => {
            currentSearch = e.target.value;
            renderHerois();
        });
    }

    const closeBtn = document.getElementById("heroModalClose");
    if (closeBtn) closeBtn.addEventListener("click", closeHeroModal);

    const overlay = document.getElementById("heroModalOverlay");
    if (overlay) {
        overlay.addEventListener("click", e => {
            if (e.target === overlay) closeHeroModal();
        });
    }

    document.addEventListener("keydown", e => {
        if (e.key === "Escape") closeHeroModal();
    });
});