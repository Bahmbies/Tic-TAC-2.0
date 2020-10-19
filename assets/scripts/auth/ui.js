const store = require('../store')

const signUpSuccess = function (response) {
  $('#alert-msg').text('Thanks for signing up ' + response.user.email)
}

const signUpFailed = function () {
  $('#alert-msg').text('Sign up failed, try again')
}

const signInSuccess = function (response) {
    $('#alert-msg').text('Sign In Successful! ' + response.user.email)
    store.user = response.user
    $('#sign-up-form').hide()
    $('#sign-in').hide()
     $('#password-change').hide()
     $('#sign-out').show()
     $('#start-new-game').show()
  }
  
  const signInFailed = function () {
    $('#alert-msg').text('Sign in failed, try again')
  }
  
  const passwordChangeSuccess = function (response) {
    $('#alert-msg').text('Your password has been changed')
  }
  
  const passwordChangeFailed = function () {
    $('#alert-msg').text('Password change failed, try again')
  }
  
  const signOutSuccess = function (response) {
      $('#alert-msg').text('Sign Out Successful!')
      $('#sign-in').show()
      $('#sign-out').hide()
      $('#start-new-game').hide()
    }
    
    const signOutFailed = function () {
      $('#alert-msg').text('Sign Out Failed!')
    }


  
  module.exports = {
    signUpSuccess,
    signUpFailed,
    signInSuccess,
    signInFailed,
    passwordChangeSuccess,
    passwordChangeFailed,
    signOutSuccess,
    signOutFailed,
  }
