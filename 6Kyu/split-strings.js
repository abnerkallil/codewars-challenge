// // Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// // Examples:

// // * 'abc' =>  ['ab', 'c_']
// // * 'abcdef' => ['ab', 'cd', 'ef']

// My Solution 

function solution(str){
    let strToArray = []
    let evolvedArray = []
    
     for (i=0; i < str.length; i++) {
       strToArray.push(str[i])
     }
    if (strToArray.length % 2 == 0) {
      for (i=0; i< strToArray.length - 1; i++){
        newStr = strToArray[i]
        newStr += strToArray[i + 1]
        evolvedArray.push(newStr )
        i += 1
      }
    }else{
        for (i=0; i < strToArray.length +1 ; i++){
        if (typeof strToArray[i] != "undefined" && typeof strToArray[i + 1] != "undefined"){
          newStr = strToArray[i]
          newStr += strToArray[i + 1]
          evolvedArray.push(newStr )
          i += 1
        }
        else if (typeof strToArray[i] != "undefined" && typeof strToArray[i + 1] === "undefined") {
          newStr = strToArray[i]
          newStr += "_"
          evolvedArray.push(newStr)
          
        }
      }
        
      }
    return evolvedArray
  }