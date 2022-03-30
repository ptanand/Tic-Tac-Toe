const boxes = Array.from(document.getElementsByClassName('box'))
const newGame = document.getElementById('new-game')
const theWinner = document.getElementById('theWinner')
const spaces = [null, null, null, null, null, null, null, null, null]
const playerO = 'O'
const playerX = 'X'
let currentPlayer = playerX

const startGame = () => {
  boxes.forEach((box, index) => {
    box.addEventListener('click', boxClicked)
  })
}

function boxClicked (e) {
  const id = e.target.id
  if (!spaces[id]) {
    spaces[id] = currentPlayer
    e.target.innerText = currentPlayer
    if (hasPlayerWon(currentPlayer)) {
      theWinner.innerHTML = `${currentPlayer} wins!!`
      return
    }
    currentPlayer = currentPlayer === playerX ? playerO : playerX
  }
}

const hasPlayerWon = (player) => {
  // from top left, check across, down, and diagonal
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
  // from bottom check up and across
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
  // from middle check middle vertical and middle horizontal
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
  // drawBoard()
  spaces.forEach((space, index) => {
    spaces[index] = null
  })
  boxes.forEach((box) => {
    box.innerText = ''
  })
  theWinner.innerHTML = 'Good Luck!'

  currentPlayer = playerX
})

startGame()

module.exports = {
  onSignup,
  onSignIn1,
  onSignOut,
  boxClicked,
  hasPlayerWon,
  startGame
}


