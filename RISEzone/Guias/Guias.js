// ==========================================================================
// Project R.I.S.E Zone — Guides
// Array de guias. Por agora só 2 placeholders claramente marcados como
// exemplo (isExample: true) — substituir/expandir quando houver conteúdo
// real escrito para o jogo.
// ==========================================================================

const GUIDES = [
    {
        id: 1,
        categoria: "geral",
        dificuldade: "facil",
        titulo: "[Exemplo] Como jogar em equipa na Tower",
        desc: "Guia de exemplo — a estrutura desta página já está pronta para receber guias reais assim que houver mais informação confirmada sobre o jogo.",
        isExample: true,
    },
    {
        id: 2,
        categoria: "progressao",
        dificuldade: "medio",
        titulo: "[Exemplo] Prioridades de progressão na beta",
        desc: "Segundo guia de exemplo, só para mostrar como fica a grid com mais do que um cartão e categorias diferentes.",
        isExample: true,
    },
];

const GUIDES_CAT_LABELS = {
    geral: "Geral",
    progressao: "Progressão",
    herois: "Heróis",
    tower: "A Tower",
};

const GUIDES_DIFF_LABELS = {
    facil: "Fácil",
    medio: "Médio",
    dificil: "Difícil",
};

let currentGuideCat = "all";
let currentGuideSearch = "";

function buildGuidesFilterTabs() {
    const wrap = document.getElementById("guides-filters");
    if (!wrap) return;
    const cats = [...new Set(GUIDES.map(g => g.categoria))];

    let html = `<button class="guides-filter-tab active" data-cat="all">Todos</button>`;
    cats.forEach(c => {
        html += `<button class="guides-filter-tab" data-cat="${c}">${GUIDES_CAT_LABELS[c] || c}</button>`;
    });
    wrap.innerHTML = html;

    wrap.querySelectorAll(".guides-filter-tab").forEach(tab => {
        tab.addEventListener("click", () => {
            wrap.querySelectorAll(".guides-filter-tab").forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            currentGuideCat = tab.dataset.cat;
            renderGuides();
        });
    });
}

function buildGuideCardHtml(g, delayIndex) {
    const diffClass = g.dificuldade === "facil" ? "diff-facil" : g.dificuldade === "dificil" ? "diff-dificil" : "diff-medio";
    return `
      <div class="guide-card" style="animation-delay:${delayIndex * 0.05}s">
        <div class="guide-card-top"></div>
        <div class="guide-card-body">
          <div class="guide-card-metas">
            <span class="guide-difficulty ${diffClass}">${GUIDES_DIFF_LABELS[g.dificuldade] || g.dificuldade}</span>
            <span class="guide-difficulty" style="background:rgba(240,230,255,.06);color:var(--rise-text-muted)">${GUIDES_CAT_LABELS[g.categoria] || g.categoria}</span>
            ${g.isExample ? `<span class="guide-example-badge">Exemplo</span>` : ""}
          </div>
          <h3 class="guide-card-title">${g.titulo}</h3>
          <p class="guide-card-desc">${g.desc}</p>
          <span class="guide-card-link">Ler guia →</span>
        </div>
      </div>`;
}

function renderGuides() {
    const content = document.getElementById("guides-content");
    const noResults = document.getElementById("guides-no-results");
    const resultsInfo = document.getElementById("guides-results-info");
    if (!content) return;

    const s = currentGuideSearch.toLowerCase().trim();
    const filtered = GUIDES.filter(g => {
        const catMatch = currentGuideCat === "all" || g.categoria === currentGuideCat;
        const searchMatch = s === "" || g.titulo.toLowerCase().includes(s) || g.desc.toLowerCase().includes(s);
        return catMatch && searchMatch;
    });

    if (resultsInfo) {
        resultsInfo.textContent = `${filtered.length} guia${filtered.length !== 1 ? "s" : ""} encontrado${filtered.length !== 1 ? "s" : ""}`;
    }

    if (filtered.length === 0) {
        content.innerHTML = "";
        if (noResults) noResults.style.display = "block";
        return;
    }
    if (noResults) noResults.style.display = "none";

    content.innerHTML = `<div class="guides-grid">${filtered.map((g, i) => buildGuideCardHtml(g, i)).join("")}</div>`;
}

document.addEventListener("DOMContentLoaded", () => {
    buildGuidesFilterTabs();
    renderGuides();

    const searchInput = document.getElementById("guidesSearch");
    if (searchInput) {
        searchInput.addEventListener("input", e => {
            currentGuideSearch = e.target.value;
            renderGuides();
        });
    }
});