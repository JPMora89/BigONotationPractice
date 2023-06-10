
// It starts by finding the maximum element in the array (max) and multiplies it by 10 to ensure that it covers all the digits in the numbers.
// The divisor is initialized with 10, representing the current digit position being considered.
// The implementation enters a loop that continues as long as the divisor is less than the max value.
// Within the loop, an array of 10 empty buckets is created using Array(10) and map(() => []).
// It iterates through each number in the array and distributes them into the buckets based on the current digit. 
// The formula (num % divisor) / (divisor / 10) calculates the index of the bucket to which the number should be placed.
// The array variable is updated by concatenating the elements from all the buckets using concat.apply([], buckets). 
// This step flattens the nested arrays into a single array.
// The divisor is multiplied by 10 to move on to the next digit position.
// Once the loop completes, the sorted array is returned.

function radixSort(array) {

    let max = Math.max(...array) * 10;
    let divisor = 10;

    while (divisor < max) {
        let buckets = [...Array(10)].map(() => []);

        for (let num of array) {
            buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
        }

        array = [].concat.apply([], buckets);
        divisor *= 10;
    }

    return array;


}

module.exports = radixSort;