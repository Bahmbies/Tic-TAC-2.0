const ui = require('./ui')
const api = require('./api')

  let currentPlayer = 'X'

  const gameBoard = ['', '', '', '', '', '', '', '', '']

let gameOver = false


const onStartGame = function (event) {

    event.preventDefault()

    api.startGame()

    .then(ui.onStartGameSuccess)
    .catch(ui.onStartGameFailed)
  
  }

const onPlayGame = function (event) {
    event.preventDefault()
    //    const cellIndex = event.target.dataset.cellIndex

    //  gameBoard[cellIndex] = currentPlayer

    // const gameBoard = {
    //   game: {
    //     cell: {
    //       index: cellIndex,
    //       value: currentPlayer,
    //     },
    //     gameOver: gameOver
    //   }
    // }

    api.playGame()
    .then(ui.onPlayGameSuccess)
    .catch(ui.onPlayGameFailed)
}

const onUpdateGame = function (event) {
    event.preventDefault()

    console.log('click')
    // Select the box that was clicked, event.target
    const box = $(event.target)
     const index = box.data('cellIndex')
      // only execute code below if empty square is clicked
      if(!box.text()) {
          // If the value at “index” in the gameBoard array ===“”, I should “return” and do nothing
          gameBoard[index] = currentPlayer
          // console.log(gameBoard)
          // Then set the text to the current player
          box.text(currentPlayer)
          api.updateGame(index, currentPlayer, gameOver)
      
            .then(ui.updateGameSuccess)
            .catch(ui.updateGameFailed)
          // Change the current player
        currentPlayer = currentPlayer === 'O' ? 'X' : 'O'
      }


  }


module.exports = {
    onStartGame,
    onPlayGame,
    onUpdateGame
}