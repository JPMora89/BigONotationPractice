/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */
  push(val) {
    const newNode = new Node(val);
    
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if(this.head === null){
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;


  }

  /** pop(): return & remove last item. */
  // If the linked list is empty (i.e., this.head is null), meaning there are no nodes in the list, the function returns null to indicate that there is no value to pop.
  // If the linked list is not empty, the function proceeds to traverse the list to find the last node. It starts by initializing two pointers: current and previous. 
  // current is set to the head of the list, and previous is set to null.
  // The function enters a loop that iterates until current.next is null, which means current is the last node in the list.
  // Inside the loop, previous is updated to current, and current is updated to current.next. This allows us to keep track of the previous and current nodes as we traverse the list.
  // After the loop, we have reached the last node, and current points to it. At this point, previous points to the second-to-last node.
  // The function updates this.tail to point to the second-to-last node (this.tail = previous) and sets the next property of the new tail to null (this.tail.next = null). This effectively removes the last node from the list.
  // Finally, the value of the removed node (current.val) is returned.

pop() {
    if(this.head === null) return null;
    let current = this.head;
    let previous = null;
    while(current.next){
      previous = current;
      current = current.next;
    }
    this.tail = previous;
    this.tail.next = null;
    return current.val;


  }

  /** shift(): return & remove first item. */

  // If the linked list is empty (i.e., this.head is null), meaning there are no nodes in the list, the function returns null to indicate that there is no value to shift.
  // If the linked list is not empty, the function proceeds to remove the first node from the list. It starts by assigning current to the head of the list.
  // The function updates this.head to point to the second node in the list (this.head = current.next). This effectively removes the first node from the list and makes the second node the new head.
  // Finally, the value of the removed node (current.val) is returned.

  shift() {
    if(this.head === null) return null;
    let current = this.head;
    this.head = current.next;
    return current.val;
  }

  /** getAt(idx): get val at idx. */

  // The function takes an idx parameter, which represents the index of the value to retrieve from the linked list.
  // The first conditional statement if (idx < 0 || idx >= this.length) checks if the provided index is out of bounds. 
  // If the index is negative or greater than or equal to the length of the linked list, it means the index is invalid, and null is returned. 
  // This is done to handle error cases where the index is not within the valid range of the linked list.
  // If the index is valid, the function proceeds to initialize two variables:
  //     current is set to the head of the linked list. It serves as the starting point for traversing the list.
  //     count is set to 0, representing the current position in the list.
  // The function enters a loop that continues until count is equal to idx. This loop is used to traverse the linked list and move the current node to the desired index position.
  // Inside the loop, current is updated to the next node using current = current.next, effectively moving to the next node in the list.
  // The count variable is incremented by 1 in each iteration, keeping track of the progress in the list.
  // Once the loop reaches the desired index (count equals idx), the value (val) stored in the node pointed to by current is returned.
  // If the function completes the loop without finding the desired index, it means the index is not found in the linked list. 
  // In such cases, the function will not reach the return statement within the loop and will automatically return null after the loop.

  getAt(idx) {
    
    if (idx < 0 || idx >= this.length) {
      return null;
    }
  
    let current = this.head;
    let count = 0;
  
    while (count < idx) {
      current = current.next;
      count++;
    }
  
    return current.val;
  }
  

  /** setAt(idx, val): set val at idx to val */

  // The function takes two parameters: idx represents the index at which to update the value, and val is the new value to be set at that index.
  // The first conditional statement if (idx < 0 || idx >= this.length) checks if the provided index is out of bounds. 
  // If the index is negative or greater than or equal to the length of the linked list, it means the index is invalid, and null is returned. 
  // This is done to handle error cases where the index is not within the valid range of the linked list.
  // If the index is valid, the function proceeds to update the value at the specified index.
  // The function initializes two variables:
  //     current is set to the head of the linked list. It serves as the starting point for traversing the list.
  //     count is set to 0, representing the current position in the list.
  // The function enters a loop that continues until count is equal to idx. This loop is used to traverse the linked list and move the current node to the desired index position.
  // Inside the loop, current is updated to the next node using current = current.next, effectively moving to the next node in the list.
  // The count variable is incremented by 1 in each iteration, keeping track of the progress in the list.
  // Once the loop reaches the desired index (count equals idx), the val parameter is assigned to the val property of the node pointed to by current. 
  // This updates the value at the specified index with the new value.
  // If the function completes the loop without finding the desired index, it means the index is not found in the linked list. In such cases, the function will not perform any updates.

  setAt(idx, val) {
    if(idx < 0 || idx >= this.length) return null;
    let current = this.head;
    let count = 0;
    while(count < idx){
      current = current.next;
      count++;
    }
    current.val = val;

  }

  /** insertAt(idx, val): add node w/val before idx. */

  // The function first checks if the given idx is out of bounds (less than 0 or greater than the length of the linked list). If it is, it returns null.
  // If idx is 0, it means the new node should be inserted at the beginning of the linked list. In this case, the unshift(val) method can be used to add the new node to the front.
  // If idx is equal to the length of the linked list, it means the new node should be inserted at the end. In this case, the push(val) method can be used to add the new node to the end.
  // If none of the above conditions match, it means the new node should be inserted somewhere in the middle of the linked list. 
  // The function creates a new node with the given val and initializes current as the head, previous as null, and count as 0.
  // The function then traverses the linked list until it reaches the node at the given idx by moving current and previous pointers forward. The count variable keeps track of the current index.
  // Once the correct position is reached, the previous.next is set to the new node, effectively inserting it into the linked list. 
  // The newNode.next is set to current to maintain the rest of the linked list's structure.
  // Finally, the length of the linked list is incremented to reflect the addition of the new node.

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) return null;
  
    if (idx === 0) {
      this.unshift(val);
      return;
    }
  
    if (idx === this.length) {
      this.push(val);
      return;
    }
  
    let newNode = new Node(val);
    let current = this.head;
    let previous = null;
    let count = 0;
  
    while (count < idx) {
      previous = current;
      current = current.next;
      count++;
    }
  
    previous.next = newNode;
    newNode.next = current;
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  // The function first checks if the given idx is out of bounds (less than 0 or greater than or equal to the length of the linked list). If it is, it returns null.
  // If idx is 0, it means the node at the beginning of the linked list should be removed. In this case, the shift() method can be used to remove and return the value of the first node.
  // If idx is equal to the length of the linked list minus 1, it means the node at the end of the linked list should be removed. 
  // In this case, the pop() method can be used to remove and return the value of the last node.
  // If none of the above conditions match, it means the node to be removed is somewhere in the middle of the linked list. The function initializes current as the head, previous as null, and count as 0.
  // The function then traverses the linked list until it reaches the node at the given idx by moving current and previous pointers forward. The count variable keeps track of the current index.
  // Once the correct position is reached, the previous.next is set to current.next, effectively bypassing the node to be removed and linking the previous node to the next node.
  // The length of the linked list is decremented to reflect the removal of the node.
  // Finally, the value of the removed node (current.val) is returned.


  removeAt(idx) {
    if(idx < 0 || idx >= this.length) return null;
    if(idx === 0) return this.shift();
    if(idx === this.length - 1) return this.pop();
    let current = this.head;
    let previous = null;
    let count = 0;
    while(count < idx){
      previous = current;
      current = current.next;
      count++;
    }
    previous.next = current.next;
    this.length--;
    return current.val;

  }

  /** average(): return an average of all values in the list */


  // The function first checks if the linked list is empty by checking if this.head is falsy (null or undefined). If the linked list is empty, it returns 0.
  // If the linked list is not empty, the function initializes current as the head, sum as 0, and count as 0.
  // The function then enters a loop that iterates over each node in the linked list. The loop continues as long as current is truthy (not null or undefined).
  // Inside the loop, the value of the current node (current.val) is added to the sum variable to accumulate the total sum of all the values in the linked list.
  // The count variable is incremented by 1 in each iteration to keep track of the number of nodes visited.
  // After the loop completes, the function calculates the average by dividing the sum by count. This gives the average value of the nodes in the linked list.
  // The average value is then returned by the function.

  average() {
    if(!this.head) return 0;
    let current = this.head;
    let sum = 0;
    let count = 0;
    while(current){
      sum += current.val;
      count++;
      current = current.next;
    }
    return sum/count;
    
  }
}


module.exports = LinkedList;
