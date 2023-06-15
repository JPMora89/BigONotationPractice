// add whatever parameters you deem necessary

// Write a function called longestFall, which accepts an array of integers, and returns the length of the longest consecutive decrease of integers.

function longestFall(array) {

    let longest = 0;
    let current = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i] > array[i-1]){
            current++;
        } else {
            current = 1;
        }
        if(current > longest) longest = current;
    }

    return longest;


}
