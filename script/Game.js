/*27/05/2022 */
// Iniciar Variaveis
// board são as pociçoes do meu tabuleiro
// playerTime é a vez do jogador
//symbols são referente ao o = fire e x = water 
// gameOver = indica se o jogo acabou ou não se ele for true ele da um return e assim não consigo mais jogar
// se a vez do jogador for 0 ele adiciona no board "o" se for 1 "x"
let board = ["", "", "", "", "", "", "", "", "",];
let playerTime = 0;
let symbols = ["o", "x"];
let gameOver = false;

function handleMove(position) {
    /* esse if recebe gameOver se ele for vdd ele para
    a function handleMove assim n deixando mas o jogador jogar */
    if (gameOver) {
        return;
    }

    if (board[position] == "") {
        board[position] = symbols[playerTime];
        /* gameOver vai verificar se alguem ganhou com
        a function isWin() */
        gameOver = isWin()
        /* Só vai passar pro proximo jogador se o gameover for igual a false */
        if (gameOver == false);

        if (playerTime == 0) {
            playerTime = 1;
        } else {
            playerTime = 0
        }
    }
    return gameOver;
}

function isWin() {
    /*let winStates Mapeia todas as posibilidades de vitoria  */

    let winStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (i = 0; i < winStates.length; i++) {
        /* let seq = winStates[i]; Vai pegar cada index
        do array winStates */
        let seq = winStates[i];
        /* Vai pegar todos os elemento do index 0 do winStates */
        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != "") {
            return true
        }


    }

    return false
}

