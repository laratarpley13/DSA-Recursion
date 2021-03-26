/*
Takes 2 parameters, an integer as a base, and another integer
as an exponent.
Function returns the value of the base raised to the power of the exponent.
Use only exponents greater than or equal to 0 (aka positive numbers)
*/

const powerCalculator = function(baseNum, exponent) {
    //make sure exponent is positive
        if (exponent < 0) {
            return "exponent should be >= 0"
        }
    //Base case
        if (exponent === 1) {
            return baseNum * 1;
        }
    //General case
        return baseNum * powerCalculator(baseNum, exponent - 1)
}

console.log(powerCalculator(10, 2))