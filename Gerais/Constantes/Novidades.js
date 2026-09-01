// ==========================================================================
// Gerais/Constantes/Novidades.js
// Array centralizado de posts de novidades. Usado pela Página Inicial do
// BrawlZone (carrossel/grid de notícias) e pela Página Inicial da
// Supercellzone (secção "Novidades" — últimas novidades entre Zones).
//
// Os campos *Key referenciam TRANSLATIONS (Gerais/Traduções/Tradução.js).
// O campo "data" é texto fixo (não traduzido), como já era antes.
// ==========================================================================

const POSTS = [
    { emoji: "🌟", cor: "yellow", tagKey: "post1_tag", data: "27 Jun 2026", tituloKey: "post1_titulo", excerptKey: "post1_excerpt", link: "https://www.youtube.com/watch?v=pgGThZitPis&list=PLTBLax1DE1612clulHb7Ci4JQEVMKoC7x&index=3", destaque: true },
    { emoji: "⚔️", cor: "purple", tagKey: "post2_tag", data: "9 Jul 2026", tituloKey: "post2_titulo", excerptKey: "post2_excerpt", link: "https://www.youtube.com/watch?v=S-8YkBgjFfo", destaque: false },
    { emoji: "🦸", cor: "red", tagKey: "post3_tag", data: "2 Jul 2026", tituloKey: "post3_titulo", excerptKey: "post3_excerpt", link: "https://www.youtube.com/watch?v=A6g3ozZQQQ0", destaque: false },
    { emoji: "🏟️", cor: "orange", tagKey: "post4_tag", data: "2 Jul 2026", tituloKey: "post4_titulo", excerptKey: "post4_excerpt", link: "../Notícias/Notícias Atuais/Mudanças/Mudanças do update 68/Notas de lançamento update 68/Notas de lançamento update 68.html", destaque: false },
];