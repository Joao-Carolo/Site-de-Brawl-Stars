function getBasePath() {
    const REPO_NAME = "Site-de-Brawl-Stars"; // ajusta se mudar o nome do repo
    const parts = window.location.pathname
        .split("/")
        .filter(p => p !== "" && !p.endsWith(".html") && p !== REPO_NAME);
    return "../".repeat(parts.length);
}

const basePath = getBasePath();

document.body.insertAdjacentHTML("beforeend", `
    <footer>
        <div class="footer-inner">
            <div class="footer-brand">
                <div class="logo-text">
                    <span class="star"><img class="logo-pequena" src="${basePath}Gerais/Logo.png" alt="Logo"></span>
                    BrawlZone
                </div>
                <p>O fan site português de Brawl Stars. Guias, novidades, brawlers e tudo o mais — tudo em português.</p>
            </div>
            <div class="footer-col">
                <h4>Conteúdo</h4>
                <ul>
                    <li><a href="${basePath}Brawlers/Brawlers/Brawlers.html">Brawlers</a></li>
                    <li><a href="${basePath}Temporadas/Temporadas.html">Updates</a></li>
                    <li><a href="${basePath}Guias/Guias.html">Guias</a></li>
                    <li><a href="${basePath}Brawlers/Skins/Skins.html">Skins</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Recursos</h4>
                <ul>
                    <li><a href="${basePath}Brawlers/Poderes/Poderes Fixos/Buffies/Buffies.html">Buffies</a></li>
                    <li><a href="${basePath}Eventos/Eventos.html">Eventos</a></li>
                    <li><a href="${basePath}Torneios/Torneios.html">Torneios</a></li>
                    <li><a href="${basePath}Glossário/Glossário.html">Glossário</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Site</h4>
                <ul>
                    <li><a href="${basePath}Collabs/Collabs.html">Collabs</a></li>
                    <li><a href="${basePath}Ranqueado/Ranqueado.html">Ranked</a></li>
                    <li><a href="${basePath}Notícias/Notícias.html">Notícias</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>© 2026 <strong>BrawlZone</strong> — Fan site não oficial</p>
            <p>Brawl Stars é propriedade da <strong>Supercell</strong></p>
        </div>
    </footer>
`);