const store = require('../store')
const config = require('../config')


const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}
const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}
const passwordChange = data => {
    return $.ajax({
        method: "PATCH",
        data: data,
        url: config.apiUrl + '/change-password',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

const signOut = () => {
    return $.ajax({
        method: "DELETE",
        url: config.apiUrl + '/sign-out',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}



module.exports = {
  signUp,
  signIn,
  passwordChange,
  signOut
}