//write program that counts how many sheep jump over fence
//takes in a number as input (should be number of sheep you have)
/*
Function should display number with message "Another sheep jumps 
over the fence" until no sheep are left
*/

const countSheep = function(numOfSheep) {
    //Base Case
    if (numOfSheep === 0) {
        return "All sheep jumped over the fence"
    }
    // General case
    console.log(`${numOfSheep}: Another sheep jumps over the fence`);
    return countSheep(numOfSheep - 1)
}

console.log(countSheep(6));