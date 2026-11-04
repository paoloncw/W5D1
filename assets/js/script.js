const overlay = document.getElementById("overlay-contatti");

document.getElementById("apri-contatti")
    .addEventListener("click", () => {
        overlay.removeAttribute("hidden");
    });

document.getElementById("chiudi-contatti")
    .addEventListener("click", () => {
        overlay.setAttribute("hidden", "");
    });

overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
        overlay.setAttribute("hidden", "");
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        overlay.setAttribute("hidden", "");
    }
});