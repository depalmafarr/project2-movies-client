'use strict'

const showMoviesTemplate = require('../templates/movie-listing.handlebars')
const store = require('../store')

const onSignUpSucess = function (data) {
  $('#message').text('Successful sign up!')
  $('#message').removeClass()
  $('#signInMessage').text('')
  $('#sign-up').trigger('reset')
  // console.log('onSignUpSucess data is: ', data)
}

const onSignUpFailure = function () {
  $('#message').text('Did not sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#sign-up').trigger('reset')
  $('#signInMessage').text('')
  // console.log('onSignUpFailure data is:)
}

const onSignInSucess = function (data) {
  $('#signInMessage').text('Successful sign in')
  $('#signInMessage').removeClass()
  $('#sign-in').addClass('hidden')
  $('#sign-up').addClass('hidden')
  $('#change-password').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#show-movies').removeClass('hidden')
  $('#add-movie').removeClass('hidden')
  $('#delete-movie').removeClass('hidden')
  $('#change-movie').removeClass('hidden')
  $('#totalGamesMessage').text('')
  $('#signUpMessage').text('')
  $('#message').text('')
  $('#sign-in').trigger('reset')
  // console.log('onSignInSucess data is: ', data)
  store.user = data.user
}

const onSignInFailure = function () {
  $('#sign-in').trigger('reset')
  $('#signInMessage').text('Wrong password or email')
  $('#signInMessage').removeClass()
  $('#signInMessage').addClass('failure')
  $('#message').text('')
  // console.log('onSignInFailure data is: ')
}

const onChangePasswordSuccess = function (data) {
  $('#change-password').trigger('reset')
  $('#passwordChangeMessage').text('You changed your password!')
  $('#passwordChangeMessage').removeClass()
  $('#signInMessage').text('')
  // console.log('onChangePasswordSuccess data is: ', data)
}

const onChangePasswordFailure = function () {
  $('#change-password').trigger('reset')
  $('#passwordChangeMessage').text('You did not change your password')
  $('#passwordChangeMessage').removeClass()
  $('#passwordChangeMessage').addClass('failure')
  $('#signInMessage').text('')
  // console.log('onChangePasswordFailure data is: ')
}

const onSignOutSuccess = function (data) {
  $('#sign-out').trigger('reset')
  // $('#signInMessage').text('You signed out')
  $('#signInMessage').removeClass()
  $('#sign-in').removeClass('hidden')
  $('#sign-up').removeClass('hidden')
  $('#change-password').addClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#add-movie').addClass('hidden')
  $('#delete-movie').addClass('hidden')
  $('#change-movie').addClass('hidden')
  $('#show-movies').addClass('hidden')
  $('.container').addClass('hidden')
  // $('#newGameMessage').text('')
  // $('#currentTurn').text('')
  $('#passwordChangeMessage').text('')
  // $('#gameEndMessage').text('')
  $('.content').empty()
  // console.log('onSignOutSuccess data is: ', data)
}

const onSignOutFailure = function () {
  $('#sign-out').trigger('reset')
  $('#signOutMessage').text('Sign out failed')
  $('#signOutMessage').removeClass()
  $('#signOutMessage').addClass('failure')
  $('#signInMessage').text('')
  $('#passwordChangeMessage').text('')
  // console.log('onSignOutFailure data is: ')
}

const onAddMovieSuccess = function (data) {
  $('#movieMessage').text('Movie logged')
  // console.log('onAddMovieSuccess data is: ', data)
}

const onAddMovieFailure = function () {
  $('#movieMessage').text('Did not add movie')
  // console.log('onAddMovieFailure data is:)
}

const onShowMoviesSuccess = function (data) {
  // console.log(data)
  const showMoviesHtml = showMoviesTemplate({ movies: data.movies })
  $('.content').html(showMoviesHtml)
  $('#showMoviesMessage').text('Movies shown below')
  // console.log('onShowMoviesSuccess data is: ', data)
}

const onShowMoviesFailure = function () {
  $('#showMoviesMessage').text('Did not show movies')
  // console.log('onAddMovieFailure data is:)
}

const onDeleteMovieSuccess = function (data) {
  $('#deleteMovieMessage').text('Movie deleted')
  // console.log('onDeleteMovieSuccess data is: ', data)
}

const onDeleteMovieFailure = function () {
  $('#deleteMovieMessage').text('Did not delete movie')
  // console.log('onDeleteMovieFailure data is:)
}

const onChangeMovieSuccess = function (data) {
  $('#changeMovieMessage').text('Movie updated')
  // console.log('onChangeMovieSuccess data is: ', data)
}

const onChangeMovieFailure = function () {
  $('#changeMovieMessage').text('Did not update movie')
  // console.log('onChangeMovieFailure data is:)
}

module.exports = {
  onSignUpSucess,
  onSignUpFailure,
  onSignInSucess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onAddMovieSuccess,
  onAddMovieFailure,
  onShowMoviesSuccess,
  onShowMoviesFailure,
  onDeleteMovieSuccess,
  onDeleteMovieFailure,
  onChangeMovieSuccess,
  onChangeMovieFailure
}
