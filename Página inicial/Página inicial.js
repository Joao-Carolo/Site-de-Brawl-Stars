/* ══════════════════════════════
   NOVIDADES — mesmo array do Novidades.html
   Edita aqui para atualizar ambas as páginas
══════════════════════════════ */
const POSTS = [
    { emoji: "🏟️", cor: "orange", tag: "Torneios", data: "3 Mai 2026", titulo: "Brawl Cup 2026 — Equipas confirmadas para Berlim!", excerpt: "FUT Esports, ZETA DIVISION e Tribe Gaming entre as 12 equipas confirmadas para o primeiro grande LAN do BSC 2026.", link: "../Torneios/Torneios.html", destaque: true },
    { emoji: "⚔️", cor: "purple", tag: "Ranked", data: "1 Mai 2026", titulo: "Ranked Temporada 2 — Knockout em destaque", excerpt: "Bea, Finx e Spike como brawlers gratuitos desta temporada. Modo Knockout nos mapas Fontes Fartas e Garganta do Braço Dourado.", link: "../Ranqueado/Ranqueado.html", destaque: false },
    { emoji: "🦸", cor: "red", tag: "Collab", data: "28 Abr 2026", titulo: "My Hero Academia × Brawl Stars — 5 skins épicas", excerpt: "El Primo: All Might, Fang: Deku, Edgar: Bakugo e mais. A primeira collab de anime da história de Brawl Stars!", link: "../Collabs/Collabs/Collabs.html", destaque: false },
    { emoji: "⚙️", cor: "blue", tag: "Update", data: "28 Abr 2026", titulo: "Manutenção 28 Abril — Colette reativada", excerpt: "Bug crítico da Colette corrigido (+4.600 dano extra). Nerfs urgentes ao Damian, Sirius, Bull, Crow, Chester e Najia.", link: "../Notícias/Notícias Atuais/Manutenção 28 de abril.html", destaque: false },
    { emoji: "🌟", cor: "yellow", tag: "Update", data: "28 Abr 2026", titulo: "Notas de Lançamento Abril 2026 — Tudo o que mudou", excerpt: "Damian, Starr Nova, Bolt, Shop Rework, Buffies do Edgar/Colette/Griff e muito mais no maior update do ano.", link: "../Notícias/Notícias Atuais/Notas de lançamento de abril de 2026.html", destaque: false },
];

/* RENDER NOVIDADES */
// Conta quantas vezes cada tag aparece para atribuir índice correto
function renderNews() {
    const grid = document.getElementById("newsGrid");
    const max = 5;
    const posts = POSTS.slice(0, max);
    const tagCount = {};
    grid.innerHTML = posts.map((p, i) => {
        const featured = i === 0;
        tagCount[p.tag] = (tagCount[p.tag] || 0) + 1;
        const imgIndex = tagCount[p.tag];
        const imgPath = `../Notícias/imagens/${p.tag}/${p.titulo}.png`;
        const thumbContent = `
      <img
        src="${imgPath}"
        alt="${p.titulo}"
        style="width:100%;height:100%;object-fit:cover;transition:transform .4s;"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
      >
      <div class="news-thumb-bg ${p.cor}" style="display:none">${p.emoji}</div>`;
        return `<article class="news-card${featured ? " featured" : ""}">
      <div class="news-thumb">
        ${thumbContent}
        <span class="news-tag">${p.tag}</span>
      </div>
      <div class="news-body">
        <p class="news-date">${p.data}</p>
        <h3 class="news-title">${p.titulo}</h3>
        <p class="news-excerpt">${p.excerpt}</p>
        <a href="${p.link}" class="see-all" style="color:var(--orange2);margin-top:.75rem">Ler mais →</a>
      </div>
    </article>`;
    }).join("");
}

/* ══════════════════════════════
BRAWLERS — mesmo array do Brawlers.html
(versão simplificada com os principais)
══════════════════════════════ */
const BRAWLERS_HOME = [
    { name: "Damian", emoji: "🎤", rarity: "mythic", classe: "Tank", novo: true, hp: 11200, dmg: 2400 },
    { name: "Bolt", emoji: "⚡", rarity: "epic", classe: "Tank", novo: true, hp: 5800, dmg: 1200 },
    { name: "Starr Nova", emoji: "🌟", rarity: "mythic", classe: "Assassin", novo: true, hp: 3600, dmg: 960 },
    { name: "Sirius", emoji: "🌑", rarity: "legendary", classe: "Controller", novo: false, hp: 3400, dmg: 1680 },
    { name: "Najia", emoji: "🐍", rarity: "legendary", classe: "Assassin", novo: false, hp: 3360, dmg: 792 },
    { name: "Draco", emoji: "🎸", rarity: "legendary", classe: "Tank", novo: false, hp: 11200, dmg: 700 },
    { name: "Leon", emoji: "🦁", rarity: "legendary", classe: "Assassin", novo: false, hp: 3360, dmg: 696 },
    { name: "Spike", emoji: "🌵", rarity: "legendary", classe: "Damage Dealer", novo: false, hp: 2880, dmg: 744 },
    { name: "Crow", emoji: "🐦‍⬛", rarity: "legendary", classe: "Assassin", novo: false, hp: 2880, dmg: 624 },
    { name: "Mortis", emoji: "⚰️", rarity: "mythic", classe: "Assassin", novo: false, hp: 3360, dmg: 744 },
    { name: "Lumi", emoji: "🥁", rarity: "mythic", classe: "Support", novo: false, hp: 3500, dmg: 460 },
    { name: "Tara", emoji: "🔮", rarity: "mythic", classe: "Support", novo: false, hp: 3360, dmg: 624 },
    { name: "Max", emoji: "⚡", rarity: "mythic", classe: "Support", novo: false, hp: 3360, dmg: 528 },
    { name: "Frank", emoji: "🔨", rarity: "epic", classe: "Tank", novo: false, hp: 7680, dmg: 1560 },
    { name: "Bea", emoji: "🐝", rarity: "epic", classe: "Sniper", novo: false, hp: 2880, dmg: 912 },
    { name: "Piper", emoji: "☂️", rarity: "epic", classe: "Sniper", novo: false, hp: 2880, dmg: 1056 },
    { name: "Bull", emoji: "🐂", rarity: "rare", classe: "Tank", novo: false, hp: 5600, dmg: 940 },
    { name: "Shelly", emoji: "🔫", rarity: "starter", classe: "Damage Dealer", novo: false, hp: 3200, dmg: 680 },
];

const RARITY_COLORS = { starter: "#00C9A7", rare: "#00C9A7", super: "#3B82F6", epic: "#A855F7", mythic: "#EF4444", legendary: "#FFD000" };
const RARITY_LABELS = { starter: "Starter", rare: "Rare", super: "Super Rare", epic: "Epic", mythic: "Mythic", legendary: "Legendary" };

function renderBrawlers(filter = "all") {
    const grid = document.getElementById("brawlersGrid");
    const filtered = BRAWLERS_HOME.filter(b => {
        if (filter === "all") return true;
        if (filter === "novo") return b.novo;
        return b.rarity === filter;
    });
    grid.innerHTML = filtered.map(b => {
        const col = RARITY_COLORS[b.rarity] || "#fff";
        return `<div class="brawler-card" onclick="openBrawlerModal('${b.name}')">
    ${b.novo ? '<span class="brawler-new-badge">NOVO</span>' : ""}
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
    // re-attach cursor listeners
    document.querySelectorAll(".brawler-card").forEach(el => {
        el.addEventListener("mouseenter", () => { if (cursor) { cursor.style.width = "20px"; cursor.style.height = "20px"; ring.style.width = "50px"; ring.style.height = "50px"; } });
        el.addEventListener("mouseleave", () => { if (cursor) { cursor.style.width = "12px"; cursor.style.height = "12px"; ring.style.width = "36px"; ring.style.height = "36px"; } });
    });
}

function openBrawlerModal(name) {
    const b = BRAWLERS_HOME.find(x => x.name === name);
    if (!b) return;
    const col = RARITY_COLORS[b.rarity] || "#fff";
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
    document.getElementById("modalClass").textContent = b.classe;
    document.getElementById("modalRarityBar").style.background = col;
    document.getElementById("modalBody").innerHTML = `
    <div class="modal-row"><span class="modal-row-label">Raridade</span><span class="modal-row-val" style="color:${col}">${RARITY_LABELS[b.rarity] || b.rarity}</span></div>
    <div class="modal-row"><span class="modal-row-label">Classe</span><span class="modal-row-val">${b.classe}</span></div>
    <div class="modal-row"><span class="modal-row-label">HP (PL11)</span><span class="modal-row-val">${b.hp.toLocaleString()}</span></div>
    <div class="modal-row"><span class="modal-row-label">Dano</span><span class="modal-row-val">${b.dmg.toLocaleString()}</span></div>
    ${b.novo ? '<div class="modal-row"><span class="modal-row-label">Estado</span><span class="modal-row-val" style="color:var(--orange)">🆕 Novo!</span></div>' : ""}
    <a href="../Brawlers/Coisas específicas/Brawlers Específicos/${b.name}/${b.name}.html" class="modal-btn">Ver todos os stats →</a>
    <a href="../Brawlers/Skins.html?brawler=${b.name}" class="modal-btn" style="margin-top:.5rem;background:rgba(255,255,255,.07);color:#fff;border:1px solid rgba(255,255,255,.12)">🎨 Ver todas as skins →</a>
    ${BRAWLERS_COM_BUFFIES.includes(b.name) ? `<a href="../Brawlers/Buffies.html#${BUFFIE_MACHINE[b.name]}" class="modal-btn" style="margin-top:.5rem;background:rgba(255,255,255,.07);color:#fff;border:1px solid rgba(255,255,255,.12)">🦊 Ver Buffies →</a>` : ""}
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

/* CURSOR */
const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
let cursor = null, ring = null;
if (!isTouchDevice) {
    cursor = document.getElementById("cursor");
    ring = document.getElementById("cursor-ring");
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener("mousemove", e => { mx = e.clientX; my = e.clientY; cursor.style.left = mx + "px"; cursor.style.top = my + "px"; });
    (function anim() { rx += (mx - rx) * .12; ry += (my - ry) * .12; ring.style.left = rx + "px"; ring.style.top = ry + "px"; requestAnimationFrame(anim); })();
    document.querySelectorAll("a,button,.news-card,.guide-card").forEach(el => {
        el.addEventListener("mouseenter", () => { cursor.style.width = "20px"; cursor.style.height = "20px"; ring.style.width = "50px"; ring.style.height = "50px"; });
        el.addEventListener("mouseleave", () => { cursor.style.width = "12px"; cursor.style.height = "12px"; ring.style.width = "36px"; ring.style.height = "36px"; });
    });
} else {
    document.getElementById("cursor").style.display = "none";
    document.getElementById("cursor-ring").style.display = "none";
}

/* REVEAL */
const reveals = document.querySelectorAll(".reveal");
const revealObs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }); }, { threshold: .1 });
reveals.forEach(el => revealObs.observe(el));

/* MOBILE MENU */
function openMobileMenu() { document.getElementById("mobileMenu").classList.add("open"); document.getElementById("mobileOverlay").classList.add("open"); document.body.style.overflow = "hidden"; }
function closeMobileMenu() { document.getElementById("mobileMenu").classList.remove("open"); document.getElementById("mobileOverlay").classList.remove("open"); document.body.style.overflow = ""; }
document.getElementById("hamburger").addEventListener("click", openMobileMenu);
document.getElementById("mobileClose").addEventListener("click", closeMobileMenu);
document.getElementById("mobileOverlay").addEventListener("click", closeMobileMenu);
document.querySelectorAll("#mobileMenu a").forEach(a => a.addEventListener("click", closeMobileMenu));

/* NAV SCROLL */
window.addEventListener("scroll", () => {
    document.querySelector("nav").style.background = window.scrollY > 50 ? "rgba(13,13,26,.97)" : "rgba(13,13,26,.75)";
});

/* EMAIL */
document.querySelector(".email-btn").addEventListener("click", () => {
    const input = document.querySelector(".email-input");
    if (input.value.includes("@")) { input.value = "✅ Subscrito!"; input.style.color = "var(--teal)"; input.disabled = true; }
    else { input.style.borderColor = "#FF4444"; input.placeholder = "Insere um email válido!"; }
});
/* GUIAS — mesmo array do Guias.html */
const GUIDES = [
    { emoji: "🏆", titulo: "Como subir de rank rapidamente", desc: "Os melhores brawlers para ranked, as melhores estratégias por modo de jogo, e os erros mais comuns que te impedem de subir.", cor: "linear-gradient(90deg,var(--yellow),var(--orange))", linkCor: "var(--yellow)", link: "../Guias/Guias.html" },
    { emoji: "💰", titulo: "Guia F2P — progredir sem gastar", desc: "Maximiza os teus recursos grátis — Starr Drops, Chaos Drops, Brawl Pass gratuito e os melhores brawlers para desbloquear primeiro.", cor: "linear-gradient(90deg,var(--blue),var(--teal))", linkCor: "var(--teal)", link: "../Guias/Guias.html" },
    { emoji: "🦊", titulo: "Buffies — Tudo o que precisas de saber", desc: "O que são, como desbloqueá-los, qual a ordem certa e quais são os melhores Buffies por brawler no meta atual.", cor: "linear-gradient(90deg,var(--pink),var(--orange2))", linkCor: "var(--pink)", link: "../Guias/Guias.html" },
    { emoji: "🗺️", titulo: "Guia de Modos no Ranked", desc: "Gem Grab, Brawl Ball, Knockout — estratégias específicas para cada modo competitivo. Composições ideais e dicas de posicionamento.", cor: "linear-gradient(90deg,#A855F7,var(--blue))", linkCor: "#A855F7", link: "../Guias/Guias.html" },
    { emoji: "💎", titulo: "Guia de Gem Grab", desc: "Regras de ouro do Gem Grab, composições de equipa ideais, controlo do mid e como gerir as gemas em situações de pressão.", cor: "linear-gradient(90deg,var(--teal),#22C55E)", linkCor: "var(--teal)", link: "../Guias/Guias.html" },
    { emoji: "🧠", titulo: "Mentalidade competitiva", desc: "Como evitar o tilt, gerir a derrota, manter foco e desenvolver uma mentalidade de melhoria contínua do Gold ao Mythic.", cor: "linear-gradient(90deg,var(--orange),var(--yellow))", linkCor: "var(--orange)", link: "../Guias/Guias.html" },
];
function renderGuides() {
    const grid = document.getElementById("guidesGrid");
    grid.innerHTML = GUIDES.map((g, i) => {
        const delay = [0, 0.1, 0.2, 0.1, 0.2, 0.3][i] || 0;
        const imgPath = `../Guias/Imagens/${g.titulo}.png`;
        return `<div class="guide-card reveal" style="transition-delay:${delay}s">
            <div class="guide-color-bar" style="background:${g.cor}"></div>
            <div class="guide-body">
                <img
                    src="${imgPath}"
                    alt="${g.titulo}"
                    onerror="this.style.display='none';this.nextElementSibling.style.display='block'"
                >
                <div class="guide-icon" style="display:none">${g.emoji}</div>
                <h3 class="guide-title">${g.titulo}</h3>
                <p class="guide-desc">${g.desc}</p>
                <a href="${g.link}" class="guide-link" style="color:${g.linkCor}">Ler guia →</a>
            </div>
        </div>`;
    }).join("");
    document.querySelectorAll("#guidesGrid .reveal").forEach(el => revealObs.observe(el));
}
/* INIT */
renderNews();
renderBrawlers();
renderGuides();