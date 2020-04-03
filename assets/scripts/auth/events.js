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

// create onShowMovies function
const onDeleteMovie = function (event) {
  event.preventDefault()
  // console.log('on delete movie')
  const data = getFormFields(event.target)
  // console.log(data)
  // console.log(data.deleteId)
  store.deleteId = data.deleteId
  // console.log(store.deleteId)
  api.deleteMovie(data)
    .then(ui.onDeleteMovieSuccess)
    .catch(ui.onDeleteMovieFailure)
}

// create onChangeMovie function
const onChangeMovie = function (event) {
  event.preventDefault()
  console.log('on change movie')
  const data = getFormFields(event.target)
  // console.log(data)
  console.log(data.changeId)
  store.changeId = data.changeId
  console.log(store.changeId)
  api.changeMovie(data)
    .then(ui.onChangeMovieSuccess)
    .catch(ui.onChangeMovieFailure)
}

const addHandlers = () => {
  $('#show-movies').on('submit', onShowMovies)
  // $('#clearMoviesButton').on('click', onClearMovies)
  // $('content').on('click', '.btn-danger', onDeleteMovie)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onAddMovie,
  onShowMovies,
  onDeleteMovie,
  onChangeMovie,
  addHandlers
}
