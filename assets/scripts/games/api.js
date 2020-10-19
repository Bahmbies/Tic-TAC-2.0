const store = require('../store')
const config = require('../config')


const startGame = () => {
    return $.ajax({
      url: config.apiUrl + '/games',
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + store.user.token,
      },
      data: {}
    })
  }
module.exports = {
    startGame
}