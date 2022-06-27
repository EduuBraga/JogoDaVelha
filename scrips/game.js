let tabuleiro = ['', '', '', '', '', '', '', '', '']
let jogadorIndex = 0
let pecaJogador = ['x', 'o']
let fimdejogo = false

function executarMovimento(posicao) {
    if (fimdejogo) {
        return
    }

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
    return fimdejogo
}

function quemGanhou() {

    let possibilidadesGanhar = [
        ['0', '1', '2'],
        ['3', '4', '5'],
        ['6', '7', '8'],
        ['0', '3', '6'],
        ['1', '4', '7'],
        ['2', '5', '8'],
        ['0', '4', '8'],
        ['2', '4', '6']
    ]

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



