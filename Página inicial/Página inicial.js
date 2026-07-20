/* ══════════════════════════════
   NOVIDADES — mesmo array do Novidades.html
   Edita aqui para atualizar ambas as páginas
══════════════════════════════ */
const POSTS = [
    { emoji: "🌟", cor: "yellow", tagKey: "post1_tag", data: "27 Jun 2026", tituloKey: "post1_titulo", excerptKey: "post1_excerpt", link: "https://www.youtube.com/watch?v=pgGThZitPis&list=PLTBLax1DE1612clulHb7Ci4JQEVMKoC7x&index=3", destaque: true },
    { emoji: "⚔️", cor: "purple", tagKey: "post2_tag", data: "9 Jul 2026", tituloKey: "post2_titulo", excerptKey: "post2_excerpt", link: "https://www.youtube.com/watch?v=S-8YkBgjFfo", destaque: false },
    { emoji: "🦸", cor: "red", tagKey: "post3_tag", data: "2 Jul 2026", tituloKey: "post3_titulo", excerptKey: "post3_excerpt", link: "https://www.youtube.com/watch?v=A6g3ozZQQQ0", destaque: false },
    { emoji: "🏟️", cor: "orange", tagKey: "post4_tag", data: "2 Jul 2026", tituloKey: "post4_titulo", excerptKey: "post4_excerpt", link: "../Notícias/Notícias Atuais/Mudanças/Mudanças do update 68/Notas de lançamento update 68/Notas de lançamento update 68.html", destaque: false },
    { emoji: "⚙️", cor: "blue", tagKey: "post5_tag", data: "28 Abr 2026", tituloKey: "post5_titulo", excerptKey: "post5_excerpt", link: "../Notícias/Notícias Atuais/Manutenção 28 de abril.html", destaque: false },
];
/* RENDER NOVIDADES */
// Conta quantas vezes cada tag aparece para atribuir índice correto
function renderNews() {
    const grid = document.getElementById("newsGrid");
    const max = 5;
    const posts = POSTS.slice(0, max);
    const lang = getCurrentLang();
    const dict = TRANSLATIONS[lang];
    const dictPt = TRANSLATIONS.pt; // sempre português para os caminhos

    const tagCount = {};
    grid.innerHTML = posts.map((p, i) => {
        const featured = i === 0;
        const tag = dict[p.tagKey] || "";
        const titulo = dict[p.tituloKey] || "";
        const excerpt = dict[p.excerptKey] || "";

        // Usa sempre o português para o caminho da imagem
        const tagPt = dictPt[p.tagKey] || "";
        const tituloPt = dictPt[p.tituloKey] || "";

        tagCount[tagPt] = (tagCount[tagPt] || 0) + 1;
        const imgPath = `../Notícias/imagens/${tagPt}/${tituloPt}.png`;
        const thumbContent = `
      <img
        src="${imgPath}"
        alt="${titulo}"
        style="width:100%;height:100%;object-fit:cover;transition:transform .4s;"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
      >
      <div class="news-thumb-bg ${p.cor}" style="display:none">${p.emoji}</div>`;

        return `<article class="news-card${featured ? " featured" : ""}">
      <div class="news-thumb">
        ${thumbContent}
        <span class="news-tag">${tag}</span>
      </div>
      <div class="news-body">
        <p class="news-date">${p.data}</p>
        <h3 class="news-title">${titulo}</h3>
        <p class="news-excerpt">${excerpt}</p>
        <a href="${p.link}" class="see-all" style="color:var(--orange2);margin-top:.75rem" >${dict.start_novidades_btn_cards}</a>
      </div>
    </article>`;
    }).join("");
}
let currentBrawlerFilter = "all", currentBrawlerSearch = "";

function renderBrawlers(filter = currentBrawlerFilter) {
    currentBrawlerFilter = filter;
    const grid = document.getElementById("brawlersGrid");
    const s = currentBrawlerSearch.toLowerCase().trim();
    const destaque = BRAWLERS.filter(b => BRAWLERS_DESTAQUE.includes(b.name));
    const filtered = destaque.filter(b => {
        const filterMatch = filter === "all" ? true : filter === "novo" ? b.isNew : b.rarity === filter;
        const searchMatch = s === "" || b.name.toLowerCase().includes(s);
        return filterMatch && searchMatch;
    });
    grid.innerHTML = filtered.map((b, i) => {
        const col = RARITY_COLORS[b.rarity] || "#fff";
        return `<div class="brawler-card reveal" onclick="openBrawlerModal('${b.name}')" style="transition-delay:${i * 0.03}s">
    ${b.isNew ? '<span class="brawler-new-badge">NOVO</span>' : ""}
    <img
        src="../Brawlers/Imagens/Skins (imagens)/${b.name}/${b.name} Padrão.png"
        alt="${b.name}"
        class="brawler-img"
        onerror="this.style.display='none';this.nextElementSibling.style.display='block'"
    >
    <div class="brawler-emoji" style="display:none">${b.emoji}</div>
    <div class="brawler-name">${b.name}</div>
    <div class="brawler-rarity rarity-${b.rarity}">${RARITY_LABELS[b.rarity] || b.rarity}</div>
    </div>`;
    }).join("");
    requestAnimationFrame(() => {
        document.querySelectorAll(".brawler-card").forEach(el => el.classList.add("visible"));
    });
    if (filtered.length === 0) {
        showToast("Nenhum brawler encontrado 😅", "info");
    }
}
document.getElementById("brawlerSearch").addEventListener("input", e => {
    currentBrawlerSearch = e.target.value;
    renderBrawlers();
});

function openBrawlerModal(name) {
    const b = BRAWLERS.find(x => x.name === name);
    if (!b) return;
    const col = RARITY_COLORS[b.rarity] || "#fff";

    const lang = getCurrentLang();
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.pt;

    document.getElementById("modalHeroBg").style.background = `radial-gradient(ellipse at center,${col}33,transparent 70%)`;
    const modalEmoji = document.getElementById("modalEmoji");
    modalEmoji.innerHTML = `<img
    src="../Brawlers/Imagens/Skins (imagens)/${b.name}/${b.name} Padrão.png"
    alt="${b.name}"
    style="width:5rem;height:5rem;object-fit:contain;filter:drop-shadow(0 6px 16px rgba(0,0,0,.5))"
    onerror="this.outerHTML='${b.emoji}'"
    >`;
    const BRAWLERS_COM_BUFFIES = ["Shelly", "Colt", "Spike", "Mortis", "Frank", "Emz", "Leon", "Crow", "Fang", "Edgar", "Stu", "Mico", "Bull", "Nita", "Bibi", "Bo", "Griff", "Colette", "Sandy", "Rosa", "Sprout", "Hank", "Buzz", "Bea", "Brock", "8-Bit", "Darryl"];
    const BUFFIE_MACHINE = {
        Shelly: "machine-1", Colt: "machine-1", Spike: "machine-1",
        Mortis: "machine-2", Frank: "machine-2", Emz: "machine-2",
        Bull: "machine-3", Crow: "machine-3", Bibi: "machine-3",
        Bo: "machine-4", Nita: "machine-4", Leon: "machine-4",
        Edgar: "machine-5", Griff: "machine-5", Colette: "machine-5",
    };
    document.getElementById("modalName").textContent = b.name;
    document.getElementById("modalClass").textContent = b.cls;
    document.getElementById("modalRarityBar").style.background = col;

    // Labels traduzíveis
    const labelRaridade = dict.modal_label_raridade || "Raridade";
    const labelClasse = dict.modal_label_classe || "Classe";
    const labelHp = dict.modal_label_hp || "HP (PL11)";
    const labelDano = dict.modal_label_dano || "Dano";
    const labelEstado = dict.modal_label_estado || "Estado";
    const labelNovo = dict.modal_label_novo || "🆕 Novo!";
    const btnStats = dict.modal_btn_stats || "Ver todos os stats →";
    const btnSkins = dict.modal_btn_skins || "🎨 Ver todas as skins →";
    const btnBuffies = dict.modal_btn_buffies || "🦊 Ver Buffies →";

    document.getElementById("modalBody").innerHTML = `
    <div class="modal-row"><span class="modal-row-label">${labelRaridade}</span><span class="modal-row-val" style="color:${col}">${RARITY_LABELS[b.rarity] || b.rarity}</span></div>
    <div class="modal-row"><span class="modal-row-label">${labelClasse}</span><span class="modal-row-val">${b.cls}</span></div>
    <div class="modal-row"><span class="modal-row-label">${labelHp}</span><span class="modal-row-val">${b.hp.toLocaleString()}</span></div>
    <div class="modal-row"><span class="modal-row-label">${labelDano}</span><span class="modal-row-val">${b.dmg.toLocaleString()}</span></div>
    ${b.isNew ? `<div class="modal-row"><span class="modal-row-label">${labelEstado}</span><span class="modal-row-val" style="color:var(--orange)">${labelNovo}</span></div>` : ""}
    <a href="../Brawlers/Coisas específicas/Brawlers Específicos/${b.name}.html" class="modal-btn">${btnStats}</a>
    <a href="../Brawlers/Skins/Skins.html?brawler=${b.name}" class="modal-btn" style="margin-top:.5rem;background:rgba(255,255,255,.07);color:#fff;border:1px solid rgba(255,255,255,.12)">${btnSkins}</a>
    ${BRAWLERS_COM_BUFFIES.includes(b.name) ? `<a href="../Brawlers/Poderes/Poderes Fixos/Buffies/Buffies.html#${BUFFIE_MACHINE[b.name]}" class="modal-btn" style="margin-top:.5rem;background:rgba(255,255,255,.07);color:#fff;border:1px solid rgba(255,255,255,.12)">${btnBuffies}</a>` : ""}
`;
    document.getElementById("modalOverlay").classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeModal() { document.getElementById("modalOverlay").classList.remove("open"); document.body.style.overflow = ""; }
document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", e => { if (e.target === document.getElementById("modalOverlay")) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

/* FILTROS BRAWLERS */
document.querySelectorAll("#brawlerTabs .filter-tab").forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelectorAll("#brawlerTabs .filter-tab").forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        renderBrawlers(tab.dataset.r);
    });
});

/* EMAIL — Formspree */
document.getElementById("newsletterForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const input = form.querySelector(".email-input");
    const btn = form.querySelector(".email-btn");

    if (!input.value.includes("@")) {
        showToast("Insere um email válido!", "error");
        input.style.borderColor = "#FF4444";
        return;
    }

    btn.disabled = true;
    const originalBtnText = btn.textContent;
    btn.textContent = "A enviar...";

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: { "Accept": "application/json" }
        });

        if (response.ok) {
            showToast("Inscrito com sucesso! 🎉", "success");
            input.value = "✅ Subscrito!";
            input.style.color = "var(--teal)";
            input.disabled = true;
            btn.textContent = "Feito!";
        } else {
            showToast("Erro! Tenta novamente.", "error");
            btn.disabled = false;
            btn.textContent = originalBtnText;
        }
    } catch (error) {
        showToast("Erro de ligação!", "error");
        btn.disabled = false;
        btn.textContent = originalBtnText;
    }
});
/* GUIAS — mesmo array do Guias.html */
const GUIDES = [
    { emoji: "🏆", tituloKey: "guide1_titulo", descKey: "guide1_desc", cor: "linear-gradient(90deg,var(--yellow),var(--orange))", linkCor: "var(--yellow)", link: "../Guias/Guias.html" },
    { emoji: "💰", tituloKey: "guide2_titulo", descKey: "guide2_desc", cor: "linear-gradient(90deg,var(--blue),var(--teal))", linkCor: "var(--teal)", link: "../Guias/Guias.html" },
    { emoji: "🦊", tituloKey: "guide3_titulo", descKey: "guide3_desc", cor: "linear-gradient(90deg,var(--pink),var(--orange2))", linkCor: "var(--pink)", link: "../Guias/Guias.html" },
    { emoji: "🗺️", tituloKey: "guide4_titulo", descKey: "guide4_desc", cor: "linear-gradient(90deg,#A855F7,var(--blue))", linkCor: "#A855F7", link: "../Guias/Guias.html" },
    { emoji: "💎", tituloKey: "guide5_titulo", descKey: "guide5_desc", cor: "linear-gradient(90deg,var(--teal),#22C55E)", linkCor: "var(--teal)", link: "../Guias/Guias.html" },
    { emoji: "🧠", tituloKey: "guide6_titulo", descKey: "guide6_desc", cor: "linear-gradient(90deg,var(--orange),var(--yellow))", linkCor: "var(--orange)", link: "../Guias/Guias.html" },
];
function renderGuides() {
    const grid = document.getElementById("guidesGrid");
    const lang = getCurrentLang();
    const dict = TRANSLATIONS[lang];
    const dictPt = TRANSLATIONS.pt;

    grid.innerHTML = GUIDES.map((g, i) => {
        const delay = [0, 0.1, 0.2, 0.1, 0.2, 0.3][i] || 0;
        const titulo = dict[g.tituloKey] || "";
        const desc = dict[g.descKey] || "";
        const tituloPt = dictPt[g.tituloKey] || "";
        const imgPath = `../Guias/Imagens/${tituloPt}.png`;
        return `<div class="guide-card reveal" style="transition-delay:${delay}s">
            <div class="guide-color-bar" style="background:${g.cor}"></div>
            <div class="guide-body">
                <img
                    src="${imgPath}"
                    alt="${titulo}"
                    onerror="this.style.display='none';this.nextElementSibling.style.display='block'"
                >
                <div class="guide-icon" style="display:none">${g.emoji}</div>
                <h3 class="guide-title">${titulo}</h3>
                <p class="guide-desc">${desc}</p>
                <a href="${g.link}" class="guide-link" style="color:${g.linkCor}">${dict.guide_link_text}</a>
            </div>
        </div>`;
    }).join("");
    document.querySelectorAll("#guidesGrid .reveal").forEach(el => revealObs.observe(el));
}
// Atualiza o contador de brawlers na página inicial
function updateBrawlersCount() {
    const el = document.getElementById("brawlersCount");
    if (el) el.textContent = `${BRAWLERS.length} Brawlers`;
}
/* INIT */
renderNews();
renderBrawlers();
renderGuides();
updateBrawlersCount();
const brawlersGrid = document.getElementById("brawlersGrid");
brawlersGrid.addEventListener("mouseover", e => {
    const card = e.target.closest(".brawler-card");
    if (!card || !cursor) return;
    cursor.style.width = "20px";
    cursor.style.height = "20px";
    ring.style.width = "50px";
    ring.style.height = "50px";
});
brawlersGrid.addEventListener("mouseout", e => {
    const card = e.target.closest(".brawler-card");
    if (!card || !cursor) return;
    cursor.style.width = "12px";
    cursor.style.height = "12px";
    ring.style.width = "36px";
    ring.style.height = "36px";
});