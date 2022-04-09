'use strict'

const store = require('../store.js')

const onSignup = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-api-production.herokuapp.com/sign-up',
    // url: 'http://localhost:4741/sign-up',

    data
  })
}

const onSignIn1 = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-api-production.herokuapp.com/sign-in',
    data
  })
}

const onSignOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: 'https://tic-tac-toe-api-production.herokuapp.com/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const onCreateGames = function () {
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-api-production.herokuapp.com/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const onUpdateGames = function (index, value, over) {
  return $.ajax({
    method: 'PATCH',
    url: 'https://tic-tac-toe-api-production.herokuapp.com/games/' + store.game._id,
    data: {
      game: {
        cell: {
          index: index,
          value: value
        },
        over: over

      }

    },
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// const onUpdateGames =

module.exports = {
  onSignup,
  onSignIn1,
  onSignOut,
  onCreateGames,
  onUpdateGames
}
