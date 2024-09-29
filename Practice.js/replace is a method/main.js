"use strict";
// `replace` is a method in JavaScript. It's a method of the `String` object, used to replace occurrences of a specified substring or pattern with another substring.
const sentence = "I have an 🍎, an 🍎 , and another 🍎 .";
// only replace : Put what to replace inside forward slashes then a comma then with what to replace as a string
let newSentence = sentence.replace(/🍎/, "🍊");
console.log(newSentence);
// global replace : write a "g" after what to replace then comma then as above
let newSentence2 = sentence.replace(/🍎/g, "🍊");
console.log(newSentence2);
