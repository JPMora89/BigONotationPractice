
// pivot(array, startingIndex, endingIndex):
// This function accepts an array, a starting index, and an ending index.
// It assumes the pivot element is always the first element of the array.
// It initializes the pivot element by assigning the value of array[startingIndex] to the variable pivot.
// It also initializes a swapIndex variable with the value of startingIndex.
// It enters a loop that starts from startingIndex + 1 and goes up to endingIndex.
// Inside the loop, it compares the pivot element with each element in the array.
// If an element is smaller than the pivot, it increments swapIndex and swaps the element with the element at array[swapIndex].
// After the loop, it swaps the pivot element with the element at array[swapIndex] to place the pivot in its correct position.
// Finally, it returns the swapIndex, which represents the index of the pivot element after rearrangement.

// quickSort(array, leftIndex, rightIndex):
// This function accepts an array, a left index, and a right index.
// It performs the QuickSort algorithm on the array within the given range.
// It checks if the leftIndex is less than the rightIndex to ensure that there is more than one element in the range to sort.
// If the condition is true, it calls the pivot function to determine the pivot index and partitions the array.
// It then recursively calls quickSort on the left subarray (from leftIndex to pivotIndex - 1) and the right subarray (from pivotIndex + 1 to rightIndex).
// The recursion continues until each subarray has only one element (base case: leftIndex is no longer less than rightIndex).
// Finally, it returns the sorted array.

// The QuickSort algorithm works by selecting a pivot element, partitioning the array around the pivot, and recursively applying the same process to the subarrays on the left and right sides of the pivot. 
// The pivot element is moved to its final position, ensuring that all elements to the left of it are smaller and all elements to the right are larger. 
// This process is repeated until the array is completely sorted. The average time complexity of the QuickSort algorithm is O(n log n), where n is the length of the array. 
// However, in the worst case, it can be O(n^2) if the pivot selection is not balanced.


/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(array, startingIndex, endingIndex){

    let pivot = array[startingIndex];
    let swapIndex = startingIndex;

    for(let i = startingIndex + 1; i <= endingIndex; i++){
        if(pivot > array[i]){
            swapIndex++;
            [array[swapIndex], array[i]] = [array[i], array[swapIndex]];
        }
    }

    [array[startingIndex], array[swapIndex]] = [array[swapIndex], array[startingIndex]];

    return swapIndex;

}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(array, leftIndex, rightIndex) {
    if(leftIndex < rightIndex){
        let pivotIndex = pivot(array, leftIndex, rightIndex);
        quickSort(array, leftIndex, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, rightIndex);
    }
    return array;

}


module.exports = quickSort;