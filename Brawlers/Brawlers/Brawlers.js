/* Brawlers com botões extra na linha «Habilidades» (edita as listas) */
const BRAWLERS_HYPER_BTN = ["Shelly", "Colt", "Bull", "Nita", "Bo", "Leon", "Edgar", "Griff", "Colette"];
const BRAWLERS_COM_BUFFIES = ["Shelly", "Colt", "Spike", "Mortis", "Frank", "Emz", "Leon", "Crow", "Fang", "Edgar", "Stu", "Mico", "Bull", "Nita", "Bibi", "Bo", "Griff", "Colette", "Sandy", "Rosa", "Sprout", "Hank", "Buzz", "Bea", "Brock", "8-Bit", "Darryl"];
const BUFFIE_MACHINE = {
    Shelly: "machine-1", Colt: "machine-1", Spike: "machine-1",
    Mortis: "machine-2", Frank: "machine-2", Emz: "machine-2",
    Bull: "machine-3", Crow: "machine-3", Bibi: "machine-3",
    Bo: "machine-4", Nita: "machine-4", Leon: "machine-4",
    Edgar: "machine-5", Griff: "machine-5", Colette: "machine-5",
};

/* Buffies por brawler (sincroniza com Buffies.html — edita nos dois sítios) */
const BRAWLER_BUFFIES = {
    Shelly: [
        {
            t: "g", desc: "", acessorios: [
                { nome: "Disparada", desc: "Não recebe dano ao correr." },
                { nome: "Pombos de Argila", desc: "Os ataques desaceleram os inimigos. A duração aumenta a cada acerto." },
            ]
        },
        {
            t: "s", desc: "", poderes: [
                { nome: "Xeque-Mate", desc: "Com projéteis testados e aprovados por Draco, Shelly deixa uma área em chamas com o Super." },
                { nome: "Tônico Revigorante", desc: "Aumenta em 15% a velocidade de movimento durante 3 segundos." },
            ]
        },
        { t: "h", nome: "Cano Duplo", desc: "A velocidade do projétil do ataque principal aumenta con; +2s de duração" },
    ],
    Nita: [
        {
            t: "g", desc: "", acessorios: [
                { nome: "Garra de Urso", desc: "O próximo ataque do Bruce causa 50% a mais de dano." },
                { nome: "Pele Protetora", desc: "Nita e o seu urso ficam indestrutíveis por 0,5s." },
            ]
        },
        {
            t: "s", desc: "", poderes: [
                { nome: "Amigo-Urso", desc: "Esta habilidade pode curar Nita ou o urso além do limite de saúde, até o máximo de 2000." },
                { nome: "Urso Hiperativo", desc: "Invocar o urso dá à Nita +25% de velocidade de recarga por 3s." },
            ]
        },
        { t: "h", nome: "HiperUrso", desc: "Os ataques da Nita têm velocidade, amplitude e alcance maiores; +2s de duração" }],
    Colt: [{ t: "g", desc: "Cada bala rouba 1 munição ao inimigo atingido" }, { t: "s", desc: "Slick Boots: mais velocidade em sprint; Magnum Special: mais dano ao longe" }, { t: "h", desc: "Balas ficam mais rápidas durante HC; +2s de duração" }],
    Spike: [{ t: "g", desc: "Popping Pincushion faz raiz nos inimigos se todos os espinhos acertarem" }, { t: "s", desc: "Fertilize cura mais; Curveball aumenta mais a curva dos espinhos" }, { t: "h", desc: "Ataques básicos explodem duas vezes durante HC; +2s de duração" }],
    Mortis: [{ t: "g", desc: "Blood Boomerang: ataque fantasma atinge a mesma área com delay; dash passa atrás do inimigo" }, { t: "s", desc: "Creepy Harvest cura mais por kill; Coiled Snake tem ainda mais alcance" }, { t: "h", desc: "Clone de sombra copia o próximo ataque — dano em dobro em burst; +2s de duração" }],
    Frank: [{ t: "g", desc: "Emite uma onda de choque que destrói projéteis à frente; Power Grab com efeito de bleed" }, { t: "s", desc: "Sponge dá Knockback Resistance; Power Grab aumenta dano por mais tempo" }, { t: "h", desc: "Ataque base aplica stun de 5s durante HC; +2s de duração" }],
    Emz: [{ t: "g", desc: "Friendzoner tem raio maior; stun de 1s em inimigos empurrados pelo Gadget" }, { t: "s", desc: "Bad Karma: slow ainda mais forte; Hype: mais cura por inimigo no Super" }, { t: "h", desc: "Nuvem de veneno fica ativa 2s após a morte de Emz; +2s de duração" }],
    Bull: [{ t: "g", desc: "Clone Projector: pode reativar para trocar de posição com o clone" }, { t: "s", desc: "Lollipop Drop: Leon e aliados movem-se mais rápido na área" }, { t: "h", desc: "Smoke Trails: invisível durante mais tempo; +2s de duração" }],
    Crow: [{ t: "g", desc: "Instapoison regressa a duração do veneno; Slowing Toxin ricocheteiam em alvos próximos" }, { t: "s", desc: "Extra Toxic: veneno mais forte; Carrion Crow: mais dano em alvos com baixo HP" }, { t: "h", desc: "Utility Knives: ataques HC perfuram e voltam com 20% menos dano; +2s duração" }],
    Bibi: [{ t: "g", desc: "Reenergize carrega o Super completamente; Leave n' Weave tem mais usos" }, { t: "s", desc: "Fresh Kicks: mais ricochetes; Corn Paws: velocidade ainda maior no Super" }, { t: "h", desc: "Teen Spirit: lança um segundo ataque menor; +2s de duração" }],
    Bo: [{ t: "g", desc: "T-Bone Injector introduz efeito Bleed; Stomper: stun e slow mais fortes" }, { t: "s", desc: "Tough Guy: imune a dano 0,5s após matar; Berserker: recarga ainda mais rápida" }, { t: "h", desc: "Jaws of Steel: ataque HC destrói mais paredes; +2s de duração" }],
    Leon: [{ t: "g", desc: "Vitamin Booster carrega Home Run bar e cura 60% do dano; Extra Sticky: slow aumenta com tempo" }, { t: "s", desc: "Home Run: +20% dano; Batting Stance: escudo de 5s ao acertar Super" }, { t: "h", desc: "Out of Bounds: ataques HC perfuram e voltam 20% menos dano; +2s duração" }],
    Edgar: [{ t: "g", desc: "Super Totem: aliados ficam com mais alcance perto do totem; Tripwire: minas explodem em área maior" }, { t: "s", desc: "Circling Eagle: Bo dispara uma 4.ª flecha com área maior; Snare a Bear: raiz mais longa" }, { t: "h", desc: "Catch a Bear: minas são invisíveis durante HC; +2s de duração" }],
    Griff: [{ t: "g", desc: "Keep the Change: ataque com mais moedas e Mega Coin ao centro; Business Resilience: Super cura Griff" }, { t: "s", desc: "More Coins: mais largura de ataque e uma linha extra de moedas" }, { t: "h", desc: "Tax Rebate: ataques HC atravessam inimigos; +2s de duração" }],
    Colette: [{ t: "g", desc: "Na-Ah: projétil atravessa paredes; Gotcha: apontável com 3 usos e overheal" }, { t: "s", desc: "Push It: inimigos não podem atacar Colette no final do push; Mass Tax: mais redução de dano" }, { t: "h", desc: "Velocidade de dash aumentada; +2s de duração" }],
};


const BUFFIE_TYPE_LABELS = { g: "Buffie Gadget", s: "Buffie Star Power", h: "Buffie Hyper" };

// PROBLEMA 7 — contagem automática de brawlers por raridade
function buildRarityCounts() {
    const counts = {};
    BRAWLERS.forEach(b => { counts[b.rarity] = (counts[b.rarity] || 0) + 1; });
    const dotColors = { starter: "var(--c-starter)", rare: "var(--c-rare)", super_rare: "var(--c-super)", epic: "var(--c-epic)", mythic: "var(--c-mythic)", legendary: "var(--c-leg)", ultra: "var(--c-ultra)" };
    const container = document.getElementById("rarityCounts");
    RARITY_ORDER.forEach(r => {
        if (!counts[r]) return;
        const pill = document.createElement("div");
        pill.className = "rarity-count-pill";
        pill.innerHTML = `<div class="rarity-dot" style="background:${dotColors[r]}"></div>${RARITY_LABELS[r]}: ${counts[r]}`;
        container.appendChild(pill);
    });
}
buildRarityCounts();

function statColor(v) { return v >= 80 ? "#4ADE80" : v >= 60 ? "var(--yellow)" : v >= 40 ? "var(--orange)" : "#EF4444"; }
let currentFilter = "all", currentSearch = "";
const observer = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }); }, { threshold: 0.05 });

// VARIAVEL DOS MODOS PARA FILTRAR OS BRAWLERS
let currentSort = "rarity-asc";

document.getElementById("sortSelect").addEventListener("change", e => {
    currentSort = e.target.value;
    currentFilter = "all";
    renderFilterTabs();
    renderAll();
});

function renderFilterTabs() {
    const container = document.getElementById("rarityFilters");
    if (currentSort === "class") {
        const classes = [...new Set(BRAWLERS.map(b => b.cls || "Sem Classe"))].sort();
        container.innerHTML = `<button class="filter-tab active" data-filter="all">Todas</button>` +
            classes.map(c => `<button class="filter-tab" data-filter="${c}">${c}</button>`).join("");
    } else if (currentSort === "alpha") {
        const letters = [...new Set(BRAWLERS.map(b => b.name[0].toUpperCase()))].sort();
        container.innerHTML = `<button class="filter-tab active" data-filter="all">Todas</button>` +
            letters.map(l => `<button class="filter-tab" data-filter="${l}">${l}</button>`).join("");
    } else {
        container.innerHTML = `
            <button class="filter-tab active" data-filter="all">Todos</button>
            <button class="filter-tab" data-filter="starter">Starter</button>
            <button class="filter-tab" data-filter="rare">Rare</button>
            <button class="filter-tab" data-filter="super_rare">Super Rare</button>
            <button class="filter-tab" data-filter="epic">Epic</button>
            <button class="filter-tab" data-filter="mythic">Mythic</button>
            <button class="filter-tab" data-filter="legendary">Legendary</button>
            <button class="filter-tab" data-filter="ultra">Ultra Leg.</button>`;
    }
    // Re-attach listeners
    container.querySelectorAll(".filter-tab").forEach(tab => {
        tab.addEventListener("click", () => {
            container.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            currentFilter = tab.dataset.filter;
            renderAll();
        });
    });
}

// COMPARE PAINEL

let compareSlots = [null, null];
let compareMode = false;

function toggleCompareMode() {
    compareMode = !compareMode;
    if (!compareMode) resetCompare();
    document.getElementById("comparePanel").style.display = compareMode ? "block" : "none";
}

function resetCompare() {
    compareSlots = [null, null];
    compareMode = false;
    document.getElementById("comparePanel").style.display = "none";
    document.querySelectorAll(".brawler-card.compare-selected").forEach(c => c.classList.remove("compare-selected"));
}

function selectForCompare(b, card) {
    if (compareSlots[0] && compareSlots[0].name === b.name) return;
    if (compareSlots[1] && compareSlots[1].name === b.name) return;
    if (!compareSlots[0]) {
        compareSlots[0] = b;
    } else if (!compareSlots[1]) {
        compareSlots[1] = b;
    } else {
        document.querySelectorAll(".brawler-card.compare-selected")[0]?.classList.remove("compare-selected");
        compareSlots[0] = compareSlots[1];
        compareSlots[1] = b;
    }
    card.classList.add("compare-selected");
    document.getElementById("comparePanel").style.display = "block";
    renderCompare();
}

function renderCompare() {
    const STATS = ["hp", "dmg", "range", "speed"];
    const STAT_LABELS = { hp: "HP", dmg: "Dano", range: "Alcance", speed: "Velocidade" };

    [0, 1].forEach(i => {
        const slot = document.getElementById(`compareSlot${i + 1}`);
        const b = compareSlots[i];
        if (!b) {
            slot.innerHTML = `<span class="compare-empty">Seleciona um brawler</span>`;
            return;
        }
        const other = compareSlots[i === 0 ? 1 : 0];
        const statsHtml = STATS.map(k => {
            let cls = "draw";
            if (other) {
                if (b[k] > other[k]) cls = "win";
                else if (b[k] < other[k]) cls = "lose";
            }
            return `<div class="compare-stat">
                <span class="compare-stat-label">${STAT_LABELS[k]}</span>
                <span class="compare-stat-val ${cls}">${b[k]}</span>
            </div>`;
        }).join("");
        slot.innerHTML = `
            <div class="compare-brawler-header">
                <img class="compare-brawler-img" src="../Imagens/Skins (imagens)/${b.name}/${b.name} Padrão.png"
                    onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
                <span style="display:none">${b.emoji}</span>
                <div class="compare-brawler-name">${b.name}</div>
            </div>
            ${statsHtml}`;
    });
}

document.getElementById("compareClose").addEventListener("click", resetCompare);

function renderAll() {
    const container = document.getElementById("brawlersContainer");
    container.innerHTML = "";
    const s = currentSearch.toLowerCase().trim();
    const filtered = BRAWLERS.filter(b => {
        const filterMatch = currentFilter === "all" ||
            (currentSort === "class" ? b.cls === currentFilter :
                currentSort === "alpha" ? b.name[0].toUpperCase() === currentFilter :
                    b.rarity === currentFilter);
        const searchMatch = s === "" || b.name.toLowerCase().includes(s);
        return filterMatch && searchMatch;
    });

    if (currentSort === "rarity-desc") {
        filtered.sort((a, b) => RARITY_ORDER.indexOf(b.rarity) - RARITY_ORDER.indexOf(a.rarity));
    } else if (currentSort === "alpha") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (currentSort === "class") {
        filtered.sort((a, b) => a.cls.localeCompare(b.cls));
    }

    if (filtered.length === 0) { document.getElementById("noResults").style.display = "block"; return; }
    document.getElementById("noResults").style.display = "none";

    // Define os grupos e a ordem consoante a ordenação
    let groupOrder, groupLabels, groupColors, getGroupKey;

    if (currentSort === "class") {
        const classes = [...new Set(filtered.map(b => b.cls || "Sem Classe"))].sort();
        groupOrder = classes;
        groupLabels = Object.fromEntries(classes.map(c => [c, c]));
        groupColors = Object.fromEntries(classes.map(c => [c, "rgba(255,255,255,.6)"]));
        getGroupKey = b => b.cls || "Sem Classe";
    } else if (currentSort === "alpha") {
        const letters = [...new Set(filtered.map(b => b.name[0].toUpperCase()))].sort();
        groupOrder = letters;
        groupLabels = Object.fromEntries(letters.map(l => [l, l]));
        groupColors = Object.fromEntries(letters.map(l => [l, "rgba(255,255,255,.6)"]));
        getGroupKey = b => b.name[0].toUpperCase();
    } else {
        const order = currentSort === "rarity-desc" ? [...RARITY_ORDER].reverse() : RARITY_ORDER;
        groupOrder = order;
        groupLabels = RARITY_LABELS;
        groupColors = RARITY_COLORS;
        getGroupKey = b => b.rarity;
    }

    const groups = {};
    groupOrder.forEach(g => { groups[g] = []; });
    filtered.forEach(b => { const key = getGroupKey(b); if (groups[key]) groups[key].push(b); });

    groupOrder.forEach(groupKey => {
        const brawlers = groups[groupKey];
        if (!brawlers || brawlers.length === 0) return;
        const section = document.createElement("div");
        section.className = "rarity-group reveal";
        const color = groupColors[groupKey];
        const label = groupLabels[groupKey];
        section.innerHTML = `<div class="rarity-group-header"><div class="rarity-group-title" style="color:${color}">${label}</div><div class="rarity-group-line"></div><div class="rarity-group-count">${brawlers.length} brawler${brawlers.length > 1 ? "s" : ""}</div></div><div class="grid" id="grid-${groupKey.replace(/\s/g, '-')}"></div>`;
        container.appendChild(section);
        const grid = section.querySelector(`#grid-${groupKey.replace(/\s/g, '-')}`);
        brawlers.forEach((b, i) => {
            const card = document.createElement("div");
            card.className = "brawler-card";
            card.dataset.rarity = b.rarity;
            card.style.transitionDelay = `${i * 0.04}s`;
            card.innerHTML = `${b.isNew ? '<span class="new-badge">NOVO</span>' : ""}
<img 
    src="../Imagens/Skins (imagens)/${b.name}/${b.name} Padrão.png" 
    alt="${b.name}"
    class="brawler-emoji brawler-img"
    onerror="this.style.display='none';this.nextElementSibling.style.display='block'"
>
<div class="brawler-emoji" style="display:none">${b.emoji}</div>
<div class="brawler-name">${b.name}</div>
<div class="rarity-pill ${b.rarity}">${RARITY_LABELS[b.rarity]}</div>
<div class="brawler-class">${b.cls}</div>
<button class="compare-btn" onclick="event.stopPropagation();toggleCompareMode();selectForCompare(${JSON.stringify(b).replace(/"/g, '&quot;')}, this.closest('.brawler-card'))">+ Comparar</button>`;
            card.addEventListener("click", () => {
                if (compareMode) {
                    selectForCompare(b, card);
                } else {
                    openModal(b);
                }
            });
            grid.appendChild(card);
        });
    });
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

let currentBrawler = null, hyperActive = false;
let abilityHyperOn = false, abilityBuffieOn = false;

const HYPER_STATS = {
    "Shelly": [0, 0, 0, 0], "Colt": [0, 0, 0, 0], "Nita": [0, 0, 0, 0], "Bull": [0, 0, 0, 0],
    "Brock": [0, 0, 0, 0], "El Primo": [0, 0, 0, 0], "Barley": [0, 0, 0, 0], "Poco": [0, 0, 0, 0],
    "Rosa": [0, 0, 0, 0], "Penny": [0, 0, 0, 0], "Carl": [0, 0, 0, 0], "Jacky": [0, 0, 0, 0],
    "Darryl": [0, 0, 0, 0], "Rico": [0, 0, 0, 0], "Dynamike": [0, 0, 0, 0], "Tick": [0, 0, 0, 0],
    "8-Bit": [0, 0, 0, 0], "Emz": [0, 0, 0, 0], "Lou": [0, 0, 0, 0], "Bo": [0, 0, 0, 0],
    "Piper": [0, 0, 0, 0], "Pam": [0, 0, 0, 0], "Frank": [0, 0, 0, 0], "Bibi": [0, 0, 0, 0],
    "Bea": [0, 0, 0, 0], "Nani": [0, 0, 0, 0], "Gale": [0, 0, 0, 0], "Colette": [0, 0, 0, 0],
    "Edgar": [0, 0, 0, 0], "Griff": [0, 0, 0, 0], "Ash": [0, 0, 0, 0], "Lola": [0, 0, 0, 0],
    "Stu": [0, 0, 0, 0], "Belle": [0, 0, 0, 0], "Bonnie": [0, 0, 0, 0], "Grom": [0, 0, 0, 0],
    "Sam": [0, 0, 0, 0], "Mandy": [0, 0, 0, 0], "Maisie": [0, 0, 0, 0], "Hank": [0, 0, 0, 0],
    "Pearl": [0, 0, 0, 0], "Angelo": [0, 0, 0, 0], "Berry": [0, 0, 0, 0], "Clancy": [0, 0, 0, 0],
    "Moe": [0, 0, 0, 0], "Juju": [0, 0, 0, 0], "Shade": [0, 0, 0, 0], "Starr Nova": [0, 0, 0, 0],
    "Pierce": [0, 0, 0, 0], "Glowbert": [0, 0, 0, 0], "Mortis": [0, 0, 0, 0], "Tara": [0, 0, 0, 0],
    "Gene": [0, 0, 0, 0], "Max": [0, 0, 0, 0], "Mr. P": [0, 0, 0, 0], "Sprout": [0, 0, 0, 0],
    "Byron": [0, 0, 0, 0], "Squeak": [0, 0, 0, 0], "Buzz": [0, 0, 0, 0], "Fang": [0, 0, 0, 0],
    "Eve": [0, 0, 0, 0], "Janet": [0, 0, 0, 0], "Otis": [0, 0, 0, 0], "Buster": [0, 0, 0, 0],
    "Gray": [0, 0, 0, 0], "R-T": [0, 0, 0, 0], "Willow": [0, 0, 0, 0], "Doug": [0, 0, 0, 0],
    "Chuck": [0, 0, 0, 0], "Charlie": [0, 0, 0, 0], "Mico": [0, 0, 0, 0], "Melodie": [0, 0, 0, 0],
    "Lily": [0, 0, 0, 0], "Kaze": [0, 0, 0, 0], "Jae-Yong": [0, 0, 0, 0], "Kenji": [0, 0, 0, 0],
    "Gigi": [0, 0, 0, 0], "Bolt": [0, 0, 0, 0], "Spike": [0, 0, 0, 0], "Crow": [0, 0, 0, 0],
    "Leon": [0, 0, 0, 0], "Sandy": [0, 0, 0, 0], "Amber": [0, 0, 0, 0], "Meg": [0, 0, 0, 0],
    "Surge": [0, 0, 0, 0], "Chester": [0, 0, 0, 0], "Cordelius": [0, 0, 0, 0], "Kit": [0, 0, 0, 0],
    "Draco": [0, 0, 0, 0], "Lumi": [0, 0, 0, 0], "Gus": [0, 0, 0, 0], "Damian": [0, 0, 0, 0],
    "Sirius": [0, 0, 0, 0], "Najia": [0, 0, 0, 0],
};

const HYPER_MULT = { hp: 1.05, dmg: 1.05, range: 1.00, speed: 1.20 };

function hyperFromBase(b) {
    return {
        hp: Math.round(b.hp * HYPER_MULT.hp),
        dmg: Math.round(b.dmg * HYPER_MULT.dmg),
        range: Math.round(b.range * HYPER_MULT.range),
        speed: Math.round(b.speed * HYPER_MULT.speed),
    };
}

function getHyperStats(b) {
    const h = HYPER_STATS[b.name];
    if (h) {
        const fromMap = { hp: h[0], dmg: h[1], range: h[2], speed: h[3] };
        if (fromMap.hp >= b.hp && fromMap.dmg >= b.dmg) return fromMap;
    }
    return hyperFromBase(b);
}

const IMG_BASE = "../Imagens/Imagens (Poderes de Estrela ou Acessórios)";

function abilityLabelHtml(emoji, imgSrc, labelText) {
    return `<img src="${imgSrc}" alt="" style="width:1rem;height:1rem;object-fit:contain;vertical-align:middle" onerror="this.style.display='none';this.nextElementSibling.style.display='inline'"><span style="display:none">${emoji}</span> ${labelText}`;
}

function setHyperToggleLabel(b) {
    const label = document.getElementById("statsToggleLabel");
    const hyperImg = `${IMG_BASE}/${encodeURIComponent(b.name)}/Hipercarga.png`;
    const fallback = `${IMG_BASE}/Super.png`;
    label.innerHTML = `<img src="${hyperImg}" alt="" style="width:1rem;height:1rem;object-fit:contain;vertical-align:middle;margin-right:.25rem" onerror="this.onerror=null;this.src='${fallback}'"><span style="display:none">⚡</span> Hypercharge`;
}

function buildBuffieCardHtml(bf) {
    const extras = (bf.acessorios || []).map(a =>
        `<div class="buffie-accessory"><div class="buffie-accessory-name">${a.nome}</div><div class="buffie-accessory-desc">${a.desc}</div></div>`
    ).join("");
    const extras2 = (bf.poderes || []).map(a =>
        `<div class="buffie-power"><div class="buffie-power-name">${a.nome}</div><div class="buffie-power-desc">${a.desc}</div></div>`
    ).join("");
    const emojis = { g: "🔧", s: "⭐", h: "💜" };
    return `<div class="ability-card buffie-${bf.t}">
                <div class="ability-label">${emojis[bf.t]} ${BUFFIE_TYPE_LABELS[bf.t]}</div>
                <div class="ability-desc">${bf.desc}${extras}${extras2}</div>
            </div>`;
}

function getBuffieByType(b, type) {
    return BRAWLER_BUFFIES[b.name]?.find(bf => bf.t === type);
}

function buildAbilityCardHtml(a) {
    const title = a.text.split(" — ")[0];
    const desc = a.text.split(" — ").slice(1).join(" — ") || "";
    return `<div class="ability-card"><div class="ability-label" style="display:flex;align-items:center;gap:.3rem">${a.label}</div><div class="ability-name">${title}</div><div class="ability-desc">${desc}</div></div>`;
}

function buildAbilitiesHtml(b, opts = {}) {
    const showHyper = !!opts.showHyper;
    const showBuffies = !!opts.showBuffies;
    let html = "";

    const mainRows = [
        { label: abilityLabelHtml("⚔️", b.attackImg || `${IMG_BASE}/Ataque.png`, "Ataque"), text: b.attack },
        { label: abilityLabelHtml("⚡", b.superImg || `${IMG_BASE}/Super.png`, "Super"), text: b.super },
    ];


    html += mainRows.map(buildAbilityCardHtml).join("");

    const starRows = [["⭐", "Star Power 1", b.sp1], ["⭐", "Star Power 2", b.sp2]];
    const gadgetRows = [["🔧", "Gadget 1", b.g1], ["🔧", "Gadget 2", b.g2]];
    const buildRows = rows => rows.map(([emoji, type, text]) => {
        if (!text || !String(text).trim()) return "";
        const name = text.split(" — ")[0];
        return buildAbilityCardHtml({
            label: abilityLabelHtml(emoji, `${IMG_BASE}/${b.name}/${name}.png`, type),
            text,
        });
    }).join("");

    if (showBuffies && getBuffieByType(b, "g")) {
        const buffieG = getBuffieByType(b, "g");
        html += (buffieG.acessorios || []).map(a => buildAbilityCardHtml({
            label: abilityLabelHtml("🔧", `${IMG_BASE}/${b.name}/${a.nome} (Buffie).png`, a.nome),
            text: `${a.nome} — ${a.desc}`
        })).join("");
    } else {
        html += buildRows(gadgetRows);
    }

    if (showBuffies && getBuffieByType(b, "s")) {
        const buffieS = getBuffieByType(b, "s");
        html += (buffieS.poderes || []).map(a => buildAbilityCardHtml({
            label: abilityLabelHtml("⭐", `${IMG_BASE}/${b.name}/${a.nome} (Buffie).png`, a.nome),
            text: `${a.nome} — ${a.desc}`
        })).join("");
    } else {
        html += buildRows(starRows);
    }

    const buffieHyper = showHyper && showBuffies && getBuffieByType(b, "h");
    if (showHyper) {
        const hyperText = b.hyper || "Hypercharge — Informação em breve.";
        const title = hyperText.split(" — ")[0];
        const desc = hyperText.split(" — ").slice(1).join(" — ") || "";
        const bh = getBuffieByType(b, "h");
        const hyperImg = (showBuffies && bh && bh.nome)
            ? `${IMG_BASE}/${b.name}/${bh.nome} (Buffie).png`
            : `${IMG_BASE}/${encodeURIComponent(b.name)}/Hipercarga.png`;
        if (buffieHyper) {
            html += `<div class="ability-card hyper">
            <div class="ability-label" style="display:flex;align-items:center;gap:.3rem">${abilityLabelHtml("💜", hyperImg, "Hypercharge")}</div>
            <div class="ability-name">${buffieHyper.nome || title}</div>
            <div class="ability-desc">${buffieHyper.desc || desc}</div>
        </div>`;
        } else {
            html += `<div class="ability-card hyper">
            <div class="ability-label" style="display:flex;align-items:center;gap:.3rem">${abilityLabelHtml("💜", hyperImg, "Hypercharge")}</div>
            <div class="ability-name">${title}</div>
            <div class="ability-desc">${desc}</div>
        </div>`;
        }
    }

    if (showBuffies && !getBuffieByType(b, "g") && !getBuffieByType(b, "s") && !getBuffieByType(b, "h")) {
        const anchor = BUFFIE_MACHINE[b.name] ? `Buffies.html#${BUFFIE_MACHINE[b.name]}` : "Buffies.html";
        html += `<div class="ability-card buffie-empty">
                        <div class="ability-label">🦊 Buffies</div>
                        <div class="ability-desc">Ainda sem Buffies registados para ${b.name}.
                            <a href="${anchor}" class="buffie-empty-link">Ver na wiki de Buffies →</a>
                        </div>
                    </div>`;
    }

    return html;
}

function renderModalAbilities() {
    if (!currentBrawler) return;
    document.getElementById("modalAbilities").innerHTML = buildAbilitiesHtml(currentBrawler, {
        showHyper: abilityHyperOn,
        showBuffies: abilityBuffieOn,
    });
}

function updateAbilityToggleUI(type, on) {
    const id = type === "hyper" ? "abilityHyperToggle" : "abilityBuffieToggle";
    const btn = document.getElementById(id);
    const row = btn?.closest(".ability-extra-toggle");
    btn?.classList.toggle("on", on);
    btn?.setAttribute("aria-pressed", on ? "true" : "false");
    row?.classList.toggle("is-on", on);
}

function syncHyperState(on) {
    hyperActive = on;
    const hasHyperBtn = currentBrawler && BRAWLERS_HYPER_BTN.includes(currentBrawler.name);
    if (hasHyperBtn) {
        abilityHyperOn = on;
        updateAbilityToggleUI("hyper", on);
    }
    const statsBtn = document.getElementById("toggleBtn");
    statsBtn?.classList.toggle("on", on);
    statsBtn?.setAttribute("aria-pressed", on ? "true" : "false");
    document.getElementById("statsToggle")?.classList.toggle("hyper-on", on);
    if (currentBrawler) {
        renderStats(currentBrawler, on);
        if (hasHyperBtn) renderModalAbilities();
    }
}

function toggleAbilityHyper() {
    syncHyperState(!abilityHyperOn);
}

function toggleAbilityBuffie() {
    abilityBuffieOn = !abilityBuffieOn;
    updateAbilityToggleUI("buffie", abilityBuffieOn);
    renderModalAbilities();
}

function renderAbilityExtraBtns(b) {
    const wrap = document.getElementById("modalAbilityBtns");
    const showHyper = BRAWLERS_HYPER_BTN.includes(b.name);
    const showBuffie = BRAWLERS_COM_BUFFIES.includes(b.name);
    abilityHyperOn = false;
    abilityBuffieOn = false;
    if (!showHyper && !showBuffie) {
        wrap.hidden = true;
        wrap.innerHTML = "";
        return;
    }
    wrap.hidden = false;
    const hyperImg = `${IMG_BASE}/${encodeURIComponent(b.name)}/Hipercarga.png`;
    const fallbackImg = `${IMG_BASE}/Super.png`;
    let html = "";
    if (showHyper) {
        html += `<div class="ability-extra-toggle ability-extra-toggle-hyper" data-extra="hyper">
                    <span class="ability-extra-label">
                        <img src="${hyperImg}" alt="" onerror="this.onerror=null;this.src='${fallbackImg}'"> Hypercharge
                    </span>
                    <button type="button" class="toggle-btn" id="abilityHyperToggle" aria-pressed="false" aria-label="Alternar Hypercharge"></button>
                </div>`;
    }
    if (showBuffie) {
        html += `<div class="ability-extra-toggle ability-extra-toggle-buffie" data-extra="buffie">
                    <span class="ability-extra-label">🦊 Buffies</span>
                    <button type="button" class="toggle-btn toggle-buffie" id="abilityBuffieToggle" aria-pressed="false" aria-label="Alternar Buffies"></button>
                </div>`;
    }
    wrap.innerHTML = html;

    document.getElementById("abilityHyperToggle")?.addEventListener("click", toggleAbilityHyper);
    document.getElementById("abilityBuffieToggle")?.addEventListener("click", toggleAbilityBuffie);
}

const STAT_MAX = { hp: 15000, dmg: 10000, range: 20, speed: 1200 };
const STAT_UNITS = { hp: "", dmg: "", range: " bl", speed: "" };

function renderStats(b, hyper) {
    const base = { hp: b.hp, dmg: b.dmg, range: b.range, speed: b.speed };
    const hStats = getHyperStats(b);
    const labels = ["HP", "Dano", "Alcance", "Velocidade"];
    const keys = ["hp", "dmg", "range", "speed"];
    document.getElementById("modalStats").innerHTML = keys.map((k, i) => {
        const bv = base[k], hv = hStats[k];
        const delta = hv - bv;
        const bPct = Math.min(100, (bv / STAT_MAX[k]) * 100);
        const hPct = Math.min(100, (hv / STAT_MAX[k]) * 100);
        const curr = hyper ? hv : bv;
        return `<div class="stat-row">
                    <div class="stat-label-text">${labels[i]}</div>
                    <div class="stat-bar-wrap${hyper ? " hyper-active" : ""}">
                        <div class="stat-bar-fill" style="width:${bPct}%;background:${statColor(bPct)}"></div>
                        <div class="stat-bar-hyper" style="width:${hPct}%"></div>
                    </div>
                    <div class="stat-value">${curr}${STAT_UNITS[k]}<span class="hyper-delta">${hyper ? "+" + delta : ""}</span></div>
                </div>`;
    }).join("");
}

function toggleHyper() {
    syncHyperState(!hyperActive);
}

function openModal(b) {
    currentBrawler = b;
    hyperActive = false;
    const toggleBtn = document.getElementById("toggleBtn");
    toggleBtn.classList.remove("on");
    toggleBtn.setAttribute("aria-pressed", "false");
    document.getElementById("statsToggle").classList.remove("hyper-on");
    setHyperToggleLabel(b);
    const color = RARITY_COLORS[b.rarity];
    const modalEmoji = document.getElementById("modalEmoji");
    modalEmoji.innerHTML = `<img 
    src="../Imagens/Skins (imagens)/${b.name}/${b.name} Padrão.png"
    alt="${b.name}"
    style="width:5.5rem;height:5.5rem;object-fit:contain;filter:drop-shadow(0 6px 16px rgba(0,0,0,.5))"
    onerror="this.style.display='none';this.nextElementSibling.style.display='block'"
><span style="display:none">${b.emoji}</span>`
    document.getElementById("modalHeroBg").style.background = `radial-gradient(ellipse 80% 80% at 20% 50%,${color},transparent)`;
    document.getElementById("modalRarityBadge").textContent = RARITY_LABELS[b.rarity];
    document.getElementById("modalRarityBadge").style.cssText = `background:${color}22;border:1px solid ${color}55;color:${color}`;
    document.getElementById("modalName").textContent = b.name;
    document.getElementById("modalClass").textContent = `Classe: ${b.cls}`;
    const lang = getCurrentLang();
    document.getElementById("modalDesc").textContent =
        (typeof b.desc === "object" ? (b.desc[lang] || b.desc.pt) : b.desc);
    abilityHyperOn = false;
    abilityBuffieOn = false;
    renderAbilityExtraBtns(b);
    renderModalAbilities();
    renderStats(b, false);
    document.getElementById("modalModes").innerHTML = b.modes.map((m, i) => `<span class="mode-chip ${i === 0 ? "great" : i === 1 ? "good" : ""}">${i === 0 ? "🏆" : i === 1 ? "✅" : ""} ${m}</span>`).join("");
    document.getElementById("modalActions").innerHTML = `
    <a href="../Skins/Skins.html?brawler=${encodeURIComponent(b.name)}" class="modal-action-btn modal-action-secondary">🎨 Ver todas as skins</a>
    <a href="../Coisas específicas/Brawlers Específicos/${b.name}/${b.name}.html" class="modal-action-btn modal-action-primary">📖 Saber mais →</a>
    ${BRAWLERS_COM_BUFFIES.includes(b.name) ? `<a href="../Buffies/Buffies.html${BUFFIE_MACHINE[b.name] ? "#" + BUFFIE_MACHINE[b.name] : ""}" class="modal-action-btn modal-action-secondary" style="margin-top:.5rem">🦊 Ver Buffies →</a>` : ""}
`;
    document.getElementById("modalOverlay").classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeModal() { document.getElementById("modalOverlay").classList.remove("open"); document.body.style.overflow = ""; }
document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", e => { if (e.target === document.getElementById("modalOverlay")) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

document.querySelectorAll(".filter-tab").forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        currentFilter = tab.dataset.filter;
        renderAll();
    });
});
document.getElementById("searchInput").addEventListener("input", e => { currentSearch = e.target.value; renderAll(); });

// MOBILE MENU — painel lateral
function openMobileMenu() { document.getElementById("mobileMenu").classList.add("open"); document.getElementById("mobileOverlay").classList.add("open"); document.body.style.overflow = "hidden"; }
function closeMobileMenu() { document.getElementById("mobileMenu").classList.remove("open"); document.getElementById("mobileOverlay").classList.remove("open"); document.body.style.overflow = ""; }
document.getElementById("hamburger").addEventListener("click", openMobileMenu);
document.getElementById("mobileClose").addEventListener("click", closeMobileMenu);
document.getElementById("mobileOverlay").addEventListener("click", closeMobileMenu);
document.querySelectorAll("#mobileMenu a").forEach(a => a.addEventListener("click", closeMobileMenu));

// CURSOR — corrigido (sem duplicação)
const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
const cursorEl = document.getElementById("cursor");
const ringEl = document.getElementById("cursor-ring");
if (isTouchDevice) {
    cursorEl.style.display = "none";
    ringEl.style.display = "none";
} else {
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener("mousemove", e => {
        mx = e.clientX; my = e.clientY;
        cursorEl.style.left = mx + "px"; cursorEl.style.top = my + "px";
    });
    (function anim() {
        rx += (mx - rx) * .12; ry += (my - ry) * .12;
        ringEl.style.left = rx + "px"; ringEl.style.top = ry + "px";
        requestAnimationFrame(anim);
    })();
    document.querySelectorAll("a,button,.brawler-card").forEach(el => {
        el.addEventListener("mouseenter", () => { cursorEl.style.width = "20px"; cursorEl.style.height = "20px"; ringEl.style.width = "50px"; ringEl.style.height = "50px"; });
        el.addEventListener("mouseleave", () => { cursorEl.style.width = "12px"; cursorEl.style.height = "12px"; ringEl.style.width = "36px"; ringEl.style.height = "36px"; });
    });
}

renderFilterTabs();
renderAll();