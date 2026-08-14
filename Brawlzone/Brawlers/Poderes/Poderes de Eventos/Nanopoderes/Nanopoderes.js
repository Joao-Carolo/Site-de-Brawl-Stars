const RARITY_LABELS = { starter: "Starter", rare: "Rare", super_rare: "Super Rare", epic: "Epic", mythic: "Mythic", legendary: "Legendary", ultra: "Ultra Legendary" };
const NANO_RARITY_LABELS = { basico: "Básico", aumentado: "Aumentado", cibernetico: "Cibernético", quantico: "Quântico" };

// Array de brawlers com NanoPoderes — preenche os dados quando disponíveis
const NANO_BRAWLERS = [
    {
        name: "Shelly", emoji: "🔫", rarity: "starter", nanoRarity: "basico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Colt", emoji: "🤠", rarity: "rare", nanoRarity: "basico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Nita", emoji: "🐻", rarity: "rare", nanoRarity: "basico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Bull", emoji: "🐂", rarity: "rare", nanoRarity: "basico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Brock", emoji: "🚀", rarity: "rare", nanoRarity: "basico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "El Primo", emoji: "🤼", rarity: "rare", nanoRarity: "basico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Barley", emoji: "🍺", rarity: "rare", nanoRarity: "basico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Poco", emoji: "🎸", rarity: "rare", nanoRarity: "basico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Rosa", emoji: "🌿", rarity: "rare", nanoRarity: "basico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Jessie", emoji: "🤠", rarity: "super_rare", nanoRarity: "basico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Penny", emoji: "🪙", rarity: "super_rare", nanoRarity: "basico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Carl", emoji: "⛏️", rarity: "super_rare", nanoRarity: "basico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Jacky", emoji: "🪨", rarity: "super_rare", nanoRarity: "basico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Gus", emoji: "👻", rarity: "super_rare", nanoRarity: "basico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Darryl", emoji: "🛢️", rarity: "super_rare", nanoRarity: "basico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Rico", emoji: "🤖", rarity: "super_rare", nanoRarity: "basico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Dynamike", emoji: "💣", rarity: "super_rare", nanoRarity: "basico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Tick", emoji: "💥", rarity: "super_rare", nanoRarity: "basico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "8-Bit", emoji: "👾", rarity: "super_rare", nanoRarity: "basico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Emz", emoji: "💅", rarity: "epic", nanoRarity: "aumentado", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Bo", emoji: "🏹", rarity: "epic", nanoRarity: "aumentado", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Piper", emoji: "☂️", rarity: "epic", nanoRarity: "aumentado", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Pam", emoji: "🔧", rarity: "epic", nanoRarity: "aumentado", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Frank", emoji: "🔨", rarity: "epic", nanoRarity: "aumentado", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Bibi", emoji: "🍬", rarity: "epic", nanoRarity: "aumentado", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Bea", emoji: "🐝", rarity: "epic", nanoRarity: "aumentado", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Nani", emoji: "🦾", rarity: "epic", nanoRarity: "aumentado", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Gale", emoji: "🌬️", rarity: "epic", nanoRarity: "aumentado", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Colette", emoji: "📊", rarity: "epic", nanoRarity: "aumentado", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Edgar", emoji: "😤", rarity: "epic", nanoRarity: "aumentado", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Griff", emoji: "🧹", rarity: "epic", nanoRarity: "aumentado", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Ash", emoji: "🗑️", rarity: "epic", nanoRarity: "aumentado", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Lola", emoji: "🎭", rarity: "epic", nanoRarity: "aumentado", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Stu", emoji: "🏎️", rarity: "epic", nanoRarity: "aumentado", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Belle", emoji: "🎯", rarity: "epic", nanoRarity: "aumentado", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Bonnie", emoji: "🦄", rarity: "epic", nanoRarity: "aumentado", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Grom", emoji: "🗿", rarity: "epic", nanoRarity: "aumentado", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Sam", emoji: "⚙️", rarity: "epic", nanoRarity: "aumentado", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Mandy", emoji: "🍭", rarity: "epic", nanoRarity: "aumentado", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Maisie", emoji: "🔋", rarity: "epic", nanoRarity: "aumentado", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Hank", emoji: "🐡", rarity: "epic", nanoRarity: "aumentado", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Pearl", emoji: "🎆", rarity: "epic", nanoRarity: "aumentado", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Angelo", emoji: "💘", rarity: "epic", nanoRarity: "aumentado", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Berry", emoji: "🫐", rarity: "epic", nanoRarity: "aumentado", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Clancy", emoji: "🎩", rarity: "epic", nanoRarity: "aumentado", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Moe", emoji: "🦫", rarity: "epic", nanoRarity: "aumentado", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Juju", emoji: "🌺", rarity: "epic", nanoRarity: "aumentado", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Shade", emoji: "🌫️", rarity: "epic", nanoRarity: "aumentado", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Starr Nova", emoji: "🌟", rarity: "epic", nanoRarity: "aumentado", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Pierce", emoji: "🐚", rarity: "epic", nanoRarity: "aumentado", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Glowbert", emoji: "🐟", rarity: "epic", nanoRarity: "aumentado", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Mortis", emoji: "⚰️", rarity: "mythic", nanoRarity: "cibernetico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Tara", emoji: "🔮", rarity: "mythic", nanoRarity: "cibernetico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Gene", emoji: "🧞", rarity: "mythic", nanoRarity: "cibernetico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Max", emoji: "🏃", rarity: "mythic", nanoRarity: "cibernetico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Mr. P", emoji: "🐧", rarity: "mythic", nanoRarity: "cibernetico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Sprout", emoji: "🌱", rarity: "mythic", nanoRarity: "cibernetico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Byron", emoji: "🧪", rarity: "mythic", nanoRarity: "cibernetico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Lou", emoji: "❄️", rarity: "mythic", nanoRarity: "cibernetico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Squeak", emoji: "🐱", rarity: "mythic", nanoRarity: "cibernetico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Buzz", emoji: "🦈", rarity: "mythic", nanoRarity: "cibernetico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Fang", emoji: "🥋", rarity: "mythic", nanoRarity: "cibernetico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Eve", emoji: "🥚", rarity: "mythic", nanoRarity: "cibernetico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Janet", emoji: "🎤", rarity: "mythic", nanoRarity: "cibernetico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Otis", emoji: "🎨", rarity: "mythic", nanoRarity: "cibernetico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Buster", emoji: "🎬", rarity: "mythic", nanoRarity: "cibernetico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Gray", emoji: "🌀", rarity: "mythic", nanoRarity: "cibernetico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "R-T", emoji: "📡", rarity: "mythic", nanoRarity: "cibernetico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Willow", emoji: "🌸", rarity: "mythic", nanoRarity: "cibernetico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Doug", emoji: "🌭", rarity: "mythic", nanoRarity: "cibernetico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Chuck", emoji: "🚂", rarity: "mythic", nanoRarity: "cibernetico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Charlie", emoji: "🕷️", rarity: "mythic", nanoRarity: "cibernetico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Mico", emoji: "🐒", rarity: "mythic", nanoRarity: "cibernetico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Melodie", emoji: "🎵", rarity: "mythic", nanoRarity: "cibernetico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Lily", emoji: "🌷", rarity: "mythic", nanoRarity: "cibernetico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Lumi", emoji: "🪘", rarity: "mythic", nanoRarity: "cibernetico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Kaze", emoji: "🌊", rarity: "mythic", nanoRarity: "cibernetico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Jae-Yong", emoji: "🎮", rarity: "mythic", nanoRarity: "cibernetico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Kenji", emoji: "⚔️", rarity: "mythic", nanoRarity: "cibernetico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Gigi", emoji: "💐", rarity: "mythic", nanoRarity: "cibernetico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Bolt", emoji: "🌩️", rarity: "mythic", nanoRarity: "cibernetico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Spike", emoji: "🌵", rarity: "legendary", nanoRarity: "quantico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Crow", emoji: "🐦‍⬛", rarity: "legendary", nanoRarity: "quantico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Leon", emoji: "🦁", rarity: "legendary", nanoRarity: "quantico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Sandy", emoji: "🏜️", rarity: "legendary", nanoRarity: "quantico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Amber", emoji: "🔥", rarity: "legendary", nanoRarity: "quantico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Meg", emoji: "🦿", rarity: "legendary", nanoRarity: "quantico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Surge", emoji: "🤩", rarity: "legendary", nanoRarity: "quantico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Chester", emoji: "🎪", rarity: "legendary", nanoRarity: "quantico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Cordelius", emoji: "🍄", rarity: "legendary", nanoRarity: "quantico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Kit", emoji: "😺", rarity: "legendary", nanoRarity: "quantico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Draco", emoji: "🐲", rarity: "legendary", nanoRarity: "quantico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Damian", emoji: "🎤", rarity: "legendary", nanoRarity: "quantico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Sirius", emoji: "🌑", rarity: "ultra", nanoRarity: "quantico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
    {
        name: "Najia", emoji: "🐍", rarity: "ultra", nanoRarity: "quantico", powers: [
            { name: "", desc: "" },
            { name: "", desc: "" },
            { name: "", desc: "" },
        ]
    },
];

let currentFilter = "all", currentSearch = "";

function render() {
    const container = document.getElementById("brawlersContainer");
    container.innerHTML = "";
    const s = currentSearch.toLowerCase().trim();
    const filtered = NANO_BRAWLERS.filter(b => {
        const filterMatch = currentFilter === "all" || b.nanoRarity === currentFilter;
        const searchMatch = s === "" || b.name.toLowerCase().includes(s);
        return filterMatch && searchMatch;
    });

    document.getElementById("resultsInfo").textContent = `${filtered.length} brawler${filtered.length !== 1 ? "s" : ""} encontrado${filtered.length !== 1 ? "s" : ""}`;

    if (filtered.length === 0) {
        document.getElementById("noResults").style.display = "block";
        return;
    }
    document.getElementById("noResults").style.display = "none";

    filtered.forEach(b => {
        const card = document.createElement("div");
        card.className = "brawler-nano-card reveal";

        const powersHtml = b.powers.map((p, i) => `
          <div class="nano-power-card">
            <div class="nano-power-number">Poder ${i + 1}</div>
            ${p.name ? `<div class="nano-power-name">${p.name}</div>` : ""}
            ${p.desc ? `<div class="nano-power-desc">${p.desc}</div>` : `<div class="nano-power-empty">Em breve...</div>`}
          </div>`).join("");

        card.innerHTML = `
          <div class="brawler-nano-header">
            <img class="brawler-nano-img"
              src="../../Imagens/Skins (imagens)/${b.name}/${b.name} Padrão.png"
              alt="${b.name}"
              onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
            <div class="brawler-nano-emoji" style="display:none">${b.emoji}</div>
            <div class="brawler-nano-info">
              <div class="brawler-nano-name">${b.name}</div>
              <div class="brawler-nano-meta">
                <span class="brawler-rarity-pill pill-${b.rarity}">${RARITY_LABELS[b.rarity]}</span>
                <span class="nano-rarity-badge ${b.nanoRarity}">${NANO_RARITY_LABELS[b.nanoRarity]}</span>
              </div>
            </div>
            <div class="brawler-nano-chevron">▼</div>
          </div>
          <div class="brawler-nano-body">
            <div class="nano-powers-grid">${powersHtml}</div>
          </div>`;

        card.querySelector(".brawler-nano-header").addEventListener("click", () => {
            card.classList.toggle("expanded");
        });

        container.appendChild(card);
    });

    const revealObs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.05 });
    document.querySelectorAll(".reveal").forEach(el => revealObs.observe(el));
}

document.querySelectorAll("#nanoFilters .filter-tab").forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelectorAll("#nanoFilters .filter-tab").forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        currentFilter = tab.dataset.filter;
        render();
    });
});

document.getElementById("searchInput").addEventListener("input", e => {
    currentSearch = e.target.value;
    render();
});

/* MOBILE MENU */
function openMobileMenu() { document.getElementById("mobileMenu").classList.add("open"); document.getElementById("mobileOverlay").classList.add("open"); document.body.style.overflow = "hidden"; }
function closeMobileMenu() { document.getElementById("mobileMenu").classList.remove("open"); document.getElementById("mobileOverlay").classList.remove("open"); document.body.style.overflow = ""; }
document.getElementById("hamburger").addEventListener("click", openMobileMenu);
document.getElementById("mobileClose").addEventListener("click", closeMobileMenu);
document.getElementById("mobileOverlay").addEventListener("click", closeMobileMenu);
document.querySelectorAll("#mobileMenu a").forEach(a => a.addEventListener("click", closeMobileMenu));

/* CURSOR */
const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
const cursorEl = document.getElementById("cursor");
const ringEl = document.getElementById("cursor-ring");
if (isTouchDevice) {
    cursorEl.style.display = "none";
    ringEl.style.display = "none";
} else {
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener("mousemove", e => { mx = e.clientX; my = e.clientY; cursorEl.style.left = mx + "px"; cursorEl.style.top = my + "px"; });
    (function anim() { rx += (mx - rx) * .12; ry += (my - ry) * .12; ringEl.style.left = rx + "px"; ringEl.style.top = ry + "px"; requestAnimationFrame(anim); })();
    document.querySelectorAll("a,button,.brawler-nano-header").forEach(el => {
        el.addEventListener("mouseenter", () => { cursorEl.style.width = "20px"; cursorEl.style.height = "20px"; ringEl.style.width = "50px"; ringEl.style.height = "50px"; });
        el.addEventListener("mouseleave", () => { cursorEl.style.width = "12px"; cursorEl.style.height = "12px"; ringEl.style.width = "36px"; ringEl.style.height = "36px"; });
    });
}

render();
