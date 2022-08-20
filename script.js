const barbosa = document.getElementById("barbosa");
const igor = document.getElementById("igor");
const denys = document.getElementById("denys");
const joana = document.getElementById("joana");




let hoverMaior = (e) => {
    e.classList.remove("perfilMenor")
    e.classList.add("perfilMaior")

    e.parentElement.parentElement.children[1].classList.remove("fontMenor")
    e.parentElement.parentElement.children[1].classList.add("fontMaior")
    e.parentElement.parentElement.children[1].style.fontSize = "1.2rem";
}
let hoverMenor = (e) => {
    e.classList.remove("perfilMaior")
    e.classList.add("perfilMenor")
    
    
    e.parentElement.parentElement.children[1].classList.remove("fontMaior")
    e.parentElement.parentElement.children[1].classList.add("fontMenor")
    e.parentElement.parentElement.children[1].style.fontSize = "1rem";
}



