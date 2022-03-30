'use strict'

const store = require('../store.js')

const onSignupSuccess = function () {
  $('#auth-display').html('<p>You have signed up successfully</p>')
}

const onSignupFailure = function () {
  $('#auth-display').html('<p>Error while signing up</p>')
}

const onSignIn1Success = function (response) {
  console.log(response)
  store.user = response.user
  $('#auth-display1').html('<p>User signed in successfully</p>')
  $('form').trigger('reset')
}

const onSignIn1Failure = function () {
  $('#auth-display1').html('<p>Error while signing in</p>')
}

const onSignOutSuccess = function () {
  console.log('pundit')
  $('#auth-display2').html('<p>User Signing out successfully</p>')
  store.user = null
  $('form').trigger('reset')
}

const onSignOutFailure = function () {
  console.log('pundit')
  $('#auth-display2').html('<p>Error while Signing out</p>')
}



module.exports = {
  onSignupSuccess,
  onSignupFailure,
  onSignIn1Success,
  onSignIn1Failure,
  onSignOutSuccess,
  onSignOutFailure
}
