const ui = require('./ui')
const api = require('./api')


const onStartGame = function (event) {

    event.preventDefault()

    api.startGame()

    .then(ui.onStartGameSuccess)
    .catch(ui.onStartGameFailed)
  
  }

module.exports = {
    onStartGame
}