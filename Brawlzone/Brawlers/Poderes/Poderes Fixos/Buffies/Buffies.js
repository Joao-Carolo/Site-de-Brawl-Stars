/* DADOS DAS MACHINES — gerados automaticamente */
const MACHINES = [
    {
        id: "machine1",
        brawlers: [
            {
                name: "Shelly", rarity: "Starter", buffies: [
                    {
                        t: "g", desc: "", acessorios: [
                            { nome: "Disparada", desc: "Ela também fica imune a dano durante a disparada." },
                            { nome: "Pombos de Argila", desc: "Os ataques desaceleram os inimigos, e cada acerto aumenta o grau de desaceleração." },
                        ]
                    },
                    {
                        t: "s", desc: "", poderes: [
                            { nome: "Xeque-Mate", desc: "Deixa a área em chamas!" },
                            { nome: "Poder 2", desc: "Fica com a velocidade de movimento 15% mais alta por 3 segundos." },
                        ]
                    },
                    { t: "h", desc: "A velocidade do projétil do ataque principal aumenta consideravelmente durante a Hipercarga; +2s de duração" },
                ]
            },
            { name: "Colt", rarity: "Rare", buffies: [{ t: "g", desc: "Cada bala rouba 1 munição ao inimigo atingido" }, { t: "s", desc: "Slick Boots: mais velocidade em sprint; Magnum Special: mais dano ao longe" }, { t: "h", desc: "Balas ficam mais rápidas durante HC; +2s de duração" }] },
            { name: "Spike", rarity: "Legendary", buffies: [{ t: "g", desc: "Popping Pincushion faz raiz nos inimigos se todos os espinhos acertarem" }, { t: "s", desc: "Fertilize cura mais; Curveball aumenta mais a curva dos espinhos" }, { t: "h", desc: "Ataques básicos explodem duas vezes durante HC; +2s de duração" }] },
        ]
    },
    {
        id: "machine2",
        brawlers: [
            { name: "Mortis", rarity: "Mythic", buffies: [{ t: "g", desc: "Blood Boomerang: ataque fantasma atinge a mesma área com delay; dash passa atrás do inimigo" }, { t: "s", desc: "Creepy Harvest cura mais por kill; Coiled Snake tem ainda mais alcance" }, { t: "h", desc: "Clone de sombra copia o próximo ataque — dano em dobro em burst; +2s de duração" }] },
            { name: "Frank", rarity: "Epic", buffies: [{ t: "g", desc: "Emite uma onda de choque que destrói projéteis à frente; Power Grab com efeito de bleed" }, { t: "s", desc: "Sponge dá Knockback Resistance; Power Grab aumenta dano por mais tempo" }, { t: "h", desc: "Ataque base aplica stun de 5s durante HC; +2s de duração" }] },
            { name: "Emz", rarity: "Super Rare", buffies: [{ t: "g", desc: "Friendzoner tem raio maior; stun de 1s em inimigos empurrados pelo Gadget" }, { t: "s", desc: "Bad Karma: slow ainda mais forte; Hype: mais cura por inimigo no Super" }, { t: "h", desc: "Nuvem de veneno fica ativa 2s após a morte de Emz; +2s de duração" }] },
        ]
    },
    {
        id: "machine3",
        brawlers: [
            { name: "Bull", rarity: "Legendary", buffies: [{ t: "g", desc: "Clone Projector: pode reativar para trocar de posição com o clone" }, { t: "s", desc: "Lollipop Drop: Leon e aliados movem-se mais rápido na área" }, { t: "h", desc: "Smoke Trails: invisível durante mais tempo; +2s de duração" }] },
            { name: "Crow", rarity: "Legendary", buffies: [{ t: "g", desc: "Instapoison regressa a duração do veneno; Slowing Toxin ricocheteiam em alvos próximos" }, { t: "s", desc: "Extra Toxic: veneno mais forte; Carrion Crow: mais dano em alvos com baixo HP" }, { t: "h", desc: "Utility Knives: ataques HC perfuram e voltam com 20% menos dano; +2s duração" }] },
            { name: "Bibi", rarity: "Mythic", buffies: [{ t: "g", desc: "Reenergize carrega o Super completamente; Leave n' Weave tem mais usos" }, { t: "s", desc: "Fresh Kicks: mais ricochetes; Corn Paws: velocidade ainda maior no Super" }, { t: "h", desc: "Teen Spirit: lança um segundo ataque menor; +2s de duração" }] },
        ]
    },
    {
        id: "machine4",
        brawlers: [
            { name: "Bo", rarity: "Rare", buffies: [{ t: "g", desc: "T-Bone Injector introduz efeito Bleed; Stomper: stun e slow mais fortes" }, { t: "s", desc: "Tough Guy: imune a dano 0,5s após matar; Berserker: recarga ainda mais rápida" }, { t: "h", desc: "Jaws of Steel: ataque HC destrói mais paredes; +2s de duração" }] },
            {
                name: "Nita", rarity: "Rare", buffies: [{
                    t: "g", desc: "", acessorios: [
                        { nome: "Garra de Urso", desc: "O próximo ataque do Bruce causa 50% a mais de dano." },
                        { nome: "Coração de Urso", desc: "Nita e o seu urso ficam indestrutíveis por 0,5s." },
                    ]
                },
                {
                    t: "s", desc: "", poderes: [
                        { nome: "Amigo-Urso", desc: "Esta habilidade pode curar Nita ou o urso além do limite de saúde, até o máximo de 2000." },
                        { nome: "Urso Hiperativo", desc: "Invocar o urso dá à Nita +25% de velocidade de recarga por 3s." },
                    ]
                },
                { t: "h", desc: "Os ataques da Nita têm velocidade, amplitude e alcance maiores; +2s de duração" }]
            },
            { name: "Leon", rarity: "Epic", buffies: [{ t: "g", desc: "Vitamin Booster carrega Home Run bar e cura 60% do dano; Extra Sticky: slow aumenta com tempo" }, { t: "s", desc: "Home Run: +20% dano; Batting Stance: escudo de 5s ao acertar Super" }, { t: "h", desc: "Out of Bounds: ataques HC perfuram e voltam 20% menos dano; +2s duração" }] },
        ]
    },
    {
        id: "machine5",
        brawlers: [
            { name: "Edgar", rarity: "Epic", buffies: [{ t: "g", desc: "Super Totem: aliados ficam com mais alcance perto do totem; Tripwire: minas explodem em área maior" }, { t: "s", desc: "Circling Eagle: Bo dispara uma 4.ª flecha com área maior; Snare a Bear: raiz mais longa" }, { t: "h", desc: "Catch a Bear: minas são invisíveis durante HC; +2s de duração" }] },
            { name: "Griff", rarity: "Epic", buffies: [{ t: "g", desc: "Keep the Change: ataque com mais moedas e Mega Coin ao centro; Business Resilience: Super cura Griff" }, { t: "s", desc: "More Coins: mais largura de ataque e uma linha extra de moedas" }, { t: "h", desc: "Tax Rebate: ataques HC atravessam inimigos; +2s de duração" }] },
            { name: "Colette", rarity: "Epic", buffies: [{ t: "g", desc: "Na-Ah: projétil atravessa paredes; Gotcha: apontável com 3 usos e overheal" }, { t: "s", desc: "Push It: inimigos não podem atacar Colette no final do push; Mass Tax: mais redução de dano" }, { t: "h", desc: "Velocidade de dash aumentada; +2s de duração" }] },
        ]
    },
];

const BUFFIE_LABELS = { g: "Gadget", s: "Star Power", h: "Hyper" };

function buildBrawlerCard(b) {
    const imgPath = `../Imagens/Skins (imagens)/${b.name}/${b.name} Padrão.png`;
    const buffiesHTML = b.buffies.map(bf => `
    <div class="bbc-buffie ${bf.t}">
        <img src="../Imagens/Imagem Buffies/tipos/${bf.t}.png" alt="${BUFFIE_LABELS[bf.t]}"
    style="width:8px;height:8px;object-fit:contain;flex-shrink:0;margin-top:4px"
    onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
  <div class="bbc-buffie-dot" style="display:none"></div>
        <div>
            <div class="bbc-buffie-label">${BUFFIE_LABELS[bf.t]}</div>
            <div class="bbc-buffie-desc">${bf.desc}</div>
            ${bf.acessorios ? bf.acessorios.map(a => `
                <div style="margin-top:.4rem;padding:.3rem .5rem;border-left:2px solid rgba(34,197,94,.3);margin-left:.5rem">
                    <div style="font-size:.65rem;font-weight:800;color:var(--c-gadget);margin-bottom:.1rem">${a.nome}</div>
                    <div style="font-size:.78rem;color:rgba(255,255,255,.5)">${a.desc}</div>
                </div>`).join("") : ""}
            ${bf.poderes ? bf.poderes.map(a => `
                <div style="margin-top:.4rem;padding:.3rem .5rem;border-left:2px solid rgba(255, 255,0,.3);margin-left:.5rem">
                    <div style="font-size:.65rem;font-weight:800;color:var(--c-star);margin-bottom:.1rem">${a.nome}</div>
                    <div style="font-size:.78rem;color:rgba(255,255,255,.5)">${a.desc}</div>
                </div>`).join("") : ""}
        </div>
    </div>`).join("");
    return `
        <div class="brawler-buffie-card">
          <div class="bbc-header">
            <img class="bbc-img" src="${imgPath}" alt="${b.name}"
              onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
            <div class="bbc-emoji" style="display:none">${getBrawlerEmoji(b.name)}</div>
            <div>
              <div class="bbc-name">${b.name}</div>
              <div class="bbc-rarity">${b.rarity}</div>
            </div>
          </div>
          <div class="bbc-buffies">${buffiesHTML}</div>
        </div>`;
}

function getBrawlerEmoji(name) {
    const emojis = { Shelly: "🔫", Colt: "🤠", Spike: "🌵", Mortis: "⚰️", Frank: "🔨", Emz: "💅", Leon: "🦁", Crow: "🐦‍⬛", Fang: "🥋", Edgar: "😤", Stu: "🏎️", Mico: "🐒", Bull: "🐂", Nita: "🐻", Bibi: "🍬", Bo: "🏹", Griff: "🧹", Colette: "📊", Sandy: "🏜️", Rosa: "🌿", Sprout: "🌱", Hank: "🐡", Buzz: "🦈", Bea: "🐝", Brock: "🚀", "8-Bit": "👾", Darryl: "🛢️" };
    return emojis[name] || "🎮";
}

/* Render todas as machines */
MACHINES.forEach(m => {
    const container = document.getElementById(`${m.id}-brawlers`);
    if (container) container.innerHTML = m.brawlers.map(buildBrawlerCard).join("");
});
/* Filtro por tipo de Buffie */
document.querySelectorAll(".type-filter").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".type-filter").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const type = btn.dataset.type;
        document.querySelectorAll(".bbc-buffie").forEach(el => {
            el.style.display = (type === "all" || el.classList.contains(type)) ? "flex" : "none";
        });
    });
});
document.getElementById("buffieSearch").addEventListener("input", e => {
    const s = e.target.value.toLowerCase().trim();
    document.querySelectorAll(".machine-card").forEach(machine => {
        let visiveis = 0;
        machine.querySelectorAll(".brawler-buffie-card").forEach(card => {
            const name = card.querySelector(".bbc-name").textContent.toLowerCase();
            const visivel = s === "" || name.includes(s);
            card.style.display = visivel ? "block" : "none";
            if (visivel) visiveis++;
        });
        machine.style.display = visiveis === 0 ? "none" : "block";
    });
});

/* REVEAL */
const observer = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }); }, { threshold: 0.05 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

/* SIDEBAR ACTIVE SECTION */
const sections = document.querySelectorAll("section[id], div[id^='machine']");
const navLinks = document.querySelectorAll(".sidebar-nav li a");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
    navLinks.forEach(a => { a.classList.remove("active-sec"); if (a.getAttribute("href") === "#" + current) a.classList.add("active-sec"); });
});

/* MOBILE MENU */
function openMobileMenu() { document.getElementById("mobileMenu").classList.add("open"); document.getElementById("mobileOverlay").classList.add("open"); document.body.style.overflow = "hidden"; }
function closeMobileMenu() { document.getElementById("mobileMenu").classList.remove("open"); document.getElementById("mobileOverlay").classList.remove("open"); document.body.style.overflow = ""; }
document.getElementById("hamburger").addEventListener("click", openMobileMenu);
document.getElementById("mobileClose").addEventListener("click", closeMobileMenu);
document.getElementById("mobileOverlay").addEventListener("click", closeMobileMenu);
document.querySelectorAll("#mobileMenu a").forEach(a => a.addEventListener("click", closeMobileMenu));

/* CURSOR — corrigido (sem duplicação) */
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
    document.querySelectorAll("a,button,.brawler-buffie-card,.how-card,.buffie-type-card").forEach(el => {
        el.addEventListener("mouseenter", () => { cursorEl.style.width = "20px"; cursorEl.style.height = "20px"; ringEl.style.width = "50px"; ringEl.style.height = "50px"; });
        el.addEventListener("mouseleave", () => { cursorEl.style.width = "12px"; cursorEl.style.height = "12px"; ringEl.style.width = "36px"; ringEl.style.height = "36px"; });
    });
}