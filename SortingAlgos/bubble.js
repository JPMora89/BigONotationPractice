// It accepts an array as input.
// It uses two nested loops to perform the bubble sort algorithm.
// The outer loop (for loop) iterates over the array for each pass. 
// It runs array.length times, as each pass places the largest element at the end.
// The swapped variable is used to track if any swaps are made in a pass. It is initially set to false.
// The inner loop (for loop) compares adjacent elements and swaps them if necessary. 
// It runs from 0 to array.length - i, where i represents the number of elements already sorted at the end of the array.
// If a swap occurs, the swapped variable is set to true.
// After each pass, if no swaps are made (swapped is still false), 
// it means the array is already sorted, so the sorting process can be terminated by using break to exit the loop.
// Finally, the function returns the sorted array.

function bubbleSort(array) {

    for (let i = 0; i < array.length; i++) {
        let swapped = false;
    
        for (let j = 0; j < array.length - i; j++) {
        if (array[j] > array[j + 1]) {
            swapped = true;
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
        }
    
        if (!swapped) {
        break;
        }
    }
    
    return array;

}

module.exports = bubbleSort;