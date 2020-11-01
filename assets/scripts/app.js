'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./auth/events')
const gameEvents = require('./games/events')

$(() => {
  // your JS code goes here
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#sign-out').on('click', events.onSignOut)
  $('#password-change').on('submit', events.onPasswordChange)
  $('#start-new-game').on('submit', gameEvents.onStartGame)
  $('#count-games').on('submit', gameEvents.gamesPlayed)
 // $('#game-board').on('click', gameEvents.onStartGame)
 // $('#reset-game').on('click', gameEvents.onUpdateGame)
 // $('.box').on('click', gameEvents.onPlayGame)
  $('#sign-out').hide()
  $('#start-new-game').hide()
  $('#game-board').hide()
  $('#password-change').hide()
  $('#reset-game').hide()
  $('#count-games').hide()
  $('#scorecard').hide()
  
  


 
  $('.box').on('click', gameEvents.onBoxClick)

    })

  