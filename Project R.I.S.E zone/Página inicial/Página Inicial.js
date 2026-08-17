// ==========================================================================
// Project R.I.S.E Zone — Página Inicial
// Render dos cards de Heróis a partir de HEROIS (Gerais/Constantes/Project R.I.S.E Zone/Herois.js)
// ==========================================================================

function renderHeroesGrid() {
    const grid = document.getElementById("rise-heroes-grid");
    const countEl = document.getElementById("rise-hero-count");
    if (!grid) return;

    // HEROIS é definido em Herois.js. Se ainda não existir, mostra placeholder.
    const herois = typeof HEROIS !== "undefined" ? HEROIS : [];

    if (countEl) countEl.textContent = herois.length || "6";

    if (!herois.length) {
        grid.innerHTML = `
      <div class="rise-hero-card rise-hero-card-unknown">
        <div class="rise-hero-card-img">?</div>
        <p class="rise-hero-card-name">Em breve</p>
        <p class="rise-hero-card-family">Dados a preencher</p>
      </div>
    `;
        return;
    }

    grid.innerHTML = herois.map(heroi => {
        const conhecido = heroi.classe && heroi.familia;
        const inicial = heroi.nome ? heroi.nome.charAt(0) : "?";

        return `
      <div class="rise-hero-card ${conhecido ? "" : "rise-hero-card-unknown"}">
        <div class="rise-hero-card-img">${inicial}</div>
        <p class="rise-hero-card-name">${heroi.nome || "Por revelar"}</p>
        ${heroi.classe ? `<p class="rise-hero-card-class">${heroi.classe}</p>` : ""}
        ${heroi.familia ? `<p class="rise-hero-card-family">${heroi.familia}</p>` : ""}
      </div>
    `;
    }).join("");
}

document.addEventListener("DOMContentLoaded", renderHeroesGrid);