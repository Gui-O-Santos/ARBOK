const botao = document.getElementById("toggleBtn");
const menu = document.getElementById("sidebar");

botao.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});