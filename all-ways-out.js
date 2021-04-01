/*
Use the above maze and modify your solution so it finds ALL the possible
exit paths through the Maze. To find all possible exit paths through
the maze, think about how many places you can move at each turn.
Possibly up, down, left, or right?
*/

/* let mySmallMaze = [
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

let mazeRoutes = [];

let path = ""

const mazeEscape = function(maze, column, row, visited) {
    //console.log(maze[column][row], column, row)
    if(maze[column][row] === "e") {
        console.log("escape") //debugging
        mazeRoutes.push(path);
        path = ""
        return mazeRoutes
    }

    visited[column][row] = true; //marking the current cell as visited
    
    if(!(column < 0 || column >= maze.length || row < 0 || row >= maze[column].length) && maze[column][row] === " ") {
        if((column + 1 < maze.length) && (!visited[column + 1][row]) ) {
            path += "D";
            console.log("D") //debugging
            return mazeEscape(maze, column + 1, row, visited)
        }
        if((column - 1 >= 0) && (!visited[column - 1][row])) {
            path += "U";
            console.log("U") //debugging
            return mazeEscape(maze, column - 1, row, visited)
        }
        if((row + 1 < maze[column].length) && (!visited[column][row + 1])) {
            path += "R";
            console.log("R") //debugging
            return mazeEscape(maze, column, row + 1, visited)
        }
        if((row - 1 >= 0) && (!visited[column][row - 1])) {
            path += "L";
            console.log("L") //debugging
            return mazeEscape(maze, column, row - 1, visited)
        }
    }
    visited[column][row] = false;
    console.log(mazeRoutes)
    return mazeRoutes;
}

console.log(mazeEscape(mySmallMaze, 0, 0, visited)); */

