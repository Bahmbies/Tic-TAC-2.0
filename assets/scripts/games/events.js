const ui = require('./ui')
const api = require('./api')
const store = require('../store')



  let currentPlayer = 'X'

 // const gameBoard = ['', '', '', '', '', '', '', '', '']

let gameOver = false



const onBoxClick = (event) => {
  $('#alert-msg').text(`${currentPlayer === 'O' ? 'X' : 'O'} TURN`)
  console.log('click')
  // Select the box that was clicked, event.target
  const box = $(event.target)
  const index = box.data('cell-index')
  console.log(index)
  // only execute code below if empty square is clicked
  if(!box.text() && gameOver === false  ) {
    console.log(gameOver)

    // If the value at “index” in the gameBoard array ===“”, I should “return” and do nothing
   // gameBoard[index] = currentPlayer
    // console.log(gameBoard)
    // Then set the text to the current player
    box.text(currentPlayer)

    console.log(currentPlayer)
    
    
    api.updateGame(index, currentPlayer)
    .then(ui.onUpdateGameSuccess)
    .then(() => {      
      checkForWinner(currentPlayer)
      // gameOver = true
      console.log('zebra')
       //  gameOver = true 
        // api.updateGame(index, currentPlayer, gameOver)
        //   .then()
        //   .catch()
        
      },
      currentPlayer = currentPlayer === 'O' ? 'X' : 'O'
    )
    .catch(ui.updateGameFailed)
    
    
    
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



const checkForWinner = function(currentPlayer) {
    console.log('check 4winner')
    console.log(store.game.cells[0])
// if all elements in the top row are equal and are not EMPTY STRINGS
if (store.game.cells[0] ===  store.game.cells[1] &&
  store.game.cells[0] === store.game.cells[2] && store.game.cells[0] !== '') {
    $('#alert-msg').text(`${currentPlayer === 'O' ? 'X' : 'O'} WINS!`) 
      gameOver = true
    }


    else if (store.game.cells[3] ===  store.game.cells[4] &&
    store.game.cells[3] === store.game.cells[5] && store.game.cells[3] !== '') {
      $('#alert-msg').text(`${currentPlayer === 'O' ? 'X' : 'O'} WINS!`) 
      
    } else if (store.game.cells[6] ===  store.game.cells[7] &&
      store.game.cells[6] === store.game.cells[8] && store.game.cells[6] !== '') {
        $('#alert-msg').text(`${currentPlayer === 'O' ? 'X' : 'O'} WINS!`)
        
      } else if (store.game.cells[0] ===  store.game.cells[3] &&
        store.game.cells[0] === store.game.cells[6] && store.game.cells[0] !== '') {
          $('#alert-msg').text(`${currentPlayer === 'O' ? 'X' : 'O'} WINS!`)
          return 
        } else if (store.game.cells[1] ===  store.game.cells[4] &&
          store.game.cells[1] === store.game.cells[7] && store.game.cells[1] !== '') {
            $('#alert-msg').text(`${currentPlayer === 'O' ? 'X' : 'O'} WINS!`)
            return
      } else if (store.game.cells[2] ===  store.game.cells[5] &&
        store.game.cells[2] === store.game.cells[8] && store.game.cells[2] !== '') {
          $('#alert-msg').text(`${currentPlayer === 'O' ? 'X' : 'O'} WINS!`) 
          return 
      } else if (store.game.cells[0] ===  store.game.cells[4] &&
        store.game.cells[0] === store.game.cells[8] && store.game.cells[0] !== '') {
          $('#alert-msg').text(`${currentPlayer === 'O' ? 'X' : 'O'} WINS!`)
          return
      } else if (store.game.cells[2] ===  store.game.cells[4] &&
        store.game.cells[2] === store.game.cells[6] && store.game.cells[2] !== '') {
          $('#alert-msg').text(`${currentPlayer === 'O' ? 'X' : 'O'} WINS!`)
          return
      } else return false   
}




module.exports = {
    onStartGame,
    onPlayGame,
    onBoxClick
   
  }