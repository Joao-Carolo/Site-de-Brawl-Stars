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