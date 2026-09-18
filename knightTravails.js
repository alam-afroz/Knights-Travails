function Knight_moves(start, end) {
    let row = start[0];
    let col = start[1];
    let validMoves = possibleMoves(row, col);
    return validMoves
}

function possibleMoves(row, col) {
    let moveOne = [row + 2, col + 1];
    let moveTwo = [row + 2, col - 1];
    let moveThree = [row - 2, col + 1];
    let moveFour = [row - 2, col - 1];

    let moveFive = [row + 1, col + 2];
    let moveSix = [row + 1, col - 2];
    let moveSeven = [row - 1, col + 2];
    let moveEight = [row - 1, col - 2];

    let allMoves = [moveEight, moveFive, moveFour, moveOne, moveThree, moveTwo, moveSix, moveSeven];
    let validMoves = allMoves.filter((item) => {
        if (item[0] >= 0 && item[1] >= 0 && item[0] <= 7 && item[1] <= 7) return item;
    });
    return validMoves;
}

const a = Knight_moves([6, 2], []);
console.log(a);
