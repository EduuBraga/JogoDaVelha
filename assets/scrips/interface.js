// Declarando constantes.
const botao = document.querySelector(".botao")
const resultado = document.querySelector("#resultado")
let simbolo = null

// Evento click atribuído a todos os quadrados do tabuleiro, após a DOM carregar.
document.addEventListener('DOMContentLoaded', () => {

    let quadrados = document.querySelectorAll(".quadrado")

    quadrados.forEach((elemento) => {
        elemento.addEventListener("click", executarClick)
    })

})

/*Função que vai chamar a função executarMovimento (que está no script game.js) e passar para ela como argumento do id do quadrado clicado. */
function executarClick(evento) {

    if (executarMovimento(evento.target.id)) {
        
        if (!jogadorEscolhido.checked) {
            simbolo = jogadorIndex
        } else {
            simbolo = jogadorIndexX
        }

        if (simbolo == 1) {
            simbolo = "Círculo"
            resultado.innerHTML = `<p>Jogador <span>${simbolo}</span> venceu!</p> <div class="gif-vencedor"> <img class="imagem" src="./assets/imagens/O-Vencedor.gif" alt="Pixel-Art tabuleiro com Círculo"> </div> <div class="recomecar"> <button class="botao" onclick="recomecarJogo()">Recomeçar Partida</button> </div>`
        } else {
            simbolo = "X"
            resultado.innerHTML = `<p>Jogador <span>${simbolo}</span> venceu!</p> <div class="gif-vencedor"> <img class="imagem" src="./assets/imagens/X-Vencedor.gif" alt="Pixel-Art tabuleiro com X"> </div> <div class="recomecar"> <button class="botao" onclick="recomecarJogo()">Recomeçar Partida</button> </div>`
        }
        resultado.style = "display: flex;"


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

//Função para recomeçar o jogo.
function recomecarJogo() {
    limparTabuleiro()
    limparQuadrados()
    resultado.style = "display:none;"
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

