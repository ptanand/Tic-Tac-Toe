// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js') // events.js
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignup)
  $('#pl1-sign-in-form').on('submit', authEvents.onSignIn1)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#new-game').on('click', authEvents.onNewGame)
  $('#start-game').on('click', authEvents.onStartPlay)
})

// example to change from regular javaScript to JQuery
// newGame.addEventListener('click', onNewGame) >
// const newGame = document.getElementById('new-game')

// startPlay.addEventListener('click', () => {startGame()})
// const startPlay = document.getElementById('start-game')
