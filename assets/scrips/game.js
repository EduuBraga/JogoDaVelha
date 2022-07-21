//Declarando as variáveis do para o jogo.
const jogadorEscolhido = document.querySelector('#jogadorEscolhido')
let tabuleiro = ['', '', '', '', '', '', '', '', '']
let jogadorIndex = 0
let jogadorIndexX = 1
let pecaJogador = ['x', 'o']
let fimdejogo = false
const possibilidadesGanhar = [
    ['0', '1', '2'],
    ['3', '4', '5'],
    ['6', '7', '8'],
    ['0', '3', '6'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['0', '4', '8'],
    ['2', '4', '6']
]


/*Função para executar o movimento, recebendo como arguemento o id do quadrado clicado.  */
function executarMovimento(posicao) {
    if (fimdejogo) {
        return
    }

    if (!jogadorEscolhido.checked) {
        if (tabuleiro[posicao] == '') {
            tabuleiro[posicao] = pecaJogador[jogadorIndex]

            fimdejogo = quemGanhou()

            if (fimdejogo == false) {
                if (jogadorIndex == 0) {
                    jogadorIndex = 1
                } else {
                    jogadorIndex = 0
                }
            }
        }
    } else {
        if (tabuleiro[posicao] == '') {
            tabuleiro[posicao] = pecaJogador[jogadorIndexX]

            fimdejogo = quemGanhou()

            if (fimdejogo == false) {
                if (jogadorIndexX == 0) {
                    jogadorIndexX = 1
                } else {
                    jogadorIndexX = 0
                }
            }
        }
    }


    return fimdejogo
}

/*Função onde vai conferir quando o jogo acabou.*/
function quemGanhou() {

    for (let i = 0; i < possibilidadesGanhar.length; i++) {
        let seq = possibilidadesGanhar[i]
        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]

        if (tabuleiro[pos1] == tabuleiro[pos2] && tabuleiro[pos1] == tabuleiro[pos3] && tabuleiro[pos1] != '') {
            return true
        }
    }

    return false

}
/*Função para recomeçar o jogo. */
function limparTabuleiro() {
    tabuleiro = ['', '', '', '', '', '', '', '', '']
    fimdejogo = false
    jogadorIndex = 0
}


