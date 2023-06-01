// const mergedList = new LinkedList();: Creates a new instance of a linked list called mergedList. This will be used to store the merged and sorted result.
// let currentA = a.head;: Initializes a variable currentA to point to the head of the first input linked list a. This will be used to traverse a during the merging process.
// let currentB = b.head;: Initializes a variable currentB to point to the head of the second input linked list b. This will be used to traverse b during the merging process.
// while (currentA !== null && currentB !== null) {: Starts a while loop that continues as long as both currentA and currentB are not null. This loop handles the main merging process.
// Inside the while loop, we check if the value of the current node in a (referenced by currentA.val) is less than or equal to the value of the current node in b (referenced by currentB.val).
// If currentA.val is less than or equal to currentB.val, it means the node in a should come before the node in b in the merged list. 
// So, we use mergedList.push(currentA.val); to add the value of currentA to the mergedList, and then move currentA to its next node (currentA = currentA.next;).
// If currentA.val is greater than currentB.val, it means the node in b should come before the node in a in the merged list. So, we use mergedList.push(currentB.val); to add the value of currentB to the mergedList, and then move currentB to its next node (currentB = currentB.next;).
// After the while loop, we have traversed either a or b fully. We use two separate while loops to check if there are any remaining nodes in a or b and add them to the mergedList.
// Finally, we return the mergedList, which contains the merged and sorted result of the two input linked lists.
// The function merges the two linked lists by comparing the values of their nodes and constructing a new linked list in sorted order. It runs in linear time complexity, as it traverses each linked list once.


function mergeSortedLists(a, b) {
    const mergedList = new LinkedList();
    let currentA = a.head;
    let currentB = b.head;
  
    while (currentA !== null && currentB !== null) {
      if (currentA.val <= currentB.val) {
        mergedList.push(currentA.val);
        currentA = currentA.next;
      } else {
        mergedList.push(currentB.val);
        currentB = currentB.next;
      }
    }
  
    while (currentA !== null) {
      mergedList.push(currentA.val);
      currentA = currentA.next;
    }
  
    while (currentB !== null) {
      mergedList.push(currentB.val);
      currentB = currentB.next;
    }
  
    return mergedList;
  }
  