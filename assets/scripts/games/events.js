const ui = require('./ui')
const api = require('./api')
const store = require('../store')



  let currentPlayer = 'X'

 // const gameBoard = ['', '', '', '', '', '', '', '', '']

let gameOver = false



const onBoxClick = (event) => {
  console.log('click')
  // Select the box that was clicked, event.target
  const box = $(event.target)
  const index = box.data('cell-index')
  console.log(index)
  // only execute code below if empty square is clicked
  if(!box.text() && gameOver === false  ) {
  $('#alert-msg').text(`${currentPlayer} TURN`)
    

    // If the value at “index” in the gameBoard array ===“”, I should “return” and do nothing
   // gameBoard[index] = currentPlayer
    // console.log(gameBoard)
    // Then set the text to the current player
    box.text(currentPlayer)

    console.log(currentPlayer)
    checkForWinner(index)
    console.log(gameOver)
    
    api.updateGame(index, currentPlayer, gameOver)
    .then(ui.onUpdateGameSuccess)
    .then(currentPlayer = currentPlayer === 'O' ? 'X' : 'O')
    //then(() => {      
      //checkForWinner(currentPlayer)
      // gameOver = true
      // console.log('zebra')
      //  gameOver = true 
      // api.updateGame(index, currentPlayer, gameOver)
        //   .then()
        //   .catch()
        
        // },
        // )
        .catch(ui.updateGameFailed)
        console.log(gameOver)
        

    
    
    // Change the current player

  
  }
}


const onStartGame = function (event) {

    event.preventDefault()
    gameOver = false
    currentPlayer = 'X'
    api.startGame()

    .then(ui.onStartGameSuccess)
    .catch(ui.onStartGameFailed)
  
  }

const onPlayGame = function (event) {
  event.preventDefault()
  
  api.playGame()
  .then(ui.onPlayGameSuccess)
  .catch(ui.onPlayGameFailed)
}



// const onUpdateGame = function (event) {
//   event.preventDefault()
  
//   const box = $(event.target)
//   const index = box.data('cellIndex')
    
//      api.updateGame(index, currentPlayer, gameOver)
    
//         .then(ui.updateGameSuccess)
//         .catch(ui.updateGameFailed)
    
    
//   }



const checkForWinner = function(index) {
    console.log('check 4winner')
    const cells = store.game.cells
    cells[index] = currentPlayer
    //console.log(store.game.cells[0])
// if all elements in the top row are equal and are not EMPTY STRINGS
if (cells[0] ===  cells[1] &&
  cells[0] ===  cells[2] &&  cells[0] !== '') {
    $('#alert-msg').text(`${currentPlayer} WINS!`)
     gameOver = true 

    }
     else if ( cells[3] ===   cells[4] &&
      cells[3] ===  cells[5] &&  cells[3] !== '') {
       $('#alert-msg').text( `${currentPlayer} WINS!`) 
    gameOver = true
      
     } else if ( cells[6] ===   cells[7] &&
        cells[6] ===  cells[8] &&  cells[6] !== '') {
         $('#alert-msg').text( `${currentPlayer} WINS!`)
         gameOver = true
       } else if ( cells[0] ===   cells[3] &&
          cells[0] ===  cells[6] &&  cells[0] !== '') {
           $('#alert-msg').text( `${currentPlayer} WINS!`)
           gameOver = true
         } else if ( cells[1] ===   cells[4] &&
            cells[1] ===  cells[7] &&  cells[1] !== '') {
             $('#alert-msg').text( `${currentPlayer} WINS!`)
            gameOver = true  
           } else if ( cells[2] ===   cells[5] &&
          cells[2] ===  cells[8] &&  cells[2] !== '') {
           $('#alert-msg').text( `${currentPlayer} WINS!`) 
           gameOver = true
       } else if ( cells[0] ===   cells[4] &&
          cells[0] ===  cells[8] &&  cells[0] !== '') {
           $('#alert-msg').text( `${currentPlayer} WINS!`)
           gameOver = true
       } else if ( cells[2] ===   cells[4] &&
          cells[2] ===  cells[6] &&  cells[2] !== '') {
           $('#alert-msg').text( `${currentPlayer} WINS!`)
           gameOver = true
      } else $('#alert-msg').text( 'A TIE!')
}

 const gamesPlayed = function (event) {
  event.preventDefault()

  api.gamesPlayed()
    .then(ui.onGamesPlayedSuccess)
    .catch(ui.onGamesPlayedFailed)

}



module.exports = {
    onStartGame,
    onPlayGame,
    onBoxClick,
    gamesPlayed
   
  }