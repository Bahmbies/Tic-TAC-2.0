const store = require('../store')
const config = require('../config')


const startGame = () => {
    return $.ajax({
      url: config.apiUrl + '/games',
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + store.user.token,
      },
      data: {},
    })
  }

  const playGame = (gameBoard) => {
    return $.ajax({
      url: config.apiUrl + '/games/' + store.game._id,
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + store.user.token
      },
      data: gameBoard
    })
 
}

const updateGame = (gameBoard) => {
    return $.ajax({
      url: config.apiUrl + '/games/' + store.game._id,
      method: 'PATCH',
      headers: {
        Authorization: 'Bearer ' + store.user.token
      },
      data: gameBoard
    })
 
}


module.exports = {
    startGame,
    playGame,
    updateGame
}   