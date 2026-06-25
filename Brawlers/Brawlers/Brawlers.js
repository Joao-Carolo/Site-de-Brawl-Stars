const BRAWLERS = [
    { name: "Shelly", emoji: "🔫", rarity: "starter", cls: "Damage Dealer", isNew: false, desc: "Shelly é a lutadora perfeita: confiável, durona e imbatível com a espingarda. Com tantas qualidades assim, ela nunca entendeu como o Colt virou o queridinho da galera...", attack: "Chumbo Grosso — A arma da Shelly dispara chumbinhos em grande amplitude e longo alcance. Quanto mais chumbinhos acertarem o alvo, maior o dano.", super: "SuperBala — A Superbala da Shelly oblitera coberturas e inimigos. Os sobreviventes são empurrados para longe.", hyper: "Cano Duplo — O raio da Superbala fica 33% maior.", sp1: "Xeque-Mate — A Superbala da Shelly diminui a velocidade do inimigo por 2s!", sp2: "Tônico Revigorante — Quando a sua saúde está abaixo de 40%, Shelly recupera 2340 pontos de saúde em um piscar de olhos, mas é preciso esperar 15 segundos atens que a habilidade esteja disponível novamente.", g1: "Disparada — Shelly corre para a frente ou para a direção escolhida e recarrega totalmente o seu ataque principal.", g2: "Pombos de Argila — A área do ataque da Shelly fica mais focada, e o alcance aumenta. Cada ativação dá 3 usos.", hp: 7800, dmg: 3000, range: 8, speed: 720, modes: ["Showdown", "Heist", "Brawl Ball"] },
    { name: "Nita", emoji: "🐻", rarity: "rare", cls: "Damage Dealer", isNew: false, desc: "Nita é feroz e nunca desiste de uma luta. O urso de pelúcia que ela usa como gorro dá uma dica aos adversários: não se aproxime do urso!", attack: "Tremor — Nita cria um terremoto que causa danos aos inimigos atingidos pelo seu tremor", super: "Garra de Urso — Nita invoca o espírito do Grande Bebê Urso para lhe dar uma mãozinha na caça aos inimigos.", hyper: "HiperUrso — Bruce aumenta de tamanho e ganha 15% a mais de velocidade de movimento e 20% a mais de saúde", sp1: "Amigo-Urso — Nita recupera 1092 pontos de saúde cada vez que o urso acerta um Brawler inimigo. Quando ela inflige dano a Brawlers inimigos, o urso recupera 1094 pontos de saúde.", sp2: "Urso Hiperativo — O urso da Nita ataca mais depressa, com o tempo entre ataques reduzido em 60%.", g1: "Garra de Urso — Nita ordena que o seu urso golpeie violentamente o chão, atordoando todoa os inimigos dentro do alcance.", g2: "Pele Protetora — Pelos próximos 3s, o urso  da Nita ganha 35% de proteção contra dano.", hp: 8400, dmg: 1920, range: 6, speed: 720, modes: ["Showdown", "Hot Zone", "Gem Grab"] },
    { name: "Colt", emoji: "🤠", rarity: "rare", cls: "Damage Dealer", isNew: false, desc: "Todo mundo que visita o Starr Park quer ver o Colt de perto, pois o cara é boa-pinta, carismático e cheio de truques com suas pistolas. A uníca que não entende o sucesso dele é a Shelly.", attack: "Esvaziando o Tambor — Colt dispara seis tiros rápidos de longo alcance com seus revólveres.", super: "Trem-Bala — Colt dispara uma rajada de balas de longo alcance que destrói cobertura.", hyper: "Empunhadura Dupla — O raio de ação do Trem-Bala fica 120% maior.", sp1: "Botas Ligeiras — A velocidade de locomoção de Colt aumenta em 13%.", sp2: "Magnum Especial — O alcance e a velocidade do ataque do Colt aumentam em 11%.", g1: "Recarga Rápida — Colt dá dois disparos rápidos que desaceleram os alvos e causam 640 de dano.", g2: "Bala de Prata — Colt dá um disparo que destroí elementos do ambiente e atravessa Brawlers. Causa 1200 de dano e consome munição", hp: 2800, dmg: 460, range: 10, speed: 720, modes: ["Heist", "Brawl Ball", "Bounty"] },
    { name: "Bull", emoji: "🐂", rarity: "rare", cls: "Tank", isNew: false, desc: "Um tanque com espingarda dupla. Dano massivo ao perto, usa arbustos para emboscar.", attack: "Double-Barreled — Espingarda dupla.", super: "Bulldozer — Carrega destruindo obstáculos.", hyper: "", sp1: "Berserker — Recarga rápida abaixo de 40% HP.", sp2: "Tough Guy — Escudo ao ativar o Super.", hp: 6000, dmg: 940, range: 4, speed: 720, modes: ["Heist", "Showdown", "Brawl Ball"] },
    { name: "Brock", emoji: "🚀", rarity: "rare", cls: "Sniper", isNew: false, desc: "Especialista em rockets com grande alcance. Destrói paredes com facilidade.", attack: "Rockin' Rocket — Rocket que destrói obstáculos.", super: "Rocket Rain — Chuva de rockets em área.", sp1: "Incendiary — Chamas no Super.", sp2: "Rocket Fuel — Mais destruição de paredes.", hp: 2800, dmg: 700, range: 13, speed: 720, modes: ["Bounty", "Heist", "Siege"] },
    { name: "El Primo", emoji: "🤼", rarity: "rare", cls: "Tank", isNew: false, desc: "Um luchador com punhos de aço. Tanque ágil graças ao salto do Super.", attack: "Fists of Fury — Soco em cone.", super: "Flying Elbow Drop — Salta causando dano de área.", sp1: "El Fuego — Super deixa chamas.", sp2: "Meteor Rush — Velocidade após Super.", hp: 6400, dmg: 760, range: 4, speed: 720, modes: ["Showdown", "Brawl Ball", "Hot Zone"] },
    { name: "Barley", emoji: "🍺", rarity: "rare", cls: "Artillery", isNew: false, desc: "Lança garrafas de líquido inflamável por cima de paredes. Controlo de zona.", attack: "Undiluted — Garrafa que deixa chamas.", super: "Last Call — 5 garrafas em área.", sp1: "Medical Use — Super cura aliados.", sp2: "Extra Nails — Chamas duram mais.", hp: 2800, dmg: 560, range: 10, speed: 720, modes: ["Gem Grab", "Hot Zone", "Bounty"] },
    { name: "Poco", emoji: "🎸", rarity: "rare", cls: "Support", isNew: false, desc: "Um músico curandeiro. Os seus ataques e Super curam aliados.", attack: "Power Chord — Ondas sonoras.", super: "Encore — Cura massiva para aliados.", sp1: "Da Capo! — Ataque básico cura aliados.", sp2: "Screeching Solo — Super causa dano.", hp: 3600, dmg: 380, range: 8, speed: 720, modes: ["Gem Grab", "Hot Zone", "Brawl Ball"] },
    { name: "Rosa", emoji: "🌿", rarity: "rare", cls: "Tank", isNew: false, desc: "Uma botanista que luta com punhos. O Super cria um escudo de folhas.", attack: "Hands of Stone — Golpes em cone.", super: "Strong Stuff — Escudo de 70% de redução.", sp1: "Plant Life — Cura nos arbustos.", sp2: "Thorny Gloves — Mais dano com escudo.", hp: 7200, dmg: 600, range: 3, speed: 720, modes: ["Showdown", "Brawl Ball", "Hot Zone"] },
    { name: "Jessie", emoji: "🤠", rarity: "super_rare", cls: "", isNew: false, desc: "Dispara balas que ricocheteiam nas paredes. Perfeito em mapas fechados.", attack: "Bouncy Bullets — Balas ricocheteantes.", super: "Trick Shot — Mais balas ricocheteantes.", sp1: "Robo Retreat — Velocidade abaixo de 30% HP.", sp2: "Super Bouncy — Mais ricochetes no Super.", hp: 2800, dmg: 560, range: 11, speed: 720, modes: ["Bounty", "Gem Grab", "Brawl Ball"] },
    { name: "Penny", emoji: "🪙", rarity: "super_rare", cls: "Support", isNew: false, desc: "Uma pirata que dispara bolsas de ouro com splash. O Super coloca um canhão.", attack: "Plunderbuss — Bolsa de ouro com splash.", super: "Old Lobber — Canhão que dispara por cima de paredes.", sp1: "Balls of Fire — Canhão deixa chamas.", sp2: "Master Blaster — Canhão explode ao ser destruído.", hp: 3200, dmg: 580, range: 10, speed: 720, modes: ["Gem Grab", "Siege", "Bounty"] },
    { name: "Carl", emoji: "⛏️", rarity: "super_rare", cls: "Damage Dealer", isNew: false, desc: "Arremessa o picão que volta como bumerangue. Dano ao ir e ao voltar.", attack: "Pickaxe — Picão bumerangue.", super: "Flying Hook — Roda com o picão causando dano.", sp1: "Power Throw — Picão mais rápido.", sp2: "Heat Ejector — Super deixa chamas.", hp: 3400, dmg: 660, range: 9, speed: 720, modes: ["Showdown", "Gem Grab", "Heist"] },
    { name: "Jacky", emoji: "🪨", rarity: "super_rare", cls: "Tank", isNew: false, desc: "Opera uma broca de rocha. Dano de área e atrai inimigos com o Super.", attack: "Groundbreaker — Tremor de terra circular.", super: "Counter Crush — Atrai inimigos próximos.", sp1: "Hardy Hard Hat — Reduz dano recebido.", sp2: "Pneumatic Booster — Mais velocidade após Super.", hp: 6000, dmg: 680, range: 4, speed: 720, modes: ["Showdown", "Brawl Ball", "Hot Zone"] },
    { name: "Darryl", emoji: "🛢️", rarity: "super_rare", cls: "Tank", isNew: false, desc: "Um barril rolante com escopetas duplas. O Super rola destruindo obstáculos.", attack: "Double Deuce — Dois tiros em cone.", super: "Rolling Reload — Rola e recarrega.", sp1: "Steel Hoops — Escudo ao usar Super.", sp2: "Rolling Reload — Recarga rápida após Super.", hp: 5600, dmg: 760, range: 4, speed: 720, modes: ["Showdown", "Heist", "Brawl Ball"] },
    { name: "Rico", emoji: "🤖", rarity: "super_rare", cls: "Damage Dealer", isNew: false, desc: "Dispara balas que ricocheteiam nas paredes. Perfeito em mapas fechados.", attack: "Bouncy Bullets — Balas ricocheteantes.", super: "Trick Shot — Mais balas ricocheteantes.", sp1: "Robo Retreat — Velocidade abaixo de 30% HP.", sp2: "Super Bouncy — Mais ricochetes no Super.", hp: 2800, dmg: 560, range: 11, speed: 720, modes: ["Bounty", "Gem Grab", "Brawl Ball"] },
    { name: "Dynamike", emoji: "💣", rarity: "super_rare", cls: "Damage Dealer", isNew: false, desc: "Lança dinamite por cima de paredes. Artillery clássico e eficaz.", attack: "Short Fuse — Dois sticks de dinamite.", super: "Big Barrel O' Boom — Barril de grande explosão.", sp1: "Dyna-Jump — Super propulsa Dynamike.", sp2: "Demolition — Super causa mais dano.", hp: 2800, dmg: 700, range: 10, speed: 720, modes: ["Gem Grab", "Hot Zone", "Bounty"] },
    { name: "Tick", emoji: "💥", rarity: "super_rare", cls: "Damage Dealer", isNew: false, desc: "Uma mina ambulante. Controla zonas com miniminas e uma cabeça teleguiada.", attack: "Minimines — 3 minas com delay.", super: "Headfirst! — Cabeça teleguiada como míssil.", sp1: "Well Oiled — Recupera HP ao atingir.", sp2: "Backup Mine — Mina ao morrer.", hp: 2800, dmg: 560, range: 9, speed: 720, modes: ["Gem Grab", "Hot Zone", "Siege"] },
    { name: "8-Bit", emoji: "👾", rarity: "super_rare", cls: "Damage Dealer", isNew: false, desc: "Um arcade game lento mas com dano e turret de boost para aliados.", attack: "Plugged In — Laser de grande alcance.", super: "Cheat Cartridge — Turret que boosta aliados.", sp1: "Boosted Booster — Turret de área maior.", sp2: "Extra Life — Revive uma vez.", hp: 3600, dmg: 880, range: 12, speed: 210, modes: ["Siege", "Heist", "Gem Grab"] },
    { name: "Emz", emoji: "💅", rarity: "epic", cls: "Control", isNew: false, desc: "Influencer com spray tóxico. Controla zonas e aplica slow.", attack: "Spray — Laca tóxica progressiva.", super: "Caustic Charisma — Área de slow à volta.", sp1: "Bad Karma — Slow aumenta com tempo.", sp2: "Hype — Cura por inimigos no Super.", hp: 3200, dmg: 500, range: 8, speed: 720, modes: ["Hot Zone", "Gem Grab", "Bounty"] },
    { name: "Bo", emoji: "🏹", rarity: "epic", cls: "Damage Dealer", isNew: false, desc: "Caçador com 3 flechas em leque e armadilhas invisíveis no chão.", attack: "Eagle-Eyed — 3 flechas em leque.", super: "Catch a Fox — 3 minas invisíveis.", sp1: "Circling Eagle — Vê nos arbustos.", sp2: "Snare a Bear — Minas imobilizam.", hp: 3200, dmg: 640, range: 9, speed: 720, modes: ["Bounty", "Gem Grab", "Showdown"] },
    { name: "Piper", emoji: "☂️", rarity: "epic", cls: "Sniper", isNew: false, desc: "Sniper com dano proporcional à distância. Mais longe = mais letal.", attack: "Auto Aimer — Dano por distância.", super: "Poppin' — Salta lançando granadas.", sp1: "Ambush — Mais dano dos arbustos.", sp2: "Snappy Sniping — Recarga mais rápida.", hp: 2400, dmg: 880, range: 14, speed: 720, modes: ["Bounty", "Knockout", "Showdown"] },
    { name: "Pam", emoji: "🔧", rarity: "epic", cls: "Support", isNew: false, desc: "Mecânica que dispara detritos e coloca uma estação de cura.", attack: "Scrapstorm — Spray de detritos.", super: "Mama's Kiss — Turret de cura.", sp1: "Mama's Hug — Cura de projéteis afeta aliados.", sp2: "Bandage Toss — Turret cura mais.", hp: 4800, dmg: 540, range: 6, speed: 720, modes: ["Gem Grab", "Hot Zone", "Brawl Ball"] },
    { name: "Frank", emoji: "🔨", rarity: "epic", cls: "Tank", isNew: false, desc: "Monstro de HP com martelo. Super causa stun em grande área.", attack: "Hammer Hit — Golpe de martelo.", super: "Stunning Blow — Stun em área enorme.", sp1: "Power Grab — Mais forte ao eliminar.", sp2: "Sponge — Menos dano recebido.", hp: 8000, dmg: 820, range: 4, speed: 390, modes: ["Showdown", "Hot Zone", "Brawl Ball"] },
    { name: "Bibi", emoji: "🍬", rarity: "epic", cls: "Tank", isNew: false, desc: "Jogadora de basebol com knockback e bolha de escudo.", attack: "Home Run — Swing com knockback.", super: "Spitball — Bolha com knockback.", sp1: "Home Run — Velocidade e dano com escudo.", sp2: "Batting Stance — Escudo mais resistente.", hp: 5200, dmg: 760, range: 4, speed: 720, modes: ["Brawl Ball", "Showdown", "Hot Zone"] },
    { name: "Bea", emoji: "🐝", rarity: "epic", cls: "Sniper", isNew: false, desc: "Cientista com abelhas. Slow no ataque e super de nuvem de abelhas.", attack: "Honeycomb — Bala com slow.", super: "Honey Slow — Nuvem de abelhas.", sp1: "Insta Beeload — Recarga imediata ao acertar.", sp2: "Honey Coat — Imunidade temporária.", hp: 2400, dmg: 760, range: 12, speed: 720, modes: ["Bounty", "Knockout", "Gem Grab"] },
    { name: "Nani", emoji: "🦾", rarity: "epic", cls: "Damage Dealer", isNew: false, desc: "Robô que teledirige o Super — Peep — para explodir nos inimigos.", attack: "Kintsugi — 3 projéteis convergentes.", super: "Warp — Teledirige Peep explosivo.", sp1: "Autofocus — Recarga ao acertar Peep.", sp2: "Tempered Steel — Peep tem mais HP.", hp: 2400, dmg: 680, range: 10, speed: 720, modes: ["Bounty", "Knockout", "Showdown"] },
    { name: "Gale", emoji: "🌬️", rarity: "epic", cls: "Support", isNew: false, desc: "Senhor idoso com soprador de neve. Controlo por knockback.", attack: "Blustery Blow — Neve com knockback.", super: "Icy Blast — Parede de gelo.", sp1: "Blustery Blow — Maior knockback.", sp2: "Supercool — Super dura mais.", hp: 2800, dmg: 420, range: 8, speed: 720, modes: ["Hot Zone", "Gem Grab", "Brawl Ball"] },
    { name: "Colette", emoji: "📊", rarity: "epic", cls: "Damage Dealer", isNew: false, desc: "Dano proporcional ao HP máximo do alvo. Mata tanques facilmente.", attack: "Ta da! — Dano % do HP máximo.", super: "C'mon! — Carrega e volta causando dano.", sp1: "Mass Tax — Super causa mais dano.", sp2: "Na na na! — Cura ao causar dano.", hp: 3200, dmg: 560, range: 8, speed: 720, modes: ["Showdown", "Hot Zone", "Brawl Ball"] },
    { name: "Edgar", emoji: "😤", rarity: "epic", cls: "Assassin", isNew: false, desc: "Assassino de punhos que cura ao atacar. Super carrega automaticamente.", attack: "Let's Fly — Soco que cura.", super: "Flying Hook — Salta para inimigo.", sp1: "Fisticuffs — Mais cura por dano.", sp2: "Hard Landing — Super causa stun.", hp: 3800, dmg: 640, range: 3, speed: 800, modes: ["Showdown", "Knockout", "Brawl Ball"] },
    { name: "Griff", emoji: "🧹", rarity: "epic", cls: "Damage Dealer", isNew: false, desc: "Dono da loja que arremessa moedas. Super dispara fileiras de notas.", attack: "Cashback — 9 moedas em cone.", super: "Cash Grab — Fileiras de notas atravessam paredes.", sp1: "Business Resilience — Mais HP.", sp2: "Piggy Bank — Moedas ricocheteiam.", hp: 3600, dmg: 700, range: 5, speed: 720, modes: ["Hot Zone", "Gem Grab", "Heist"] },
    { name: "Ash", emoji: "🗑️", rarity: "epic", cls: "Tank", isNew: false, desc: "Gato de lixo que fica mais forte ao perder HP. Invoca ratos com o Super.", attack: "Clangin' & Bangin' — Vassoura em arco.", super: "Raging Rats — Ratos que perseguem.", sp1: "Cackle — Super dura mais.", sp2: "Last Hurrah — Dano ao ser eliminado.", hp: 6400, dmg: 700, range: 4, speed: 720, modes: ["Heist", "Showdown", "Brawl Ball"] },
    { name: "Lola", emoji: "🎭", rarity: "epic", cls: "Damage Dealer", isNew: false, desc: "Atriz que invoca Ego, o seu clone espelhado com movimentos invertidos.", attack: "Star Treatment — Bala em linha reta.", super: "Ego — Invoca Ego, o clone.", sp1: "Improvise — Ego cura Lola.", sp2: "Dressed to Kill — Ego causa mais dano.", hp: 2800, dmg: 580, range: 11, speed: 720, modes: ["Bounty", "Gem Grab", "Knockout"] },
    { name: "Stu", emoji: "🏎️", rarity: "epic", cls: "Assassin", isNew: false, desc: "Stuntman de kart com Super auto-carregado. Mobilidade extrema.", attack: "Nitro Boost — Bola de fogo.", super: "Burnout — Zigzag com rastro de fogo.", sp1: "Zero Drag — Velocidade máxima no Super.", sp2: "Gaso-Heal — Cura ao usar Super.", hp: 2800, dmg: 500, range: 7, speed: 870, modes: ["Showdown", "Brawl Ball", "Hot Zone"] },
    { name: "Belle", emoji: "🎯", rarity: "epic", cls: "Sniper", isNew: false, desc: "Caçadora que marca alvos. Inimigos marcados recebem mais dano de todos.", attack: "Shocky — Bala ricocheteante.", super: "Stunning Gold — Marca um inimigo.", sp1: "Gold Arm — Mais ricochetes.", sp2: "Nest Egg — Mais dano a marcados.", hp: 2400, dmg: 680, range: 12, speed: 720, modes: ["Bounty", "Knockout", "Gem Grab"] },
    { name: "Bonnie", emoji: "🦄", rarity: "epic", cls: "Damage Dealer", isNew: false, desc: "Menina a cavalo de um canhão andante. Duas formas: à distância e melee.", attack: "Boom — Bala de canhão.", super: "Crash — Salta do Clyde para melee.", sp1: "Boom Box — Mais dano ao longe.", sp2: "Hyper Fuel — Clyde mais rápido.", hp: 3200, dmg: 780, range: 10, speed: 720, modes: ["Bounty", "Showdown", "Gem Grab"] },
    { name: "Grom", emoji: "🗿", rarity: "epic", cls: "Artillery", isNew: false, desc: "Estátua que arremessa projéteis em arco de longo alcance extremo.", attack: "Chucks — 4 projéteis em arco.", super: "City Block — Chuva de projéteis.", sp1: "Bat Saver — Recarga rápida a caminhar.", sp2: "Homing Chucks — Projéteis teleguiados.", hp: 2400, dmg: 640, range: 13, speed: 630, modes: ["Gem Grab", "Hot Zone", "Bounty"] },
    { name: "Sam", emoji: "⚙️", rarity: "epic", cls: "Tank", isNew: false, desc: "Lança a luva magnética que atrai inimigos para Sam.", attack: "Knuckle Busters — Soco magnético.", super: "Magnetic Field — Luva atrai inimigos.", sp1: "Hearty Recovery — Cura ao recuperar luva.", sp2: "Heavenly Taste — Super causa mais dano.", hp: 5600, dmg: 720, range: 3, speed: 720, modes: ["Showdown", "Brawl Ball", "Hot Zone"] },
    { name: "Mandy", emoji: "🍭", rarity: "epic", cls: "Sniper", isNew: false, desc: "Sniper de caramelos com alcance infinito em modo focado.", attack: "Caramel Candy — Projétil que atravessa.", super: "Eye Candy — Foco com alcance infinito.", sp1: "Hard Candy — Mais dano no foco.", sp2: "Coated in Sugar — Obstáculos não bloqueiam foco.", hp: 2400, dmg: 820, range: 14, speed: 720, modes: ["Bounty", "Knockout", "Siege"] },
    { name: "Maisie", emoji: "🔋", rarity: "epic", cls: "Damage Dealer", isNew: false, desc: "Dispara plasma acumulado. Mais plasma = mais dano e alcance.", attack: "Plasma Shot — Projétil crescente.", super: "Plasma Storm — Liberta plasma em área.", sp1: "Overload — Mais plasma máximo.", sp2: "Energy Drink — Cura ao usar Super.", hp: 2800, dmg: 680, range: 9, speed: 720, modes: ["Hot Zone", "Gem Grab", "Bounty"] },
    { name: "Hank", emoji: "🐡", rarity: "epic", cls: "Tank", isNew: false, desc: "Peixe-balão que infla antes de disparar. Enorme dano de área único.", attack: "Big Blow — Infla e explode.", super: "It's Gonna Blow — Grande explosão.", sp1: "Overfill — Mais dano e área.", sp2: "Fresh Squeeze — Cura após disparar.", hp: 6400, dmg: 880, range: 7, speed: 630, modes: ["Showdown", "Hot Zone", "Heist"] },
    { name: "Pearl", emoji: "🎆", rarity: "epic", cls: "Damage Dealer", isNew: false, desc: "Aquece disparos com o tempo. Quanto mais quente = mais dano.", attack: "Flame Thrower — Chamas progressivas.", super: "Overcooked — Explosão de grande área.", sp1: "Spicy — Mais dano máximo.", sp2: "Hard Boiled — Mais HP.", hp: 3200, dmg: 640, range: 6, speed: 720, modes: ["Heist", "Hot Zone", "Showdown"] },
    { name: "Angelo", emoji: "💘", rarity: "epic", cls: "Sniper", isNew: false, desc: "Anjo arqueiro que carrega o tiro para mais dano. Flutua sobre a água.", attack: "Heavenward — Tiro carregado.", super: "Sky High — Eleva-se e ataca abaixo.", sp1: "Angelic Touch — Cura aliados ao atingi-los.", sp2: "Eagle Eye — Mais dano carregado.", hp: 2400, dmg: 800, range: 15, speed: 720, modes: ["Bounty", "Knockout", "Showdown"] },
    { name: "Berry", emoji: "🫐", rarity: "epic", cls: "Support", isNew: false, desc: "Baga que cura aliados através dos ataques.", attack: "Berry Blast — Projéteis que curam aliados.", super: "Smoothie — Cura massiva em área.", sp1: "Extra Pulp — Mais cura por projétil.", sp2: "Vitamin C — Super também causa dano.", hp: 3400, dmg: 320, range: 8, speed: 720, modes: ["Hot Zone", "Gem Grab", "Brawl Ball"] },
    { name: "Clancy", emoji: "🎩", rarity: "epic", cls: "Damage Dealer", isNew: false, desc: "Político que evolui em 3 estágios conforme causa dano.", attack: "Speechmaker — Disparos por estágio.", super: "Landslide — Ataque de área por estágio.", sp1: "Pork Barrel — Mais HP por estágio.", sp2: "Ballot Stuffer — Evolução mais rápida.", hp: 3200, dmg: 640, range: 9, speed: 720, modes: ["Hot Zone", "Brawl Ball", "Gem Grab"] },
    { name: "Moe", emoji: "🦫", rarity: "epic", cls: "Tank", isNew: false, desc: "Castor que escava túneis para se mover por baixo do campo.", attack: "Chomp — Mordida poderosa.", super: "Drill Down — Mergulha e reaparece noutra posição.", sp1: "Dig That! — Mais alcance no túnel.", sp2: "Groundhog Day — Cura ao emergir.", hp: 5600, dmg: 720, range: 4, speed: 720, modes: ["Heist", "Showdown", "Brawl Ball"] },
    { name: "Juju", emoji: "🌺", rarity: "epic", cls: "Artillery", isNew: false, desc: "Dona da Oddities Shop com três ataques elementais — relva, terra e água.", attack: "Elemental — Roda entre 3 tipos.", super: "Gris-Gris — Boneco vodu que persegue.", sp1: "Nature's Wrath — Mais forte.", sp2: "Fluid Motion — Caminha na água.", hp: 2800, dmg: 600, range: 9, speed: 720, modes: ["Gem Grab", "Hot Zone", "Bounty"] },
    { name: "Shade", emoji: "🌫️", rarity: "epic", cls: "Assassin", isNew: false, desc: "Fantasma de roupa flutuante que atravessa paredes.", attack: "Wraith — Cone que passa por paredes.", super: "Phase — Atravessa paredes e reaparece.", sp1: "Phantom Touch — Mais dano ao emergir.", sp2: "Soul Drain — Cura ao atingir.", hp: 2800, dmg: 640, range: 5, speed: 800, modes: ["Showdown", "Knockout", "Bounty"] },
    { name: "Starr Nova", emoji: "🌟", rarity: "epic", cls: "Damage Dealer", isNew: true, desc: "Uma nova estrela cósmica nascida em Starr Park. Revelada no Update 67.", attack: "Cosmic Ray — Raio estelar.", super: "Supernova — Explosão cósmica de área.", sp1: "Stellar Pull — Atrai inimigos.", sp2: "Stardust — Rastro que causa dano.", hp: 2800, dmg: 700, range: 11, speed: 720, modes: ["Bounty", "Gem Grab", "Hot Zone"] },
    { name: "Pierce", emoji: "🐚", rarity: "epic", cls: "Damage Dealer", isNew: false, desc: "Marine biólogo com tiros perfurantes e conchas que reforçam o escudo.", attack: "Penetrating Shot — Tiro perfurante.", super: "Shell Shield — Conchas dão escudos.", sp1: "Speed Shell — Mais velocidade com conchas.", sp2: "Last Shell — Última munição aplica slow.", hp: 3000, dmg: 620, range: 10, speed: 720, modes: ["Bounty", "Gem Grab", "Knockout"] },
    { name: "Glowbert", emoji: "🐟", rarity: "epic", cls: "Support", isNew: false, desc: "Biólogo marinho que liga aliados e inimigos com um feixe de luz.", attack: "Glowbeam — Feixe de ligação.", super: "Deep Light — Dano a todos os ligados.", sp1: "Bioluminescence — Maior alcance.", sp2: "Marine Therapy — Mais cura.", hp: 2800, dmg: 440, range: 9, speed: 720, modes: ["Gem Grab", "Hot Zone", "Brawl Ball"] },
    { name: "Mortis", emoji: "⚰️", rarity: "mythic", cls: "Assassin", isNew: false, desc: "Coveiro que se teleporta com cada ataque. Cura ao eliminar inimigos.", attack: "Shovel Swing — Desliza com a pá.", super: "Life Blood — Morcegos que curam.", sp1: "Creepy Harvest — Cura ao eliminar.", sp2: "Coiled Snake — Mais distância no dash.", hp: 2800, dmg: 620, range: 5, speed: 870, modes: ["Showdown", "Bounty", "Brawl Ball"] },
    { name: "Tara", emoji: "🔮", rarity: "mythic", cls: "Support", isNew: false, desc: "Adivinha com tarot. O Super cria um buraco negro que atrai todos os inimigos.", attack: "Triple Tarot — 3 cartas em leque.", super: "Black Hole — Buraco negro.", sp1: "Black Portal — Invoca clone aliado.", sp2: "Healing Shade — Super cura aliados.", hp: 2800, dmg: 520, range: 9, speed: 720, modes: ["Gem Grab", "Hot Zone", "Showdown"] },
    { name: "Gene", emoji: "🧞", rarity: "mythic", cls: "Support", isNew: false, desc: "Génio da lâmpada que puxa inimigos com o Super. Fundamental no jogo de equipa.", attack: "Smoke Blast — Projétil que se divide.", super: "Magic Hand — Mão que puxa inimigo.", sp1: "Magic Puffs — Cura aliados próximos.", sp2: "Spirit Slap — Mais dano ao perto.", hp: 3000, dmg: 480, range: 9, speed: 720, modes: ["Gem Grab", "Heist", "Hot Zone"] },
    { name: "Max", emoji: "🏃", rarity: "mythic", cls: "Support", isNew: false, desc: "A mais rápida de todos. O Super dá sprint a toda a equipa.", attack: "Faster Shooters — Rajada rápida.", super: "Super Fly — Velocidade turbo à equipa.", sp1: "Run n Gun — Recarga ao correr.", sp2: "Friendship — Super dura mais.", hp: 2800, dmg: 440, range: 8, speed: 900, modes: ["Brawl Ball", "Gem Grab", "Hot Zone"] },
    { name: "Mr. P", emoji: "🐧", rarity: "mythic", cls: "Support", isNew: false, desc: "Porteiro que usa mala como arma e coloca porteiros robôs.", attack: "Suitcase Throw — Mala ricocheteante.", super: "Porters! — Invoca porteiros robôs.", sp1: "Porters! Plus — Porteiros com mais HP.", sp2: "Handle With Care — Mala explode.", hp: 2800, dmg: 540, range: 8, speed: 720, modes: ["Gem Grab", "Siege", "Heist"] },
    { name: "Sprout", emoji: "🌱", rarity: "mythic", cls: "Artillery", isNew: false, desc: "Robô jardineiro com sementes explosivas e paredes de arbustos.", attack: "Seed Bomb — Semente explosiva.", super: "Garden Grove — Parede de arbustos.", sp1: "Overgrowth — Parede dura mais.", sp2: "Photosynthesis — Cura nos arbustos.", hp: 2400, dmg: 600, range: 10, speed: 720, modes: ["Hot Zone", "Gem Grab", "Bounty"] },
    { name: "Byron", emoji: "🧪", rarity: "mythic", cls: "Support", isNew: false, desc: "Charlatão que cura aliados e dana inimigos com os mesmos projéteis.", attack: "Injection — Seringa dupla função.", super: "Injection Overdose — Grande área de cura/dano.", sp1: "Injection — Maior alcance.", sp2: "Malaise — Reduz cura dos inimigos.", hp: 2400, dmg: 480, range: 10, speed: 720, modes: ["Hot Zone", "Gem Grab", "Bounty"] },
    { name: "Lou", emoji: "❄️", rarity: "mythic", cls: "Control", isNew: false, desc: "Máquina de slushie que congela inimigos. Controlo de zona gelado.", attack: "Chill-n-Kill — Projéteis de gelo.", super: "Subzero Slushie — Zona que imobiliza.", sp1: "Hypothermia — Freeze dura mais.", sp2: "Black Ice — Chão escorregadio.", hp: 2800, dmg: 480, range: 9, speed: 720, modes: ["Hot Zone", "Gem Grab", "Knockout"] },
    { name: "Squeak", emoji: "🐱", rarity: "mythic", cls: "Artillery", isNew: false, desc: "Gato que cola bolas de slime nas paredes. Explodem com delay.", attack: "Sticky Slime — Slime que cola e explode.", super: "Big Squeeze — Grande slime explosivo.", sp1: "Residue — Slime abranda inimigos.", sp2: "Windup — Mais dano no Super.", hp: 2400, dmg: 560, range: 9, speed: 720, modes: ["Gem Grab", "Hot Zone", "Bounty"] },
    { name: "Buzz", emoji: "🦈", rarity: "mythic", cls: "Tank", isNew: false, desc: "Guarda-vidas que atordoa inimigos próximos com o Super.", attack: "Lifeline — Bóia que causa dano.", super: "Reserve Buoy — Stun em inimigos próximos.", sp1: "Eyes Sharp — Super carrega mais rápido perto de inimigos.", sp2: "Tougher Skin — Menos dano ao usar Super.", hp: 5200, dmg: 580, range: 6, speed: 720, modes: ["Hot Zone", "Showdown", "Knockout"] },
    { name: "Fang", emoji: "🥋", rarity: "mythic", cls: "Assassin", isNew: false, desc: "Lutador de artes marciais que elimina em cadeia. Super ricocheteante.", attack: "Roundhouse — Chute em cone.", super: "Flying Kick — Chute de inimigo em inimigo.", sp1: "Fresh Kicks — Mais ricochetes.", sp2: "Corn Paws — Mais velocidade no Super.", hp: 3400, dmg: 640, range: 4, speed: 800, modes: ["Showdown", "Knockout", "Brawl Ball"] },
    { name: "Eve", emoji: "🥚", rarity: "mythic", cls: "Damage Dealer", isNew: false, desc: "Alienígena que coloca ovos que chocam em mini aliados.", attack: "Spitfire — Projéteis ácidos.", super: "Delivered! — Ovos que chocam em aliados.", sp1: "Easy Pickings — Mais dano a inimigos com baixo HP.", sp2: "Unnatural Recovery — Cura ao colocar ovos.", hp: 2400, dmg: 480, range: 8, speed: 720, modes: ["Showdown", "Hot Zone", "Gem Grab"] },
    { name: "Janet", emoji: "🎤", rarity: "mythic", cls: "Damage Dealer", isNew: false, desc: "Cantora que voa sobre o campo durante o Super, atacando de cima.", attack: "Pop Singer — Notas musicais.", super: "On Stage — Voa atacando abaixo.", sp1: "Encore — Super dura mais.", sp2: "Stage Fright — Mais dano ao iniciar.", hp: 2400, dmg: 540, range: 10, speed: 720, modes: ["Bounty", "Gem Grab", "Knockout"] },
    { name: "Otis", emoji: "🎨", rarity: "mythic", cls: "Control", isNew: false, desc: "Graffiti artist que silencia inimigos com o Super. Alvo não pode disparar.", attack: "Ink Squirt — Jato de tinta.", super: "Dormant Star — Silencia um inimigo.", sp1: "Stencil Me In — Silêncio dura mais.", sp2: "Slick Boots — Mais velocidade.", hp: 2800, dmg: 520, range: 9, speed: 720, modes: ["Bounty", "Knockout", "Gem Grab"] },
    { name: "Buster", emoji: "🎬", rarity: "mythic", cls: "Tank", isNew: false, desc: "Ator de ação que absorve e devolve projéteis com o Super.", attack: "Blockbuster — Projétil médio.", super: "Lights, Camera, Action! — Escudo que devolve projéteis.", sp1: "Kevlar Vest — Escudo absorve mais.", sp2: "Practiced Punches — Mais dano.", hp: 5200, dmg: 560, range: 7, speed: 720, modes: ["Hot Zone", "Brawl Ball", "Gem Grab"] },
    { name: "Gray", emoji: "🌀", rarity: "mythic", cls: "Support", isNew: false, desc: "Mágico que usa portais para teleportar a equipa em qualquer ponto do mapa.", attack: "Smoke and Mirrors — Projéteis por portais.", super: "Portal — Coloca portal para equipa.", sp1: "Gray Area — Portais têm área maior.", sp2: "Seventh Sense — Vê inimigos perto de portais.", hp: 2600, dmg: 460, range: 9, speed: 720, modes: ["Gem Grab", "Hot Zone", "Heist"] },
    { name: "R-T", emoji: "📡", rarity: "mythic", cls: "Tank", isNew: false, desc: "Robô de dois modos — cabeça e corpo separados com ataques únicos.", attack: "Zap Attack — Choque elétrico.", super: "Head Start — Separa cabeça do corpo.", sp1: "System Reboot — Recarga no modo dividido.", sp2: "Overclock — Super com mais alcance.", hp: 4800, dmg: 580, range: 6, speed: 720, modes: ["Brawl Ball", "Hot Zone", "Gem Grab"] },
    { name: "Willow", emoji: "🌸", rarity: "mythic", cls: "Control", isNew: false, desc: "Controla inimigos com o Super, fazendo-os atacar os próprios aliados.", attack: "Love is Blind — Projétil de charme.", super: "Lost in a Dream — Controla um inimigo.", sp1: "Infatuation — Controlo dura mais.", sp2: "Heartache — Mais dano ao alvo controlado.", hp: 2400, dmg: 480, range: 8, speed: 720, modes: ["Gem Grab", "Hot Zone", "Bounty"] },
    { name: "Doug", emoji: "🌭", rarity: "mythic", cls: "Support", isNew: false, desc: "Vendedor de cachorros-quentes que cura aliados e transforma inimigos.", attack: "Frank's Franks — Cachorros que curam aliados.", super: "Dippity Dog! — Reverte inimigos.", sp1: "Refund — Cura mais ao atingir aliados.", sp2: "Happy Meal — Mais cura no Super.", hp: 3000, dmg: 360, range: 8, speed: 720, modes: ["Hot Zone", "Brawl Ball", "Gem Grab"] },
    { name: "Chuck", emoji: "🚂", rarity: "mythic", cls: "Damage Dealer", isNew: false, desc: "Condutor de comboio que acelera por carris que ele próprio coloca.", attack: "All Aboard — Projétil elétrico.", super: "Full Speed — Coloca carril e acelera.", sp1: "Fast Track — Mais velocidade.", sp2: "Cargo Load — Mais dano ao passar.", hp: 3000, dmg: 560, range: 9, speed: 720, modes: ["Hot Zone", "Brawl Ball", "Gem Grab"] },
    { name: "Charlie", emoji: "🕷️", rarity: "mythic", cls: "Control", isNew: false, desc: "Aranha que captura inimigos num casulo. Imobilização completa.", attack: "Spinning Spider — Teias em cone.", super: "Capture! — Casulo que captura inimigo.", sp1: "Parasociality — Invoca aranhas no Super.", sp2: "Fast Weaver — Casulo com mais HP.", hp: 2800, dmg: 500, range: 7, speed: 720, modes: ["Showdown", "Gem Grab", "Hot Zone"] },
    { name: "Mico", emoji: "🐒", rarity: "mythic", cls: "Assassin", isNew: false, desc: "Macaco saltitante que ganha stacks de velocidade e dano ao acertar.", attack: "Tail Whip — Cauda em arco.", super: "Monkey Business — Salta para inimigo.", sp1: "Last Banana — Mais dano com stacks máximas.", sp2: "Monkey See — Vê aliados próximos.", hp: 2800, dmg: 560, range: 4, speed: 800, modes: ["Showdown", "Bounty", "Knockout"] },
    { name: "Melodie", emoji: "🎵", rarity: "mythic", cls: "Assassin", isNew: false, desc: "Cantora pop com notas musicais em órbita que causam dano constante.", attack: "Chart Topper — Notas em órbita.", super: "Solo — Notas causam mais dano.", sp1: "Interlude — Mais notas simultâneas.", sp2: "Chorus — Notas mais rápidas.", hp: 2800, dmg: 540, range: 5, speed: 800, modes: ["Showdown", "Brawl Ball", "Hot Zone"] },
    { name: "Lily", emoji: "🌷", rarity: "mythic", cls: "Assassin", isNew: false, desc: "Assassina invisível que troca de lugar com inimigos.", attack: "Petal Throw — Pétalas dañinas.", super: "In the Pocket — Invisível e troca com inimigo.", sp1: "Blackout — Invisibilidade dura mais.", sp2: "Camo — Mais rápida ao ser invisível.", hp: 2600, dmg: 560, range: 7, speed: 800, modes: ["Showdown", "Bounty", "Knockout"] },
    { name: "Lumi", emoji: "🪘", rarity: "mythic", cls: "Support", isNew: false, desc: "Baterista do MadEvil Manor. O ritmo melhora toda a equipa próxima.", attack: "Drumbeat — Onda sonora com slow.", super: "Drum Solo — Boost de dano e velocidade à equipa.", sp1: "Bass Drop — Super tem mais área.", sp2: "Encore — Super dura mais.", hp: 2800, dmg: 460, range: 8, speed: 720, modes: ["Gem Grab", "Hot Zone", "Brawl Ball"] },
    { name: "Gus", emoji: "👻", rarity: "super_rare", cls: "Support", isNew: false, desc: "Fantasma amigável que distribui escudos pela equipa com o Super.", attack: "Spirit Slap — Golpe de fantasma.", super: "Spirits Up! — Escudos para todos os aliados.", sp1: "Friendly Spirits — Mais fantasmas.", sp2: "Comet Shield — Escudos com mais HP.", hp: 2800, dmg: 460, range: 8, speed: 720, modes: ["Gem Grab", "Hot Zone", "Brawl Ball"] },
    { name: "Kaze", emoji: "🌊", rarity: "mythic", cls: "Control", isNew: false, desc: "Ninja do vento que controla direção dos ataques com o leque.", attack: "Fan Storm — Rajada de vento.", super: "Hyper Fan — Tornado persistente no mapa.", sp1: "Breeze — Mais velocidade após Super.", sp2: "Tailwind — Tornado atrai inimigos.", hp: 2800, dmg: 520, range: 8, speed: 720, modes: ["Hot Zone", "Gem Grab", "Bounty"] },
    { name: "Jae-Yong", emoji: "🎮", rarity: "mythic", cls: "Damage Dealer", isNew: false, desc: "Gamer profissional que usa dispositivos de jogo como arma.", attack: "Button Mash — Projéteis rápidos.", super: "Level Up! — Zona de dano invisível.", sp1: "GG — Mais dano após eliminar.", sp2: "No Lag — Menos recarga.", hp: 2800, dmg: 600, range: 9, speed: 720, modes: ["Gem Grab", "Bounty", "Knockout"] },
    { name: "Kenji", emoji: "⚔️", rarity: "mythic", cls: "Assassin", isNew: false, desc: "Samurai que bloqueia projéteis e contra-ataca com a katana.", attack: "Katana Slash — Golpe em arco.", super: "Deflection — Bloqueia e devolve projéteis.", sp1: "Counter Strike — Contra-ataque automático.", sp2: "Bushido — Mais dano após Super.", hp: 3600, dmg: 720, range: 4, speed: 800, modes: ["Showdown", "Knockout", "Brawl Ball"] },
    { name: "Gigi", emoji: "💐", rarity: "mythic", cls: "Support", isNew: false, desc: "Bailarina que cura aliados e fica invulnerável durante o Super.", attack: "Plié — Projéteis que curam aliados.", super: "Grand Jeté — Salta invulnerável em área.", sp1: "Plié Protection — Escudo ao não receber dano.", sp2: "Graceful — Velocidade após Super.", hp: 2800, dmg: 400, range: 8, speed: 720, modes: ["Gem Grab", "Brawl Ball", "Hot Zone"] },
    { name: "Bolt", emoji: "🌩️", rarity: "mythic", cls: "Damage Dealer", isNew: true, desc: "Novo brawler elétrico revelado no Update 67. Ataques de raios e energia pura.", attack: "Lightning Strike — Raio elétrico.", super: "Thunderclap — Tempestade de raios.", sp1: "Static — Aplica slow ao atingir.", sp2: "Charged — Mais dano após recarregar.", hp: 3000, dmg: 640, range: 9, speed: 800, modes: ["Hot Zone", "Gem Grab", "Bounty"] },
    { name: "Spike", emoji: "🌵", rarity: "legendary", cls: "Damage Dealer", isNew: false, desc: "Cacto fofo que dispara espinhos em todas as direções.", attack: "Needle Grenade — 6 espinhos em explosão.", super: "Stick Around! — Zona de espinhos e slow.", sp1: "Fertilize — Cura na zona do Super.", sp2: "Curveball — Espinhos curvam.", hp: 2400, dmg: 620, range: 9, speed: 720, modes: ["Gem Grab", "Hot Zone", "Showdown"] },
    { name: "Crow", emoji: "🐦‍⬛", rarity: "legendary", cls: "Assassin", isNew: false, desc: "Assassino corvídeo com veneno que reduz a cura dos inimigos.", attack: "Switchblade — 3 facas envenenadas.", super: "Swoop — Salta e aterra com dano.", sp1: "Extra Toxic — Mais redução de cura.", sp2: "Carrion Crow — Mais dano com baixo HP.", hp: 2400, dmg: 520, range: 10, speed: 870, modes: ["Showdown", "Bounty", "Knockout"] },
    { name: "Leon", emoji: "🦁", rarity: "legendary", cls: "Assassin", isNew: false, desc: "Assassino invisível com lâminas. O Super deixa-o completamente invisível.", attack: "Spinner Blades — 4 lâminas em leque.", super: "Smoke Bomb — Invisibilidade.", sp1: "Smoke Trails — Invisível ao mover.", sp2: "Eye of the Tiger — Mais alcance.", hp: 2800, dmg: 580, range: 7, speed: 870, modes: ["Showdown", "Bounty", "Gem Grab"] },
    { name: "Sandy", emoji: "🏜️", rarity: "legendary", cls: "Control", isNew: false, desc: "Espírito do deserto sonolento. O Super esconde a equipa numa tempestade.", attack: "Psammophyte — Projétil divisor.", super: "Sandstorm — Tempestade que esconde equipa.", sp1: "Rude Sands — Slow na tempestade.", sp2: "Psammophyte — Mais areia.", hp: 2800, dmg: 480, range: 9, speed: 720, modes: ["Hot Zone", "Gem Grab", "Brawl Ball"] },
    { name: "Amber", emoji: "🔥", rarity: "legendary", cls: "Damage Dealer", isNew: false, desc: "Artista de circo que cospe fogo. Controla zonas com chamas persistentes.", attack: "Spit Fire — Cuspe de fogo contínuo.", super: "Fire Starter — Botija de fogo em área.", sp1: "Wild Flame — Chamas espalham-se.", sp2: "Scorchin' Spit — Dano progressivo.", hp: 2800, dmg: 520, range: 7, speed: 720, modes: ["Hot Zone", "Heist", "Showdown"] },
    { name: "Meg", emoji: "🦿", rarity: "legendary", cls: "Tank", isNew: false, desc: "Mecânica que pilota um robô gigante. Ao morrer o robô, Meg sai e continua.", attack: "Heavy Metal — Ataque de robô.", super: "Mech Suit — Pilota robô gigante.", sp1: "Force Field — Escudo ao sair do robô.", sp2: "Jolting Volts — Robô aplica slow.", hp: 5600, dmg: 740, range: 5, speed: 630, modes: ["Hot Zone", "Heist", "Showdown"] },
    { name: "Surge", emoji: "🤩", rarity: "legendary", cls: "Damage Dealer", isNew: false, desc: "DJ que evolui em 4 estágios. Cada estágio muda o ataque.", attack: "Party Blaster — Projétil divisor.", super: "Super Surge — Teleporta e evolui.", sp1: "Speed Zone — Zona de velocidade.", sp2: "To the Max — Último nível com mais dano.", hp: 2400, dmg: 520, range: 9, speed: 720, modes: ["Showdown", "Gem Grab", "Bounty"] },
    { name: "Chester", emoji: "🎪", rarity: "legendary", cls: "Damage Dealer", isNew: false, desc: "Palhaço com 5 Supers diferentes. Cada Super é uma surpresa.", attack: "Juggling Act — Projéteis alternados.", super: "Pick a Card — 1 de 5 Supers aleatórios.", sp1: "Trickster — Rotação mais rápida.", sp2: "Extra Pepper — Mais dano em todos.", hp: 2400, dmg: 580, range: 9, speed: 720, modes: ["Showdown", "Bounty", "Gem Grab"] },
    { name: "Cordelius", emoji: "🍄", rarity: "legendary", cls: "Control", isNew: false, desc: "Cogumelo mágico que teletransporta inimigos para o seu reino paralelo.", attack: "Shroom Spores — Esporos de cogumelo.", super: "Shadow Realm — Envia inimigo para dimensão paralela.", sp1: "Fungal Infection — Mais tempo no realm.", sp2: "Mycotoxin — Envenenamento no realm.", hp: 2600, dmg: 520, range: 8, speed: 720, modes: ["Showdown", "Bounty", "Knockout"] },
    { name: "Kit", emoji: "😺", rarity: "legendary", cls: "Support", isNew: false, desc: "Gato mediático que salta para aliados, curandos eles e danificando inimigos.", attack: "Cat Attack — Garras em cone.", super: "Copycat — Salta para aliado ou inimigo.", sp1: "Attuned — Aliados recebem mais dano.", sp2: "Glutton — Kit dura mais nos aliados.", hp: 2600, dmg: 480, range: 4, speed: 800, modes: ["Gem Grab", "Hot Zone", "Brawl Ball"] },
    { name: "Draco", emoji: "🐲", rarity: "legendary", cls: "Tank", isNew: false, desc: "Dragão guitarrista do MadEvil Manor que se transforma num dragão poderoso.", attack: "Power Chord — Acorde de guitarra elétrica.", super: "Dragon Form — Transforma-se em dragão.", sp1: "Metal Head — Mais dano no modo dragão.", sp2: "Rock On — Modo dragão dura mais.", hp: 5600, dmg: 700, range: 5, speed: 720, modes: ["Showdown", "Brawl Ball", "Hot Zone"] },
    { name: "Damian", emoji: "🎤", rarity: "legendary", cls: "Tank", isNew: true, desc: "O vocalista do trio MadEvil Manor. Revelado com Electric Callboy no Update 67. Chega a 24 de Abril!", attack: "Sonic Scream — Rugido sónico em cone.", super: "Stage Dive — Salta causando dano de área.", sp1: "Crowd Surfer — Mais alcance no Super.", sp2: "Heavy Metal — Super aplica stun.", g1: "", g2: "", hp: 6400, dmg: 700, range: 5, speed: 720, modes: ["Showdown", "Hot Zone", "Brawl Ball"] },
    { name: "Sirius", emoji: "🌑", rarity: "ultra", cls: "Controller", isNew: false, desc: "O 100.º brawler e grande vilão de Starr Park. Coleciona sombras de brawlers e invoca-as em batalha.", attack: "Binary Starr — Projétil explosivo + sombra.", super: "Shadow Summon — Invoca todas as sombras.", sp1: "Dusk Runners — Sombras mais velozes.", sp2: "The Darkest Starr — Cada 4.º acerto guarda 2 sombras.", hp: 3000, dmg: 700, range: 10, speed: 720, modes: ["Gem Grab", "Bounty", "Knockout"] },
    { name: "Najia", emoji: "🐍", rarity: "ultra", cls: "Assassin", isNew: false, desc: "A 101.ª brawler. Assassina de cobras com ataques em duas etapas e serpentes invocadas.", attack: "Snake Delivery — Jarra com cobra.", super: "Den Mother — Ninho de cobras no campo.", sp1: "Serpentine — Veneno dura mais.", sp2: "Coiled Spring — Mais velocidade de ataque.", hp: 2800, dmg: 660, range: 7, speed: 800, modes: ["Showdown", "Bounty", "Knockout"] },
];

const RARITY_ORDER = ["starter", "rare", "super_rare", "epic", "mythic", "legendary", "ultra"];
const RARITY_LABELS = { starter: "Starter", rare: "Rare", super_rare: "Super Rare", epic: "Epic", mythic: "Mythic", legendary: "Legendary", ultra: "Ultra Legendary" };
const RARITY_COLORS = { starter: "var(--c-starter)", rare: "var(--c-rare)", super_rare: "var(--c-super)", epic: "var(--c-epic)", mythic: "var(--c-mythic)", legendary: "var(--c-leg)", ultra: "var(--c-ultra)" };

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
    renderAll();
});

function renderAll() {
    const container = document.getElementById("brawlersContainer");
    container.innerHTML = "";
    const s = currentSearch.toLowerCase().trim();
    const filtered = BRAWLERS.filter(b => (currentFilter === "all" || b.rarity === currentFilter) && (s === "" || b.name.toLowerCase().includes(s)));

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
<div class="brawler-class">${b.cls}</div>`;
            card.addEventListener("click", () => openModal(b));
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
    document.getElementById("modalDesc").textContent = b.desc;
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

renderAll();