# Supercellzone — Documentação do Projeto

> Última atualização: 25 de agosto de 2026
> Repositório: `joao-carolo/Site-de-Brawl-Stars` (GitHub Pages)

---

## 1. Visão Geral

**Supercellzone** é um hub multijogo, fã-site não oficial dedicado a jogos da Supercell. É a evolução do antigo projeto "BrawlZone" (fã-site só de Brawl Stars), que agora vive como uma das "Zones" dentro do hub central.

- **Idioma-base:** português europeu (todos os dados-fonte são escritos em pt).
- **Stack atual:** HTML, CSS, JavaScript vanilla (sem frameworks).
- **Hospedagem:** GitHub Pages.
- **Objetivo declarado do BrawlZone:** ser o site mais completo e interativo sobre Brawl Stars em português, sempre atualizado a cada update do jogo.
- **Zones ativas atualmente:**
  - **BrawlZone** (Brawl Stars) — a mais madura/desenvolvida.
  - **Project R.I.S.E Zone** — em construção ativa.
  - Mais Zones estão planeadas para o futuro.

### Plano de Backend (futuro, ~2027)

- Decisão preliminar: **Node.js** (aproveitar conhecimento já existente do frontend).
- Abordagem gradual sugerida: começar por um serviço gerido tipo Firebase (BD + autenticação) antes de avançar para servidor Node.js/Express completo.
- Stack alvo: Node.js (Express ou Fastify) + MongoDB ou PostgreSQL.
- Funcionalidades candidatas a backend: contas de utilizador, favoritos permanentes, comentários, winrate atualizado automaticamente, newsletter automatizada.
- Sem prazo definido para início — o site mantém-se **totalmente estático** até lá.
- Princípio orientador: manter os dados bem estruturados e centralizados durante toda a fase estática, para facilitar a futura migração.

---

## 2. Estrutura de Pastas (pós-transição multijogo)

```
Supercellzone/                          (raiz do repo, ainda chamado Site-de-Brawl-Stars)
├── index.html                          (só idioma, redireciona)
├── Pagina-Inicial.html/css/js          (Página Inicial da Supercellzone — institucional)
├── Gerais/                             (partilhado entre TODAS as Zones)
│   ├── Cores.css                       (todas as variáveis de cor de todas as Zones, um único :root)
│   ├── Logo/
|   |   ├── Logo.css
|   |   └── Logo.png                    (As três logos estão aqui)
│   ├── Cursor/                         (Cursor.js/.css — cursor personalizado com anel, desativado em touch)
│   ├── Mobile Menu/                    (Mobile Menu.js/.css — painel lateral com overlay)
│   ├── Navbar/                         (Navbar.js/.css — buildNavbar multi-zona)
│   ├── Footer/                         (Footer.js — gera footer via insertAdjacentHTML)
│   ├── Breadcrumbs/                    (Breadcrumbs.js — breadcrumb automático a partir do URL)
│   ├── Reveal/                         (Reveal.js/.css — animação fade+slide via IntersectionObserver)
│   ├── Toast/                          (Toast.js/.css — showToast(mensagem, tipo))
│   ├── Traduções/
│   │   └── Tradução.js                 (sistema i18n completo)
│   ├── Constantes/                     (ÚNICO sítio em Gerais/ com subpastas por jogo)
│   │   ├── Brawlers.js                 (array BRAWLERS centralizado — BrawlZone)
│   │   ├── Raridades.js                (RARITY_LABELS / RARITY_COLORS / RARITY_ORDER)
│   │   ├── Buffies.js                  (BRAWLER_BUFFIES e MACHINES)
│   │   └── Project R.I.S.E Zone/
│   │       └── Herois.js               (a criar)
│   ├── Tema.js
│   └── Pesquisa.js
├── BrawlZone/
│   └── Página inicial/Página inicial.html
│   └── (Brawlers.html, Skins.html, Buffies.html, Nanopoderes.html, etc.)
└── Project R.I.S.E Zone/               (em construção)
    ├── Pagina-Inicial.html/css/js
    └── Herois.html  
```

### Decisões-chave de estrutura

- **`Cores.css`**: um único ficheiro, todas as cores de todas as Zones no mesmo `:root`, sem sistema de override.
  - Prefixos: `--rise-*` (Project R.I.S.E Zone, paleta roxo/dourado), `--sz-*` (Supercellzone, paleta neutra escura + acento azul), variáveis já existentes do BrawlZone.
- **`Constantes/`**: é o único local dentro de `Gerais/` com subpastas por jogo. O resto de `Gerais/` fica partilhado sem subdivisão.
- **`index.html`** (raiz): só faz seleção de idioma (chave `brawlzone_lang` no `localStorage`, nome mantido por compatibilidade) e redireciona para `Pagina-Inicial.html` da Supercellzone. `REPO_NAME` mantém-se `"Site-de-Brawl-Stars"`.
- **Caminhos**: preferência explícita por definições manuais de path em vez de cálculo automático (corrigido várias vezes ao longo do projeto).

---

## 3. Padrão de Estrutura de Página

### `<head>`

Ordem: fontes Google → `Cores.css` → `Logo.css` → `Cursor.css` → `Mobile Menu.css` → `Navbar.css` → `Footer.css` → `Reveal.css` → `Breadcrumbs.css` → `Toast.css` → CSS próprio da página.

### `<body>`

```html
<div id="cursor"></div>
<div id="cursor-ring"></div>
<nav class="breadcrumb" id="breadcrumb"></nav>
<!-- conteúdo da página -->
<!-- sem nav/footer manuais — são gerados por JS -->
```

### Antes de `</body>` — ordem estrita de scripts

```
1. Tradução.js
2. Ficheiros de dados (ex. Brawlers.js, Herois.js)
3. JS próprio da página
4. Scripts utilitários (Pesquisa.js, Tema.js, etc.)
5. Footer.js
6. Navbar.js
7. Chamada a buildNavbar(...)
8. Mobile Menu.js
```

> **Regra crítica:** qualquer script que dependa de elementos gerados dinamicamente (pesquisa, breadcrumb traduzido, etc.) deve correr **depois** do script que os cria.

---

## 4. Sistema de Imagem com Fallback

Padrão usado em todo o site:

```html
<img src="caminho/imagem.png"
     onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
<div class="fallback-icon" style="display:none">🔧</div>
```

⚠️ **Nunca usar** `onerror="this.outerHTML=...` (problema de aspas aninhadas). Usar sempre o padrão `display='none'` + elemento seguinte.

Em `Brawlers.html`, o sistema aplica-se em cascata a: imagem do brawler, ataque, super, star powers, gadgets — path automático construído a partir do nome da habilidade, com possibilidade de override por brawler via campos `*Img`.

---

## 5. Sistema de Tradução (i18n)

### Funcionamento

- `getCurrentLang()` lê `localStorage.brawlzone_lang` (default `"pt"`).
- `setLang(lang)` grava a escolha e recarrega a página.
- `applyTranslations()` aplica a todos os elementos `[data-i18n]` via `textContent`, exceto chaves na lista `KEYS_COM_HTML` que usam `innerHTML` (ex.: `footer_copyright`, que contém `<strong>`).
- `data-i18n-placeholder` usado para placeholders de inputs.

### Idiomas

- **Tradução completa:** pt, en, es.
- **Seletor:** lista de ~21 idiomas disponíveis (`AVAILABLE_LANGS`, definida em `Navbar.js` e em `index.html`).
- Os restantes idiomas caem em fallback para `TRANSLATIONS.pt`.
- Navbar usa dropdown **🌐 Idioma ▾** (em vez de bandeiras lado a lado, por causa do número de idiomas).

### Padrão para conteúdo dinâmico traduzível

Objetos de dados (posts, guias, brawlers, heróis, etc.) usam campos `xKey` em vez de texto direto:

```js
{
  titulo: "Ataque Elétrico",
  tituloKey: "shelly_attack",
  desc: "...",
  descKey: "shelly_desc"
}
```

Ao renderizar: `dict[obj.tituloKey] || obj.titulo` (o texto original em pt funciona como fallback).

⚠️ **Caminhos de imagem/ficheiro nunca traduzem** — usar sempre a chave/nome em português (`TRANSLATIONS.pt`) para construir paths, mesmo que o texto visível esteja traduzido.

- `index.html` (raiz) é o seletor de idioma na primeira visita; salta automaticamente para a Página Inicial se já houver idioma guardado.
- Brawler usado como exemplo/modelo de tradução completa: **Shelly** (`desc`, `attack`, `super`, `hyper`, `sp1`, `sp2`, `g1`, `g2`).

---

## 6. Navbar (`Gerais/Navbar/Navbar.js`) — Reescrita Multi-Zona

### Nova assinatura

```js
buildNavbar(activeLink, zone, isHome)
```

| Parâmetro | Valores |
|---|---|
| `zone` | `"supercellzone"` \| `"brawlzone"` \| `"rise"` |
| `isHome` | `true` se a página é a Página Inicial dessa Zone; `false` caso contrário |
| `activeLink` | key do link ativo, ou `""` se não corresponder a nenhum |

**Links por zona:**
- `brawlzone`: `"novidades"`, `"brawlers"`, `"updates"`, `"guias"`
- `rise`: `"herois"`, `"tower"`
- `supercellzone`: `"sobre"`, `"zonas"`, `"novidades"`

### Comportamento da logo (`isHome`)

- `isHome = true` → logo mostra **"Supercellzone"**, aponta para fora (para o centro/hub).
- `isHome = false` → logo mostra o **nome da própria Zone**, aponta para a home dela.

### Objeto `ZONES`

Objeto central que define, por zona:
- `onHome` / `elsewhere`: nome + `homeHref` da logo, **fixos e manuais** (preferência explícita do utilizador — não calculados automaticamente).
- `links`: prefixados automaticamente com `basePath`, calculado por `getBasePath()`.

### Pendente

- Aplicar as chamadas `buildNavbar()` corretas em **todas** as páginas existentes (ainda não feito nos ficheiros reais do BrawlZone).
- Confirmar/ajustar os valores `homeHref` fixos (foram definidos por suposição da estrutura de pastas).

---

## 7. Newsletter (Formspree)

- Endpoint: `https://formspree.io/f/xpqvddkk` (plano gratuito, 50 submissões/mês).
- **Reaproveitado** o mesmo endpoint entre BrawlZone e Supercellzone — uma lista só de subscritores, sem duplicar o limite mensal.
- Envio: `fetch` com `FormData`, feedback ao utilizador via `showToast`.
- Não há envio de emails em massa automatizado — se necessário, exportar CSV do Formspree e importar noutro serviço (Buttondown/Mailchimp).

---

## 8. Estado Atual por Página/Secção

### 8.1 Página Inicial da Supercellzone (`Pagina-Inicial.html/css/js`) — ✅ Criada

- Paleta neutra escura + acento azul (`--sz-*`).
- Secções: Hero, Sobre o projeto, As Zones (cards), Sobre a Supercell, Novidades (placeholder vazio), CTA newsletter.
- Redireciona a partir de `index.html`.

### 8.2 Project R.I.S.E Zone — Página Inicial — ✅ Criada

- Paleta roxo/dourado (`--rise-*`).
- Secções: Hero, Sobre o jogo, Heróis, A Tower, CTA beta/Discord.
- ⚠️ Tem `data-i18n` com chaves `tower_*` copiadas por engano, ainda sem par em `Tradução.js` — precisa de revisão/remoção.

### 8.3 Project R.I.S.E Zone — Página de Heróis (`Herois.html`) — 🚧 Em construção

- Modelada de perto sobre `Brawlers.html` (filtros, pesquisa, modal).
- **`Herois.js` ainda não existe** — precisa de ser criado do zero.
- **6 heróis confirmados** (dados a fornecer pelo utilizador): Archer, Barbarian, Valkyrie, Firecracker, Bomber, Goblin Brawler.
- Ficheiro final vai em `Gerais/Constantes/Project R.I.S.E Zone/Herois.js`.

### 8.4 Página Inicial do BrawlZone — ✅ Considerada 100% completa

- Secções: Hero, Novidades (array `POSTS`, cards com tag/título/excerpt traduzíveis via `*Key`), Vídeos (carrossel), Brawlers em destaque, Guias, CTA newsletter.
- **Brawlers em destaque:** array `BRAWLERS_DESTAQUE` com 25 nomes escolhidos manualmente (filtra o array `BRAWLERS` completo). Botão "Ver todos" → `Brawlers.html`.
  - Campos corretos no array centralizado: `isNew` (não `novo`), `cls` (não `classe`), `rarity` inclui `"super_rare"` (não `"super"`).
- **Pesquisa + filtros:** `currentBrawlerFilter` / `currentBrawlerSearch`, combinam filtro de raridade e texto.
- **Contagem automática:** `updateBrawlersCount()` usa `BRAWLERS.length`.
- **Animação nos cards ao filtrar:** classe `.reveal` + `transition-delay` por índice + `requestAnimationFrame` no fim do render.
- **Performance do cursor nos cards:** event delegation — um único listener `mouseover`/`mouseout` em `#brawlersGrid` com `e.target.closest(".brawler-card")`, em vez de um listener por card (evita acumulação a cada re-render).
- **Carrossel de Vídeos** (feito, ainda não integrado/testado):
  - Array `VIDEOS` (5 itens: `thumb`, `tituloKey`, link do YouTube — 2 últimos ainda por preencher).
  - Autoplay a cada 6s, navegação por pontinhos, setas ‹›, arrastar com rato (`mousedown`/`mousemove`/`mouseup`) e swipe touch, abre vídeo em nova aba.
  - Ficheiros: `Carrossel.html/.css/.js`.
  - Precisa de `initCarousel()` no INIT e da pasta `Notícias/imagens-videos/`.

### 8.5 `Brawlers.html` — 🚧 Em progresso (Fase 1 "modernização" quase concluída)

**Já implementado:**
- Filtros de raridade/classe/letra dinâmicos (`renderFilterTabs`).
- Ordenação (`sortSelect`: raridade asc/desc, alfabética, classe).
- Pesquisa.
- Agrupamento dinâmico por raridade/classe/letra.
- Modo de comparação de 2 brawlers (`compareMode`, painel fixo em baixo, cores win/lose/draw).
- Modal completo com toggle de Hypercharge e toggle de Buffies (`buildAbilitiesHtml`).
- Sistema de imagens com fallback em tudo (brawler, ataque, super, star powers, gadgets).
- Navbar/Footer/Breadcrumbs modernizados.
- `Brawlers-Data.js` / `Rarity-Data.js` / `Buffies-Data.js` centralizados.
- Tradução aplicada como prova de conceito na Shelly (`descKey`, `attackKey`, `superKey`, `hyperKey`, `sp1Key`, `sp2Key`, `g1Key`, `g2Key` — ver `buildAbilitiesHtml` e `openModal`).

**Pendente:**
- `data-i18n` nos filtros/toolbar (texto ainda fixo em PT).
- Traduzir botão "+ Comparar" e painel de comparação.
- Aplicar `Toast` em 3 pontos (código já escrito, por colar):
  1. Pesquisa sem resultados (só quando há texto pesquisado).
  2. Seleção de brawlers para comparar.
  3. Ativação do modo comparação.
- Continuar a traduzir brawlers aos poucos.

**Fase 2 (mecânicas novas) — planeada, não iniciada:**
- **Winrate:** campo `winrate` (0–100) manual por brawler (referências: Brawlify, Brawlytix — dados de amostra, não totais). Modal mostra percentagem colorida (verde ≥55, amarelo ≥50, vermelho <50). Ordenação por winrate a adicionar ao `sortSelect`.
- **Meta tier** (separado do winrate): campo `metaTier` (S/A/B/C/D) editorial, convertido em estrelas nos cards via `metaTierToStars()`. Decisão explícita: **não usar winrate para as estrelas**.
- Ideias em aberto: favoritos (`localStorage`), brawler aleatório, mini-barras de stats nos cards, link/copiar direto de brawler, badge "Meta", histórico de mudanças por update.

### 8.6 Outras páginas standalone do BrawlZone

> Podem precisar de modernização futura (navbar/footer/tradução/dados centralizados).

| Página | Descrição |
|---|---|
| **Skins.html** | Grid/lista, filtros por raridade e tema, pesquisa, view toggle, modal, parâmetro `?brawler=X` para filtrar vindo de outra página. |
| **Buffies.html** | Sidebar com scroll-spy, infobox, tipos de Buffie, Claw Machines geradas de array `MACHINES`, filtro por tipo (Gadget/Star Power/Hyper), pesquisa que esconde máquinas vazias, animação de glow nas bolinhas de tipo, sistema de imagens em cascata (buffie específico → geral). |
| **Nanopoderes.html** | Cards expansíveis por brawler, filtro por raridade (Básico/Aumentado/Cibernético/Quântico), 106 brawlers com estrutura de dados vazia pronta a preencher (Temporada NanoNoodles — comunicado oficial já recebido e processado). |
| **Sitemap.html** | Mapa interno do site, pastas/nós expansíveis até N níveis (sistema `.node` genérico e recursivo), estados (completo/em construção/por fazer/planeado) com contagem automática. Ferramenta interna, não para visitantes. |
| **404.html** (raiz) | Tema "Sirius roubou a página", botão voltar atrás com fallback para home, partículas de sombra animadas, links rápidos. |
| **Notas de Lançamento — Update 68.html** | Página longa e detalhada de patch notes (Rebelião do Ramen: NanoNoodles/Windstock). Sidebar com scroll-spy, secções para história, novos brawlers (Nori, Wendy), hypercharges, buffies novos, skins por temporada, buffs/nerfs/mudanças com razões oficiais, Brawl Arena, mapas, QoL, bugs. |

---

## 9. Ficheiros Criados/Atualizados na Transição Multijogo

- ✅ `index.html` (raiz) — atualizado.
- ✅ `Gerais/Navbar/Navbar.js` — reescrito.
- ✅ `Supercellzone/Pagina-Inicial.html/css/js` — criado (paleta `--sz-*`; secções: Hero, Sobre o projeto, As Zones, Sobre a Supercell, Novidades placeholder, CTA newsletter).
- ✅ `Project R.I.S.E Zone/Pagina-Inicial.html/css/js` — criado (paleta `--rise-*`; secções: Hero, Sobre o jogo, Heróis, A Tower, CTA beta/Discord).
- ✅ `Gerais/Constantes/Project R.I.S.E Zone/Herois.js` — criado (4 heróis confirmados + 2 placeholders "por revelar"). ⚠️ *Nota: número de heróis confirmados atualizado depois para 6 (ver secção 8.3) — Archer, Barbarian, Valkyrie, Firecracker, Bomber, Goblin Brawler.*
- ✅ Bloco de traduções pt para a Supercellzone — preparado, por colar em `Tradução.js` no sítio já reservado (`// Supercellzone`).

---

## 10. Lista de Tarefas Pendentes (Backlog)

### Curto prazo / foco atual
- [ ] Construir `Herois.js` com os 6 heróis confirmados (Archer, Barbarian, Valkyrie, Firecracker, Bomber, Goblin Brawler) — aguarda dados/descrições do utilizador.
- [ ] Construir `Herois.html` seguindo o padrão de `Brawlers.html`.

### Navbar / Estrutura multijogo
- [ ] Aplicar `buildNavbar()` atualizado em todas as páginas existentes do BrawlZone.
- [ ] Confirmar/ajustar os valores fixos `homeHref` em `Navbar.js`.

### Traduções
- [ ] Adicionar traduções EN/ES do conteúdo da Supercellzone em `Tradução.js` (atualmente só pt está pronto).
- [ ] Remover/corrigir chaves `tower_*` erradamente colocadas no HTML do R.I.S.E.
- [ ] Aplicar `data-i18n` nos filtros/toolbar do `Brawlers.html`.
- [ ] Traduzir botão "+ Comparar" e painel de comparação.

### Supercellzone — decisões em aberto
- [ ] Decidir o que fazer com a secção "Novidades" enquanto vazia (esconder?).
- [ ] Decidir se mantém o card "Próxima Zone" com jogos sugeridos.
- [ ] Adicionar imagens/logo próprio da Supercellzone.

### Brawlers.html
- [ ] Colar código já escrito de `Toast` nos 3 pontos identificados (pesquisa sem resultados, seleção para comparar, ativação do modo comparação).
- [ ] Continuar a traduzir brawlers aos poucos (Shelly é o modelo).
- [ ] Fase 2: implementar `winrate` e `metaTier` quando decidido avançar.

### Página Inicial do BrawlZone
- [ ] Integrar e testar o Carrossel de Vídeos (`initCarousel()`, preencher os 2 últimos vídeos, criar pasta `Notícias/imagens-videos/`).

### Geral / longo prazo
- [ ] Retomar conteúdo mais amplo do Project R.I.S.E Zone depois da página de Heróis.
- [ ] Modernizar páginas standalone (Skins, Buffies, Nanopoderes) para o novo padrão navbar/footer/tradução.
- [ ] Planear futuras Zones além de BrawlZone e R.I.S.E Zone.
- [ ] Iniciar migração de backend (~2027).

---

## 11. Convenções Gerais a Manter

- **Português europeu** como idioma-base de todos os dados-fonte.
- **Nomes de campo consistentes:** `isNew`, `cls`, `rarity` (`starter` / `rare` / `super_rare` / `epic` / `mythic` / `legendary` / `ultra`).
- **Nunca duplicar arrays de dados** entre páginas — centralizar em `Gerais/Constantes/` sempre que usado em 2+ páginas.
- **Preferir correções mínimas e explicadas passo a passo** (o utilizador está a aprender; prefere entender o "onde" e o "porquê" antes de colar código).
- **Confirmar sempre a localização exata** (qual função, antes/depois de que linha) ao dar instruções de código.
- **Receber apenas o código alterado**, não reescritas completas de ficheiros, salvo pedido explícito.
- O utilizador **testa manualmente** após cada mudança; nem sempre pode testar de imediato — deixar o trabalho em estado claramente documentado para retomar depois.
- **Caminhos de imagem/ficheiro nunca traduzem** — usar sempre `TRANSLATIONS.pt` para construir paths.
- **Path handling:** preferência explícita por definições manuais em vez de cálculo automático.

---

## 12. Referências Rápidas

| Item | Valor |
|---|---|
| Repositório | `Site-de-Brawl-Stars` |
| Utilizador GitHub | `joao-carolo` |
| Hospedagem | GitHub Pages |
| Formspree ID | `xpqvddkk` |
| Chave de idioma (localStorage) | `brawlzone_lang` |
| Idiomas com tradução completa | pt, en, es |
| Total de idiomas no seletor | ~21 (fallback para pt) |
| Brawler-modelo traduzido | Shelly |
| Heróis confirmados (R.I.S.E) | Archer, Barbarian, Valkyrie, Firecracker, Bomber, Goblin Brawler |
| Update de referência (patch notes) | Update 68 — Rebelião do Ramen (NanoNoodles/Windstock) |
| Stack backend futura | Node.js (Express/Fastify) + MongoDB ou PostgreSQL |
| Prazo backend | ~2027 (sem data fixa) |