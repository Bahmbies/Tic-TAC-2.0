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
  $('#start-new-game').on('click', gameEvents.onStartGame)
  $('#game-board').on('click', gameEvents.onStartGame)
  $('#sign-out').hide()
  $('#start-new-game').hide()
  $('#game-board').hide()


})
