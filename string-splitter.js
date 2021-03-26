/*
Write a recursive function that splitts a string based on a separator
*/

let list = [];
let partialStr = "";

const stringSplitter = function(string, chararcter) {
    //base case
    if(string === "") {
        list.push(partialStr);
        return list
    }
    if(string.charAt(0) === chararcter) {
        list.push(partialStr);
        partialStr = "";
        return stringSplitter(string.substr(1), chararcter)
    }
    partialStr = partialStr + string.charAt(0);
    return stringSplitter(string.substr(1), chararcter)
}

console.log(stringSplitter("02*20*2020", "*"))

