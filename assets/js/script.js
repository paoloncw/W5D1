const overlay = document.getElementById("overlay-contatti");

// EXTRA 12: chiusura con animazione di uscita.
// 1) aggiungo la classe .closing (parte l'animazione CSS)
// 2) aspetto 200ms (la durata dell'animazione) con setTimeout
// 3) solo dopo metto hidden e tolgo .closing
function chiudiModal() {
    // se e' gia' chiuso o sta gia' chiudendo, non faccio niente
    if (overlay.hasAttribute("hidden") || overlay.classList.contains("closing")) {
        return;
    }
    overlay.classList.add("closing");
    setTimeout(() => {
        overlay.setAttribute("hidden", "");
        overlay.classList.remove("closing");
    }, 200);
}

document.getElementById("apri-contatti")
    .addEventListener("click", () => {
        overlay.removeAttribute("hidden");
    });

document.getElementById("chiudi-contatti")
    .addEventListener("click", chiudiModal);

overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
        chiudiModal();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        chiudiModal();
    }
});
