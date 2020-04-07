'use strict'

const config = require('../config')
const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields.js')

const signUp = function (data) {
  // console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  // console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = function (data) {
  // console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = function () {
  // console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addMovie = function (data) {
  // console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/movies',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const showMovies = function (data) {
  // console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/movies',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const deleteMovie = function (data) {
  console.log('In api.js')
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/movies/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changeMovie = function () {
  console.log('In api.js')
  const id = $(event.target).closest('section').data('id')
  const data = getFormFields(event.target)
  // store.changeId
  return $.ajax({
    url: config.apiUrl + '/movies/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  addMovie,
  showMovies,
  deleteMovie,
  changeMovie
}
