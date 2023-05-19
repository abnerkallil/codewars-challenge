// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

// My Solution:

function invert(array) {
    arr = []
    for (num of array){
      if (num > 0){    
        arr.push(num - (num * 2))
      
      }else if (num < 0){
        arr.push(Math.abs(num))
        console.log(arr)
        
      }else{
        arr.push(num)
      }
    }
    return arr
  }