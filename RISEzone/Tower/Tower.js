// ==========================================================================
// Project RISE Zone — A Tower
// Gera o visual de pisos empilhados (reaproveita o motivo do hero da
// Página Inicial) e a marcação do piso "boss" a cada N pisos.
// ==========================================================================

const TOWER_VISUAL_FLOOR_COUNT = 7;
const TOWER_BOSS_EVERY = 4; // a cada 4 pisos, um boss (ilustrativo)

function buildTowerVisual() {
    const wrap = document.getElementById("towerVisualWrap");
    if (!wrap) return;

    let html = `<div class="tower-visual-top" aria-hidden="true"></div>`;

    // Do topo para a base visualmente, mas construído em column-reverse,
    // por isso geramos do piso 1 (base) até ao topo.
    for (let i = 1; i <= TOWER_VISUAL_FLOOR_COUNT; i++) {
        const isBoss = i % TOWER_BOSS_EVERY === 0;
        const label = isBoss
            ? `<span class="floor-icon">⚔️</span> Piso ${i} — Boss`
            : `<span class="floor-icon">▲</span> Piso ${i}`;
        html += `
      <div class="tower-visual-floor${isBoss ? " is-boss" : ""}" style="--i:${TOWER_VISUAL_FLOOR_COUNT - i}" data-piso="${i}">
        <div class="tower-floor-label">${label}</div>
      </div>`;
    }

    wrap.innerHTML = html;

    // Pequeno feedback ao clicar num piso (sem navegação — é ilustrativo)
    wrap.querySelectorAll(".tower-visual-floor").forEach(floor => {
        floor.addEventListener("click", () => {
            const piso = floor.dataset.piso;
            const isBoss = floor.classList.contains("is-boss");
            if (typeof showToast === "function") {
                showToast(
                    isBoss ? `Piso ${piso} — aqui espera um boss!` : `Piso ${piso} da Tower`,
                    isBoss ? "warning" : "info"
                );
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    buildTowerVisual();
});