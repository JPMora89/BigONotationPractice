// add whatever parameters you deem necessary

// Write a function called twoArrayObject which accepts two arrays of varying lengths.The first array consists of keys and the second one consists of values. 
// Your function should return an object created from the keys and values.
// If there are not enough values, the rest of keys should have a value of null. If there not enough keys, just ignore the rest of values.

// This is O(n) time complexity because we are looping through the array once.

function twoArrayObject(array1, array2) {

    let object = {};

    for(let i = 0; i < array1.length; i++){
        object[array1[i]] = array2[i] || null;
    }

    return object;





}
