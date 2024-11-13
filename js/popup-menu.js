document.addEventListener("DOMContentLoaded", function () {
    const popupOverlayMenu = document.querySelector(".popup-menu-overlay");
    const closeButtonMenu = document.querySelector(".popup-menu__close-btn");
    const ButtonMenu = document.querySelector(".header__burger-menu");

    ButtonMenu.addEventListener("click", (e) => {
        e.preventDefault();
        popupOverlayMenu.style.display = "flex";
    });
    
    closeButtonMenu.addEventListener("click", () => {
        popupOverlayMenu.style.display = "none";
    });

    popupOverlayMenu.addEventListener("click", (e) => {
        if (e.target === popupOverlayMenu) {
            popupOverlayMenu.style.display = "none";
        }
    });
});
