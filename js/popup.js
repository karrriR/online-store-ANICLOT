document.addEventListener("DOMContentLoaded", function () {
    const popupOverlay = document.querySelector(".popup-overlay");
    const closeButton = document.querySelector(".popup__close-btn");
    const phoneButton = document.querySelector(".header__phone");

    phoneButton.addEventListener("click", (e) => {
        e.preventDefault(); // отменяет переход по ссылке
        popupOverlay.style.display = "flex";
    });
    
    closeButton.addEventListener("click", () => {
        popupOverlay.style.display = "none";
    });

    popupOverlay.addEventListener("click", (e) => {
        if (e.target === popupOverlay) {
            popupOverlay.style.display = "none";
        }
    });
});
