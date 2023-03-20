// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 


//My Solution:

function squareSum(numbers){
    summed = 0
    for (i=0; i <= numbers.length -1; i++) {
      summed = summed + numbers[i] ** 2
    }
    return summed
  }