// add whatever parameters you deem necessary

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

function sameFrequency(int1, int2) {

    let str1 = int1.toString();
    let str2 = int2.toString();

    if(str1.length !== str2.length) return false;

    let freq1 = {};
    let freq2 = {};

    for(let i = 0; i < str1.length; i++){
        freq1[str1[i]] = (freq1[str1[i]] || 0) + 1;
    }

    for(let i = 0; i < str2.length; i++){
        freq2[str2[i]] = (freq2[str2[i]] || 0) + 1;
    }

    for(let key in freq1){
        if(freq1[key] !== freq2[key]) return false;
    }

    return true;

}
