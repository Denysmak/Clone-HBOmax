const barbosa = document.getElementById("barbosa");
const igor = document.getElementById("igor");
const denys = document.getElementById("denys");
const joana = document.getElementById("joana");
const gerenciarAt = document.querySelectorAll(".ga");
const gerenciarButton = document.querySelector(".gerenciar-button");
const usuarioBorder = document.querySelectorAll(".ub");
const usuarioFoto = document.querySelectorAll("uf");
const adicionaAdulto = document.querySelector(".adicionaAdulto");
const adicionaCrianca = document.querySelector(".adicionaCrianca");
const gerenciarTextOne = document.getElementById("gerenciarTextOne");
const gerenciarTextTwo = document.getElementById("gerenciarTextTwo");
const adicionar = document.querySelector(".adicionar");
let mainTitle = document.querySelector(".QEA")
let gerenciarX = true;

let gerenciar = () => {
    gerenciarAt.forEach(ga => {
        ga.style.display = "flex"
    });
}
gerenciarButton.addEventListener('click', () => {
    if (gerenciarX) {
        gerenciarAt.forEach(ga => {
            ga.style.display = "flex"
        })
        usuarioBorder.forEach(ub => {
            ub.style.padding = "2px"
        })
        usuarioFoto.forEach(uf => {
            uf.style.height = "119px"
            uf.style.width = "119px"
        })
        adicionar.style.display = "none"
        gerenciarTextOne.style.display = "none"
        gerenciarTextTwo.style.display = "flex"
        gerenciarX = false
        mainTitle.innerText = "Gerenciar perfis"
    }
    else {
        gerenciarAt.forEach(ga => {
            ga.style.display = "none"
        })
        usuarioBorder.forEach(ub => {
            ub.style.padding = "5px"
        })
        usuarioFoto.forEach(uf => {
            uf.style.height = "115px"
            uf.style.width = "115px"
        })
        adicionar.style.display = "flex"
        gerenciarTextOne.style.display = "flex"
        gerenciarTextTwo.style.display = "none"
        gerenciarX = true
        mainTitle.innerText = "Quem está assistindo?"
    }

});





