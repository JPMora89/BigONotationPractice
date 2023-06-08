class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */


  // It creates a new Node instance with the given val.
  // If the tree is empty (no root node), it sets the new node as the root and returns the updated tree.
  // If the tree is not empty, it starts the insertion process by initializing a variable current with the value of the root node.
  // It enters a loop that continues until a suitable position is found for the new node.
  // Inside the loop, it compares the val with the current.val to determine the appropriate direction to traverse the tree.
  // If val is equal to current.val, it means the value already exists in the tree, and the function returns undefined to indicate a failure to insert duplicate values.
  // If val is less than current.val, it checks if the left child of current is null. If so, it assigns the new node as the left child of current and returns the updated tree.
  // If the left child of current is not null, it updates current to be its left child and continues the loop.
  // If val is greater than current.val, it performs a similar check and assignment for the right child of current.
  // If the right child of current is not null, it updates current to be its right child and continues the loop.
  // The loop repeats until a suitable position is found for the new node, and the function returns the updated tree.

  insert(val) {

    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (val === current.val) return undefined;

      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }

        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }

        current = current.right;
      }
    }



  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  // Create a new Node instance with the given val and assign it to newNode.

  // Check if the root of the binary search tree is null. If it is, set newNode as the root and return the current instance of the BinarySearchTree.

  // Define a helper function named helper that takes a node parameter.

  // Inside the helper function, check if val is equal to the val of the current node. If they are equal, return undefined, indicating that the value already exists in the tree.

  // If val is less than the val of the current node, check if the left child of the current node is null. 
  // If it is, set newNode as the left child of the current node and return the current instance of the BinarySearchTree.

  // If the left child of the current node is not null, recursively call the helper function on the left child.

  // If val is greater than the val of the current node, follow a similar logic as in step 5 and step 6, but this time for the right child of the current node.

  // Finally, invoke the helper function with the root of the BinarySearchTree as the initial node parameter. 
  // This starts the recursive process from the root.

  // Return the result of the recursive helper function, which can be either undefined if the value already exists in the tree or the current instance of the BinarySearchTree.

  insertRecursively(val) {
    const newNode = new Node(val);
  
    if (!this.root) {
      this.root = newNode;
      return this;
    }
  
    const helper = (node) => {
      if (val === node.val) return undefined;
  
      if (val < node.val) {
        if (node.left === null) {
          node.left = newNode;
          return this;
        }
  
        return helper(node.left);
      } else {
        if (node.right === null) {
          node.right = newNode;
          return this;
        }
  
        return helper(node.right);
      }
    };
  
    return helper(this.root);
  }
  

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

//   The function takes a value val as an input and aims to search the binary search tree (BST) for a node with that value. 
//   It returns the node if found or undefined otherwise.

//   The function starts by initializing a variable current with the root of the BST. This serves as the starting point for the search.

//   Inside the while loop, the function checks if the current node's value matches the specified value val. 
//   If they are equal, it means the node with the desired value has been found, so the current node is returned.

//   If the values are not equal, the function determines the next node to visit based on the comparison between val and the current node's value. 
//   If val is less than the current node's value, the search continues in the left subtree (current.left). Otherwise, the search continues in the right subtree (current.right).

//   The loop continues until a matching node is found or until the current node becomes null, indicating that the search has reached a leaf node and the value was not found. 
//   In that case, the function exits the loop.

//   If the loop completes without finding a matching node, it means the value does not exist in the BST. 
//   In this case, the function returns undefined to indicate that no node with the specified value was found.

// Overall, the find(val) function uses an iterative approach to traverse the BST, starting from the root and following the appropriate child nodes based on the comparison between the values. 
// It continues until a matching node is found or until the search reaches a leaf node.

  find(val) {

    let current = this;

    while(current){
      if(current.val === val) return current;

      current = val < current.val ? current.left : current.right;

    }

    return undefined;

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

//   The function takes a value val as an input and aims to search the binary search tree (BST) for a node with that value. 
//   It returns the node if found or undefined otherwise.

//   The function first checks if the root of the BST is null. If the tree is empty, it immediately returns undefined since there are no nodes to search.

//   The function defines a helper function named helper using an arrow function expression. T
//   his helper function will perform the recursive search within the BST.

//   Inside the helper function, it first checks if the current node's value matches the specified value val. 
//   If they are equal, it means the node with the desired value has been found, so the current node is returned.

//   If the values are not equal, the function determines the next node to visit based on the comparison between val and the current node's value. 
//   If val is less than the current node's value, the search continues in the left subtree (node.left). Otherwise, the search continues in the right subtree (node.right).

//   Before making a recursive call, the function checks if the child node is null. 
//   If it is, it means the value was not found in the corresponding subtree, so it immediately returns undefined.

//   If the child node is not null, the function recursively calls itself, passing the child node as the argument. 
//   This allows the search to continue deeper into the BST.

//   The recursive calls continue until a matching node is found or until a null child node is encountered, indicating that the value does not exist in the BST. 
//   In either case, the corresponding node or undefined is propagated back through the recursive calls.

//   Finally, the helper function is invoked with the root of the BST (this.root) as the starting point for the recursive search. 
//   The result of the search, either the matching node or undefined, is returned.

// Overall, the findRecursively(val) function uses a recursive approach to traverse the BST, 
// starting from the root and recursively exploring the appropriate child nodes based on the comparison between the values. 
// It continues until a matching node is found or until a null child node is encountered, indicating the absence of the value in the BST.


  findRecursively(val) {

    if(!this.root) return undefined;

    const helper = (node) => {
      if(node.val === val) return node;

      if(val < node.val){
        if(node.left === null) return undefined;

        return helper(node.left);
      } else {
        if(node.right === null) return undefined;

        return helper(node.right);
      }
    }

    return helper(this.root);


  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

//   The dfsPreOrder() function performs a depth-first search (DFS) traversal of the binary tree using pre-order traversal. 
//   It returns an array of visited nodes in the order they are encountered.

//   The function initializes an empty visited array to store the visited nodes.

//   A recursive helper function named traverse is defined. This function takes a node as an argument and performs the pre-order traversal.

//   Inside the traverse function, the base case is checked. If the current node is null, the function returns, indicating the end of that branch.

//   If the current node is not null, its value is added to the visited array.

//   The traverse function is recursively called on the left child of the current node (node.left), allowing traversal of the left subtree.

//   After traversing the left subtree, the traverse function is recursively called on the right child of the current node (node.right), allowing traversal of the right subtree.

//   The recursion continues until all nodes in the tree are visited.

//   Finally, the traverse function is initially called with the root of the binary tree (this.root) to start the pre-order traversal.

//   The function returns the visited array containing the nodes visited during the pre-order traversal.

// The completed dfsPreOrder() function effectively performs a pre-order depth-first search (DFS) traversal of the binary tree, 
// visiting each node in the order of root, left subtree, and right subtree.

  dfsPreOrder() {
    const visited = [];

    function traverse(node){
      visited.push(node.val);

      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }

    traverse(this.root);


    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  // The function initializes an empty visited array to store the visited nodes.

  // A recursive helper function named traverse is defined. This function takes a node parameter representing the current node being visited.

  // Inside the traverse function, the function first checks if the current node has a left child (node.left). 
  // If it does, the traverse function is recursively called on the left child to visit its subtree.

  // After the left subtree is visited, the value of the current node (node.val) is pushed into the visited array.

  // The function then checks if the current node has a right child (node.right). 
  // If it does, the traverse function is recursively called on the right child to visit its subtree.

  // The recursion continues until all nodes in the binary tree are visited.

  // Finally, the traverse function is initially called with the root of the binary tree (this.root) to start the in-order DFS traversal.

  // Once the traversal is complete, the function returns the visited array containing the nodes visited during the in-order DFS traversal.


  dfsInOrder() {

    const visited = [];

    function traverse(node){
      if(node.left) traverse(node.left);
      visited.push(node.val);
      if(node.right) traverse(node.right);
    }

    traverse(this.root);


    return visited;

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  // The function initializes an empty visited array to store the visited nodes.

  // A recursive helper function named traverse is defined. This function takes a node parameter representing the current node being visited.

  // Inside the traverse function, the function first checks if the current node has a left child (node.left). 
  // If it does, the traverse function is recursively called on the left child to visit its subtree.

  // Next, the function checks if the current node has a right child (node.right). 
  // If it does, the traverse function is recursively called on the right child to visit its subtree.

  // After visiting both the left and right subtrees, the value of the current node (node.val) is pushed into the visited array.

  // The recursion continues until all nodes in the binary tree are visited.

  // Finally, the traverse function is initially called with the root of the binary tree (this.root) to start the post-order DFS traversal.

  // Once the traversal is complete, the function returns the visited array containing the nodes visited during the post-order DFS traversal.


  dfsPostOrder() {
    const visited = [];

    function traverse(node){
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      visited.push(node.val);
    }

    traverse(this.root);


    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  // The function initializes an empty visited array to store the visited nodes.

  // It also creates a queue data structure, initially containing the root node of the binary tree ([this.root]).

  // The function enters a while loop that continues as long as there are nodes in the queue.

  // Inside the loop, the first node from the queue is removed using the shift() method and assigned to the node variable.

  // The value of the current node is pushed into the visited array.

  // If the node has a left child (node.left), it is added to the end of the queue using the push() method.

  // If the node has a right child (node.right), it is also added to the end of the queue.

  // The loop continues until all nodes in the binary tree have been visited.

  // Once the loop finishes, the function returns the visited array containing the nodes visited during the BFS traversal.

  bfs() {

    const visited = [];

    const queue = [this.root];

    while(queue.length){
      let node = queue.shift();
      visited.push(node.val);

      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }

    return visited;


  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  // It first checks if the tree is empty (!this.root). If the tree is empty, there is nothing to remove, so it returns null.

  // It initializes variables current and parent to keep track of the current node being examined and its parent node, respectively. It also sets found to false.

  // It enters a loop that continues until the current node is null. 
  // Inside the loop, it compares the value of the current node with the target value val. If they are equal, it sets found to true and breaks out of the loop. 
  // If val is less than the value of the current node, it updates current to its left child and updates parent accordingly. 
  // If val is greater, it updates current to its right child and updates parent accordingly.

  // After the loop, it checks if the node with the target value was found (!found). If the node was not found, it returns null.

  // The function then proceeds to handle different cases for removing the node:

  //     Case 1: Node to be removed has no children. If the current node has no left or right child, it checks if it's the root node (!parent).
  //      If it is the root, it sets the root to null. Otherwise, it updates the left or right child of the parent to null based on the position of the current node.

  //     Case 2: Node to be removed has one child. If the current node has only one child (either left or right), it determines the child node (child)
  //      and updates the left or right child of the parent to child based on the position of the current node.

  //     Case 3: Node to be removed has two children. If the current node has two children, it finds the successor node by calling the findMin() function with the right child of the current node. 
  //     The successor node is the minimum node in the right subtree. It then updates the value of the current node with the value of the successor node. 
  //     Finally, it recursively calls the remove() function to remove the successor node from its original position.

  // The function returns the current node, which represents the removed node.

  remove(val) {
    if (!this.root) {
      return null; // Empty tree, nothing to remove
    }
  
    let current = this.root;
    let parent = null;
    let found = false;
  
    while (current) {
      if (val === current.val) {
        found = true;
        break;
      } else if (val < current.val) {
        parent = current;
        current = current.left;
      } else {
        parent = current;
        current = current.right;
      }
    }
  
    if (!found) {
      return null; // Node with the given value not found
    }
  
    // Case 1: Node to be removed has no children
    if (!current.left && !current.right) {
      if (!parent) {
        // Removing the root node
        this.root = null;
      } else if (current === parent.left) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }
    // Case 2: Node to be removed has one child
    else if (!current.left || !current.right) {
      const child = current.left ? current.left : current.right;
      if (!parent) {
        // Removing the root node
        this.root = child;
      } else if (current === parent.left) {
        parent.left = child;
      } else {
        parent.right = child;
      }
    }
    // Case 3: Node to be removed has two children
    else {
      const successor = this.findMin(current.right);
      current.val = successor.val;
      this.remove(successor.val); // Recursively remove the successor node
    }
  
    return current;
  }
  
  findMin(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }
  

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

//   The isBalanced() function takes an optional current parameter, which defaults to this.root if not provided. 
//   It first checks if the current node is null. If it is, the function returns undefined, which can be considered falsy. 
//   However, it would be clearer to explicitly return false in this case to indicate that the tree is not balanced.

// If the current node is not null, the function calculates the maximum depth (maxDepth()) and minimum depth (minDepth()) of the tree and checks if the difference is less than or equal to 1. 
// This comparison returns a boolean value indicating whether the tree is balanced or not.


// The minDepth() and maxDepth() functions are defined inside the isBalanced() function. They recursively calculate the minimum and maximum depths of a subtree, respectively. 
// The base case for both functions is when the current node is null, in which case they return 0.
//  Otherwise, they recursively calculate the minimum or maximum depth of the left and right subtrees and add 1 to the result.

  isBalanced(current=this.root) {
    if (current === null) return;
    return maxDepth(current) - minDepth(current) <= 1;



    function minDepth(current) {
      if (current === null) return 0;
      return 1 + Math.min(minDepth(current.left), minDepth(current.right));
      
    }

    function maxDepth(current) {
      if (current === null) return 0;
      return 1 + Math.max(maxDepth(current.left), maxDepth(current.right));
    }


  }
  
  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  // The function first checks if the BST is empty or if it has only one node. 
  // In such cases, there won't be a second highest value, so it immediately returns undefined.

  // The function starts traversing the BST from the root node and keeps moving to the right child until it reaches the rightmost node (the node with the largest value). 
  // Along the way, it keeps track of the potential second highest value in the secondHighest variable.

  // Once the loop exits, it means that the current node (current) is the rightmost node (the largest value) in the BST. 
  // At this point, it checks if the current node has no children (!current.left && !current.right). 
  // If it doesn't have any children, it means that the current node is the largest value in the BST, and the second highest value is stored in the secondHighest variable. 
  // In this case, it returns the secondHighest value.

  // If the current node has a left child (current.left && !current.right), it means that the current node is the largest value, and the second highest value exists in the left subtree.
  //  To find the second highest value in the left subtree, it calls the findMax function, passing the left child of the current node as the argument. 
  //  The findMax function finds and returns the largest value in a given subtree.

  // If the current node has a right child (current.right), it means that the current node is the largest value, and the second highest value exists in the right subtree. 
  // To find the second highest value in the right subtree, it calls the findMax function, passing the right child of the current node as the argument.

  // The findMax function is a helper function that traverses the given subtree by moving to the right child until it reaches the rightmost node (the node with the largest value). 
  // It returns the value of the rightmost node.

  findSecondHighest() {
    if (!this.root || (!this.root.left && !this.root.right)) {
      return undefined;
    }
  
    let current = this.root;
    let secondHighest = null;
  
    while (current.right) {
      if (!current.right.right && !current.right.left) {
        // Current node is parent of the largest value
        secondHighest = current.val;
      }
      current = current.right;
    }
  
    if (!current.left && !current.right) {
      // Current node is the largest value and has no children
      return secondHighest;
    }
  
    if (current.left && !current.right) {
      // Current node is largest, second highest is the largest in the left subtree
      return this.findMax(current.left);
    }
  
    // Current node is the largest and has a right subtree
    // Second highest is the largest value in the right subtree
    return this.findMax(current.right);
  }
  
  findMax(node) {
    while (node.right) {
      node = node.right;
    }
    return node.val;
  }
  
}

module.exports = BinarySearchTree;
