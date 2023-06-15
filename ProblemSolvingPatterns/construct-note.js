// add whatever parameters you deem necessary

// Write a function called constructNote, which accepts two strings, a message and some letters. 
// The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Constraints:

// Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:


function constructNote(string1, string2, message, letters) {

    let object1 = {};
    let object2 = {};

    for(let char of string1){
        object1[char] = (object1[char] || 0) + 1;
    }   

    for(let char of string2){
        object2[char] = (object2[char] || 0) + 1;
    }

    for(let char of message){
        if(!object2[char]) return false;
        else object2[char]--;
    }

    return true;

}
