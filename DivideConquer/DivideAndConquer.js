
///////////////////////******** */ countZeroes ***********///////////////////

// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

// Constraints:

// Time Complexity: O(log N)

// Examples:

// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0

// This time complexity is O(n)

function countZeroes(array) {
    count = 0;
    for(let i=0; i<array.length; i++){
        if(array[i] === 0){
            count++;
        }
    }
}

// This time complexity is O(log n)

// Here we utilize the binary search algorithm to find the first occurrence of a zero in the sorted array. 
// The binary search algorithm repeatedly divides the search range in half, reducing the search space by half with each iteration.

// The binary search loop compares the middle element (array[mid]) with zero. If it is equal to zero, we move the right pointer (right) to mid - 1 to continue searching for more zeroes on the left side. 
// If the middle element is not zero, we move the left pointer (left) to mid + 1 to search in the right half.

// Once the binary search loop ends, the left pointer will be positioned just after the last zero in the array. 
// By subtracting the left pointer from the total length of the array, we obtain the count of zeroes.

// This modified implementation achieves a time complexity of O(log n), where n is the number of elements in the array. 
// Binary search efficiently reduces the search space in each iteration, resulting in a logarithmic time complexity. However, it requires a sorted array for accurate results.


function countZeroes(array) {
    let left = 0;
    let right= array.length - 1;

    while(left <= right){
        let middle = Math.floor(left + right / 2);
        if(array[middle] === 0){
            right = middle - 1;
        } else {
            left = middle + 1;
        }
        }
    const count = array.length - left;
        return count;
}


//////////////////////// sortedFrequency /////////////////////////

// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

// Constraints:

// Time Complexity: O(log N)

// Examples:

// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1

// The function sortedFrequency takes in an array (array) and a target number (number) as parameters.
//  We initialize the left pointer to 0, representing the start of the array, and the right pointer to array.length - 1, representing the end of the array. 
// These pointers will be used to define the search range.
// We enter a while loop that continues as long as the left pointer is less than or equal to the right pointer. This condition ensures that the search range is valid and hasn't been exhausted.
// Inside the loop, we calculate the middle index by finding the average of the left and right pointers using (left + right) / 2. 
// The Math.floor function is used to round the result down to the nearest whole number.

function sortedFrequency(array, number) {
    let left = 0;
    let right = array.length - 1;
  
    while (left <= right) {
      let middle = Math.floor((left + right) / 2);
  
      if (array[middle] < number) {
        left = middle + 1;
      } else if (array[middle] > number) {
        right = middle - 1;
      } else {
        right = middle - 1;
      }
    }
  
    if (array[left] !== number) return 0;
  
    let startIndex = left;
    let count = 0;
    
    while (array[left] === number) {
      count++;
      left++;
    }
  
    return count;
  }

  
// findRotatedIndex

// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of num in the array. If the value is not found, return -1.

// Constraints:

// Time Complexity: O(log N)

// Examples:

// findRotatedIndex([3,4,1,2],4) // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1

// The findRotatedIndex function takes in an array (array) and a target number (number) as parameters.
// We initialize the left pointer (left) to 0, representing the start of the array, and the right pointer (right) to array.length - 1, representing the end of the array.
// We enter a while loop that continues as long as the left pointer is less than or equal to the right pointer. This condition ensures that the search range is valid and hasn't been exhausted.
// Inside the loop, we calculate the middle index by finding the average of the left and right pointers using (left + right) / 2. The Math.floor function is used to round the result down to the nearest whole number.
// We check if the middle element (array[middle]) is equal to the target number. If it is, we found the target number at the middle index, so we return the middle index.
// If the middle element is greater than or equal to the leftmost element (array[left]), we know that the left half of the array is sorted. We can then check if the target number is within the range of the left half. 
// If it is, we update the right pointer (right) to middle - 1 to search in the left half. Otherwise, we update the left pointer (left) to middle + 1 to search in the right half.
// If the middle element is less than or equal to the rightmost element (array[right]), we know that the right half of the array is sorted



function findRotatedIndex(array, number){
    let left = 0;
    let right = array.length - 1;
  
    while (left <= right) {
      let middle = Math.floor((left + right) / 2);
  
      if (array[middle] === number) {
        return middle;
      }
  
      if (array[left] <= array[middle]) {
        if (array[left] <= number && number < array[middle]) {
          right = middle - 1;
        } else {
          left = middle + 1;
        }
      } else {
        if (array[middle] < number && number <= array[right]) {
          left = middle + 1;
        } else {
          right = middle - 1;
        }
      }
    }
  
    return -1;
  }



//   findRotationCount

//   Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, 
// find the value of n.
  
//   Constraints:
  
//   Time Complexity: O(log N)
  
//   Examples:
  
//   findRotationCount([15, 18, 2, 3, 6, 12]) // 2
//   findRotationCount([7, 9, 11, 12, 5]) // 4
//   findRotationCount([7, 9, 11, 12, 15]) // 0
  
// The function findRotationCount takes an array as a parameter and initializes two pointers, left and right. 
// left starts at the beginning of the array (index 0), and right starts at the end of the array (index array.length - 1).
// The function enters a while loop that continues as long as the left pointer is less than or equal to the right pointer. This condition ensures that there is a valid search range.
// Inside the loop, it checks if the element at the left index is less than or equal to the element at the right index. If it is, it means that the array is not rotated and is already sorted in increasing order.
// In this case, the function returns the value of left, which represents the number of rotations (0 rotations in this case).
// If the array is rotated, the function calculates the middle index using (left + right) / 2 and rounds it down using Math.floor.
// It then checks if the element at the middle index is greater than or equal to the element at the left index. If it is, it means that the rotation point is to the right of the middle index. 
// In this case, the left pointer is updated to middle + 1 to search in the right half of the array.
// If the element at the middle index is less than the element at the left index, it means that the rotation point is to the left of the middle index. 
// In this case, the right pointer is updated to middle to search in the left half of the array.
// If the array is not rotated, the while loop exits without returning a value. The function doesn't explicitly provide a return value in this case, so it would be up to you to decide how to handle it.

function findRotationCount(array) {
    let left = 0;
    let right = array.length - 1;
  
    while (left <= right) {
      if (array[left] <= array[right]) return left;
  
      let middle = Math.floor((left + right) / 2);
  
      if (array[middle] >= array[left]) {
        left = middle + 1;
      } else {
        right = middle;
      }

    }

  }
 
  
// findFloor

// Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.

// Examples:

// findFloor([1,2,8,10,10,12,19], 9) // 8
// findFloor([1,2,8,10,10,12,19], 20) // 19
// findFloor([1,2,8,10,10,12,19], 0) // -1

// Constraints

// Time Complexity: O(log N)


// The findFloor function takes a sorted array and a value x as parameters.
// It initializes two pointers, left and right, which represent the start and end indices of the search range in the array.
// It also initializes a variable floor with an initial value of -1, which will store the floor of x in the array.
// The function enters a while loop that continues as long as the left pointer is less than or equal to the right pointer. This condition ensures that there is a valid search range.
// The floor is initialized at -1 as a default value to handle the case where the floor of x does not exist in the array.
// In the findFloor function, the goal is to find the largest element in the array that is smaller than or equal to x. If such an element exists, it will be stored in the floor variable. 
// However, if there is no element in the array that satisfies this condition, the function should return -1 to indicate that the floor does not exist.
// By initializing floor to -1, we have a default value that will be returned if the search for the floor does not find a suitable element in the array. 
// If a valid floor is found during the search, floor will be updated accordingly, and that value will be returned instead of -1.

// Inside the loop, it calculates the middle index using (left + right) / 2 and rounds it down using Math.floor.
// It then compares the element at the middle index with x. If they are equal, it means x is found in the array, and the function returns the element itself as the floor.
// If the element at the middle index is less than x, it means it could be a potential candidate for the floor.
//  The floor variable is updated to store the current candidate, and the left pointer is updated to middle + 1 to search in the right half of the array.
// If the element at the middle index is greater than x, it means the floor is in the left half of the array, so the right pointer is updated to middle - 1 to search in the left half.
// After the loop, if a floor is found, the floor variable holds the correct value, and it is returned. 
// If no floor is found, the function returns the initial value of -1, indicating that the floor does not exist in the array.

function findFloor(array, x) {
    let left = 0;
    let right = array.length - 1;
    let floor = -1;
  
    while (left <= right) {
      let middle = Math.floor((left + right) / 2);
  
      if (array[middle] === x) {
        return array[middle];
      } else if (array[middle] < x) {
        floor = array[middle];
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  
    return floor;
  }
