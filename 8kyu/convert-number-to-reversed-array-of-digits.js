// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
    if (n == 0){
      reversedArray = [0]
      return reversedArray
    }else{
      reversedArray = []
      numToStr = String(n)
      splitStr = numToStr.split("")
    for (i = splitStr.length - 1; i >= 0; i--){
      itemInIndex = splitStr[i]
      reversedArray.push(Number(itemInIndex))
    }
    return reversedArray
    }
   
  }