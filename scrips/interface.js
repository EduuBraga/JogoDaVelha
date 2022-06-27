document.addEventListener('DOMContentLoaded', () => {

    let quadrados = document.querySelectorAll(".quadrado")

    quadrados.forEach((elemento) => {
        elemento.addEventListener("click", executarClick)
    })

})

function executarClick(evento) {

    executarMovimento(evento.target.id)
    atualizarQuadrado(evento)
}

function atualizarQuadrado(evento) {

    let quadrado = evento.target
    let jogador = tabuleiro[evento.target.id]

    if (quadrado != '') {
        quadrado.innerHTML = `<div class="${jogador}"></div>`
    }

}