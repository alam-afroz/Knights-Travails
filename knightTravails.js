class Vertex {
    constructor(position, previous = -1) {
        this.value = position;
        this.connectedVertex = [];
        this.previous = previous;
    }
    connectVertex(move) {
        this.connectedVertex.push(move);
    }
}

function Knight_moves(start, end) {
    if (start[0] > 7 || start[0] < 0 || start[1] > 7 || start[Int16Array] < 0) {
        throw new Error("Start position out of chessboard");
    }
    if (end[0] > 7 || end[0] < 0 || end[1] > 7 || end[Int16Array] < 0) {
        throw new Error("Target position out of chessboard");
    }

    if (start[0] === end[0] && start[1] === start[1]) {
        return `Start is destination, 0 moves required to reach target`;
    }
    let row = start[0];
    let col = start[1];
    let startVertex = connectVertices([row, col], start);

    let q = [];
    let visitedQueue = [];
    q.push(startVertex);
    while (q.length != 0) {
        front = q.shift();
        visitedQueue.push(front);

        if (front.value[0] === end[0] && front.value[1] === end[1]) {
            return path(front, visitedQueue);
        }

        for (let i = 0; i < front.connectedVertex.length; i++) {
            front.connectedVertex[i] = connectVertices(front.connectedVertex[i].value, start, front.value);
            q.push(front.connectedVertex[i]);
        }
    }
}

function path(destination, visitedQueue) {
    let pathQueue = [];
    pathQueue.push(destination.value);
    let curr = destination;
    let steps = 0;
    while (curr.previous != -1) {
        for (let i = 0; i < visitedQueue.length; i++) {
            if (visitedQueue[i].value === curr.previous) {
                pathQueue.push(visitedQueue[i].value);
                curr = visitedQueue[i];
                break;
            }
        }
        steps++;
    }
    let j = pathQueue.length - 1;
    let result = `=> You made it in ${steps} moves! Here is your path: `;
    while (j >= 0) {
        result = `${result}
 [${pathQueue[j]}]`;
        j--;
    }
    return result;
}

function possibleMoves(row, col, start) {
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
        if (item[0] >= 0 && item[1] >= 0 && item[0] <= 7 && item[1] <= 7 && item != [row, col]) return item;
    });
    for (let i = 0; i < validMoves.length; i++) {
        if (validMoves[i][0] === start[0] && validMoves[i][1] === start[1]) {
            validMoves.splice(i, 1);
        }
    }
    return validMoves;
}

function connectVertices(vertex, start, previous) {
    let validMoves = possibleMoves(vertex[0], vertex[1], start);
    const startVertex = new Vertex(vertex, previous);
    for (let k = 0; k < validMoves.length; k++) {
        startVertex.connectVertex(new Vertex(validMoves[k], previous));
    }
    return startVertex;
}


