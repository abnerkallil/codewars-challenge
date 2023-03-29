// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// My Solution:

function longest(s1, s2) {
    const alphabet = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];
    let returnedS1 = []
    let splittedS1 = s1.split("")
    
    splittedS1.forEach((letter) => {
      if (alphabet.includes(letter.toUpperCase()) == true && returnedS1.includes(letter) == false){
        returnedS1.push(letter)
        console.log(returnedS1)
      }else{
        console.log(letter.toUpperCase())
        console.log(returnedS1)
        
      }
    })
    let splittedS2 = s2.split("")
    splittedS2.forEach((letter) => {
      if (alphabet.includes(letter.toUpperCase()) == true && returnedS1.includes(letter) == false){
        returnedS1.push(letter)
        console.log(returnedS1)
      }else{
        console.log(letter.toUpperCase())
        console.log(returnedS1)
        
      }
    })
  
    return returnedS1.sort().join("")
  }