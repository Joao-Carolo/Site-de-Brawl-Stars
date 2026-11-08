# Supercellzone — Documentação

Fan site não oficial, em português, sobre os jogos da Supercell. É um site **estático** (HTML, CSS e JavaScript, sem backend), publicado no **GitHub Pages**.

- **Site:** https://joao-carolo.github.io/Site-de-Brawl-Stars/
- **Repositório:** `Site-de-Brawl-Stars`
- **Idioma base:** português de Portugal (PT-PT). Há tradução para inglês e espanhol, e o seletor já lista 21 idiomas.

> Brawl Stars e todos os jogos da Supercell são propriedade da Supercell. Este projeto não é afiliado nem aprovado pela Supercell.

---

## O que é o projeto

O Supercellzone é o site "mãe". Cada jogo tem a sua própria **zona**, com nome próprio, páginas próprias e a mesma base técnica.

| Zona | Jogo | Estado |
|---|---|---|
| **BrawlZone** | Brawl Stars | Em desenvolvimento ativo (é a zona mais completa) |
| **Project R.I.S.E Zone** | — | Por documentar |

As zonas partilham tudo o que é comum (navbar, footer, tradução, cursor, menu mobile, etc.) através da pasta `Gerais/`, em vez de duplicarem código.

---

## Como a documentação está organizada

```
Documentação/
├── README.md                      ← este ficheiro
├── 01 - Geral/                    regras, decisões e processos do projeto
├── 02 - Sistemas Gerais/          o que é partilhado por todas as zonas (Gerais/)
├── 03 - Supercellzone/            o site "mãe" (hub, seletor de idioma, 404, sitemap)
├── 04 - BrawlZone/                páginas e dados do Brawl Stars
└── 05 - Project R.I.S.E Zone/
```

### 01 - Geral

| Ficheiro | Para que serve |
|---|---|
| `ESTRUTURA-PASTAS.md` | Árvore de pastas completa e regras de caminhos |
| `CONVENCOES.md` | Nomes de campos, idioma base, regras de código |
| `DECISOES.md` | O que foi decidido e porquê |
| `ROADMAP.md` | O que falta fazer e ideias futuras |
| `COMO-ADICIONAR-CONTEUDO.md` | Passos a seguir a cada update do jogo |
| `COMO-TRABALHAR-COM-IA.md` | Como pedir e receber código de forma eficaz |
| `COMO-CRIAR-UMA-ZONE.md` | Como arrancar uma zona nova |
| `FONTES-DE-DADOS.md` | De onde vem cada informação |
| `PROBLEMAS-E-SOLUCOES.md` | Erros já encontrados e como se resolveram |

### 02 - Sistemas Gerais

| Ficheiro | Para que serve |
|---|---|
| `GERAIS.md` | Índice da pasta `Gerais/` e template de página |
| `TRADUCOES.md` | Sistema de idiomas |
| `DADOS.md` | Arrays de dados centralizados |
| `PESQUISA.md` | Sistema de pesquisa |
| `NAVBAR-FOOTER.md` | Navbar e footer gerados por JavaScript |
| `DESIGN.md` | Cores, tipografia e componentes visuais |
| `MOBILE.md` | Menu mobile e adaptação a ecrãs pequenos |
| `BACKEND.md` | Plano para um backend futuro |

### 03 a 05 - Zonas

| Pasta | Ficheiros |
|---|---|
| `03 - Supercellzone` | `PAGINA-INICIAL.md` |
| `04 - BrawlZone` | `PAGINA-INICIAL.md`, `BRAWLERS.md`, `EXTRAS-DOS-BRAWLERS.md`, `NOTICIAS.md` |
| `05 - Project R.I.S.E Zone` | `PROJECT-RISE-ZONE.md` |

---

## Por onde começar

- **Quero perceber o projeto:** lê este ficheiro e depois `01 - Geral/ESTRUTURA-PASTAS.md` e `CONVENCOES.md`.
- **Quero adicionar uma página:** `02 - Sistemas Gerais/GERAIS.md` tem o template de página e a ordem dos scripts.
- **Saiu um update do jogo:** `01 - Geral/COMO-ADICIONAR-CONTEUDO.md`.
- **Algo deixou de funcionar:** `01 - Geral/PROBLEMAS-E-SOLUCOES.md`.
- **Vou pedir ajuda a uma IA:** `01 - Geral/COMO-TRABALHAR-COM-IA.md`.

---

## Resumo técnico

- **Sem build e sem backend.** Abre-se qualquer página diretamente no browser.
- **Cada página tem a sua pasta**, com `.html`, `.css` e `.js` separados.
- **Código partilhado em `Gerais/`:** cursor, menu mobile, navbar, footer, breadcrumbs, animações de scroll, notificações (toast), tradução e dados centralizados.
- **Navbar, footer e breadcrumbs são gerados por JavaScript.** A ordem de carregamento dos scripts importa (ver `GERAIS.md`).
- **O idioma fica em `localStorage`**, não no URL.
- **Backend:** previsto para 2027 (ver `BACKEND.md`). Até lá o site continua estático.

---

## Estado da documentação

| Secção | Estado |
|---|---|
| README | Escrito |
| 01 - Geral | Por escrever |
| 02 - Sistemas Gerais | Por escrever |
| 03 - Supercellzone | Por escrever |
| 04 - BrawlZone | Por escrever |
| 05 - Project R.I.S.E Zone | Por escrever (faltam detalhes do projeto) |

*Atualizar esta tabela à medida que cada ficheiro for concluído.*