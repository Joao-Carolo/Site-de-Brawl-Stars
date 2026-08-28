// ==========================================================================
// Supercellzone — Página Inicial (geral)
// Newsletter via Formspree, seguindo o mesmo padrão usado no BrawlZone.
// Novidades: reaproveita POSTS e buildNewsCard de Gerais/Constantes/Novidades.js
// (a mesma função usada na Página Inicial do BrawlZone) — evita duplicar
// a lógica de renderização de cards em dois sítios diferentes.
// ==========================================================================

// Caminho relativo (a partir desta página, na raiz da Supercellzone) até
// à pasta de imagens de notícias do BrawlZone.
const SZ_NEWS_IMG_BASE = "BrawlZone/Notícias/imagens";

// Quantos posts mostrar na Página Inicial da Supercellzone
const SZ_NEWS_MAX = 3;

function renderSzNews() {
    const grid = document.getElementById("sz-news-grid");
    if (!grid) return;

    // POSTS e buildNewsCard vêm de Gerais/Constantes/Novidades.js
    if (typeof POSTS === "undefined" || !POSTS.length) {
        grid.innerHTML = `<p class="sz-news-empty">Sem novidades por agora.</p>`;
        return;
    }

    const posts = POSTS.slice(0, SZ_NEWS_MAX);
    grid.innerHTML = posts
        .map((p, i) => buildNewsCard(p, i === 0, SZ_NEWS_IMG_BASE, "sz_zone_enter"))
        .join("");
}

// Mesmo endpoint Formspree já usado no BrawlZone — uma única lista de subscritores
// partilhada entre todas as Zones da Supercellzone.
const SZ_FORMSPREE_ENDPOINT = "https://formspree.io/f/xpqvddkk";

function initNewsletterForm() {
    const form = document.getElementById("sz-newsletter-form");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const submitBtn = form.querySelector("button[type='submit']");
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;

        try {
            const response = await fetch(SZ_FORMSPREE_ENDPOINT, {
                method: "POST",
                body: formData,
                headers: { "Accept": "application/json" }
            });

            if (response.ok) {
                showToast("Inscrição feita com sucesso!", "success");
                form.reset();
            } else {
                showToast("Não foi possível concluir a inscrição. Tenta novamente.", "error");
            }
        } catch (err) {
            showToast("Erro de ligação. Tenta novamente mais tarde.", "error");
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderSzNews();
    initNewsletterForm();
});