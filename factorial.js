/*
Write a recursive function that finds the factorial of a given number.
The factorial of a number can be found by multiplying that number 
    by each number between itself and 1.
For example, the factorial of 5 is 5*4*3*2*1 = 120.
*/

const getFactorial = function(n) {
    //base case
    if(n === 1) {
        return n
    }
    return n * getFactorial(n - 1)
}

console.log(getFactorial(7))