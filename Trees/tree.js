/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

//   The sumValues() function first checks if the tree is empty by verifying if this.root is null. 
//   If the tree is empty, it immediately returns 0, indicating that the sum of values is zero.
//   We initialize the sum variable with the value of the root node since it contributes to the total sum.
//   The helperFunction() is a recursive function that takes a node as an argument. 
//   It iterates over the children of the given node using a for...of loop.
//   For each child, it adds the value of the child node to the sum variable.
//   If the child node has children (i.e., it is not a leaf node), it recursively calls the helperFunction() on the child node. 
//   This recursive call allows the function to traverse deeper into the tree and process its descendants.
//   After the recursive traversal of the tree is complete, the sum variable holds the sum of all the values in the tree.
//   Finally, the sum value is returned as the result of the sumValues() function.

// This implementation recursively traverses the tree, adding up the values of each node and its children to calculate the total sum. 
// The recursion ensures that all nodes in the tree are visited, including their descendants.

  sumValues() {
      
    if(!this.root) return 0;

    let sum = this.root.val;

    function helperFunction(node){
      for( let child of node.children){
        sum += child.val;
        if(child.children.length > 0){
          helperFunction(child);
        }

      }

    }
    helperFunction(this.root);
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

//   The countEvens() function first checks if the tree is empty by verifying if this.root is null. 
//   If the tree is empty, it immediately returns 0, indicating that there are no even values.
//   We initialize the count variable to 0, which will keep track of the number of even values in the tree.
//   The helperFunction() is a recursive function that takes a node as an argument. It iterates over the children of the given node using a for...of loop.
//   For each child, it checks if the value of the child node is even by using the modulo operator %. 
//   If the value is divisible by 2 without a remainder, it means the value is even, so the count variable is incremented.
//   If the child node has children (i.e., it is not a leaf node), it recursively calls the helperFunction() on the child node. 
//   This recursive call allows the function to traverse deeper into the tree and process its descendants.
//   After the recursive traversal of the tree is complete, the count variable holds the total count of even values in the tree.
//   Finally, the count value is returned as the result of the countEvens() function.

// This implementation recursively traverses the tree, counting the number of even values encountered. 
// The recursion ensures that all nodes in the tree are visited, including their descendants.

  countEvens() {
    if(!this.root) return 0;

    let count = 0;

    function helperFunction(node){
      for( let child of node.children){
        if(child.val % 2 === 0){
          count++;
        }
        if(child.children.length > 0){
          helperFunction(child);
        }

      }

    }
    helperFunction(this.root);
    return count;


  }

  // numGreater
  // Given a n-ary tree and a number x, find and return the number of nodes which are greater than x.

//   The numGreater(x) function first checks if the tree is empty by verifying if this.root is null. 
//   If the tree is empty, it immediately returns 0, indicating that there are no nodes greater than x.
//   We initialize the count variable to 0, which will keep track of the number of nodes greater than x.
//   The findLowerBound() is a recursive function that takes a node as an argument. It iterates over the children of the given node using a for...of loop.
//   For each child, it checks if the value of the child node is greater than x. If the value is greater, it increments the count variable.
//   If the child node has children (i.e., it is not a leaf node), it recursively calls the findLowerBound() on the child node. 
//   This recursive call allows the function to traverse deeper into the tree and process its descendants.
//   After the recursive traversal of the tree is complete, the count variable holds the total count of nodes that are greater than x.
//   Finally, the count value is returned as the result of the numGreater(x) function.

// This implementation recursively traverses the tree, counting the number of nodes that are greater than x. 
// The recursion ensures that all nodes in the tree are visited, including their descendants.

  numGreater(x) {
    if(!this.root) return 0;
    let count = 0;

    function findLowerBound(node){
      for(let child of node.children){
        if(child.val > x){
          count++;
        }
        if(child.children.length > 0){
          findLowerBound(child);
        }
      }
    }
    findLowerBound(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };
