const store = require('./store')

const signUpSuccess = function (response) {
  $('#alert-msg').text('Thanks for signing up ' + response.user.email)
}

const signUpFailed = function () {
  $('#alert-msg').text('Sign up failed, try again')
}

const signInSuccess = function (response) {
    $('#message').text('Sign In Successful! ' + response.user.email)
    store.user = response.user
    $('#password-change').show()
    $('#sign-out').show()
    $('#sign-up').hide()
    $('#sign-in').hide()
  }
  
  const signInFailed = function () {
    $('#message').text('Sign in failed, try again')
  }
  
  const passwordChangeSuccess = function (response) {
    $('#message').text('Your password has been changed')
  }
  
  const passwordChangeFailed = function () {
    $('#message').text('Password change failed, try again')
  }
  
  const signOutSuccess = function (response) {
      $('#message').text('Sign Out Successful!')
    }
    
    const signOutFailed = function () {
      $('#message').text('Sign Out Failed!')
    }
  
  
  module.exports = {
    signUpSuccess,
    signUpFailed,
    signInSuccess,
    signInFailed,
    passwordChangeSuccess,
    passwordChangeFailed,
    signOutSuccess,
    signOutFailed
  }

module.exports = {
    signUpSuccess,
    signUpFailed
}