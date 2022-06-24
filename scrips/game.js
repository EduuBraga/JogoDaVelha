let tabuleiro = ['', '', '', '', '', '', '', '', '']
let jogadorDaVez = 0
const simbolo = ['o', 'x']
let gameOver = false
const resultado = document.getElementById("resultado")
const botao = document.querySelector("button")
const vitoriaEstado = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function ExucutarMovimento(posicao) {
    if (gameOver) {
        return
    }

    if (tabuleiro[posicao] == '') {
        tabuleiro[posicao] = simbolo[jogadorDaVez]

        gameOver = vitoria()

        if (gameOver == false) {
            jogadorDaVez == 0 ? jogadorDaVez = 1 : jogadorDaVez = 0
        }
    }

    return gameOver
}

function vitoria() {

    for (let i = 0; i < vitoriaEstado.length; i++) {
        let seq = vitoriaEstado[i]

        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]

        if (tabuleiro[pos1] == tabuleiro[pos2] && tabuleiro[pos1] == tabuleiro[pos3] && tabuleiro[pos1] != '') {
            return true
        }
    }
    return false
}
function recomecarJogo() {
    if (gameOver == true) {
        let tabuleiro = ['', '', '', '', '', '', '', '', '']
        let jogadorDaVez = 0
        const simbolo = ['o', 'x']
        let gameOver = false
    }
}


