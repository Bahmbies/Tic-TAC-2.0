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
//       const cellIndex = event.target.dataset.cellIndex

//     gameBoard[cellIndex] = currentPlayer

//    const gameBoard = {
//      game: {
//        cell: {
//          index: cellIndex,
//          value: currentPlayer,
//        },
//        gameOver: gameOver
//      }
//    }

    api.playGame()
    .then(ui.onPlayGameSuccess)
    .catch(ui.onPlayGameFailed)
}



module.exports = {
    onStartGame,
    onPlayGame,
}