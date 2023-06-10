// It starts with a loop that iterates through each element in the array using the variable i.
// Within the outer loop, a variable min is initialized to i, representing the current minimum element's index.
// It enters an inner loop that starts from i + 1 and goes up to the end of the array. This loop finds the index of the minimum element in the unsorted part of the array.
// If a smaller element is found, the min variable is updated with the new index.
// After the inner loop completes, if the min index is different from i, it means a smaller element was found. 
// In this case, the elements at positions i and min are swapped to place the minimum element at the correct position.
// The outer loop continues until all elements are sorted in ascending order.
// Finally, the sorted array is returned.

// Overall, the implementation correctly applies the Selection Sort algorithm by iteratively finding the minimum element and swapping it with the current position. 
// It has a time complexity of O(n^2), where n is the length of the array.

function selectionSort(array) {

    for (let i = 0; i < array.length; i++) {
        let min = i;

        for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[min]) {
            min = j;
        }
        }

        if (min !== i) {
        let temp = array[i];
        array[i] = array[min];
        array[min] = temp;
        }
    }

    return array;
}

module.exports = selectionSort;