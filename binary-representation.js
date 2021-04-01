/*
Write a recursive function that prints out the binary representation of
a given number. For example, the program should take 3 as an input and
print 11 as output, or 25 as an input and 11001 as an output.
Note that the binary representation of 0 should be 0.
*/

const makeBinary = function(n) {
    if(n < 2) {
        return n;
    } else {
        return makeBinary(Math.floor(n / 2)) + (n % 2).toString()
    }
}

console.log(makeBinary(10));