// ==========================================================================
// Gerais/Constantes/Project R.I.S.E Zone/Herois.js
// Array centralizado dos heróis conhecidos de Project R.I.S.E.
// Usado por Herois.html (grid/filtros/modal) e pela Página Inicial
// (secção "Heróis" — prévia).
//
// Campos: nome, familia, classe, isStarter, habilidade, ultimate, imgKey
// - isStarter: equivalente ao "isNew" do Brawlers.js — herói disponível
//   desde o início / recomendado para novos jogadores.
// - habilidade / ultimate: ficam null enquanto não há confirmação pública
//   suficiente (ver Project R.I.S.E.md, secção "Estrutura de dados").
// - imgKey: nome usado para procurar a imagem do herói (convenção: nome
//   do herói tal como aparece em `nome`).
//
// Heróis por revelar entram com todos os campos a null (incluindo `nome`);
// a página trata isso automaticamente mostrando "Por revelar".
// ==========================================================================

const HEROIS = [
    {
        nome: "Archer",
        familia: "Villager",
        classe: "Spotter",
        isStarter: true,
        habilidade: null,
        ultimate: null,
        imgKey: "Archer",
    },
    {
        nome: "Barbarian",
        familia: "Villager",
        classe: "Smasher",
        isStarter: true,
        habilidade: null,
        ultimate: null,
        imgKey: "Barbarian",
    },
    {
        nome: "Firecracker",
        familia: "Villager",
        classe: "Smasher",
        isStarter: false,
        habilidade: null,
        ultimate: null,
        imgKey: "Firecracker",
    },
    {
        nome: "Valkyrie",
        familia: "Villager",
        classe: "Bruiser",
        isStarter: false,
        habilidade: null,
        ultimate: null,
        imgKey: "Valkyrie",
    },
    {
        nome: "Bomber",
        familia: null,
        classe: null,
        isStarter: false,
        habilidade: null,
        ultimate: null,
        imgKey: "Bomber",
    },
    {
        nome: "Goblin Brawler",
        familia: null,
        classe: null,
        isStarter: false,
        habilidade: null,
        ultimate: null,
        imgKey: "Goblin Brawler",
    },
];