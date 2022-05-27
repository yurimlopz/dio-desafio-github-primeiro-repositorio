/*27/05/2022 */

function screenGame(){
    let startScreen = document.getElementById("startScreen");
    let gameScreen = document.getElementById("screen");
    startScreen.style.display="none";
    gameScreen.style.display="block";
    
    
}
/* DOMContentLoaded vai ser exucutado quando meu documento
for carregado */
document.addEventListener("DOMContentLoaded",()=>{
    /* FOR no square para dar um evento de click em cada um */
    let squares = document.querySelectorAll(".square");
    squares.forEach((square)=>{
        square.addEventListener("click",handleClick);
    })
})
/*  */
function handleClick(event){

    let square = event.target;
    let position = square.id
    /* handleMove muda a vez do jogador */
    if(handleMove(position)){
       let squareWinner = document.getElementById("squareWinner");
       let squareOut = document.getElementById("screen");
       let nameWinner = document.getElementById("nameWinner");
       let player1 = document.getElementById("jogador1").value;
       let player2 = document.getElementById("jogador2").value;
       
       

        setTimeout(()=>{
            squareOut.style.display="none";
            squareWinner.style.display="flex";
            
            if(gameOver == true && playerTime == 1){
                nameWinner.innerHTML=player1;
            }else{
                nameWinner.innerHTML = player2;
            }
            
        },2000)
    }
    updateSquares();



}
/* updateSquares da um for em todos os squares se symbol
for vazio  ele cria uma div e coloca o symbol que no caso é o nosso "x", "o" */
function updateSquares(){
    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        let position = square.id;
        /* Symbol recebe o array board com a position que
        é o quadrado e seu id */
        let symbol = board[position];

        if(symbol != ""){
            square.innerHTML = `<div class='${symbol}'></div>`
        }
        

    })
}

function resetGame(){
    let squareOut = document.getElementById("squareWinner");
    let square = document.getElementById("startScreen");
    squareOut.style.display="none";
    square.style.display="flex"
    board = ["", "", "", "", "", "", "", "", "",]
    gameOver = false
    playerTime = 0
    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        let symbol = board
        if(symbol !=""){
            square.innerHTML =""
        }
    })
    
 

  
}