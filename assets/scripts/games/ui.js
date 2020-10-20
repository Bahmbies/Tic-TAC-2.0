const store = require('../store')

const onStartGameSuccess = function (response) {
    $('#alert-msg').text('Game is Starting...')
    $('#game-board').show()
    $('#sign-out').show()
    $('#start-new-game').show()
    $('.box').text('')
    store.game = response.game
}

const onStartGameFailed = function () {
    $('#alert-msg').text('Gameplay Failed')
}

const onPlayGameSuccess = function (res) {
    $('#alert-msg').text('Enjoy!')
    // console.log(res)
    // const cells = res.game.cells
    // for (let i = 0; i < cells.length; i++) {
    //     if (cells[i]) {
    //         const box = $('.box')[i]
    //         $(box).text(cells[i])
    //     }
    // }
  }

  const onPlayGameFailed = function () {
    $('#alert-msg').text('Failed Loading Game')
   
  }


module.exports = {
    onStartGameSuccess,
    onStartGameFailed,
    onPlayGameSuccess,
    onPlayGameFailed
}

