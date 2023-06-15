// add whatever parameters you deem necessary

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. 
// In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

function isSubsequence(string1, string2) {

    let i = 0;
    let j = 0;

    while(j < string2.length){
        if(string1[i] === string2[j]) i++;
        if(i === string1.length) return true;
        j++;
    }
    return false;

}
