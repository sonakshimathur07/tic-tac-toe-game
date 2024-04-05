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

function displayResult(result) {
    document.getElementById('result').innerHTML = result
}

// function to cell click
async function cellClick(x, y) {
    if (gameBoard[x][y] === "") {
        gameBoard[x][y] = currentPlayer
        await displayValue()
        handleCurrentPlayer()
        let winner = checkWinner()
        if (winner !== '' && winner !== null) {
            if (winner === 'draw') {
              displayResult("It's a draw!");
            } else {
              displayResult(`Player ${winner} wins!`);
            }
            resetGame();
            return;
          }
    } else {
        alert("not allowed")
    }
}

// Winning cases
function checkWinner () {
    // check for row win
    for (let i=0; i<3; i++) {
        if (gameBoard[i][0] === gameBoard[i][1] && 
            gameBoard[i][1] === gameBoard[i][2] &&
            gameBoard[i][0] !== ""
        ) {
            return gameBoard[i][0]
        }
    }

    // check for column win
    for (let j=0; j<3; j++) {
        if (gameBoard[0][j] === gameBoard[1][j] && 
            gameBoard[1][j] === gameBoard[2][j] && 
            gameBoard[0][j] !== ""
            ) {
            return gameBoard[0][j]
        }
        
    }

    // check for diagonal win
    if (((gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]) ||
        (gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0])) && 
        gameBoard[0][0] !== ''
    ) {
        return gameBoard[1][1]
    }

    // check for draw
    let draw = true
    for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++) {
            if (gameBoard[i][j] === "") {
                draw = false;
                break;
            }
        }
    }

    if (draw) {
        return 'draw'
    }

    return null
}


