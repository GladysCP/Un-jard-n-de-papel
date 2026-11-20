
const btnMenu = document.getElementById("btn-menu");
const sidebar = document.getElementById("sidebar");

if (btnMenu && sidebar) {
    btnMenu.addEventListener("click", function () {
        sidebar.classList.toggle("activo");

        const abierto = sidebar.classList.contains("activo");
        btnMenu.setAttribute("aria-expanded", abierto);
    });
}
