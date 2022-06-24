document.addEventListener('DOMContentLoaded', () => {

    const quadrados = document.querySelectorAll(".quadrado")

    quadrados.forEach((elemento) => {
        elemento.addEventListener('click', exucutarClick)
    })

})

function exucutarClick(evento) {

    let quadrado = evento.target
    let posicao = quadrado.id

    if (ExucutarMovimento(posicao)) {

        setTimeout(() => {
            let jogadorGanhador = jogadorDaVez
            if (jogadorGanhador == 0) {
                jogadorGanhador = "Circulo"
            } else {
                jogadorGanhador = "X"
            }
            resultado.innerHTML = `<p>Jogo encerrado - Jogador <span class="r">${jogadorGanhador}</span> venceu!</p>`
        }, 10)
    }
    atualizarQuadrado(posicao)
}

botao.addEventListener('click', ()=>{
    tabuleiro = ['', '', '', '', '', '', '', '', '']
    jogadorDaVez = 0
    gameOver = false
    atualizarQuadrados()
})

function atualizarQuadrado(posicao){
    let quadrado = document.getElementById(posicao.toString())
    let simbolo = tabuleiro[posicao]
    quadrado.innerHTML = `<div class='${simbolo}'></div>`
}

function atualizarQuadrados() {
    const quadrados = document.querySelectorAll(".quadrado")
    
    quadrados.forEach((quadrado) => {
        console.log(quadrado)
        if (quadrado != '') {
            quadrado.innerHTML = `<div class=''></div>`
        }
    })
}