// merge function:
// This function takes two arrays, array1 and array2, as parameters.
// It initializes an empty array called newArray to store the merged result.
// The function enters a while loop that continues as long as both array1 and array2 have elements.
// Inside the loop, it compares the first elements of array1 and array2 using the less-than operator (<).
// If the first element of array1 is smaller, it is removed from array1 using the shift() method and then added to newArray using the push() method.
// If the first element of array2 is smaller or equal, it is removed from array2 using the shift() method and then added to newArray using the push() method.
// The loop continues until either array1 or array2 becomes empty.
// After the loop, there may still be remaining elements in either array1 or array2. 
// The function concatenates these remaining elements with newArray using the concat() method.
// Finally, the merged and sorted array is returned from the function.

// mergeSort function:
// This function takes an array array as a parameter.
// It serves as the entry point for the merge sort algorithm.
// If the length of the array is less than or equal to 1, it means the array is already sorted or empty, so the function returns the array as is.
// Otherwise, it calculates the midpoint index (mid) of the array using the Math.floor function.
// It recursively calls mergeSort on the left half of the array (from the beginning to mid index) and assigns the result to left.
// It recursively calls mergeSort on the right half of the array (from mid index to the end) and assigns the result to right.
// Finally, it returns the result of calling the merge function with the left and right arrays.

function merge(array1, array2) {

    let newArray = [];
    
    while (array1.length && array2.length) {
        if (array1[0] < array2[0]) {
        newArray.push(array1.shift());
        } else {
        newArray.push(array2.shift());
        }

    }

    
    return newArray.concat(array1.slice().concat(array2.slice()));

}

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let mid = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid));

    return merge(left, right);

}




function mergeSort() {}

module.exports = { merge, mergeSort};