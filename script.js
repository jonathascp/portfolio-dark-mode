const secoes = document.querySelectorAll(".secao");
const header = document.querySelector("header");
const menu = document.querySelector(".cabecalho-lista-menu-mobile");
const btnMenu = document.querySelector(".botao-menu");
const cabecalho = document.querySelector(".cabecalho-container");
const body = document.querySelector("body");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
        else {
            entry.target.classList.remove("show");
        }
    })
}, {});

secoes.forEach(el => observer.observe(el));

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        header.classList.add("header-destaque");
    }
    else {
        header.classList.remove("header-destaque");
    }

})

btnMenu.addEventListener("click", () => {
    menu.classList.toggle("menu-ativado");
    cabecalho.classList.toggle("header-destaque");
});

