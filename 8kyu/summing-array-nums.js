// // You get an array of numbers, return the sum of all of the positives ones.

// // Example [1,-4,7,12] => 1 + 7 + 12 = 20

// // Note: if there is nothing to sum, the sum is default to 0.

// My Solution

function positiveSum(arr) {
    // a counter to hold the sum values
    let counter = 0
    // I will use a for loop to pass thru all the array items, if the item attend the condition
    // (number > 0 to ignore the negative numbers) then will add to the counter.
    // The i <= arr.length -1 is used to get only the items that exist, if we use only arr.length, the first item of the
    // array will be ignored, and the last item will not exist considering that arrays start from 0, and a normal counter 
    // starts from 1.
    for (i=0; i <= arr.length -1; i++){
      if (arr[i] >= 0) {
    // at the first run the "i" is equal 0, then arr[i] get the first item in the array, the next times that it runs will increase in
    // the "i" getting the correct array items.
        counter = counter + arr[i]
    // at the first run the counter value is "0", let's imagine that the first item in the array is equal to 10.
    // so this declaration is equal to (0 = 0 + 10 ) that leads to the counter value getting equal to 10.
    // at the second run, lets imagine that the second item in the array is 20.
    // so the second run is equal to (counter(10) = counter(10) + 20). that leads to the counter value getting equal to 30.
    // to understand the counter, you have to think in a empty box, everytime we want to add items to the box, we have to consider the
    // existing items in the box, otherwise, the box will always have only the last element right? 
    // by doing the counter increase this way we can maintain the last items that get added in the box.
      }
      
    }
    return counter
  }