// Player details
const PLAYER_X = 'X'
const PLAYER_O = 'O'
let currentPlayer = PLAYER_X

// Initialize game board
let gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

// Reset game board
function resetGame() {
    gameBoard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]
    currentPlayer = PLAYER_X
    displayValue()
}

// Display cell value
function displayValue () {
    for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++) {
            document.querySelector(`.box${i}${j}`).innerHTML = gameBoard[i][j]
        }
    }
}

// handle current player
function handleCurrentPlayer () {
    if (currentPlayer === PLAYER_X) {
        return currentPlayer = PLAYER_O
    } 
    return currentPlayer = PLAYER_X
}

// function to cell click
function cellClick(x, y) {
    gameBoard[x][y] = currentPlayer
    displayValue()
    handleCurrentPlayer()
}


