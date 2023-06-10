
// The insertionSort function takes an array array as a parameter.

// It initializes a loop with i starting from 1 and continuing until i reaches the length of the array.

// Inside the loop, it stores the current element at index i in a variable called current.

// It also initializes another variable j with the value of i - 1, which represents the index of the previous element.

// The function enters a while loop that continues as long as j is greater than -1 (i.e., there are still elements to compare) and current is smaller than the element at index j.

// Inside the while loop, it shifts the element at index j one position to the right by assigning the value of array[j] to array[j + 1]. 
// This creates a space for inserting the current element.

// It decrements j by 1 to continue comparing current with previous elements in the array.

// Once the while loop finishes, it means that the correct position for the current element has been found. 
// It assigns the value of current to the position array[j + 1] to insert it in the correct place.

// The loop continues for the remaining elements in the array, repeating the same process of finding the correct position for each element and inserting it.

// Finally, the sorted array is returned from the function.

// The insertion sort algorithm works by iteratively inserting elements into their correct positions within a sorted section of the array. 
// It starts with the second element and compares it with the elements before it, shifting larger elements to the right until finding the correct position for the current element. 
// This process continues for each element, resulting in a sorted array. The time complexity of the insertion sort algorithm is O(n^2) in the worst case, where n is the length of the array. 
// However, it can perform efficiently on small or partially sorted arrays.

function insertionSort(array) {

    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let j = i - 1;

        while ((j > -1) && (current < array[j])) {
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = current;
    }

    return array;


}

module.exports = insertionSort;