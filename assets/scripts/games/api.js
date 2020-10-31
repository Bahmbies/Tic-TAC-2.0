const store = require('../store')
const config = require('../config')

const playGame = (data) => {
    return $.ajax({
        url: config.apiUrl + '/games',
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },

    })

}

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


const updateGame = (index, currentPlayer, gameOver) => {
        return $.ajax({
                url: config.apiUrl + '/games/' + store.game._id,
                method: 'PATCH',
                headers: { 
                Authorization: 'Bearer ' + store.user.token
                },
                data: {
                    'game': {
                        'cell': {
                            'index': index,
                            'value': currentPlayer
                        },
                        'over': gameOver
                    }
                }
            })

        }


        module.exports = {
            startGame,
            playGame,
            updateGame
        }