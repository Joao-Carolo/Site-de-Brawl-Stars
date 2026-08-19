// ==========================================================================
// Supercellzone — Página Inicial (geral)
// Newsletter via Formspree, seguindo o mesmo padrão usado no BrawlZone.
// ==========================================================================

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
    initNewsletterForm();
});