const secoes = document.querySelectorAll(".secao");
const header = document.querySelector("header");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting)
        {
            entry.target.classList.add("show");
        }
        else
        {
            entry.target.classList.remove("show");
        }
    })
}, {});

secoes.forEach(el => observer.observe(el));

window.addEventListener("scroll", () => {
    if(window.scrollY > 300)
    {
        header.classList.add("header-destaque");
    }
    else
    {
        header.classList.remove("header-destaque");
    }
    
})