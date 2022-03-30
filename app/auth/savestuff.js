'use strict'

const authApi = require('./api.js')
const getFormFields = require('../../lib/get-form-fields.js')
const linkUi = require('./ui.js')
const store = require('../store.js')

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
//* **********************End Sign up******************//

const boxes = Array.from(document.getElementsByClassName('box'))

const theWinner = document.getElementById('the-winner')

const spaces = [null, null, null, null, null, null, null, null, null]

const playerO = 'O'
const playerX = 'X'

let currentPlayer = playerX
// To Start Game but need to end with log out
const startGame = () => {
  console.log(store)
  if (store.user) {
    boxes.forEach((box, index) => {
      box.addEventListener('click', boxClicked)
    })
  }
}
//* **************************** Winner ********************//
function boxClicked (e) {
  const id = e.target.id
  if (!store.user) return
  if (!spaces[id]) {
    spaces[id] = currentPlayer
    e.target.innerText = currentPlayer
    if (winner(currentPlayer)) {
      theWinner.innerHTML = `Player ${currentPlayer} is the *Champ*.`
      return
    }
    if (!winner(currentPlayer)) {
      theWinner.innerHTML = 'Hmmm! There is a Tie!'
    }
    currentPlayer = currentPlayer === playerX ? playerO : playerX
  }
}
// ************ conditions to win the game **************//
const winner = (player) => {
  if (spaces[0] === player) {
    if (spaces[1] === player && spaces[2] === player) {
      // console.log(`${player} `)
      return true
    }
    if (spaces[3] === player && spaces[6] === player) {
      // console.log(`${player} `)
      return true
    }
    if (spaces[4] === player && spaces[8] === player) {
      // console.log(`${player} `)
      return true
    }
  }

  if (spaces[8] === player) {
    if (spaces[2] === player && spaces[5] === player) {
      // console.log(`${player}`)
      return true
    }
    if (spaces[7] === player && spaces[6] === player) {
      // console.log(`${player}`)
      return true
    }
  }

  if (spaces[4] === player) {
    if (spaces[3] === player && spaces[5] === player) {
      // console.log(`${player}`)
      return true
    }
    if (spaces[1] === player && spaces[7] === player) {
      // console.log(`${player} `)
      return true
    }
    if (spaces[2] === player && spaces[6] === player) {
      // console.log(`${player} `)
      return true
    }
  }
}
// *********for a new game to clear spaces **********/

const onNewGame = () => {
  spaces.forEach((space, index) => {
    spaces[index] = null
  })
  boxes.forEach((box) => {
    box.innerText = ''
  })
  theWinner.innerHTML = 'Good Luck!'

  currentPlayer = playerX
}
// ******************  startGame  *******************/
const onStartPlay = () => {
  startGame()
}

module.exports = {
  onSignup,
  onSignIn1,
  onSignOut,
  boxClicked,
  winner,
  startGame,
  onNewGame,
  onStartPlay
}
