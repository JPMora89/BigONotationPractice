class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
      this.prev = null;
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
}

// The function reverseLinkedListInPlace takes a linked list (list) as its parameter. 
// It assumes that the linked list has a head property pointing to the first node and a tail property pointing to the last node.
// We initialize two variables: current and prev. current starts from the head of the list, and prev is initially set to null.
// We enter a while loop that continues until we reach the end of the list (i.e., current becomes null).
// Inside the loop, we store the next node in a variable called next. This is necessary because we will be modifying the next pointer of the current node.
// We reverse the connection of the current node by updating its next and prev pointers. We set current.next to prev and current.prev to next.
// After reversing the connections, we move to the next node. We update prev to the current node (prev = current) and current to the next node (current = next).
// Once we have reversed all the nodes, we update the head and tail of the list. 
// Since the list is reversed, the new head is the previous last node (prev), and the new tail is the previous first node (list.head).
// The function execution ends, and the linked list is now reversed in place.

function reverseLinkedListInPlace(list) {
    let current = list.head;
    let prev = null;
  
    while (current !== null) {
      // Store the next node
      const next = current.next;
  
      // Reverse the connection by updating the next and prev pointers
      current.next = prev;
      current.prev = next;
  
      // Move to the next node
      prev = current;
      current = next;
    }
  
    // Update the head and tail of the list
    list.tail = list.head;
    list.head = prev;
  }