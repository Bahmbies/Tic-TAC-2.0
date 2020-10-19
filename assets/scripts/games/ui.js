const store = require('../store')

const onStartGameSuccess = function () {
    $('#alert-msg').text('Game is Starting...')
    $('#game-board').show()
    $('#sign-out').hide()
    $('#start-new-game').hide()
  }
  
  const onStartGameFailed = function () {
    $('#alert-msg').text('Gameplay Failed')
  }

module.exports = {
    onStartGameSuccess,
    onStartGameFailed
}
