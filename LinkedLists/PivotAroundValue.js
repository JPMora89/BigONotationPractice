// The pivot function takes a value parameter as the pivot value.
// It creates two new linked lists: lowerList to store nodes with values less than the pivot value, and greaterList to store nodes with values greater than or equal to the pivot value.
// It initializes a variable current to point to the head of the original linked list.
// It starts a while loop that continues until current becomes null.
// It stores the next node in the original linked list in a variable called next to keep track of the next iteration.
// Inside the loop, it compares the value of the current node with the pivot value.
// If the current node's value is less than the pivot value, it removes the current node from the original linked list using the remove method and appends it to the lowerList using the push method.
// If the current node's value is greater than or equal to the pivot value, it removes the current node from the original linked list and appends it to the greaterList.
// After processing each node, it moves to the next node by updating current with the next node.
// After processing all the nodes, it updates the head of the original linked list with the head of the lowerList.
// If the lowerList is not empty (i.e., this.head is not null), it finds the tail of the lowerList by traversing until the last node (tail.next === null).
// It connects the tail of the lowerList with the head of the greaterList to merge the lists.
// If the lowerList is empty, it sets the head of the original linked list to the head of the greaterList.
// Finally, it updates the length of the original linked list by adding the lengths of the lowerList and the greaterList.
// It returns the modified original linked list after the rearrangement.
// Note: The explanation assumes that the LinkedList class has the necessary methods (push, remove, etc.) implemented correctly.



function pivot(value) {    
     const lowerList = new LinkedList();
    const greaterList = new LinkedList();
  
    let current = this.head;
    while (current !== null) {
      const next = current.next;
      if (current.val < value) {
        this.remove(current.val);
        lowerList.push(current.val);
      } else {
        this.remove(current.val);
        greaterList.push(current.val);
      }
      current = next;
    }
  
    this.head = lowerList.head;
    if (this.head !== null) {
      let tail = lowerList.head;
      while (tail.next !== null) {
        tail = tail.next;
      }
      tail.next = greaterList.head;
    } else {
      this.head = greaterList.head;
    }
    this.length = lowerList.length + greaterList.length;
  
    return this;
  }
  