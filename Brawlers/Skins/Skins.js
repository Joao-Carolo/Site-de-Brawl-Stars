
const RARITY_COLORS = {
    rare: "#22C55E", super: "#3B82F6", epic: "#A855F7", mythic: "#EF4444",
    legendary: "#FFD000", hyper: "#FF6B00", true: "#F59E0B", brawlpass: "#FF3CAC"
};
const RARITY_LABELS = {
    rare: "Rare", super: "Super Rare", epic: "Epic", mythic: "Mythic",
    legendary: "Legendary", hyper: "Hypercharge", true: "True Gold/Silver", brawlpass: "Brawl Pass"
};
const RARITY_PRICES = {
    rare: "29 Gems / 1.000 Bling", super: "79 Gems / 3.000 Bling", epic: "149 Gems / 5.000 Bling",
    mythic: "249 Gems", legendary: "299 Gems", hyper: "499 Gems",
    true: "10.000–25.000 Coins", brawlpass: "Brawl Pass"
};
const RARITY_EXTRAS = {
    rare: ["Modelo personalizado", "Texturas custom"],
    super: ["Modelo personalizado", "Efeitos de ataque", "Pin", "Animações custom"],
    epic: ["Modelo personalizado", "Efeitos de ataque", "Pin", "Animações", "Ícone de perfil"],
    mythic: ["Modelo personalizado", "Efeitos de ataque", "Pin", "Animações", "Ícone", "Spray temático"],
    legendary: ["Modelo personalizado", "Efeitos de ataque", "9 Pins", "Animações", "Ícone", "Spray", "Voice lines", "Takedown exclusivo"],
    hyper: ["Tudo do Legendary", "Modelo altera ao ativar HC", "Efeitos visuais de HC"],
    true: ["Skin metálica", "Sem novas animações", "Símbolo de dedicação"],
    brawlpass: ["Exclusiva do passe", "Chroma disponíveis", "Inclui Pin"]
};

const SKINS = [
    // Skins de Shelly
    { name: "Shelly Padrão", brawler: "Shelly", emoji: "🩸", img: "Skins (imagens)/Shelly/Shelly Padrão.png", rarity: "mythic", theme: "madevil", price: "249 Gems", badge: "", desc: "Shelly com visual de bandida do rock gótico. Tema MadEvil." },
    { name: "Star Shelly", brawler: "Shelly", emoji: "🌟", rarity: "rare", theme: "classic", price: "Grátis (padrão)", badge: "free", desc: "A skin padrão de Shelly, incluída gratuitamente com a conta." },
    { name: "Sheriff Shelly", brawler: "Shelly", emoji: "🤠", rarity: "rare", theme: "classic", price: "29 Gems", badge: "", desc: "Shelly transforma-se numa sheriff do Far West com chapéu e esporas." },
    { name: "Witch Shelly", brawler: "Shelly", emoji: "🧙", rarity: "super", theme: "brawlidays", price: "79 Gems", badge: "seasonal", desc: "Shelly com roupa de bruxa para o Halloween. Skin sazonal de outubro." },
    { name: "Stellar Shelly", brawler: "Shelly", emoji: "✨", rarity: "epic", theme: "classic", price: "149 Gems", badge: "", desc: "Shelly com tema espacial e efeitos galácticos no ataque." },
    { name: "Squad Buster Shelly", brawler: "Shelly", emoji: "🔥", rarity: "rare", theme: "classic", price: "Grátis (evento)", badge: "free", desc: "Skin de crossover com Squad Busters. Foi distribuída gratuitamente." },
    { name: "Princess Shelly", brawler: "Shelly", emoji: "👑", rarity: "super", theme: "classic", price: "79 Gems", badge: "", desc: "Shelly como uma princesa real com coroa e vestido elegante." },
    // Skins de Colt
    { name: "Dark Ride Colt", brawler: "Colt", emoji: "🏍️", rarity: "super", theme: "retropolis", price: "79 Gems", badge: "", desc: "Colt numa moto de noite com visual dark e neón. Tema Retropolis." },
    { name: "Cowboy Colt", brawler: "Colt", emoji: "🤠", rarity: "rare", theme: "classic", price: "29 Gems", badge: "", desc: "Colt com visual clássico de cowboy do Far West." },
    { name: "El Rey Colt", brawler: "Colt", emoji: "👑", rarity: "legendary", theme: "classic", price: "299 Gems", badge: "", desc: "Colt como um rei com robes reais e voice lines exclusivas. Legendary com 9 Pins." },
    { name: "Dark Angel Colt", brawler: "Colt", emoji: "😈", rarity: "legendary", theme: "brawlidays", price: "149 Gems / Grátis evento", badge: "free", desc: "Skin Supercell Make criada pela comunidade. Disponível no calendário Brawlidays 2024." },
    { name: "Sakura Colt", brawler: "Colt", emoji: "🌸", rarity: "super", theme: "lunar", price: "79 Gems", badge: "seasonal", desc: "Colt com temática japonesa de cerejeiras. Skin sazonal de primavera." },

    { name: "Rui Shou Nita", brawler: "Nita", emoji: "🐉", rarity: "mythic", theme: "lunar", price: "249 Gems", badge: "seasonal", desc: "Nita com visual do Ano Novo Chinês — dragão dourado e efeitos de fogo." },
    { name: "Little Bo Nita", brawler: "Nita", emoji: "🐑", rarity: "rare", theme: "classic", price: "29 Gems", badge: "", desc: "Nita vestida de pastora com o seu urso como ovelha." },
    { name: "Panda Nita", brawler: "Nita", emoji: "🐼", rarity: "super", theme: "classic", price: "79 Gems", badge: "", desc: "Nita e Bruce transformados em pandas fofos." },
    { name: "El Toro Bull", brawler: "Bull", emoji: "🐂", rarity: "super", theme: "classic", price: "79 Gems", badge: "", desc: "Bull vestido como um toureiro espanhol. Efeitos de vermelho no Super." },
    { name: "Kansai Dragon Bull", brawler: "Bull", emoji: "🐲", rarity: "mythic", theme: "retropolis", price: "249 Gems", badge: "seasonal", desc: "Bull como um dragão japonês com efeitos de fogo. Skin sazonal de Retropolis Nights." },
    { name: "True Silver Bull", brawler: "Bull", emoji: "🥈", rarity: "true", theme: "classic", price: "10.000 Coins", badge: "", desc: "Versão metálica prata de Bull. Símbolo de dedicação do jogador." },
    { name: "True Gold Bull", brawler: "Bull", emoji: "🥇", rarity: "true", theme: "classic", price: "25.000 Coins", badge: "", desc: "Versão metálica ouro de Bull. Requer True Silver primeiro." },
    { name: "Boom Box Brock", brawler: "Brock", emoji: "🎵", rarity: "super", theme: "classic", price: "79 Gems", badge: "", desc: "Brock com um boom box gigante e visual de rapper. Rockets com tema musical." },
    { name: "Lion Dance Brock", brawler: "Brock", emoji: "🦁", rarity: "legendary", theme: "lunar", price: "299 Gems", badge: "limited", desc: "Uma das skins mais raras do jogo. Lion Dance chinês com efeitos exclusivos. Nunca voltou desde o lançamento." },
    { name: "Hypercharged Brock", brawler: "Brock", emoji: "⚡", rarity: "hyper", theme: "classic", price: "499 Gems", badge: "", desc: "O modelo de Brock transforma-se ao ativar o Hypercharge. Efeitos elétricos no ataque." },
    { name: "El Rey Primo", brawler: "El Primo", emoji: "🤴", rarity: "epic", theme: "classic", price: "149 Gems", badge: "", desc: "El Primo como um rei com manto real. Efeitos dourados nos socos." },
    { name: "Baby Shark El Primo", brawler: "El Primo", emoji: "🦈", rarity: "super", theme: "classic", price: "79 Gems", badge: "", desc: "El Primo fantasiado de bebé tubarão. Uma das skins mais icónicas e bem-humoradas do jogo." },
    { name: "Lucha Bull El Primo", brawler: "El Primo", emoji: "💪", rarity: "rare", theme: "classic", price: "29 Gems", badge: "", desc: "El Primo com máscara de lucha libre e calções coloridos." },
    { name: "Wizard Barley", brawler: "Barley", emoji: "🧙", rarity: "rare", theme: "classic", price: "Grátis (Supercell ID)", badge: "free", desc: "Barley como um feiticeiro. Dada gratuitamente ao criar conta Supercell ID." },
    { name: "Mortician Barley", brawler: "Barley", emoji: "⚰️", rarity: "super", theme: "classic", price: "79 Gems", badge: "", desc: "Barley como um funerário macabro com garrafas de veneno." },
    { name: "Sailor Barley", brawler: "Barley", emoji: "⚓", rarity: "rare", theme: "classic", price: "29 Gems", badge: "", desc: "Barley como um marinheiro com garrafas de rum." },
    { name: "El Rudo Poco", brawler: "Poco", emoji: "😈", rarity: "super", theme: "classic", price: "79 Gems", badge: "", desc: "Poco como um músico vilão com guitarra elétrica dark." },
    { name: "Mariachi Poco", brawler: "Poco", emoji: "🎺", rarity: "rare", theme: "classic", price: "29 Gems", badge: "", desc: "Poco com traje de mariachi mexicano e sombrero." },
    { name: "Spring Rosa", brawler: "Rosa", emoji: "🌹", rarity: "super", theme: "classic", price: "79 Gems", badge: "", desc: "Rosa com um visual primaveril com flores e folhagem colorida." },
    { name: "Corsair Penny", brawler: "Penny", emoji: "🏴‍☠️", rarity: "super", theme: "classic", price: "79 Gems", badge: "", desc: "Penny como uma corsária temível com canhão pirata." },
    { name: "Karate Penny", brawler: "Penny", emoji: "🥋", rarity: "rare", theme: "classic", price: "29 Gems", badge: "", desc: "Penny em equipamento de karaté com faixa preta." },
    { name: "Captain Carl", brawler: "Carl", emoji: "🚢", rarity: "super", theme: "classic", price: "79 Gems", badge: "", desc: "Carl como um capitão de navio. O picão tem visual de âncora." },
    { name: "True Gold Carl", brawler: "Carl", emoji: "🥇", rarity: "true", theme: "classic", price: "25.000 Coins", badge: "", desc: "Versão dourada de Carl." },
    { name: "Robo Mike Darryl", brawler: "Darryl", emoji: "🤖", rarity: "super", theme: "classic", price: "79 Gems", badge: "", desc: "Darryl como um robô de batalha com efeitos metálicos." },
    { name: "Dumpling Darryl", brawler: "Darryl", emoji: "🥟", rarity: "legendary", theme: "lunar", price: "299 Gems", badge: "limited", desc: "Darryl como um bolinho chinês. Uma das skins mais raras e únicas do jogo." },
    { name: "Robo Kitty Rico", brawler: "Rico", emoji: "🐱", rarity: "super", theme: "classic", price: "79 Gems", badge: "", desc: "Rico com o visual de um robô gato. Projéteis com efeitos de felino." },
    { name: "High Score 8-Bit", brawler: "8-Bit", emoji: "👾", rarity: "legendary", theme: "retropolis", price: "299 Gems", badge: "seasonal", desc: "8-Bit com visual de videojogo arcade dos anos 80. Voice lines de jogos clássicos." },
    { name: "Antivirus 8-Bit", brawler: "8-Bit", emoji: "🛡️", rarity: "mythic", theme: "retropolis", price: "249 Gems", badge: "seasonal", desc: "8-Bit como um antivírus. Efeitos de código e vírus digitais." },
    { name: "Caveman Frank", brawler: "Frank", emoji: "🦴", rarity: "super", theme: "classic", price: "79 Gems", badge: "", desc: "Frank como um homem das cavernas pré-histórico." },
    { name: "Ultra Mecha Frank", brawler: "Frank", emoji: "🤖", rarity: "hyper", theme: "classic", price: "499 Gems", badge: "", desc: "Frank transforma-se num mecha gigante ao ativar o Hypercharge." },
    { name: "Red King Frank", brawler: "Frank", emoji: "♟️", rarity: "legendary", theme: "classic", price: "299 Gems", badge: "limited", desc: "Frank como um rei vermelho de xadrez. Exclusiva da Supercell Store." },
    { name: "Blue King Frank", brawler: "Frank", emoji: "♟️", rarity: "legendary", theme: "classic", price: "299 Gems", badge: "limited", desc: "Frank como um rei azul de xadrez. Exclusiva da Supercell Store." },
    { name: "Pop Star Bibi", brawler: "Bibi", emoji: "🎤", rarity: "super", theme: "classic", price: "79 Gems", badge: "", desc: "Bibi como uma estrela pop. Efeitos musicais na bolha." },
    { name: "Dream Prom Bibi", brawler: "Bibi", emoji: "💗", rarity: "epic", theme: "classic", price: "149 Gems", badge: "", desc: "Bibi em vestido de baile de finalistas com taco de baseball enfeitado." },
    { name: "Street Bibi", brawler: "Bibi", emoji: "🛹", rarity: "rare", theme: "retropolis", price: "29 Gems", badge: "", desc: "Bibi com look de skater urbano." },
    { name: "Honeybee Bea", brawler: "Bea", emoji: "🐝", rarity: "rare", theme: "classic", price: "29 Gems", badge: "", desc: "Bea com fato de abelha com antenas e asas." },
    { name: "Firefly Bea", brawler: "Bea", emoji: "✨", rarity: "super", theme: "classic", price: "79 Gems", badge: "", desc: "Bea como um vagalume com efeitos luminosos nos projéteis." },
    { name: "Bea Patrulha Starr", brawler: "Bea", emoji: "🤖", img: "Skins (imagens)/Bea/Bea Patrulha Starr.png", rarity: "epic", theme: "patrulhastarr", price: "149 Gems", badge: "new", desc: "Uma versão vigilante e tecnológica da Bea em Brawl Stars, com traje de patrulha futurista e visual ágil que combina precisão e estilo." },
    { name: "Colette Rainha do Vácuo", brawler: "Colette", emoji: "🥇", img: "Skins (imagens)/Colette/Colette Rainha do Vácuo.png", rarity: "brawlpass", theme: "patrulhastarr", price: "Brawl Pass (T50)", badge: "brawlpass", desc: "Uma versão sombria e poderosa, com energia do vazio e visual místico que transmite caos e domínio." },
    { name: "Colette Estrela Branca", brawler: "Colette", emoji: "🥇", img: "Skins (imagens)/Colette/Colette Estrela Branca.png", rarity: "brawlpass", theme: "patrulhastarr", price: "Brawl Pass (T50)", badge: "brawlpass", desc: "Uma versão luminosa e elegante da Colette em Brawl Stars, com visual claro e brilho celestial que transmite pureza e poder." },
    { name: "Colette Buraco Negro", brawler: "Colette", emoji: "🥇", img: "Skins (imagens)/Colette/Colette Buraco Negro.png", rarity: "brawlpass", theme: "patrulhastarr", price: "Brawl Pass (T50)", badge: "brawlpass", desc: "Uma versão intensa e enigmática da Colette em Brawl Stars, com energia cósmica sombria e efeitos que lembram a força devastadora de um vazio infinito." },
    { name: "Dark Lord Edgar", brawler: "Edgar", emoji: "🖤", rarity: "epic", theme: "classic", price: "149 Gems", badge: "", desc: "Edgar com visual de senhor das trevas com manto negro e olhos brilhantes." },
    { name: "Eleven Edgar", brawler: "Edgar", emoji: "🔮", rarity: "legendary", theme: "strangerthings", price: "299 Gems", badge: "collab", desc: "Edgar como Eleven de Stranger Things. Collab oficial com a série Netflix." },
    { name: "Washed Up Sandy", brawler: "Sandy", emoji: "🏖️", rarity: "rare", theme: "classic", price: "29 Gems", badge: "", desc: "Sandy como um surfista desgrenhado que acordou na praia." },
    { name: "Pharaoh Sandy", brawler: "Sandy", emoji: "🏺", rarity: "mythic", theme: "sandsoftime", price: "249 Gems", badge: "", desc: "Sandy como um faraó egípcio. Perfeito para a temporada Sands of Time." },
    { name: "Dragon Flame Amber", brawler: "Amber", emoji: "🐲", rarity: "epic", theme: "classic", price: "149 Gems", badge: "", desc: "Amber com visual de dragão. As chamas têm efeito de fogo de dragão." },
    { name: "Amber Rainha do Vácuo", brawler: "Amber", emoji: "🌸", img: "Skins (imagens)/Amber/Amber Rainha do Vácuo.png", rarity: "legendary", theme: "patrulhastarr", price: "299 Gems", badge: "new", desc: "Amber, Rainha do Vácuo, é uma entidade sombria que domina o nada absoluto, envolta por chamas negras e uma aura cósmica que consome luz, som e existência." },
    { name: "Amber Patrulha Starr", brawler: "Amber", emoji: "🌟", img: "Skins (imagens)/Amber/Amber Patrulha Starr.png", rarity: "legendary", theme: "patrulhastarr", price: "299 Gems", badge: "new", desc: "Amber, Patrulha Starr, é uma entidade radiante que personifica a luz pura e a esperança, envolta por chamas brilhantes e uma aura celestial que irradia energia positiva e proteção." },
    { name: "Rockabilly Mortis", brawler: "Mortis", emoji: "🎸", rarity: "mythic", theme: "retropolis", price: "249 Gems", badge: "seasonal", desc: "Mortis como um rockabilly dos anos 50 com pompadour e couro." },
    { name: "Frankenstein Mortis", brawler: "Mortis", emoji: "🧟", rarity: "super", theme: "brawlidays", price: "79 Gems", badge: "seasonal", desc: "Mortis como Frankenstein. Skin sazonal de Halloween." },
    { name: "Void Mortis", brawler: "Mortis", emoji: "🌌", rarity: "legendary", theme: "classic", price: "299 Gems", badge: "", desc: "Mortis com visual cósmico. O seu ataque abre fendas no espaço." },
    { name: "Dark Crystal Tara", brawler: "Tara", emoji: "🔮", rarity: "legendary", theme: "classic", price: "299 Gems", badge: "", desc: "Tara com um cristal negro que absorve a luz. Efeitos especiais no buraco negro." },
    { name: "Urban Ninja Tara", brawler: "Tara", emoji: "🥷", rarity: "mythic", theme: "lunar", price: "249 Gems", badge: "seasonal", desc: "Tara como uma ninja urbana. Skin sazonal do Lunar Brawl." },
    { name: "Apocalypse Gene", brawler: "Gene", emoji: "💀", rarity: "epic", theme: "angels", price: "149 Gems", badge: "", desc: "Gene como um espírito do apocalipse. Temática Angels vs Demons." },
    { name: "True Gold Gene", brawler: "Gene", emoji: "🥇", rarity: "true", theme: "classic", price: "25.000 Coins", badge: "", desc: "Versão dourada de Gene." },
    { name: "Juju Patrulha Starr", brawler: "Juju", emoji: "🌺", img: "Skins (imagens)/Juju/Juju Patrulha Starr.png", rarity: "mythic", theme: "patrulhastarr", price: "199 Gems", badge: "new", desc: "Uma versão heroica e cheia de atitude da Juju em Brawl Stars, com visual de patrulheira futurista e energia pronta para proteger Starr Park com estilo." },
    { name: "Shadow Tiger Leon", brawler: "Leon", emoji: "🐯", rarity: "legendary", theme: "classic", price: "299 Gems", badge: "", desc: "Leon como um tigre das sombras. Um dos visuais mais icónicos do jogo." },
    { name: "El Leon", brawler: "Leon", emoji: "🦁", rarity: "super", theme: "classic", price: "79 Gems", badge: "", desc: "Leon com máscara de lucha libre e visual de luchador." },
    { name: "Hypercharged Leon", brawler: "Leon", emoji: "⚡", rarity: "hyper", theme: "classic", price: "499 Gems", badge: "", desc: "Modelo de Leon altera ao Hypercharge — torna-se um predador sombrio." },
    { name: "Buzz Lightyear Spike", brawler: "Spike", emoji: "🚀", rarity: "legendary", theme: "toystory", price: "299 Gems", badge: "collab", desc: "Spike vestido como Buzz Lightyear do Toy Story. Collab Disney/Pixar." },
    { name: "Cactus Spike", brawler: "Spike", emoji: "🌵", rarity: "rare", theme: "classic", price: "29 Gems", badge: "", desc: "Spike com look simples de cacto decorativo." },
    { name: "Spike Patrulha Starr", brawler: "Spike", emoji: "🌵", img: "Skins (imagens)/Spike/Spike Patrulha Starr.png", rarity: "brawlpass", theme: "patrulhastarr", price: "Brawl Pass (T50)", badge: "brawlpass", desc: "Skin Spike Patrulha Starr de Brawl Stars transforma o personagem em um aventureiro estiloso com visual vibrante e temático." },
    { name: "Spike Caçador Starr", brawler: "Spike", emoji: "🌵", img: "Skins (imagens)/Spike/Spike Caçador Starr.png", rarity: "brawlpass", theme: "patrulhastarr", price: "Brawl Pass (T50)", badge: "brawlpass", desc: "Skin Spike Caçador Starr de Brawl Stars transforma o personagem em um aventureiro estiloso com visual vibrante e temático." },
    { name: "Spike Guardião Starr", brawler: "Spike", emoji: "🌵", img: "Skins (imagens)/Spike/Spike Guardião Starr.png", rarity: "brawlpass", theme: "patrulhastarr", price: "Brawl Pass (T50)", badge: "brawlpass", desc: "Skin Spike Guardião Starr de Brawl Stars transforma o personagem em um aventureiro estiloso com visual vibrante e temático." },
    { name: "Gold Mecha Crow", brawler: "Crow", emoji: "🤖", rarity: "legendary", theme: "classic", price: "50.000 Star Points (legado)", badge: "limited", desc: "Uma das skins mais raras do jogo. Originalmente custava 50.000 Star Points — moeda removida do jogo." },
    { name: "Nightmare Crow", brawler: "Crow", emoji: "😱", rarity: "epic", theme: "brawlidays", price: "149 Gems", badge: "seasonal", desc: "Crow como um pesadelo andante. Skin de Halloween com efeitos sombrios." },
    { name: "Mecha Meg", brawler: "Meg", emoji: "🤖", rarity: "hyper", theme: "classic", price: "499 Gems", badge: "", desc: "O robô de Meg fica ainda mais imponente ao Hypercharge — transformação visual espetacular." },
    { name: "Uno Chester", brawler: "Chester", emoji: "🃏", rarity: "mythic", theme: "classic", price: "249 Gems", badge: "limited", desc: "Chester com tema do jogo de cartas UNO. Já não está disponível desde setembro 2025." },
    { name: "Haunted Chester", brawler: "Chester", emoji: "👻", rarity: "epic", theme: "brawlidays", price: "149 Gems", badge: "seasonal", desc: "Chester assombrado com efeitos espectrais nos seus Supers variados." },
    { name: "Billy the Kit", brawler: "Kit", emoji: "🤠", rarity: "super", theme: "classic", price: "29 Gems", badge: "", desc: "Kit como um gatinho cowboy. Uma das skins mais populares para Kit." },
    { name: "Default Draco", brawler: "Draco", emoji: "🐲", rarity: "legendary", theme: "madevil", price: "Base", badge: "", desc: "O visual padrão de Draco — guitarrista dragão do MadEvil Manor." },
    { name: "Eleven Lumi", brawler: "Lumi", emoji: "🔮", rarity: "legendary", theme: "strangerthings", price: "299 Gems", badge: "collab", desc: "Lumi como Eleven de Stranger Things. Uma das skins de collab mais populares." },
    { name: "Default Lumi", brawler: "Lumi", emoji: "🪘", rarity: "legendary", theme: "madevil", price: "Base", badge: "", desc: "Visual padrão de Lumi — baterista do MadEvil Manor." },
    { name: "Void Sirius", brawler: "Sirius", emoji: "🌑", rarity: "legendary", theme: "classic", price: "Base", badge: "", desc: "Visual padrão de Sirius — o Vilão de Starr Park com efeitos de sombra únicos." },
    { name: "Finx Rei do Vácuo", brawler: "Finx", emoji: "🍄", img: "Skins (imagens)/Finx/Finx Rei do Vácuo.png", rarity: "mythic", theme: "patrulhastarr", price: "199 Gems", badge: "new", desc: "Finx, Rei do Vácuo, é um soberano sombrio que governa o nada absoluto, envolto por uma presença cósmica que devora luz, som e toda a existência ao seu redor." },
    { name: "Default Damian", brawler: "Damian", emoji: "🎤", img: "Skins (imagens)/Damian/Damian Padrão.png", rarity: "legendary", theme: "madevil", price: "Base", badge: "new", desc: "O visual padrão de Damian — vocalista do MadEvil Manor. Recém lançado a 24 de Abril de 2026." },
    { name: "Eugénio Bom de Bola", brawler: "Eugénio", emoji: "⚽", img: "Skins (imagens)/Eugénio/Eugénio Bom de Bola.png", rarity: "brawlpass", theme: "craquesdobrawl", price: "Brawl Pass (T51)", badge: "brawlpass", desc: "Eugénio Bom de Bola é uma versão divertida e desportiva do personagem, com estilo energético e descontraído, mostrando habilidade, precisão e paixão pelo jogo." },
    { name: "Default Najia", brawler: "Najia", emoji: "🐍", rarity: "legendary", theme: "sandsoftime", price: "Base", badge: "", desc: "Visual padrão de Najia — assassina de cobras com tema egípcio." },
    { name: "Sandstalker Lily", brawler: "Lily", emoji: "🌷", rarity: "brawlpass", theme: "sandsoftime", price: "Brawl Pass (T48)", badge: "brawlpass", desc: "Skin principal da temporada Sands of Time. Lily como uma caçadora do deserto. Inclui Chroma: Sandwalker Lily (branco) e Night Sands Lily (vermelho)." },
    { name: "Sultan Cordelius", brawler: "Cordelius", emoji: "🍄", rarity: "brawlpass", theme: "sandsoftime", price: "Brawl Pass (T48)", badge: "brawlpass", desc: "Cordelius transforma-se num sultão egípcio. Skin do Brawl Pass Sands of Time com visual luxuoso." },
    { name: "Fairie Bonnie", brawler: "Bonnie", emoji: "🧚", rarity: "brawlpass", theme: "classic", price: "Brawl Pass (T49)", badge: "brawlpass", desc: "Bonnie como uma fada — Dragons & Faeries Brawl Pass Season 49." },
    { name: "Dragon Griff", brawler: "Griff", emoji: "🐉", rarity: "brawlpass", theme: "classic", price: "Brawl Pass (T49)", badge: "brawlpass", desc: "Griff transformado num dragão. Skin do Brawl Pass Dragons & Faeries (T49)." },
    { name: "Royale Trunk", brawler: "Varios", emoji: "👑", rarity: "brawlpass", theme: "classic", price: "Grátis (Keep Brawl Alive)", badge: "free", desc: "Skin especial do evento Keep Brawl Alive — completamente grátis para todos os participantes." },
    { name: "W Otis", brawler: "Otis", emoji: "🏆", rarity: "legendary", theme: "championship", price: "299 Gems (ex-25.000 SP)", badge: "", desc: "Skin dos vencedores do World Finals 2023 da ZETA Division. Uma das skins mais exclusivas." },
    { name: "Street Shade", brawler: "Shade", emoji: "🕶️", rarity: "epic", theme: "championship", price: "149 Gems", badge: "", desc: "Skin de Championship com visual urbano e detalhes de esports." },
];

let currentRarity = "all", currentTheme = "all", currentSearch = "", currentView = "large";

function render() {
    const grid = document.getElementById("skinsGrid");
    const s = currentSearch.toLowerCase().trim();
    const filtered = SKINS.filter(sk => {
        const rMatch = currentRarity === "all" || sk.rarity === currentRarity;
        const tMatch = currentTheme === "all" || sk.theme === currentTheme;
        const sMatch = s === "" || sk.name.toLowerCase().includes(s) || sk.brawler.toLowerCase().includes(s);
        return rMatch && tMatch && sMatch;
    });

    document.getElementById("resultsInfo").textContent = `${filtered.length} skin${filtered.length !== 1 ? "s" : ""} encontrada${filtered.length !== 1 ? "s" : ""}`;

    if (filtered.length === 0) {
        grid.innerHTML = "";
        document.getElementById("noResults").style.display = "block";
        return;
    }
    document.getElementById("noResults").style.display = "none";
    grid.className = `skins-grid grid-${currentView}`;

    grid.innerHTML = filtered.map(sk => {
        const col = RARITY_COLORS[sk.rarity] || "#fff";
        const isList = currentView === "list";
        const badgeHTML = sk.badge ? `<div class="skin-badge badge-${sk.badge}">${getBadgeLabel(sk.badge)}</div>` : "";
        const priceIcon = sk.rarity === "true" ? "🪙" : sk.rarity === "brawlpass" ? "🎫" : "💎";
        const imgSrc = sk.img || `Skins (imagens)/${sk.brawler}/${sk.name}.png`;
        return `
        <div class="skin-card${isList ? " list-view" : ""}" data-rarity="${sk.rarity}" onclick="openModal('${sk.name.replace(/'/g, "\\'")}')">
          ${badgeHTML}
          <div class="skin-rarity-bar" style="background:${col}"></div>
          <div class="skin-thumb">
            <div class="skin-thumb-bg" style="background:radial-gradient(ellipse at center,${col}44,transparent 70%)"></div>
            <img class="skin-thumb-img" src="${imgSrc}" alt="${sk.name}"
              onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
            <div class="skin-thumb-emoji" style="display:none">${sk.emoji}</div>
          </div>
          <div class="skin-body">
            <div class="skin-name">${sk.name}</div>
            <div class="skin-brawler">${sk.brawler}</div>
            <div class="skin-bottom">
              <div class="skin-price">${priceIcon} ${sk.price}</div>
              <div class="skin-rarity-pill p-${sk.rarity}">${RARITY_LABELS[sk.rarity]}</div>
            </div>
          </div>
        </div>`;
    }).join("");
}

function getBadgeLabel(b) {
    return { new: "NOVO", limited: "LIMITADO", brawlpass: "PASS", collab: "COLLAB", free: "GRÁTIS", seasonal: "SAZONAL" }[b] || b.toUpperCase();
}

/* MODAL — corrigido (sem outerHTML inline) */
function openModal(name) {
    const sk = SKINS.find(s => s.name === name);
    if (!sk) return;
    const col = RARITY_COLORS[sk.rarity];
    const imgSrc = sk.img || `Skins (imagens)/${sk.brawler}/${sk.name}.png`;
    document.getElementById("modalHeroBg").style.background = `radial-gradient(ellipse at center,${col}33,transparent 70%)`;
    const modalEmoji = document.getElementById("modalEmoji");
    modalEmoji.innerHTML = `
        <img src="${imgSrc}" alt="${sk.name}"
          style="width:100px;height:100px;object-fit:contain;filter:drop-shadow(0 6px 16px rgba(0,0,0,.5))"
          onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
        <span style="display:none;font-size:6rem">${sk.emoji}</span>`;
    document.getElementById("modalSkinName").textContent = sk.name;
    document.getElementById("modalBrawler").textContent = `Para ${sk.brawler}`;
    document.getElementById("modalRarityBar").style.background = col;
    const extras = (RARITY_EXTRAS[sk.rarity] || []).map(e => `<div class="modal-extra">${e}</div>`).join("");
    const priceIcon = sk.rarity === "true" ? "🪙" : sk.rarity === "brawlpass" ? "🎫" : "💎";
    document.getElementById("modalBody").innerHTML = `
        <div class="modal-row"><span class="modal-row-label">Raridade</span><span class="modal-row-val" style="color:${col}">${RARITY_LABELS[sk.rarity]}</span></div>
        <div class="modal-row"><span class="modal-row-label">Brawler</span><span class="modal-row-val">${sk.brawler}</span></div>
        <div class="modal-row"><span class="modal-row-label">Preço</span><span class="modal-row-val">${priceIcon} ${sk.price}</span></div>
        <div class="modal-row"><span class="modal-row-label">Tema</span><span class="modal-row-val">${sk.theme.charAt(0).toUpperCase() + sk.theme.slice(1)}</span></div>
        ${sk.badge ? `<div class="modal-row"><span class="modal-row-label">Estado</span><span class="modal-row-val">${getBadgeLabel(sk.badge)}</span></div>` : ""}
        <div class="modal-desc">${sk.desc}</div>
        ${extras ? `<div style="margin-top:.75rem;font-size:.72rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:.5rem">Incluído nesta skin</div><div class="modal-extras">${extras}</div>` : ""}`;
    document.getElementById("modalOverlay").classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeModal() { document.getElementById("modalOverlay").classList.remove("open"); document.body.style.overflow = ""; }
document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", e => { if (e.target === document.getElementById("modalOverlay")) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

document.querySelectorAll("#rarityFilters .filter-tab").forEach(t => {
    t.addEventListener("click", () => {
        document.querySelectorAll("#rarityFilters .filter-tab").forEach(x => x.classList.remove("active"));
        t.classList.add("active"); currentRarity = t.dataset.rarity; render();
    });
});
document.querySelectorAll("#themeFilters .theme-tab").forEach(t => {
    t.addEventListener("click", () => {
        document.querySelectorAll("#themeFilters .theme-tab").forEach(x => x.classList.remove("active"));
        t.classList.add("active"); currentTheme = t.dataset.theme; render();
    });
});
document.getElementById("searchInput").addEventListener("input", e => { currentSearch = e.target.value; render(); });
["Large", "Small", "List"].forEach(v => {
    document.getElementById("btn" + v).addEventListener("click", () => {
        document.querySelectorAll(".view-btn").forEach(b => b.classList.remove("active"));
        document.getElementById("btn" + v).classList.add("active");
        currentView = v.toLowerCase(); render();
    });
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
    document.querySelectorAll("a,button,.skin-card").forEach(el => {
        el.addEventListener("mouseenter", () => { cursorEl.style.width = "20px"; cursorEl.style.height = "20px"; ringEl.style.width = "50px"; ringEl.style.height = "50px"; });
        el.addEventListener("mouseleave", () => { cursorEl.style.width = "12px"; cursorEl.style.height = "12px"; ringEl.style.width = "36px"; ringEl.style.height = "36px"; });
    });
}
// Lê o parâmetro ?brawler= da URL e filtra automaticamente
const urlParams = new URLSearchParams(window.location.search);
const brawlerParam = urlParams.get("brawler");
if (brawlerParam) {
    currentSearch = brawlerParam;
    document.getElementById("searchInput").value = brawlerParam;
}
render();