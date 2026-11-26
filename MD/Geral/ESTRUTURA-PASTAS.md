# Estrutura de pastas

Árvore do projeto, convenções de nomes e regras de caminhos.

----------

## 1. Árvore do projeto

```text

Supercellzone/
├── index.html
├── 404.html
├── Página inicial.html
├── Página inicial.css
├── Página inicial.js
├── .gitattributes
├── Gerais/
│ ├── Cores.css
│ ├── Tema.js
│ ├── Pesquisa.js
│ ├── Logos/
│ │ ├── Logo.css
│ │ ├── Logo Supercellzone.png
│ │ ├── Logo Brawlzone.png
│ │ └── Logo RISE Zone.png
│ ├── Cursor/
│ │ ├── Cursor.css
│ │ └── Cursor.js
│ ├── Mobile Menu/
│ │ ├── Mobile Menu.css
│ │ └── Mobile Menu.js
│ ├── Navbar/
│ │ ├── Navbar.css
│ │ └── Navbar.js
│ ├── Footer/
│ │ ├── Footer.css
│ │ └── Footer.js
│ ├── Reveal/
│ │ ├── Reveal.css
│ │ └── Reveal.js
│ ├── Breadcrumbs/
│ │ ├── Breadcrumbs.css
│ │ └── Breadcrumbs.js
│ ├── Toast/
│ │ ├── Toast.css
│ │ └── Toast.js
│ ├── Traduções/
│ │ ├── Tradução.js
│ │ └── Traduções.txt
│ └── Constantes/
│ ├── Brawlzone/
│ │ ├── Brawlers.js
│ │ ├── Buffies.js
│ │ ├── Novidades.js
│ │ └── Raridades.js
│ └── RISE/
│ └── Herois.js
├── Brawlzone/
│ ├── Sitemap.html
│ ├── Página inicial/
│ │ ├── Página inicial.html
│ │ ├── Página inicial.css
│ │ └── Página inicial.js
│ ├── Brawlers/
│ │ ├── Brawlers/
│ │ │ ├── Brawlers.html
│ │ │ ├── Brawlers.css
│ │ │ └── Brawlers.js
│ │ ├── Skins/
│ │ │ ├── Skins.html
│ │ │ ├── Skins.css
│ │ │ └── Skins.js
│ │ ├── Poderes/
│ │ │ ├── Poderes Fixos/
│ │ │ │ ├── ugrbyhrjgkkugvsd.txt
│ │ │ │ └── Buffies/
│ │ │ │ ├── Buffies.html
│ │ │ │ ├── Buffies.css
│ │ │ │ └── Buffies.js
│ │ │ └── Poderes de Eventos/
│ │ │ ├── Nanopoderes/
│ │ │ │ ├── Nanopoderes.html
│ │ │ │ ├── Nanopoderes.css
│ │ │ │ └── Nanopoderes.js
│ │ │ └── Wasabi/
│ │ ├── Coisas específicas/
│ │ │ ├── Brawlers Específicos/
│ │ │ │ ├── Shelly.html
│ │ │ │ └── Damian.html
│ │ │ ├── Trios/
│ │ │ │ └── MadEvil Manor.html
│ │ └── Imagens/
│ │ ├── Skins (imagens)/<Brawler>/
│ │ ├── Imagens (Poderes de Estrela ou Acessórios)/<Brawler>/
│ │ └── Imagem Buffies/
│ │ ├── Como obter/
│ │ └── Máquinas/
│ ├── Collabs/
│ │ └── Collabs/
│ │ ├── Collabs.html
│ │ ├── Collabs.css
│ │ └── Collabs.js
│ ├── Eventos/
│ │ ├── Eventos.html
│ │ └── Keep Brawl Alive.html
│ ├── Glossário/
│ │ └── Glossário.html
│ ├── Guias/
│ │ ├── Guias.html
│ │ └── Imagens/
│ │ ├── Buffies — Tudo o que precisas de saber.png
│ │ ├── Como subir de rank rapidamente.png
│ │ ├── Guia de Gem Grab.png
│ │ ├── Guia de Modos no Ranked.png
│ │ └── Guia F2P — progredir sem gastar.png
│ ├── Mapas/
│ │ └── Mapas.html
│ ├── Notícias/
│ │ ├── Notícias.html
│ │ ├── Novidades.html
│ │ ├── Notícias Atuais/
│ │ │ ├── Mudanças nos blings.html
│ │ │ └── Mudanças/
│ │ │ ├── Manutenção 28 de abril.html
│ │ │ ├── Notas de lançamento de abril de 2026.html
│ │ │ └── Mudanças do update 68/
│ │ │ └── Notas de lançamento update 68/
│ │ │ ├── Notas de lançamento update 68.html
│ │ │ ├── Notas de lançamento update 68.css
│ │ │ └── Notas de lançamento update 68.js
│ │ └── Imagens/
│ │ ├── Collab/
│ │ ├── Ranked/
│ │ ├── Torneios/
│ │ ├── Update/
│ │ └── Vídeos/
│ ├── Ranqueado/
│ │ ├── Ranqueado.html
│ │ └── Ranqueado
│ ├── Temporadas/
│ │ └── Temporadas.html
│ └── Torneios/
│ └── Torneios.html
├── RISEzone/
│ ├── Página inicial/
│ │ ├── Página inicial.html
│ │ ├── Página inicial.css
│ │ └── Página inicial.js
│ ├── Guias/
│ │ ├── Guias.html
│ │ ├── Guias.css
│ │ └── Guias.js
│ ├── Herois/
│ │ ├── Herois.html
│ │ ├── Herois.css
│ │ └── Herois.js
│ ├── Notícias/
│ │ ├── Notícias.html
│ │ ├── Notícias.css
│ │ └── Notícias.js
│ └── Tower/
│ ├── Tower.html
│ ├── Tower.css
│ └── Tower.js
├── MD/
│ ├── README.md
│ └── Geral/
│ └── ESTRUTURA-PASTAS.md
└── MD antigos/
├── Traduções.md
├── Projeto.md
├── Project R.I.S.E.md
└── MD

```


----------

## 2. Convenções de nomes

Regra

Exemplo

Cada página tem a sua pasta, com ficheiros do mesmo nome

`Skins/Skins.html`, `Skins.css`, `Skins.js`

Cada ficheiro geral vive numa subpasta com o seu nome

`Gerais/Cursor/Cursor.js`

Nomes em português, com acentos e espaços

`Página inicial`, `Notícias Atuais`

Imagem principal de um brawler

`Skins (imagens)/<Brawler>/<Brawler> Padrão.png`

Imagem de um gadget ou star power

`Imagens (Poderes de Estrela ou Acessórios)/<Brawler>/<nome da habilidade>.png`

Imagem de um Buffie

`.../<Brawler>/<nome> (Buffie).png`

Imagens gerais de habilidades

`.../Ataque.png`, `.../Super.png`, `.../<Brawler>/Hipercarga.png`

Imagem de uma notícia

`Notícias/Imagens/<Tag>/<título em português>.png`

Imagem de um guia

`Guias/Imagens/<título em português>.png`

**Regra importante:** os nomes de ficheiros de imagem usam sempre o texto **em português**, mesmo que o idioma ativo seja outro. O texto visível é traduzido, mas o caminho nunca é.

----------

## 3. Regras de caminhos

### Caminhos relativos

As páginas ligam-se aos ficheiros gerais com `../`, e o número de `../` depende da profundidade da página.

Página

Profundidade

Prefixo para `Gerais/`

`Página inicial/Página inicial.html`

1

`../Gerais/`

`Brawlers/Brawlers/Brawlers.html`

2

`../../Gerais/`

`Brawlers/Poderes/Poderes Fixos/Buffies/Buffies.html`

4

`../../../../Gerais/`

Se uma página mudar de pasta, todos os `../` dessa página têm de ser revistos (HTML, CSS e JS).

### Caminhos gerados por JavaScript

Navbar, footer e breadcrumbs são gerados por JS e calculam o prefixo sozinhos com `getBasePath()`. Para isso ignoram o nome do repositório, porque no GitHub Pages ele aparece no URL.

⚠️ **O nome do repositório está escrito à mão** (`REPO_NAME = "Site-de-Brawl-Stars"`) em:

-   `Gerais/Navbar/Navbar.js`
-   `Gerais/Footer/Footer.js`
-   `Gerais/Breadcrumbs/Breadcrumbs.js`
-   `index.html`

Se o repositório mudar de nome, ou se o site passar para um domínio próprio, estes quatro sítios têm de ser alterados.

### Maiúsculas e minúsculas

O GitHub Pages distingue maiúsculas de minúsculas, mas o Windows normalmente não. Um caminho como `Notícias/imagens/` pode funcionar no teu computador e dar 404 online, se a pasta real se chamar `Notícias/Imagens/`. Quando algo "só falha online", confirma primeiro as maiúsculas e os acentos.