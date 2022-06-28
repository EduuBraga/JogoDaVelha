// Declarando variáveis dos Gifs, botão para recomeçar e resultado.
const botao = document.querySelector(".botao")
const gifX = document.querySelector(".X")
const gifO = document.querySelector(".O")
const resultado = document.querySelector("#resultado")

// Evento click atribuído a todos os quadrados do tabuleiro, após a DOM carregar.
document.addEventListener('DOMContentLoaded', () => {

    let quadrados = document.querySelectorAll(".quadrado")

    quadrados.forEach((elemento) => {
        elemento.addEventListener("click", executarClick)
    })

})

/* Evento click atribuído ao botão com funções para recomeçar o jogo.*/
botao.addEventListener('click', () => {
    recomecar()
    limparQuadrados()
    resultado.innerHTML = ``
    gifX.innerHTML = `<img class="imagem" src="./imagens/X.gif" alt="Pixel-Art tabuleiro com Círculo">`
    gifO.innerHTML = `<img class="imagem" src="./imagens/O.gif" alt="Pixel-Art tabuleiro com Círculo">`
})

/*Função que vai chamar a função executarMovimento (que está no script game.js) e passar para ela como argumento do id do quadrado clicado. */
function executarClick(evento) {

    if (executarMovimento(evento.target.id)) {

        let simbolo = jogadorIndex
        if (simbolo == 1) {
            simbolo = "Círculo"
            gifX.innerHTML = `<img class="imagem" src="./imagens/O-vencedor.gif" alt="Pixel-Art tabuleiro com Círculo">`
            gifO.innerHTML = `<img class="imagem" src="./imagens/O-vencedor.gif" alt="Pixel-Art tabuleiro com Círculo">`
        } else {
            simbolo = "X"
            gifX.innerHTML = `<img class="imagem" src="./imagens/X-Vencedor.gif" alt="Pixel-Art tabuleiro com X">`
            gifO.innerHTML = `<img class="imagem" src="./imagens/X-Vencedor.gif" alt="Pixel-Art tabuleiro com X">`

        }
        resultado.innerHTML = `<p>Jogo encerrado - Jogador <span>${simbolo}</span> venceu!</p>`

    }
    atualizarQuadrado(evento)
}

/*Função para colocar um elemento dentro do quadrado clicado.*/
function atualizarQuadrado(evento) {

    let quadrado = evento.target
    let jogador = tabuleiro[quadrado.id]

    if (quadrado != '') {
        quadrado.innerHTML = `<div class="${jogador}"></div>`
    }

}

/*Função para limpar os símbolos dos quadrados.*/
function limparQuadrados() {
    let quadrados = document.querySelectorAll(".quadrado")

    quadrados.forEach((i) => {
        if (i != '') {
            i.innerHTML = `<div class=""></div>`
        }
    })
}