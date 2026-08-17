// ==========================================================================
// Supercellzone — Página Inicial (geral)
// Newsletter via Formspree, seguindo o mesmo padrão usado no BrawlZone.
// ==========================================================================

// TODO: substituir pelo endpoint real do Formspree da Supercellzone
// (pode ser o mesmo do BrawlZone ou um novo formulário dedicado — a decidir)
const SZ_FORMSPREE_ENDPOINT = "https://formspree.io/f/SUBSTITUIR_ID";

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