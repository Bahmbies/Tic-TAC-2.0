const store = require('../store')

const onStartGameSuccess = function (response) {
  $('#alert-msg').text('Game is Starting...')
  store.game = response.game
  $('#sign-out').show()
  $('#start-new-game').show()
  $('#game-board').show()
  $('#reset-game').show()
  $('.box').empty('')
  store.gameOver =

  console.log(store.game.cells)
  // $('.box').css('background', 'blue').text('')
}

const onStartGameFailed = function () {
  $('#alert-msg').text('Gameplay Failed')
}

const onPlayGameSuccess = function (res) {
  
  $('#alert-msg').text('Next turn: ')
  store.game = response.game
  $('.box').text('')
  // $('.box').empty()

  //  console.log(res)
  //  const cells = res.game.cells
  //  for (let i = 0; i < cells.length; i++) {
  //      if (cells[i]) {
  //          const box = $('.box')[i]
  //          $(box).text(cells[i])
  //      }
  //  }
}

const onPlayGameFailed = function () {
  $('#alert-msg').text('Failed Loading Game')

}

const onUpdateGameSuccess = function (response) {
  store.game = response.game
  console.log(store.game)
}




const onUpdateGameFailed = function () {
  $('#alert-msg').text('GameFailed')

}


module.exports = {
  onStartGameSuccess,
  onStartGameFailed,
  onPlayGameSuccess,
  onPlayGameFailed,
  onUpdateGameSuccess,
  onUpdateGameFailed
}