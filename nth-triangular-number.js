/*
Calculate the nth triangular number. 
A triangular number counts the objects that can form an equilateral triangle.
The nth triangular number is the number of dots composing a triangle
    with n dots on a side, and is equal to the sum of the n natural numbers
    from 1 to n.
The Triangular number sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.
*/

const triangleNumber = function(n) {
    //base case
    if (n === 1){
        return n
    }
    return n + triangleNumber(n-1)
}

console.log(triangleNumber(9))