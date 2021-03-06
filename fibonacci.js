/*
Write a recursive function that prints the Fibonacci sequence of a given number.
The Fibonacci sequence is a series of numbers in which each number is the
    sum of the 2 preceding numbers.
For example, the 7th Fibonacci number in a Fibonacci sequence is 13.
    The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13
*/

const fibonacci = function(n) {
    //base case
    if (n <= 1) {
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
}

const setNumber = 6;

for(let i=1; i<=setNumber; i++) {
    console.log(fibonacci(i))
}