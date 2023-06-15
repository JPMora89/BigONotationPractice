// add whatever parameters you deem necessary

// Write a function called separatePositive which accepts an array of non-zero integers. 
// Separate the positive integers to the left and the negative integers to the right. 
// The positive numbers and negative numbers need not be in sorted order. 
// The problem should be done in place (in other words, do not build a copy of the input array).

function separatePositive(array) {

    let left = 0;
    let right = array.length -1;

    while(left < right){
        if(array[left] < 0 && array[right] > 0){
            [array[left], array[right]] = [array[right], array[left]];
            left++;
            right--;
        } else if(array[left] > 0){
            left++;
        } else if(array[right] < 0){
            right--;
        }
    }

    return array;

}
