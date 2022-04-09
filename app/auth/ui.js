'use strict'

const store = require('../store.js')

const onSignupSuccess = function () {
  $('#auth-display').html('<p>You have signed up successfully</p>').show().fadeOut(2000)
  $('form').trigger('reset')
}

const onSignupFailure = function () {
  $('#auth-display').html('<p>Error while signing up</p>')
}

const onSignIn1Success = function (response) {
  console.log(response)
  store.user = response.user
  $('#auth-display1').html('<p>User signed in successfully</p>').show()
  $('form').trigger('reset')
  $('#sign-up-form').hide()
  $('#sign-out-button').show()
  $('#start-game').show()
  $('#new-game').show()
}

const onSignIn1Failure = function () {
  $('#auth-display1').html('<p>Error while signing in</p>')
  $('form').trigger('reset')
  $('#pl1-sign-in-form').show()
}

const onSignOutSuccess = function () {
  console.log('pundit')
  $('#auth-display2').html('<p>User Signed out successfully</p>')
  store.user = null
  $('form').trigger('reset')
  $('#sign-out-button').hide()
  $('#sign-up-form').show()
  $('#auth-display1').hide()
  $('#pl1-sign-in-form').show()
  $('#auth-display2').show().fadeOut(2000)
  $('#start-game').hide()
  $('#new-game').hide()
}

const onSignOutFailure = function () {
  console.log('pundit')
  $('#auth-display2').html('<p>Error while Signing out</p>')
}

const onGamesSuccess = function (response) {
  console.log(response)
  store.game = response.game
}

const onUpdateGamesSuccess = function (response) {
  console.log(response)
  store.game = response.game
}

module.exports = {
  onSignupSuccess,
  onSignupFailure,
  onSignIn1Success,
  onSignIn1Failure,
  onSignOutSuccess,
  onSignOutFailure,
  onGamesSuccess,
  onUpdateGamesSuccess
}
