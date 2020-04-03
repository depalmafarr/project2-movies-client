'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

// create onSignUp function
const onSignUp = function (event) {
  event.preventDefault()
  // console.log('Signing up')
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.onSignUpSucess)
    .catch(ui.onSignUpFailure)
}

// create onSignIn function
const onSignIn = function (event) {
  event.preventDefault()
  // console.log('Signed In')
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.onSignInSucess)
    .catch(ui.onSignInFailure)
}

// create onChangePassword function
const onChangePassword = function (event) {
  event.preventDefault()
  // console.log('on password change')
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

// create onSignOut function
const onSignOut = function (event) {
  event.preventDefault()
  // console.log('on sign out')
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

// create onAddMovie function
const onAddMovie = function (event) {
  event.preventDefault()
  console.log('on add movie')
  const data = getFormFields(event.target)
  api.addMovie(data)
    .then(ui.onAddMovieSuccess)
    .catch(ui.onAddMovieFailure)
}

// create onShowMovies function
const onShowMovies = function (event) {
  event.preventDefault()
  console.log('on show movies')
  api.showMovies()
    .then(ui.onShowMoviesSuccess)
    .catch(ui.onShowMoviesFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onAddMovie,
  onShowMovies
}
