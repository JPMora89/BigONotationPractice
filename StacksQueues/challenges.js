// ****************************************Browser Back/Forward******************************************
// Design how you could design a browser back/forward system using two stacks, so that you can visit a series of sites (Google, Yahoo, EBay, go back to Yahoo, then forward again to EBay, then onto Apple, and so on).
// Write pseudo-code for this.

// Solution

// Stack backStack // to store the back history
// Stack forwardStack // to store the forward history
// String currentSite // to store the current site

// function visit(site):
//     backStack.push(currentSite) // add the current site to the back history
//     forwardStack.clear() // clear the forward history
//     currentSite = site // update the current site to the new site

// function goBack():
//     if backStack.isEmpty():
//         return // no back history, do nothing
//     forwardStack.push(currentSite) // add the current site to the forward history
//     currentSite = backStack.pop() // retrieve the previous site from the back history

// function goForward():
//     if forwardStack.isEmpty():
//         return // no forward history, do nothing
//     backStack.push(currentSite) // add the current site to the back history
//     currentSite = forwardStack.pop() // retrieve the next site from the forward history




// *****************************String Reversal***************************************************
// Write a function that reverses a string by handling one letter at a time. You cannot use an arrays, nor can you use any string-reversal built-in method.
    

function reverseString(str){
    let reversed= '';
    for (let i= str.length-1; i>=0; i--){
        reversed += str[i];
    }
    return reversed;
}


// ********************************Balanced Brackets?*********************************************

// Write a function that is passed a string which can contain any text, including different kinds of brackets: {} [] ().
// It should examine the string and decide if the string is “balanced” — a balanced string is one where the different kinds of brackets are properly balanced, such that you never close an bracket that isn’t opened, is out of order, or end up with unclosed brackets.
// Examples of balanced strings:

//     hello (no brackets)
//     (hi) [there]
//     (hi [there])
//     (((hi)))

// Imbalanced:

//     (hello (bracket left open at end)
//     (nope] (wrong type closed)
//     ((ok) [nope)] (closed out of order)

// DESCRIPTION OF STEPS

//     function isBalancedString(str) {: 
//         // This line declares a function called isBalancedString that takes a string str as an argument. This function will determine if the input string contains balanced brackets.

//     const stack = [];
//     // : This line initializes an empty array called stack. We'll use this stack to keep track of the opening brackets encountered.

//     for (let char of str) 
//     // {: This line starts a loop that iterates through each character (char) of the input string str.

//     if (isOpenBracket(char)) 
//     // {: This line checks if the current character is an opening bracket. It calls the isOpenBracket helper function to perform the check.

//     stack.push(char);: 
//     // If the character is an opening bracket, it is pushed onto the stack using the push method.

//     } else if (isClosingBracket(char)) 
//     // {: This line checks if the current character is a closing bracket. It calls the isClosingBracket helper function to perform the check.

//     const matchingOpeningBracket = getMatchingOpeningBracket(char);
//     // : If the character is a closing bracket, this line finds the matching opening bracket by calling the getMatchingOpeningBracket helper function. The result is stored in the matchingOpeningBracket variable.

//     if (stack.length === 0 || stack.pop() !== matchingOpeningBracket) 
//     // {: This line checks if the stack is empty or if the top of the stack (popped using the pop method) does not match the expected matching opening bracket. If either condition is true, it means the brackets are not balanced, and the function returns false.

//     return stack.length === 0;:
//     //  After iterating through the entire string, this line checks if the stack is empty. If it is, it means all opening brackets were matched with their respective closing brackets, and the function returns true (indicating balanced brackets). Otherwise, it returns false.

// The helper functions isOpenBracket, isClosingBracket, and getMatchingOpeningBracket are used to check the type of bracket and find the matching opening bracket. 
// They provide the necessary logic to handle different bracket types.

// Overall, the function uses a stack to track the opening brackets encountered while iterating through the string. It checks the closing brackets against the top of the stack to ensure proper balance. 
// If at any point the brackets are not balanced, the function returns false.

function isBalancedString(str) {
    const stack = [];
  
    for (let char of str) {
      if (isOpenBracket(char)) {
        stack.push(char);
      } else if (isClosingBracket(char)) {
        const matchingOpeningBracket = getMatchingOpeningBracket(char);
        if (stack.length === 0 || stack.pop() !== matchingOpeningBracket) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  
  function isOpenBracket(char) {
    return char === '(' || char === '[' || char === '{';
  }
  
  function isClosingBracket(char) {
    return char === ')' || char === ']' || char === '}';
  }
  
  function getMatchingOpeningBracket(closingBracket) {
    switch (closingBracket) {
      case ')':
        return '(';
      case ']':
        return '[';
      case '}':
        return '{';
      default:
        return null;
    }
  }
  

//   ***************************************Josephus Survivor************************************************

// This is a classic algorithm problem, based on a Biblical-era tale.
// Imagine a group of 10 people in a circle, numbered 1 to 10. If we started at the first person (#1) and killed every three people, it would look like this:

// 1  2  3  4  5  6  7  8  9  10
//       !        !        !

// This continues, though, looping around again, starting with where we left of at #10 (we’ll mark the freshly-removed as red/! and the previously-removed in striked-out gray/X):

// 1  2  3  4  5  6  7  8  9  10
//    !  X        X  !     X

// And again, starting where that left off, at #8, and continuing:

// 1  2  3  4  5  6  7  8  9  10
// !  X  X        X  X  !  X

// 1  2  3  4  5  6  7  8  9  10
// X  X  X     !  X  X  X  X

// 1  2  3  4  5  6  7  8  9  10
// X  X  X     X  X  X  X  X  !

// At this point, only #4 remains, so that person would be our “survivor”.
// Write an algorithm that, given a number of people, and the “skip”, which person will be the survivor


// Explanation for the solution: 
// Create an array or list of numbers from 1 to n, representing the people in the circle.
// Start with the current index at 0 (representing the first person).
// Repeat the following steps until there is only one person left:
//     Move the current index forward by the skip value (taking into account the length of the array) and wrap around if needed.
//     Remove the person at the current index from the array.
// Return the last remaining person.


// **************************************************************************************/////

// We define a class called Node, which represents a node in the linked list. Each node contains a value and a reference to the next node in the list.
// Next, we define a class called LinkedList, which represents the linked list itself. It has a head property that points to the first node in the list.
// The addNode method in the LinkedList class adds a new node with the given value to the end of the list. 
// If the list is empty, the new node becomes the head. Otherwise, we traverse the list until we reach the last node and make its next reference point to the new node.
// The removeNode method in the LinkedList class removes the specified node from the list. If the node to be removed is the head, we update the head to point to the next node. 
// Otherwise, we traverse the list until we find the node preceding the one to be removed and update its next reference to skip the node to be removed.
// The getSurvivor method in the LinkedList class implements the Josephus Survivor algorithm. It starts by initializing a currentNode variable to the head of the list.
// We enter a loop that continues until there is only one node left in the list (i.e., the head's next reference is null). In each iteration of the loop, we move currentNode along the list by skip positions, wrapping around to the head if we reach the end.
// Once we have skipped skip - 1 nodes, we determine the next node to remove (nextNode) after the currentNode.
// We remove the currentNode from the list using the removeNode method, effectively skipping over it.
// Finally, we update the currentNode to be the nextNode for the next iteration.
// After all iterations, the only remaining node in the list is the survivor. We return its value.
// Outside the LinkedList class, we define the findSurvivor function that creates a new instance of LinkedList, adds nodes from 1 to numPeople, and calls the getSurvivor method with the given skip value.
// We can then call the findSurvivor function with the desired number of people and the skip value, and it will return the position of the survivor.


class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    addNode(value) {
      const newNode = new Node(value);
  
      if (this.head === null) {
        this.head = newNode;
      } else {
        let currentNode = this.head;
        while (currentNode.next !== null) {
          currentNode = currentNode.next;
        }
        currentNode.next = newNode;
      }
    }
  
    removeNode(node) {
      if (node === this.head) {
        this.head = node.next;
      } else {
        let currentNode = this.head;
        while (currentNode.next !== node) {
          currentNode = currentNode.next;
        }
        currentNode.next = node.next;
      }
    }
  
    getSurvivor(skip) {
      let currentNode = this.head;
  
      while (this.head.next !== null) {
        for (let i = 1; i < skip; i++) {
          currentNode = currentNode.next !== null ? currentNode.next : this.head;
        }
  
        const nextNode = currentNode.next !== null ? currentNode.next : this.head;
        this.removeNode(currentNode);
        currentNode = nextNode;
      }
  
      return this.head.value;
    }
  }
  
  function findSurvivor(numPeople, skip) {
    const linkedList = new LinkedList();
  
    for (let i = 1; i <= numPeople; i++) {
      linkedList.addNode(i);
    }
  
    return linkedList.getSurvivor(skip);
  }
  