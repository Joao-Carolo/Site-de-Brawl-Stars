/* ═══════════════════════════════════════════════════════
   BrawlZone — Pesquisa Global
   Como usar: adiciona no <head> de cada página:
   <link rel="stylesheet" href="[caminho]/pesquisa.css">
   e no fim do <body>:
   <script src="[caminho]/pesquisa.js"></script>

   O caminho muda conforme a pasta onde estás:
   - Raiz:                  pesquisa.js
   - Brawlers/:             ../pesquisa.js
   - Brawlers Específicos/: ../../pesquisa.js
   - Temporadas/:           ../pesquisa.js
   - Guias/:                ../pesquisa.js
   - Notícias/:             ../pesquisa.js
   - Notícias Atuais/:      ../../pesquisa.js
   - Notícias Antigas/:     ../../pesquisa.js
═══════════════════════════════════════════════════════ */

/* ─── BASE PATH ─────────────────────────────────────────
   Detecta automaticamente o caminho relativo para a raiz
   com base no pathname atual.
──────────────────────────────────────────────────────── */
(function () {
    const path = window.location.pathname;
    const depth = (path.match(/\//g) || []).length - 1;
    const base = depth <= 1 ? "./" : "../".repeat(depth - 1);

    /* ─── DADOS ──────────────────────────────────────────
       Adiciona aqui novos items quando criares páginas novas.
       Cada item tem: tipo, emoji, título, desc, tags[], link
    ──────────────────────────────────────────────────────*/
    const DATABASE = [

        // ── BRAWLERS ──────────────────────────────────────
        { tipo: "brawler", emoji: "🔫", titulo: "Shelly", desc: "Starter · Damage Dealer · Escopeta de cartuchos", tags: ["shelly", "starter", "damage dealer"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🤠", titulo: "Colt", desc: "Rare · Damage Dealer · 6 balas em linha reta", tags: ["colt", "rare", "damage dealer", "cowboy"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🐻", titulo: "Nita", desc: "Rare · Damage Dealer · Invoca Bruce o urso", tags: ["nita", "rare", "urso", "bruce"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🐂", titulo: "Bull", desc: "Rare · Tank · Escopeta dupla e carga", tags: ["bull", "rare", "tank"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🚀", titulo: "Brock", desc: "Rare · Damage Dealer · Rockets de longo alcance", tags: ["brock", "rare", "damage dealer", "rocket"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🤼", titulo: "El Primo", desc: "Rare · Tank · Luchador com salto poderoso", tags: ["el primo", "rare", "tank", "luchador"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🍺", titulo: "Barley", desc: "Rare · Support · Garrafas inflamáveis por paredes", tags: ["barley", "rare", "support", "thrower"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🎸", titulo: "Poco", desc: "Rare · Support · Músico curandeiro", tags: ["poco", "rare", "support", "cura"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🌿", titulo: "Rosa", desc: "Rare · Tank · Escudo de folhas", tags: ["rosa", "rare", "tank"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🪙", titulo: "Penny", desc: "Super Rare · Support · Canhão pirata", tags: ["penny", "super rare", "support", "pirata"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "⛏️", titulo: "Carl", desc: "Super Rare · Damage Dealer · Picão bumerangue", tags: ["carl", "super rare", "damage dealer", "picao"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🪨", titulo: "Jacky", desc: "Super Rare · Tank · Broca de rocha", tags: ["jacky", "super rare", "tank"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🛢️", titulo: "Darryl", desc: "Super Rare · Tank · Barril rolante", tags: ["darryl", "super rare", "tank", "barril"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🤖", titulo: "Rico", desc: "Super Rare · Damage Dealer · Balas ricocheteantes", tags: ["rico", "super rare", "damage dealer", "ricochet"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "💣", titulo: "Dynamike", desc: "Super Rare · Damage Dealer · Dinamite artillery", tags: ["dynamike", "super rare", "damage dealer", "thrower"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "💥", titulo: "Tick", desc: "Super Rare · Damage Dealer · Minas explosivas", tags: ["tick", "super rare", "damage dealer", "mina"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "👾", titulo: "8-Bit", desc: "Super Rare · Damage Dealer · Turret de boost", tags: ["8-bit", "8bit", "super rare", "damage dealer", "arcade"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "💅", titulo: "Emz", desc: "Super Rare · Control · Spray tóxico e slow", tags: ["emz", "super rare", "control", "slow"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "❄️", titulo: "Lou", desc: "Super Rare · Control · Gelo e freeze", tags: ["lou", "super rare", "control", "gelo", "freeze"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🏹", titulo: "Bo", desc: "Epic · Damage Dealer · Flechas e minas invisíveis", tags: ["bo", "epic", "damage dealer", "minas"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "☂️", titulo: "Piper", desc: "Epic · Sniper · Dano por distância", tags: ["piper", "epic", "sniper"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🔧", titulo: "Pam", desc: "Epic · Support · Turret de cura", tags: ["pam", "epic", "support", "cura"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🔨", titulo: "Frank", desc: "Epic · Tank · Martelo com stun em área", tags: ["frank", "epic", "tank", "stun"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🍬", titulo: "Bibi", desc: "Epic · Tank · Taco e knockback", tags: ["bibi", "epic", "tank", "knockback", "baseball"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🐝", titulo: "Bea", desc: "Epic · Sniper · Slow e abelhas", tags: ["bea", "epic", "sniper", "slow", "abelha"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🤖", titulo: "Nani", desc: "Epic · Damage Dealer · Peep teleguiado", tags: ["nani", "epic", "damage dealer", "peep"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🌬️", titulo: "Gale", desc: "Epic · Support · Knockback de neve", tags: ["gale", "epic", "support", "knockback"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "📊", titulo: "Colette", desc: "Epic · Damage Dealer · Dano % do HP máximo", tags: ["colette", "epic", "damage dealer"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "😤", titulo: "Edgar", desc: "Epic · Assassin · Cura ao atacar", tags: ["edgar", "epic", "assassin", "cura"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🧹", titulo: "Griff", desc: "Epic · Damage Dealer · Moedas e notas", tags: ["griff", "epic", "damage dealer", "moedas"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🗑️", titulo: "Ash", desc: "Epic · Tank · Gato de lixo furioso", tags: ["ash", "epic", "tank", "gato"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🎭", titulo: "Lola", desc: "Epic · Damage Dealer · Clone espelhado Ego", tags: ["lola", "epic", "damage dealer", "clone", "ego"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🏎️", titulo: "Stu", desc: "Epic · Assassin · Kart e rastro de fogo", tags: ["stu", "epic", "assassin", "kart"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🤠", titulo: "Belle", desc: "Epic · Sniper · Marca alvos para mais dano", tags: ["belle", "epic", "sniper", "marca"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🦄", titulo: "Bonnie", desc: "Epic · Damage Dealer · Canhão e modo melee", tags: ["bonnie", "epic", "damage dealer", "canhao", "clyde"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🗿", titulo: "Grom", desc: "Epic · Artillery · Projéteis em arco extremo", tags: ["grom", "epic", "artillery", "arco"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "⚙️", titulo: "Sam", desc: "Epic · Tank · Luva magnética", tags: ["sam", "epic", "tank", "luva", "magnetico"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🍭", titulo: "Mandy", desc: "Epic · Sniper · Alcance infinito no foco", tags: ["mandy", "epic", "sniper", "foco", "caramelo"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "⚡", titulo: "Maisie", desc: "Epic · Damage Dealer · Plasma acumulado", tags: ["maisie", "epic", "damage dealer", "plasma"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🐡", titulo: "Hank", desc: "Epic · Tank · Peixe-balão explosivo", tags: ["hank", "epic", "tank", "peixe"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🎆", titulo: "Pearl", desc: "Epic · Damage Dealer · Chamas progressivas", tags: ["pearl", "epic", "damage dealer", "fogo"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🏹", titulo: "Angelo", desc: "Epic · Sniper · Anjo arqueiro que flutua", tags: ["angelo", "epic", "sniper", "anjo"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🫐", titulo: "Berry", desc: "Epic · Support · Cura pelos projéteis", tags: ["berry", "epic", "support", "cura", "baga"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🎩", titulo: "Clancy", desc: "Epic · Damage Dealer · Evolui em 3 estágios", tags: ["clancy", "epic", "damage dealer", "estagios"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🦫", titulo: "Moe", desc: "Epic · Tank · Castor que escava túneis", tags: ["moe", "epic", "tank", "castor", "tunel"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🌺", titulo: "Juju", desc: "Epic · Artillery · Três ataques elementais", tags: ["juju", "epic", "artillery", "elemental"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "👻", titulo: "Shade", desc: "Epic · Assassin · Fantasma que atravessa paredes", tags: ["shade", "epic", "assassin", "fantasma", "parede"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🌟", titulo: "Starr Nova", desc: "Epic · Damage Dealer · Tema cósmico e estelar", tags: ["starr nova", "epic", "damage dealer", "cosmico"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🐚", titulo: "Pierce", desc: "Epic · Damage Dealer · Tiros perfurantes e conchas", tags: ["pierce", "epic", "damage dealer", "concha"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🐟", titulo: "Glowbert", desc: "Epic · Support · Feixe de luz que liga aliados", tags: ["glowbert", "epic", "support", "luz"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "⚰️", titulo: "Mortis", desc: "Mythic · Assassin · Dashes e cura ao eliminar", tags: ["mortis", "mythic", "assassin", "dash"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🔮", titulo: "Tara", desc: "Mythic · Support · Buraco negro que atrai inimigos", tags: ["tara", "mythic", "support", "buraco negro"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🧞", titulo: "Gene", desc: "Mythic · Support · Mão que puxa inimigos", tags: ["gene", "mythic", "support", "mao"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "⚡", titulo: "Max", desc: "Mythic · Support · A mais rápida · Sprint da equipa", tags: ["max", "mythic", "support", "velocidade", "sprint"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🎩", titulo: "Mr. P", desc: "Mythic · Support · Porteiros robôs e mala", tags: ["mr p", "mrp", "mythic", "support", "porteiro"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🌱", titulo: "Sprout", desc: "Mythic · Artillery · Sementes e paredes de arbustos", tags: ["sprout", "mythic", "artillery", "parede"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🧪", titulo: "Byron", desc: "Mythic · Support · Cura aliados e dana inimigos", tags: ["byron", "mythic", "support", "cura"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🐱", titulo: "Squeak", desc: "Mythic · Artillery · Slime explosivo", tags: ["squeak", "mythic", "artillery", "slime", "gato"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🦈", titulo: "Buzz", desc: "Mythic · Tank · Guarda-vidas que stuna", tags: ["buzz", "mythic", "tank", "stun", "guardalvidas"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🥋", titulo: "Fang", desc: "Mythic · Assassin · Chutes em cadeia", tags: ["fang", "mythic", "assassin", "chute", "cadeia"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🥚", titulo: "Eve", desc: "Mythic · Damage Dealer · Ovos com mini aliados", tags: ["eve", "mythic", "damage dealer", "ovos"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🎤", titulo: "Janet", desc: "Mythic · Damage Dealer · Voa sobre o campo", tags: ["janet", "mythic", "damage dealer", "voa", "cantora"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🎨", titulo: "Otis", desc: "Mythic · Control · Silencia inimigos", tags: ["otis", "mythic", "control", "silencia", "graffiti"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🎬", titulo: "Buster", desc: "Mythic · Tank · Absorve e devolve projéteis", tags: ["buster", "mythic", "tank", "escudo"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🌀", titulo: "Gray", desc: "Mythic · Support · Portais para a equipa", tags: ["gray", "mythic", "support", "portal"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "📡", titulo: "R-T", desc: "Mythic · Tank · Dois modos: cabeça e corpo", tags: ["r-t", "rt", "mythic", "tank", "robot"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🌸", titulo: "Willow", desc: "Mythic · Control · Controla inimigos com charme", tags: ["willow", "mythic", "control", "charme"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🌭", titulo: "Doug", desc: "Mythic · Support · Cachorros-quentes curativos", tags: ["doug", "mythic", "support", "cachorro", "cura"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🚂", titulo: "Chuck", desc: "Mythic · Damage Dealer · Carris e velocidade", tags: ["chuck", "mythic", "damage dealer", "comboio", "carril"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🕷️", titulo: "Charlie", desc: "Mythic · Control · Casulo que captura inimigos", tags: ["charlie", "mythic", "control", "casulo", "aranha"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🐒", titulo: "Mico", desc: "Mythic · Assassin · Macaco com stacks de velocidade", tags: ["mico", "mythic", "assassin", "macaco"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🎵", titulo: "Melodie", desc: "Mythic · Assassin · Notas musicais em órbita", tags: ["melodie", "mythic", "assassin", "notas", "musica"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🌷", titulo: "Lily", desc: "Mythic · Assassin · Invisível e troca de lugar", tags: ["lily", "mythic", "assassin", "invisivel"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🌊", titulo: "Kaze", desc: "Mythic · Control · Ninja do vento", tags: ["kaze", "mythic", "control", "vento", "ninja"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🎮", titulo: "Jae-Yong", desc: "Mythic · Damage Dealer · Gamer profissional", tags: ["jae yong", "jaeyong", "mythic", "damage dealer", "gamer"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "⚔️", titulo: "Kenji", desc: "Mythic · Assassin · Samurai que bloqueia projéteis", tags: ["kenji", "mythic", "assassin", "samurai", "katana"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "💐", titulo: "Gigi", desc: "Mythic · Support · Bailarina invulnerável no Super", tags: ["gigi", "mythic", "support", "bailarina"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "⚡", titulo: "Bolt", desc: "Mythic · Damage Dealer · Raios elétricos · Update 67", tags: ["bolt", "mythic", "damage dealer", "eletrico", "raio"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🌵", titulo: "Spike", desc: "Legendary · Damage Dealer · Espinhos em área", tags: ["spike", "legendary", "damage dealer", "espinhos", "cacto"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🐦‍⬛", titulo: "Crow", desc: "Legendary · Assassin · Veneno e velocidade", tags: ["crow", "legendary", "assassin", "veneno", "corvo"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🦁", titulo: "Leon", desc: "Legendary · Assassin · Invisibilidade", tags: ["leon", "legendary", "assassin", "invisivel"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🏜️", titulo: "Sandy", desc: "Legendary · Control · Tempestade de areia", tags: ["sandy", "legendary", "control", "areia", "tempestade"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🔥", titulo: "Amber", desc: "Legendary · Damage Dealer · Cuspe de fogo", tags: ["amber", "legendary", "damage dealer", "fogo"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🤖", titulo: "Meg", desc: "Legendary · Tank · Robô gigante", tags: ["meg", "legendary", "tank", "robo", "meca"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🤩", titulo: "Surge", desc: "Legendary · Damage Dealer · Evolui 4 estágios", tags: ["surge", "legendary", "damage dealer", "dj", "estagios"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🎪", titulo: "Chester", desc: "Legendary · Damage Dealer · 5 Supers aleatórios", tags: ["chester", "legendary", "damage dealer", "palhaço", "super"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🍄", titulo: "Cordelius", desc: "Legendary · Control · Reino das sombras", tags: ["cordelius", "legendary", "control", "cogumelo", "sombra"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "😺", titulo: "Kit", desc: "Legendary · Support · Salta para aliados", tags: ["kit", "legendary", "support", "gato"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🎸", titulo: "Draco", desc: "Legendary · Tank · Guitarrista dragão", tags: ["draco", "legendary", "tank", "dragao", "guitarra", "madevil"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🥁", titulo: "Lumi", desc: "Legendary · Support · Baterista do MadEvil Manor", tags: ["lumi", "legendary", "support", "bateria", "madevil"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "👻", titulo: "Gus", desc: "Legendary · Support · Escudos para a equipa", tags: ["gus", "legendary", "support", "escudo"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🌑", titulo: "Sirius", desc: "Ultra Legendary · Controller · Vilão de Starr Park", tags: ["sirius", "ultra legendary", "controller", "sombra"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🐍", titulo: "Najia", desc: "Ultra Legendary · Assassin · Cobras e veneno", tags: ["najia", "ultra legendary", "assassin", "cobra"], link: "Brawlers/Brawlers.html" },
        { tipo: "brawler", emoji: "🎤", titulo: "Damian", desc: "Legendary · Tank · Vocalista do MadEvil Manor · #102", tags: ["damian", "legendary", "tank", "vocalista", "madevil", "metal"], link: "Brawlers/Brawlers Específicos/Damian.html" },

        // ── NOTÍCIAS ──────────────────────────────────────
        { tipo: "noticia", emoji: "🎤", titulo: "Damian chegou ao jogo!", desc: "O 102.º Brawler · Mythic Tank · MadEvil Manor", tags: ["damian", "mythic", "brawler", "madevil", "lançamento"], link: "Brawlers/Brawlers Específicos/Damian.html" },
        { tipo: "noticia", emoji: "🔮", titulo: "Mudanças no Bling, Shop e Cosméticos", desc: "Rework completo à Shop · Bling Bundles · Update 67", tags: ["bling", "shop", "cosmético", "update", "bundles"], link: "Notícias/Notícias Atuais/Mudanças nos blings.html" },
        { tipo: "noticia", emoji: "❤️‍🔥", titulo: "Keep Brawl Alive — Evento terminado", desc: "Evento comunitário · Buffie grátis · 100K Gems diários", tags: ["evento", "keep brawl alive", "gratis", "buffie", "gems"], link: "Notícias/Notícias Antigas/Keep Brawl Alive.html" },

        // ── GUIAS ─────────────────────────────────────────
        { tipo: "guia", emoji: "🏅", titulo: "Como subir de Rank rapidamente", desc: "Ranked · Brawlers certos · Posicionamento · Mentalidade", tags: ["ranked", "rank", "subir", "competitivo", "guia"], link: "Guias/Guias.html" },
        { tipo: "guia", emoji: "🗺️", titulo: "Guia de Modos no Ranked", desc: "Gem Grab · Brawl Ball · Knockout · Estratégias", tags: ["modos", "ranked", "gem grab", "brawl ball", "knockout", "guia"], link: "Guias/Guias.html" },
        { tipo: "guia", emoji: "💰", titulo: "Guia F2P — progredir sem gastar", desc: "Starr Drops · Brawl Pass gratuito · Recursos grátis", tags: ["f2p", "gratis", "progressao", "coins", "guia"], link: "Guias/Guias.html" },
        { tipo: "guia", emoji: "🦊", titulo: "Guia de Buffies", desc: "Como desbloquear · Ordem certa · Melhores Buffies do meta", tags: ["buffie", "guia", "claw machine", "progressao"], link: "Guias/Guias.html" },
        { tipo: "guia", emoji: "🌵", titulo: "Guia de Spike", desc: "Build ideal · Modos · Posicionamento · Dicas avançadas", tags: ["spike", "guia", "legendary", "damage dealer", "build"], link: "Guias/Guias.html" },
        { tipo: "guia", emoji: "💀", titulo: "Guia de Mortis", desc: "Dashes · Timing · Matchups · Build recomendada", tags: ["mortis", "guia", "mythic", "assassin", "dash", "build"], link: "Guias/Guias.html" },
        { tipo: "guia", emoji: "🌑", titulo: "Guia de Sirius", desc: "Sistema de sombras · Super · Modos ideais", tags: ["sirius", "guia", "ultra legendary", "sombra", "controller"], link: "Guias/Guias.html" },
        { tipo: "guia", emoji: "💎", titulo: "Guia de Gem Grab", desc: "Regras de ouro · Composição de equipa · Controlo do mid", tags: ["gem grab", "guia", "modo", "estrategia"], link: "Guias/Guias.html" },
        { tipo: "guia", emoji: "⚽", titulo: "Guia de Brawl Ball", desc: "Passe · Golo · Posicionamento · Brawlers recomendados", tags: ["brawl ball", "guia", "modo", "estrategia", "golo"], link: "Guias/Guias.html" },
        { tipo: "guia", emoji: "🎯", titulo: "Guia de Knockout", desc: "Sobreviver · Eliminar · Gestão de round", tags: ["knockout", "guia", "modo", "estrategia", "competitivo"], link: "Guias/Guias.html" },
        { tipo: "guia", emoji: "📈", titulo: "Como ganhar Trofeus rapidamente", desc: "Especialização · Eventos · Brawlers certos", tags: ["trofeus", "guia", "progressao", "subir"], link: "Guias/Guias.html" },
        { tipo: "guia", emoji: "🧠", titulo: "Mentalidade competitiva — Gold ao Mythic", desc: "Tilt · Ownership · Ciclo de melhoria", tags: ["mentalidade", "ranked", "mythic", "guia", "competitivo"], link: "Guias/Guias.html" },

        // ── UPDATES ───────────────────────────────────────
        { tipo: "update", emoji: "🎤", titulo: "Update 67 — Brawl Talk Abril 2026", desc: "Damian · Bolt · Starr Nova · Shop Rework · Buffies · Electric Callboy", tags: ["update 67", "brawl talk", "damian", "bolt", "starr nova", "2026"], link: "Temporadas/Temporadas.html" },
        { tipo: "update", emoji: "🏆", titulo: "Update 66 — Prestige!", desc: "Sirius · Najia · Ultra Legendary · Loaded Showdown", tags: ["update 66", "prestige", "sirius", "najia", "ultra legendary"], link: "Temporadas/Temporadas.html" },
        { tipo: "update", emoji: "🦊", titulo: "Update 65 — Buffies!", desc: "Sistema de Buffies · Pierce · Glowbert · Chaos Drops", tags: ["update 65", "buffies", "pierce", "glowbert"], link: "Temporadas/Temporadas.html" },
        { tipo: "update", emoji: "👾", titulo: "Update 64 — Stranger Things!", desc: "Collab Netflix · Gigi · Upside Showdown · Mechmas", tags: ["update 64", "stranger things", "gigi", "netflix", "collab"], link: "Temporadas/Temporadas.html" },
        { tipo: "update", emoji: "🏟️", titulo: "Update 63 — Brawl Arena!", desc: "Novo modo · Kenji · Jae-Yong · Ranked melhorado", tags: ["update 63", "brawl arena", "kenji", "jae yong"], link: "Temporadas/Temporadas.html" },
        { tipo: "update", emoji: "🎸", titulo: "Update 61 — MadEvil Manor!", desc: "Draco · Lumi · Larry & Lawrie · Tema Heavy Metal", tags: ["update 61", "madevil", "draco", "lumi", "larry lawrie"], link: "Temporadas/Temporadas.html" },

        // ── BUFFIES ───────────────────────────────────────
        { tipo: "buffie", emoji: "🦊", titulo: "Buffies — Sistema completo", desc: "Claw Machines · Tipos · Como obter · Por brawler", tags: ["buffies", "claw machine", "gadget", "star power", "hypercharge"], link: "Brawlers/Buffies.html" },
        { tipo: "buffie", emoji: "🤠", titulo: "Ranger Ranch Claw Machine", desc: "Shelly · Colt · Spike · Mortis · Frank · Emz", tags: ["ranger ranch", "buffie", "shelly", "colt", "spike", "mortis", "frank", "emz"], link: "Brawlers/Buffies.html" },
        { tipo: "buffie", emoji: "💀", titulo: "Mortis' Mortuary Claw Machine", desc: "Leon · Crow · Fang · Edgar · Stu · Mico", tags: ["mortuary", "buffie", "leon", "crow", "fang", "edgar", "stu", "mico"], link: "Brawlers/Buffies.html" },
        { tipo: "buffie", emoji: "🐂", titulo: "Bull's Diner Claw Machine", desc: "Bull · Nita · Bibi · Bo · Griff · Colette", tags: ["bull diner", "buffie", "bull", "nita", "bibi", "bo", "griff", "colette"], link: "Brawlers/Buffies.html" },
        { tipo: "buffie", emoji: "🌿", titulo: "Rumble Jungle Claw Machine", desc: "Sandy · Rosa · Sprout · Hank · Buzz · Bea", tags: ["rumble jungle", "buffie", "sandy", "rosa", "sprout", "hank", "buzz", "bea"], link: "Brawlers/Buffies.html" },
        { tipo: "buffie", emoji: "🕹️", titulo: "Arcade Trio Claw Machine", desc: "Brock · 8-Bit · Darryl — Update 67", tags: ["arcade trio", "buffie", "brock", "8-bit", "darryl", "update 67"], link: "Brawlers/Buffies.html" },

        // ── SKINS ─────────────────────────────────────────
        { tipo: "skin", emoji: "🎨", titulo: "Todas as Skins", desc: "700+ skins · Filtros por raridade · Temas · Preços", tags: ["skins", "cosmetico", "rare", "epic", "legendary", "mythic"], link: "Brawlers/Skins.html" },
        { tipo: "skin", emoji: "🤘", titulo: "Skins MadEvil Manor", desc: "Draco · Lumi · Damian — Trio completo", tags: ["madevil", "skin", "draco", "lumi", "damian", "heavy metal"], link: "Brawlers/Skins.html" },
        { tipo: "skin", emoji: "👾", titulo: "Skins Stranger Things", desc: "Eleven Lumi · Eleven Edgar — Collab Netflix", tags: ["stranger things", "skin", "collab", "netflix", "lumi", "edgar"], link: "Brawlers/Skins.html" },
        { tipo: "skin", emoji: "🚀", titulo: "Skins Toy Story", desc: "Buzz Lightyear Spike — Collab Disney/Pixar", tags: ["toy story", "skin", "collab", "disney", "pixar", "spike", "buzz"], link: "Brawlers/Skins.html" },
    ];

    /* ─── CSS DO MODAL ───────────────────────────────────── */
    const style = document.createElement("style");
    style.textContent = `
    .bz-search-trigger{display:flex;align-items:center;gap:.5rem;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);border-radius:100px;padding:.4rem 1rem;font-family:'Nunito',sans-serif;font-size:.85rem;font-weight:700;color:rgba(255,255,255,.45);transition:all .2s;white-space:nowrap;}
    .bz-search-trigger:hover{background:rgba(255,255,255,.11);border-color:rgba(255,255,255,.25);color:#fff;}
    .bz-search-trigger kbd{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.15);border-radius:5px;padding:.05rem .4rem;font-size:.72rem;font-family:inherit;}

    .bz-overlay{position:fixed;inset:0;z-index:9000;background:rgba(0,0,0,.75);backdrop-filter:blur(12px);opacity:0;pointer-events:none;transition:opacity .25s;display:flex;align-items:flex-start;justify-content:center;padding:8vh 1.5rem 2rem;}
    .bz-overlay.open{opacity:1;pointer-events:all;}

    .bz-modal{width:100%;max-width:680px;background:#13132A;border:1px solid rgba(255,255,255,.1);border-radius:20px;overflow:hidden;transform:translateY(-20px) scale(.97);transition:transform .25s;max-height:80vh;display:flex;flex-direction:column;}
    .bz-overlay.open .bz-modal{transform:translateY(0) scale(1);}

    .bz-input-wrap{display:flex;align-items:center;gap:.75rem;padding:1.1rem 1.4rem;border-bottom:1px solid rgba(255,255,255,.07);}
    .bz-search-ico{font-size:1.1rem;opacity:.4;flex-shrink:0;}
    .bz-input{flex:1;background:transparent;border:none;color:#fff;font-family:'Nunito',sans-serif;font-size:1.05rem;font-weight:600;outline:none;}
    .bz-input::placeholder{color:rgba(255,255,255,.3);}
    .bz-clear{background:rgba(255,255,255,.1);border:none;border-radius:50%;width:28px;height:28px;color:rgba(255,255,255,.5);font-size:.85rem;display:flex;align-items:center;justify-content:center;flex-shrink:0;opacity:0;transition:opacity .2s;}
    .bz-clear.visible{opacity:1;}
    .bz-esc{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);border-radius:6px;padding:.1rem .5rem;font-size:.72rem;font-weight:700;color:rgba(255,255,255,.35);flex-shrink:0;}

    .bz-results{overflow-y:auto;flex:1;}
    .bz-group-label{font-family:'Russo One',sans-serif;font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.25);padding:.75rem 1.4rem .4rem;display:flex;align-items:center;gap:.6rem;}
    .bz-group-label::after{content:'';flex:1;height:1px;background:rgba(255,255,255,.06);}

    .bz-item{display:flex;align-items:center;gap:.9rem;padding:.7rem 1.4rem;transition:background .15s;text-decoration:none;color:#fff;}
    .bz-item:hover,.bz-item.selected{background:rgba(255,255,255,.06);}
    .bz-item-emoji{width:38px;height:38px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1.3rem;flex-shrink:0;}
    .bz-item-body{flex:1;min-width:0;}
    .bz-item-title{font-weight:800;font-size:.92rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
    .bz-item-desc{font-size:.78rem;color:rgba(255,255,255,.4);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:.1rem;}
    .bz-item-tipo{font-size:.65rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;padding:.18rem .55rem;border-radius:100px;flex-shrink:0;}
    .tipo-brawler{background:rgba(255,107,0,.15);color:#FF9955;}
    .tipo-noticia{background:rgba(59,130,246,.15);color:#7EB8FF;}
    .tipo-guia{background:rgba(34,197,94,.15);color:#4ADE80;}
    .tipo-update{background:rgba(255,208,0,.15);color:#FFD000;}
    .tipo-buffie{background:rgba(168,85,247,.15);color:#C084FC;}
    .tipo-skin{background:rgba(255,60,172,.15);color:#FF80C8;}

    .bz-empty{text-align:center;padding:3rem 1.5rem;color:rgba(255,255,255,.3);}
    .bz-empty-emoji{font-size:3rem;margin-bottom:.75rem;}
    .bz-empty p{font-size:.9rem;}

    .bz-footer{padding:.75rem 1.4rem;border-top:1px solid rgba(255,255,255,.06);display:flex;gap:1.5rem;font-size:.75rem;color:rgba(255,255,255,.25);font-weight:700;}
    .bz-footer span{display:flex;align-items:center;gap:.35rem;}
    .bz-footer kbd{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);border-radius:4px;padding:.05rem .4rem;font-family:inherit;}
  `;
    document.head.appendChild(style);

    /* ─── HTML DO MODAL ─────────────────────────────────── */
    const overlay = document.createElement("div");
    overlay.className = "bz-overlay";
    overlay.id = "bzOverlay";
    overlay.innerHTML = `
    <div class="bz-modal" id="bzModal">
      <div class="bz-input-wrap">
        <span class="bz-search-ico">🔍</span>
        <input class="bz-input" id="bzInput" placeholder="Pesquisar brawlers, guias, notícias..." autocomplete="off" spellcheck="false">
        <button class="bz-clear" id="bzClear">✕</button>
        <span class="bz-esc">ESC</span>
      </div>
      <div class="bz-results" id="bzResults"></div>
      <div class="bz-footer">
        <span><kbd>↑</kbd><kbd>↓</kbd> navegar</span>
        <span><kbd>Enter</kbd> abrir</span>
        <span><kbd>ESC</kbd> fechar</span>
      </div>
    </div>
  `;
    document.body.appendChild(overlay);

    /* ─── BOTÃO NA NAV ──────────────────────────────────── */
    const trigger = document.createElement("li");
    trigger.innerHTML = `<button class="bz-search-trigger" id="bzTrigger" title="Pesquisar (Ctrl+K)">🔍 Pesquisar <kbd>Ctrl K</kbd></button>`;
    const navLinks = document.querySelector(".nav-links");
    if (navLinks) navLinks.insertBefore(trigger, navLinks.lastElementChild);

    /* ─── LÓGICA ────────────────────────────────────────── */
    let selectedIdx = -1;
    let currentResults = [];

    const TIPO_LABELS = { brawler: "Brawlers", noticia: "Notícias", guia: "Guias", update: "Updates", buffie: "Buffies", skin: "Skins" };
    const TIPO_ORDER = ["brawler", "noticia", "guia", "update", "buffie", "skin"];

    const EMOJI_BG = {
        brawler: "rgba(255,107,0,.12)", noticia: "rgba(59,130,246,.12)",
        guia: "rgba(34,197,94,.12)", update: "rgba(255,208,0,.12)",
        buffie: "rgba(168,85,247,.12)", skin: "rgba(255,60,172,.12)"
    };

    function open() {
        overlay.classList.add("open");
        document.getElementById("bzInput").focus();
        renderResults("");
    }

    function close() {
        overlay.classList.remove("open");
        document.getElementById("bzInput").value = "";
        selectedIdx = -1;
    }

    function search(q) {
        if (!q.trim()) return DATABASE.slice(0, 12);
        const terms = q.toLowerCase().trim().split(/\s+/);
        return DATABASE.filter(item => {
            const haystack = (item.titulo + " " + item.desc + " " + item.tags.join(" ")).toLowerCase();
            return terms.every(t => haystack.includes(t));
        }).slice(0, 30);
    }

    function renderResults(q) {
        const res = search(q);
        currentResults = res;
        selectedIdx = -1;
        const container = document.getElementById("bzResults");
        document.getElementById("bzClear").classList.toggle("visible", q.length > 0);

        if (res.length === 0) {
            container.innerHTML = `<div class="bz-empty"><div class="bz-empty-emoji">🔍</div><p>Nenhum resultado para "<strong>${q}</strong>"</p></div>`;
            return;
        }

        // Agrupar por tipo
        const groups = {};
        res.forEach(r => { if (!groups[r.tipo]) groups[r.tipo] = []; groups[r.tipo].push(r); });

        let html = "";
        TIPO_ORDER.forEach(tipo => {
            if (!groups[tipo]) return;
            html += `<div class="bz-group-label">${TIPO_LABELS[tipo]}</div>`;
            groups[tipo].forEach((item, i) => {
                const link = base + item.link;
                html += `<a class="bz-item" href="${link}" data-idx="${currentResults.indexOf(item)}">
          <div class="bz-item-emoji" style="background:${EMOJI_BG[item.tipo]}">${item.emoji}</div>
          <div class="bz-item-body">
            <div class="bz-item-title">${highlight(item.titulo, q)}</div>
            <div class="bz-item-desc">${item.desc}</div>
          </div>
          <span class="bz-item-tipo tipo-${item.tipo}">${TIPO_LABELS[item.tipo].slice(0, -1)}</span>
        </a>`;
            });
        });
        container.innerHTML = html;
    }

    function highlight(text, q) {
        if (!q.trim()) return text;
        const regex = new RegExp(`(${q.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
        return text.replace(regex, '<mark style="background:rgba(255,208,0,.25);color:#FFD000;border-radius:3px;padding:0 2px">$1</mark>');
    }

    function moveSelection(dir) {
        const items = document.querySelectorAll(".bz-item");
        if (!items.length) return;
        items.forEach(i => i.classList.remove("selected"));
        selectedIdx = Math.max(0, Math.min(items.length - 1, selectedIdx + dir));
        items[selectedIdx].classList.add("selected");
        items[selectedIdx].scrollIntoView({ block: "nearest" });
    }

    /* ─── EVENTOS ───────────────────────────────────────── */
    document.getElementById("bzTrigger").addEventListener("click", open);
    overlay.addEventListener("click", e => { if (e.target === overlay) close(); });
    document.getElementById("bzClear").addEventListener("click", () => {
        document.getElementById("bzInput").value = "";
        renderResults("");
        document.getElementById("bzInput").focus();
    });

    document.getElementById("bzInput").addEventListener("input", e => renderResults(e.target.value));

    document.addEventListener("keydown", e => {
        if ((e.ctrlKey || e.metaKey) && e.key === "k") { e.preventDefault(); open(); return; }
        if (!overlay.classList.contains("open")) return;
        if (e.key === "Escape") { close(); return; }
        if (e.key === "ArrowDown") { e.preventDefault(); moveSelection(1); return; }
        if (e.key === "ArrowUp") { e.preventDefault(); moveSelection(-1); return; }
        if (e.key === "Enter") {
            const sel = document.querySelector(".bz-item.selected");
            if (sel) { sel.click(); close(); }
        }
    });

    // Fechar ao navegar
    document.getElementById("bzResults").addEventListener("click", () => close());

})();