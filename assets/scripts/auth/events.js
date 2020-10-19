const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')


const onSignUp = function (event) {
    event.preventDefault()
    
    const form = event.target

    const data = getFormFields(form)
    
  
    api.signUp(data)

    .then(ui.signUpSuccess)
    .catch(ui.signUpFailed)
}

const onSignIn = function (event) {

    event.preventDefault()
    
    const form = event.target
     
    const data = getFormFields(form)
  
    
    api.signIn(data)
    
      .then(ui.signInSuccess)
      .catch(ui.signInFailed)
  }

  const onPasswordChange = function (event) {
    event.preventDefault()
    
    const form = event.target
    
    const data = getFormFields(form)
    
    api.passwordChange(data)
      
      .then(ui.passwordChangeSuccess)
      
      .catch(ui.passwordChangeFailed)
  }
  
  const onSignOut = function (event) {

      event.preventDefault()

      api.signOut()
      
        .then(ui.signOutSuccess)
      
        .catch(ui.signOutFailed)
    }


  module.exports = {
    onSignUp,
    onSignIn,
    onPasswordChange,
    onSignOut
  }

