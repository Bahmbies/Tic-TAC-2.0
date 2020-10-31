const store = require('../store')


const checkForWinner = function(currentPlayer) {
    
// if all elements in the top row are equal and are not EMPTY STRINGS
if (store.game.cells[0] === currentPlayer &&
    store.game.cells[1] === currentPlayer &&
    store.game.cells[2] === currentPlayer) return true
  else if (store.game.cells[3] === currentPlayer &&
    store.game.cells[4] === currentPlayer &&
    store.game.cells[5] === currentPlayer) return true
  else if (store.game.cells[6] === currentPlayer &&
    store.game.cells[7] === currentPlayer &&
    store.game.cells[8] === currentPlayer) return true
  else if (store.game.cells[0] === currentPlayer &&
    store.game.cells[3] === currentPlayer &&
    store.game.cells[6] === currentPlayer) return true
  else if (store.game.cells[1] === currentPlayer &&
    store.game.cells[4] === currentPlayer &&
    store.game.cells[7] === currentPlayer) return true
  else if (store.game.cells[2] === currentPlayer &&
    store.game.cells[5] === currentPlayer &&
    store.game.cells[8] === currentPlayer) return true
  else if (store.game.cells[0] === currentPlayer &&
    store.game.cells[4] === currentPlayer &&
    store.game.cells[8] === currentPlayer) return true
  else if (store.game.cells[2] === currentPlayer &&
    store.game.cells[4] === currentPlayer &&
    store.game.cells[6] === currentPlayer) return true
  else return false
}



module.exports = {
    checkForWinner
}