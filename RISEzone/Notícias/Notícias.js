// ==========================================================================
// Project R.I.S.E Zone — News
// Feed de notícias. Por agora só 2 placeholders claramente marcados como
// exemplo (isExample: true) — substituir/expandir assim que a Supercell
// se pronunciar sobre o fim da beta ou sair informação oficial nova.
// ==========================================================================

const RISE_NEWS = [
    {
        id: 1,
        categoria: "beta",
        data: "2 Set 2026",
        titulo: "[Exemplo] Beta fechada termina hoje",
        texto: "Notícia de exemplo — a beta fechada de Project R.I.S.E decorreu entre 19 de agosto e 2 de setembro de 2026. Assim que a Supercell se pronunciar sobre os próximos passos, esta secção será atualizada com informação real.",
        isExample: true,
    },
    {
        id: 2,
        categoria: "jogo",
        data: "Ago 2026",
        titulo: "[Exemplo] Estrutura da página pronta a receber notícias reais",
        texto: "Segundo exemplo, só para mostrar como fica o feed com mais do que uma notícia e categorias diferentes.",
        isExample: true,
    },
];

const RISE_NEWS_CAT_LABELS = {
    beta: "Beta",
    jogo: "Jogo",
    heroi: "Heróis",
    tower: "A Tower",
};

let currentNewsCat = "all";

function buildNewsFilterChips() {
    const wrap = document.getElementById("news-filters");
    if (!wrap) return;
    const cats = [...new Set(RISE_NEWS.map(n => n.categoria))];

    let html = `<button class="news-filter-chip active" data-cat="all">Tudo</button>`;
    cats.forEach(c => {
        html += `<button class="news-filter-chip" data-cat="${c}">${RISE_NEWS_CAT_LABELS[c] || c}</button>`;
    });
    wrap.innerHTML = html;

    wrap.querySelectorAll(".news-filter-chip").forEach(chip => {
        chip.addEventListener("click", () => {
            wrap.querySelectorAll(".news-filter-chip").forEach(c => c.classList.remove("active"));
            chip.classList.add("active");
            currentNewsCat = chip.dataset.cat;
            renderNewsFeed();
        });
    });
}

function buildNewsPostHtml(n) {
    return `
      <div class="news-post" data-cat="${n.categoria}">
        <div class="news-post-header">
          <span class="news-post-cat">${RISE_NEWS_CAT_LABELS[n.categoria] || n.categoria}</span>
          <span class="news-post-date">${n.data}</span>
          ${n.isExample ? `<span class="news-example-badge">Exemplo</span>` : ""}
        </div>
        <h3 class="news-post-title">${n.titulo}</h3>
        <p class="news-post-text">${n.texto}</p>
      </div>`;
}

function renderNewsFeed() {
    const feed = document.getElementById("news-feed");
    const empty = document.getElementById("news-empty");
    if (!feed) return;

    const filtered = RISE_NEWS.filter(n => currentNewsCat === "all" || n.categoria === currentNewsCat);

    if (filtered.length === 0) {
        feed.innerHTML = "";
        if (empty) empty.style.display = "block";
        return;
    }
    if (empty) empty.style.display = "none";

    feed.innerHTML = filtered.map(buildNewsPostHtml).join("");
}

document.addEventListener("DOMContentLoaded", () => {
    buildNewsFilterChips();
    renderNewsFeed();
});