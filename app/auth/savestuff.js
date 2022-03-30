'use strict'

const authApi = require('./api.js')
const getFormFields = require('../../lib/get-form-fields.js')
const linkUi = require('./ui.js')
const { store } = require('../store.js')

const onSignup = function (event) {
  event.preventDefault()

  console.log('anand')

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  authApi
    .onSignup(data)
    .then(() => linkUi.onSignupSuccess())
    .catch(() => linkUi.onSignupFailure())
}
// Player 1 sign in
const onSignIn1 = function (event) {
  event.preventDefault()

  console.log('maharaj')

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  authApi
    .onSignIn1(data)
    .then((response) => linkUi.onSignIn1Success(response))
    .catch(() => linkUi.onSignIn1Failure())
}

const onSignOut = function () {
  // console.log('pundit')
  authApi
    .onSignOut()
    .then(() => linkUi.onSignOutSuccess())
    .catch(() => linkUi.onSignOutFailure())
}
//* *************************************************************** */

const boxes = Array.from(document.getElementsByClassName('box'))
const newGame = document.getElementById('new-game')

const startPlay = document.getElementById('start-game')

const theWinner = document.getElementById('the-winner')
const spaces = [null, null, null, null, null, null, null, null, null]
const playerO = 'O'
const playerX = 'X'
let currentPlayer = playerX

const startGame = () => {
  // if (store.user) {
  boxes.forEach((box, index) => {
    box.addEventListener('click', boxClicked)
  })
}
// }

function boxClicked (e) {
  const id = e.target.id
  if (!spaces[id]) {
    spaces[id] = currentPlayer
    e.target.innerText = currentPlayer
    if (winner(currentPlayer)) {
      theWinner.innerHTML = `${currentPlayer} wins!!`
      return
    }
    currentPlayer = currentPlayer === playerX ? playerO : playerX
  }
}

const winner = (player) => {
  //  diagonal
  if (spaces[0] === player) {
    if (spaces[1] === player && spaces[2] === player) {
      console.log(`${player} wins up top`)
      return true
    }
    if (spaces[3] === player && spaces[6] === player) {
      console.log(`${player} wins on the left`)
      return true
    }
    if (spaces[4] === player && spaces[8] === player) {
      console.log(`${player} wins on the diagonal`)
      return true
    }
  }
  //  across
  if (spaces[8] === player) {
    if (spaces[2] === player && spaces[5] === player) {
      console.log(`${player} wins on the right`)
      return true
    }
    if (spaces[7] === player && spaces[6] === player) {
      console.log(`${player} wins on the bottom`)
      return true
    }
  }
  // middle horizontal
  if (spaces[4] === player) {
    if (spaces[3] === player && spaces[5] === player) {
      console.log(`${player} wins on the middle horizontal`)
      return true
    }
    if (spaces[1] === player && spaces[7] === player) {
      console.log(`${player} wins on the middle vertical`)
      return true
    }
    if (spaces[2] === player && spaces[6] === player) {
      console.log(`${player} wins on the diagonal`)
      return true
    }
  }
}

newGame.addEventListener('click', () => {
  spaces.forEach((space, index) => {
    spaces[index] = null
  })
  boxes.forEach((box) => {
    box.innerText = ''
  })
  theWinner.innerHTML = 'Good Luck!'

  currentPlayer = playerX
})

// startGame()
startPlay.addEventListener('click', () => {
  startGame()
})

module.exports = {
  onSignup,
  onSignIn1,
  onSignOut,
  boxClicked,
  winner,
  startGame
}
