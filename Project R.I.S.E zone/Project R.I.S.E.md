# Project R.I.S.E Zone — Plano de Trabalho

> Documento de retoma. A trabalhar no Project R.I.S.E Zone estava em pausa
> enquanto se resolvia a fundação multijogo da Supercellzone. Este ficheiro
> resume tudo o que já foi decidido, para retomar sem perder contexto.

---

## 1. Sobre o jogo

**Project R.I.S.E** é um jogo experimental/beta da Supercell — um RPG de
ação social roguelite, ambientado no universo Clash. Nasceu de um reboot do
antigo _Clash Heroes_.

- Ainda **não tem lançamento global**. Beta fechada: **19 de agosto — 2 de
  setembro de 2026**.
- Nome pode não ser final (nome de código de desenvolvimento).
- Muito pouco conteúdo público disponível — dados podem mudar sem aviso.

### Mecânica principal — a Tower

- Equipas de **3 jogadores** sobem uma estrutura misteriosa por pisos.
- Em cada piso: localizar **power cores** para ativar o elevador ao piso
  seguinte.
- Periodicamente, um **boss** bloqueia o caminho — a equipa toda tem de o
  derrotar.
- Progressão: **Hero Badges** e Gold sobem o **Tier** dos heróis (mais
  ataque, mais vida, upgrades de ability).
- Se não houver jogadores suficientes, entram **Bot Heroes**.

### Heróis conhecidos (pré-beta)

| Nome           | Família  | Classe  |
| -------------- | -------- | ------- |
| Archer         | Villager | Spotter |
| Barbarian      | Villager | Smasher |
| Firecracker    | Villager | Smasher |
| Valkyrie       | Villager | Bruiser |
| Bomber         | —        | —       |
| Goblin Brawler | —        | —       |

(Total de 6 heróis conhecidos até agora)

---

## 2. Decisões já tomadas

### Abordagem geral

- Baseado em conteúdo público (não há acesso à beta ainda).
- Objetivo: **wiki completa** (heróis, mecânicas, tudo).
- Sem visitantes ainda → **sem avisos de "dados sujeitos a mudança"** nas
  páginas por agora.
- Reaproveitar ao máximo a estrutura técnica do BrawlZone (`Gerais/`
  partilhado, i18n, cursor, navbar, etc.).

### Estrutura de pastas

```
Project R.I.S.E Zone/
├── Página inicial.html          (nome confirmado — sem hífen, "inicial" minúsculo)
├── Página inicial.css
├── Página inicial.js
└── (futuras páginas: Todas as imagináveis para ser o mais completo possível, mas estas serão as prováveis páginas (Heroes
Tower
Perks
Progression
Wiki
Guides
News))

Gerais/Constantes/
└── Project R.I.S.E Zone/
    └── Herois.js
```

- `Constantes/` é o **único** sítio dentro de `Gerais/` com subpastas por
  jogo. O resto do `Gerais/` fica partilhado sem subdivisão.
- `Cores.css`: **um único ficheiro**, todas as cores de todos os jogos no
  mesmo `:root`, sem sistema de override. Prefixo `--rise-*` para esta Zone.

### Identidade visual

**Paleta roxo/dourado** (fantasia, RPG clássico, evoca a Tower e mistério):

```css
--rise-primary: #6b3fa0;
--rise-primary-dark: #3d2159;
--rise-accent: #e8b923;
--rise-accent-light: #f4d35e;
--rise-bg: #1a0f2e;
--rise-bg-elevated: #2a1b42;
--rise-text: #f0e6ff;
--rise-text-muted: #b8a3d9;
--rise-border: #4a2e6e;
--rise-success: #22c55e; /* igual ao --green do resto do site */
--rise-danger: #ef4444; /* igual ao --red do resto do site */
```

✅ Já adicionado ao `Gerais/Cores.css` partilhado.

**Tipografia:** Cinzel (títulos, talhe heróico/fantasia) + Manrope (corpo de
texto) + JetBrains Mono (labels tipo classe/tier).

**Assinatura visual:** a própria **Tower**, desenhada como pisos empilhados
no hero (`.tower-floor`), não é decoração — representa a mecânica real do
jogo.

### Estrutura de dados — `Herois.js`

Campos definidos (ver ficheiro real para o array completo):

- `nome`, `familia`, `classe`, `isStarter` (binário, equivalente a `isNew`
  do `Brawlers.js`), `habilidade`, `ultimate`, `imgKey`
- Heróis por revelar entram como placeholders com todos os campos a `null`
  (incluindo `nome`) — a página trata isso automaticamente mostrando "Por
  revelar" com estilo semi-transparente.
- `habilidade`/`ultimate` ficam `null` mesmo nos heróis confirmados —
  info pública insuficiente para preencher com confiança.

✅ Já criado em `Gerais/Constantes/Project R.I.S.E Zone/Herois.js`.

### Página Inicial — secções (única página prioritária por agora)

1. **Hero** — tagline, visual da Tower, destaque da janela de beta
2. **Sobre o jogo** — resumo do conceito (RPG ação social roguelite, Tower,
   3 jogadores)
3. **Heróis** — cards simples dos heróis conhecidos, sem filtros complexos
4. **A Tower** — explicação da mecânica (4 passos: entrar no piso → power
   cores → boss → subir)
5. **CTA** — beta signup oficial + Discord

✅ Já criado: `Página inicial.html` / `.css` / `.js`.

### Navbar

Integrado no sistema multi-zona do `Gerais/Navbar/Navbar.js`:

```js
buildNavbar(activeLink, "rise", isHome);
```

- `activeLink` válidos: `"herois"`, `"tower"`, ou `""`
- Links da Zone são âncoras (`#heroi-lista`, `#tower`) — a única página
  existe é a Página Inicial.
- `homeHref` (logo): fixo, manual — aponta para a Supercellzone quando
  `isHome = true`, ou para a própria Página Inicial da Zone quando
  `isHome = false`.

---

## 3. Pendências conhecidas

> Atualizado em 2 de setembro de 2026 — dia seguinte ao fim da beta fechada
> (19 ago – 2 set). Nesta sessão resolveram-se as 4 pendências técnicas da
> Página Inicial; as duas pendências de conteúdo continuam adiadas.

- [x] **Prefixo `rise_` nas chaves i18n** — todas as 31 chaves `data-i18n`
      da Página Inicial foram renomeadas com o prefixo `rise_`
      (`hero_eyebrow` → `rise_hero_eyebrow`, `tower_step1_title` →
      `rise_tower_step1_title`, etc.), eliminando o risco de colisão com
      chaves genéricas de outras Zones no `Tradução.js`. HTML atualizado
      (`Página Inicial.html`).
- [x] **Traduções `pt` no `Tradução.js`** — bloco `pt` completo escrito
      (todas as 31 chaves com o texto que já estava de fallback no HTML).
      Blocos `en`/`es` criados com as mesmas 31 chaves, mas vazios — por
      preencher. Ficheiro de apoio: `Traducoes-RISE.txt`, pronto a colar
      nos três objetos do `Tradução.js` (sugestão: a seguir à secção
      `Brawlzone - Página inicial - Cta Section`).
- [x] **Confirmar chamada `buildNavbar()`** na página real — confirmado
      `buildNavbar("", "rise", true)`, correto para a Página Inicial da
      zona (activeLink vazio, zone "rise", isHome true).
- [x] Validar os valores de `homeHref` no `Navbar.js` para esta Zone —
      confirmados corretos: `onHome.homeHref = "../../Página inicial.html"`
      (2 níveis até à raiz da Supercellzone, bate certo com a profundidade
      real `Project R.I.S.E zone/Página inicial/`) e
      `elsewhere.homeHref = "Página inicial.html"` (mesma pasta).
- [ ] **Preencher traduções `en`/`es`** para as 31 chaves `rise_*` no
      `Tradução.js` (chaves já existem em `Traducoes-RISE.txt`, só faltam
      os valores).
- [ ] **Página de Heróis dedicada** (`Herois.html`) — decidido não
      prioritizar ainda; a Página Inicial mostra só uma prévia.
- [ ] **Página/secção da Tower** com mais detalhe — mesma decisão, não
      prioritizado ainda.
- [ ] **Acompanhar o fim da beta fechada (2 set 2026)** — a app já estava
      live na Google Play com descrição mencionando "perks" e "builds"
      (termos ainda não refletidos na estrutura de dados `Herois.js`, que
      só tem `habilidade`/`ultimate`). Vale a pena rever se a Supercell
      publica mais informação oficial (lançamento global, novos heróis
      além de Archer/Barbarian/Firecracker/Valkyrie/Bomber/Goblin Brawler,
      mecânicas de perks) e atualizar este documento e o `Herois.js` em
      conformidade.
