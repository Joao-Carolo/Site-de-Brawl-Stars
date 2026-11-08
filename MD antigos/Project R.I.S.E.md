# Supercellzone — Documento do Projeto

> Hub multijogo de fan-sites não oficiais dedicados a jogos da Supercell.
> Repositório: `Site-de-Brawl-Stars` (GitHub Pages). Idioma-base: português europeu.
> Stack: HTML, CSS e JavaScript vanilla, tudo estático.

---

## 1. Visão geral

A **Supercellzone** é a evolução do antigo "BrawlZone" (fã-site só de Brawl Stars). O BrawlZone passou a ser uma das "Zones" dentro de um hub central, que apresenta o projeto, as Zones disponíveis, informação sobre a Supercell e novidades.

**Zones:**
| Zone | Jogo | Estado |
|---|---|---|
| BrawlZone | Brawl Stars | Ativa (a mais desenvolvida) |
| Project R.I.S.E Zone | Project R.I.S.E (beta) | Em construção (só Página Inicial) |
| Próxima Zone | A decidir (Clash of Clans / Clash Royale / Hay Day) | Por decidir |

**Backend (futuro, ~2027):** Node.js (Express/Fastify) + MongoDB ou PostgreSQL, começando eventualmente por um serviço gerido tipo Firebase. Até lá o site fica totalmente estático, com dados bem estruturados e centralizados para facilitar a migração.

---

## 2. Estrutura de pastas

```
Site-de-Brawl-Stars/                  (raiz do repo)
├── index.html                        (só seletor de idioma → redireciona)
├── Página inicial.html/css/js        (Página Inicial da Supercellzone)
├── Gerais/                           (partilhado por TODAS as Zones)
│   ├── Cores.css                     (todas as cores de todas as Zones, um só :root)
│   ├── Logos/
│   ├── Cursor/ · Mobile Menu/ · Navbar/ · Footer/
│   ├── Breadcrumbs/ · Reveal/ · Toast/
│   ├── Traduções/Tradução.js         (i18n)
│   ├── Constantes/                   (único sítio com subpastas por jogo)
│   │   ├── Brawlers.js · Raridades.js · Buffies.js · Novidades.js
│   │   └── Project R.I.S.E Zone/Herois.js
│   ├── Tema.js
│   └── Pesquisa.js
├── BrawlZone/
│   └── Página inicial/Página inicial.html (+ restantes páginas)
└── Project R.I.S.E Zone/
    └── Página inicial.html/css/js
```

**Decisões de estrutura:**
- `Cores.css` é um único ficheiro; cada Zone usa o seu prefixo (`--sz-*`, `--rise-*`, e as variáveis do BrawlZone sem prefixo).
- `Constantes/` é o único local de `Gerais/` subdividido por jogo.
- Caminhos: preferência por definições manuais em vez de cálculo automático, exceto onde já existe `getBasePath()`.

---

## 3. Fluxo de navegação

1. `index.html` → sem idioma guardado mostra o seletor; com idioma guardado redireciona logo.
2. Destino: `Página inicial.html` da Supercellzone (página institucional completa, não um simples seletor de jogos).
3. Dessa página, os cards das Zones levam à Página Inicial de cada Zone.
4. Dentro de uma Zone, a logo leva de volta ao "nível acima":
   - Numa página interior → Página Inicial da própria Zone (com o logo da Zone)
   - Na Página Inicial da Zone → Supercellzone (com o logo da Supercellzone)

Chave de idioma no `localStorage`: `brawlzone_lang` (nome mantido por compatibilidade).

---

## 4. Página Inicial da Supercellzone

**Identidade visual:** paleta neutra escura com acento azul, para não competir com as Zones.

```css
--sz-bg: #0B0C10;
--sz-bg-elevated: #15161C;
--sz-primary: #E8E8ED;
--sz-muted: #8A8D98;
--sz-border: #24262E;
--sz-accent: #5B8DEF;
--sz-accent-light: #8AB0F5;
```

**Secções:** Hero · Sobre o projeto · As Zones (cards) · Sobre a Supercell · Novidades · CTA newsletter.

**Novidades (dinâmicas):** lê o array `POSTS` de `Gerais/Constantes/Novidades.js` e mostra os 3 mais recentes através de `buildNewsCard(p, featured, imgBasePath, ctaTextKey)`, função partilhada com o BrawlZone. O prefixo do caminho das imagens (`BrawlZone/Notícias/imagens`) é passado por parâmetro porque o browser resolve caminhos relativos a partir da página HTML que executa o código, não do `.js`.

**Newsletter:** Formspree, endpoint partilhado com o BrawlZone (`https://formspree.io/f/xpqvddkk`), uma só lista de subscritores (plano gratuito, 50 submissões/mês).

**Factos sobre a Supercell usados no site:** empresa finlandesa fundada em maio de 2010, sediada em Helsínquia, jogos lançados: Hay Day, Clash of Clans, Boom Beach, Clash Royale, Brawl Stars, Squad Busters, mo.co (7). Nota: o Squad Busters está a ser descontinuado.

---

## 5. Navbar multi-zona (`Gerais/Navbar/Navbar.js`)

Assinatura: `buildNavbar(activeLink, zone, isHome)`

- **`zone`**: `"supercellzone"` | `"brawlzone"` | `"rise"`
- **`isHome`**: `true` se a página é a Página Inicial da Zone; controla qual logo/nome aparece e para onde aponta
- **`activeLink`**: `key` do link destacado, ou `""`

| Zone | `activeLink` válidos |
|---|---|
| brawlzone | `"novidades"`, `"brawlers"`, `"updates"`, `"guias"` |
| rise | `"herois"`, `"tower"` |
| supercellzone | `"sobre"`, `"zonas"`, `"novidades"` |

O objeto `ZONES` define, por Zone, os estados `onHome` / `elsewhere` (nome + `homeHref` fixos e manuais) e a lista de `links`. Os `links` são prefixados com `basePath` (calculado por `getBasePath()`), exceto âncoras `#...` e URLs `http`. O `homeHref` fica fixo porque aponta para fora da Zone, a outra profundidade.

**Exemplos:**
```js
buildNavbar("", "supercellzone", true);   // Página inicial da Supercellzone
buildNavbar("", "brawlzone", true);       // Página inicial do BrawlZone
buildNavbar("brawlers", "brawlzone", false);
buildNavbar("", "rise", true);            // Página inicial do R.I.S.E
```

**Erro identificado:** a Página Inicial da Supercellzone ainda tinha `buildNavbar("sz-inicio")`, resquício da versão antiga. A chamada correta é `buildNavbar("", "supercellzone", true)`.

---

## 6. Traduções (i18n)

- `Tradução.js` tem um objeto plano por idioma, organizado por comentários (zona → secção → página).
- Tradução completa: `pt`, `en`, `es`. Restantes idiomas caem em fallback para `pt`.
- Bloco `pt` da Supercellzone preparado (`sz_hero_*`, `sz_about_*`, `sz_zones_*`, `sz_company_*`, `sz_news_*`, `sz_cta_*`, `nav_sz_*`), para colar no espaço `// Supercellzone`.
- Caminhos de imagem/ficheiro nunca traduzem — usar sempre `TRANSLATIONS.pt`.

---

## 7. Estado atual

**Feito:**
- Estrutura multijogo e `Gerais/` partilhado
- `index.html` a redirecionar para a Supercellzone
- Página Inicial da Supercellzone (HTML/CSS/JS) com Novidades dinâmicas
- Navbar multi-zona com logo dependente de `isHome`
- `Cores.css` com blocos `--sz-*` e `--rise-*`
- Página Inicial do Project R.I.S.E Zone + `Herois.js`
- `Novidades.js` centralizado com `buildNewsCard`
- Formspree ligado à Supercellzone

---

## 8. Ainda por fazer

**Supercellzone**
- [ ] Corrigir a chamada `buildNavbar()` da Página Inicial (`("", "supercellzone", true)`)
- [ ] Verificar todas as chamadas `buildNavbar()` em todas as páginas (BrawlZone incluído)
- [ ] Colar o bloco de traduções `pt` no `Tradução.js` e criar as versões `en`/`es`
- [ ] Decidir o card "Próxima Zone" (mantém-se ou sai, já que é uma promessa pública)
- [ ] Decidir imagens/logo próprio da Supercellzone e dos cards das Zones
- [ ] Rever o Footer (texto ainda muito centrado em Brawl Stars)
- [ ] Decidir cor dos cards de Novidades na Supercellzone (hoje usam o laranja do BrawlZone)

**BrawlZone**
- [ ] Trocar a função local `buildCard` da Página Inicial por `buildNewsCard` (de `Novidades.js`) e remover o array `POSTS` duplicado
- [ ] Confirmar os `homeHref` fixos no `Navbar.js` contra a profundidade real das pastas
- [ ] Continuar Brawlers.html (tradução dos filtros, Toast, Fase 2: winrate/metaTier)

**Project R.I.S.E Zone** (em pausa por decisão do Carolo)
- [ ] Renomear chaves `data-i18n` com prefixo `rise_`
- [ ] Adicionar traduções ao `Tradução.js`
- [ ] Páginas de Heróis e Tower quando houver dados
- Ver `project-rise-zone-plano.md`

**Backend**
- [ ] Migração planeada para ~2027, sem data fixa

---

## 9. Convenções a manter

- Português europeu como idioma-base dos dados-fonte.
- Nomes de campo consistentes: `isNew`, `cls`, `rarity` (`starter` / `rare` / `super_rare` / `epic` / `mythic` / `legendary` / `ultra`).
- Nunca duplicar arrays de dados entre páginas: centralizar em `Gerais/Constantes/`.
- Ordem de scripts: Tradução → dados → JS da página → utilitários → Footer → Navbar → chamada a `buildNavbar` → Mobile Menu.
- Imagens com fallback: `onerror` a esconder a imagem e mostrar o elemento seguinte; nunca usar `outerHTML` inline.
- Alterações mínimas e explicadas passo a passo; receber só o código alterado.