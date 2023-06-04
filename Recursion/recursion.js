/** product: calculate the product of an array of numbers. */

function product(nums) {
if (nums.length === 0) return 1;
else return nums[0] * product(nums.slice(1));

}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if(words.length === 0) return 0;
  else if(words[0].length > longest(words.slice(1))) return words[0].length;
  else return longest(words.slice(1));


}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) return "";
  else return str[0] + everyOther(str.slice(2)
  );

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length === 0) return true;
  else if (str[0] === str[str.length - 1]) return isPalindrome(str.slice(1, -1));
  else return false;

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
let index = 0;
if (arr.length === 0) return -1;
else if (arr[0] === val) return index;
else {
  index = findIndex(arr.slice(1), val);
  if (index === -1) return -1;
  else return index + 1;
}
}


/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) return "";
  else return revString(str.slice(1)) + str[0];

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
let array = [];
for (let key in obj) {
  if (typeof obj[key] === "string") array.push(obj[key]);
  else if (typeof obj[key] === "object") array = array.concat(gatherStrings(obj[key]));
}
return array;

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
let index = 0;
if (arr.length === 0) return -1;
else if (arr[0] === val) return index;
else if (arr[arr.length - 1] === val) return arr.length - 1;
else {
  index = binarySearch(arr.slice(1, -1), val);
  if (index === -1) return -1;
  else return index + 1;

}


}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
