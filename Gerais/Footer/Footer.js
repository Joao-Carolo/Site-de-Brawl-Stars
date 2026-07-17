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
                <p data-i18n="lema">O fan site português de Brawl Stars. Guias, novidades, brawlers e tudo o mais — tudo em português.</p>
            </div>
            <div class="footer-col">
                <h4 data-i18n="footer_col_conteudo">Conteúdo</h4>
                <ul>
                    <li><a href="${basePath}Brawlers/Brawlers/Brawlers.html" data-i18n="footer_link_brawlers">Brawlers</a></li>
                    <li><a href="${basePath}Temporadas/Temporadas.html" data-i18n="footer_link_updates">Updates</a></li>
                    <li><a href="${basePath}Guias/Guias.html" data-i18n="footer_link_guias">Guias</a></li>
                    <li><a href="${basePath}Brawlers/Skins/Skins.html" data-i18n="footer_link_skins">Skins</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4 data-i18n="footer_col_recursos">Recursos</h4>
                <ul>
                    <li><a href="${basePath}Brawlers/Poderes/Poderes Fixos/Buffies/Buffies.html" data-i18n="footer_link_buffies">Buffies</a></li>
                    <li><a href="${basePath}Eventos/Eventos.html" data-i18n="footer_link_eventos">Eventos</a></li>
                    <li><a href="${basePath}Torneios/Torneios.html" data-i18n="footer_link_torneios">Torneios</a></li>
                    <li><a href="${basePath}Glossário/Glossário.html" data-i18n="footer_link_glossario">Glossário</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4 data-i18n="footer_col_site">Site</h4>
                <ul>
                    <li><a href="${basePath}Collabs/Collabs/Collabs.html" data-i18n="footer_link_collabs">Collabs</a></li>
                    <li><a href="${basePath}Ranqueado/Ranqueado.html" data-i18n="footer_link_ranked">Ranked</a></li>
                    <li><a href="${basePath}Notícias/Notícias.html" data-i18n="footer_link_noticias">Notícias</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p><span data-i18n="footer_copyright">© 2026 <strong>BrawlZone</strong> — Fan site não oficial</span></p>
            <p data-i18n="footer_disclaimer">Brawl Stars é propriedade da <strong>Supercell</strong></p>
        </div>
    </footer>
`);

// Aplica as traduções assim que o footer é criado
if (typeof applyTranslations === "function") applyTranslations();