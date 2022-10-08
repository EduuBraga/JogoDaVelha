//Declarando as variáveis para o jogo.
const jogadorEscolhido = document.querySelector('#jogadorEscolhido')
let tabuleiro = ['', '', '', '', '', '', '', '', '']
let jogadorIndexQndX = 0
let jogadorIndexQndO = 1
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
            tabuleiro[posicao] = pecaJogador[jogadorIndexQndX]

            fimdejogo = quemGanhou()


            if (fimdejogo == false) {
                if (jogadorIndexQndX == 0) {
                    jogadorIndexQndX = 1
                } else {
                    jogadorIndexQndX = 0
                }
            }
        }
    } else {
        if (tabuleiro[posicao] == '') {
            tabuleiro[posicao] = pecaJogador[jogadorIndexQndO]

            fimdejogo = quemGanhou()

            if (fimdejogo == false) {
                if (jogadorIndexQndO == 0) {
                    jogadorIndexQndO = 1
                } else {
                    jogadorIndexQndO = 0
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
}

function checarVelha() {
    let velha = tabuleiro.filter(i => i != "").length
    if (velha == 8) {
        return true
    }
    return false
}

function checarTabuleiroVazio() {
    let pecasTabuleiro = tabuleiro.filter(peca => peca == "").length
    if(pecasTabuleiro == 9){
        return true
    }
    return false
}