// add whatever parameters you deem necessary

// Given an array of integers, and a number, find the number of pairs of integers in the array whose sum is equal to the second parameter. 
// You can assume that there will be no duplicate values in the array.

function countPairs(array, number) {
    
        let left = 0;
        let right = array.length -1;
        let count = 0;
    
        while(left < right){
            let sum = array[left] + array[right];
            if(sum === number){
                count++;
                left++;
                right--;
            } else if(sum < number){
                left++;
            } else {
                right--;
            }
        }
        return count;
}
