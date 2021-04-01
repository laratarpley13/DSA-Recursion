/*
An anagram is any word or phrase that uses the letters of a given word
or phrase in another, rearranged order. Write a function that creates an anagram list,
listing all the rearrangements of a given word. For example, if the user
types "east", the program should list all 24 permutations, inclueding 
"eats", "etas", "teas", and non-words like "tsae"
*/

const anagram = function (string) {
    let results = {};

    let combos = function (buildCombo, feed) {
        if(!feed.length) {
            results[buildCombo] = '';
            return;
        }
        for(let i = 0; i < feed.length; i++) {
            combos(buildCombo + feed.charAt(i), feed.slice(0, i) + feed.slice(i + 1));
        }
    }

    combos('', string);
    return Object.keys(results);
}

console.log(anagram('east'));