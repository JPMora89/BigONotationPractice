// add whatever parameters you deem necessary

// Write a function called pivotIndex which accepts an array of integers, and returns the pivot index where the sum of the items to the left equal to the sum of the items to the right. 
// If there are more than one valid pivot index, return the smallest value.

function pivotIndex(array) {

    let left = 0;
    let right = array.reduce((a,b) => a+b, 0);

    for(let i = 0; i < array.length; i++){
        right -= array[i];
        if(left === right) return i;
        left += array[i];
    }




}
