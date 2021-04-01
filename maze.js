/*
You have entered a Maze and need to find your way out if it.
There are more than one possible paths through the Maze to the single exit point.
Write a recursive function that will help you find a possible path through the maze.
*/

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let biggerMaze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

const mazeEscape = function(maze, column, row) {
    //console.log(maze[column][row], column, row)
    if(maze[column][row] === "e") {
        return "escaped"
    } else if(maze[column][row] === " ") {
        maze[column][row] = "9"; 
        if((column < maze.length - 1) && (maze[column + 1][row] !== "*")) {
            console.log("down")
            return mazeEscape(maze, column + 1, row);
        }
        if(row < maze[column].length - 1) {
            console.log("right")
            return mazeEscape(maze, column, row + 1);
        }
        if(column > 0) {
            console.log("up")
            return mazeEscape(maze, column - 1, row);
        }
        if(row > 0) {
            console.log("left")
            return mazeEscape(maze, column, row - 1);
        }
    }
}

console.log(mazeEscape(biggerMaze, 0, 0))