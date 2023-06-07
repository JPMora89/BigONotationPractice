/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

//   The minDepth() function calculates the minimum depth of a tree, which is defined as the length of the shortest path from the root to a leaf.
//   It first checks if the root of the tree is null using if (!this.root) return 0;. 
//   If the root is null, it means the tree is empty, so the minimum depth is 0. The function immediately returns 0 in this case.

//   The depthHelper() function is defined within the minDepth() function. This helper function is responsible for recursively calculating the depth of a given node.

//   Inside the depthHelper() function, it first checks if the current node is a leaf node by evaluating if (!node.left && !node.right) return 1;.
//   If the node has no left and right children, it means it is a leaf node, so the depth is 1. The function returns 1 in this case.

//   If the current node is not a leaf node, it checks for the presence of left and right children using the conditions if (!node.left) and if (!node.right).

//   If the node has no left child, it recursively calls depthHelper() on the right child and adds 1 to the result. This accounts for the depth of the right subtree.

//   If the node has no right child, it recursively calls depthHelper() on the left child and adds 1 to the result. This accounts for the depth of the left subtree.

//   Finally, if the node has both left and right children, it calculates the minimum depth between the left and right subtrees. 
//   It recursively calls depthHelper() on both children, and then uses Math.min() to determine the minimum depth between them. 
//   The minimum depth is incremented by 1 to account for the current node.

//   The depthHelper() function returns the calculated depth for the given node.

//   Back in the minDepth() function, it calls depthHelper() with this.root (the root of the tree) as the argument. 
//   This calculates the minimum depth of the entire tree starting from the root.

//   Finally, the minimum depth of the tree is returned from the minDepth() function.

// In summary, the minDepth() function uses a helper function depthHelper() to recursively calculate the depth of each node in the tree, and returns the minimum depth starting from the root.

  minDepth() {
    if(!this.root) return 0;

    function depthHelper(node){
      if(!node.left && !node.right) return 1;

      if(!node.left) return depthHelper(node.right) + 1;
      if(!node.right) return depthHelper(node.left) + 1;

      return Math.min(depthHelper(node.left), depthHelper(node.right)) + 1;
    }

    return depthHelper(this.root);

  }


  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

//   The maxDepth() function calculates the maximum depth of a tree, which is defined as the length of the longest path from the root to a leaf.

//   It first checks if the root of the tree is null using if (!this.root) return 0;. 
//   If the root is null, it means the tree is empty, so the maximum depth is 0. The function immediately returns 0 in this case.

//   The maxDepthHelper() function is defined within the maxDepth() function. This helper function is responsible for recursively calculating the depth of a given node.

//   Inside the maxDepthHelper() function, it first checks if the current node is a leaf node by evaluating if (!node.left && !node.right) return 1;. 
//   If the node has no left and right children, it means it is a leaf node, so the depth is 1. The function returns 1 in this case.

//   If the current node is not a leaf node, it checks for the presence of left and right children using the conditions if (!node.left) and if (!node.right).

//   If the node has no left child, it recursively calls maxDepthHelper() on the right child and adds 1 to the result. This accounts for the depth of the right subtree.

//   If the node has no right child, it recursively calls maxDepthHelper() on the left child and adds 1 to the result. This accounts for the depth of the left subtree.

//   Finally, if the node has both left and right children, it calculates the maximum depth between the left and right subtrees. 
//   It recursively calls maxDepthHelper() on both children, and then uses Math.max() to determine the maximum depth between them. 
  
//   The maximum depth is incremented by 1 to account for the current node.

//   The maxDepthHelper() function returns the calculated depth for the given node.

//   Back in the maxDepth() function, it calls maxDepthHelper() with this.root (the root of the tree) as the argument. 
//   This calculates the maximum depth of the entire tree starting from the root.

//   Finally, the maximum depth of the tree is returned from the maxDepth() function.

// In summary, the maxDepth() function uses a helper function maxDepthHelper() to recursively calculate the depth of each node in the tree, and returns the maximum depth starting from the root.

  maxDepth() {
    if(!this.root) return 0;

    function maxDepthHelper(node){
      if(!node.left && node.right) return 1;

      if(!node.left) return maxDepthHelper(node.right) + 1;
      if(!node.right) return maxDepthHelper(node.left) + 1;

      return Math.max(maxDepthHelper(node.left), maxDepthHelper(node.right)) + 1;
    }

    return maxDepthHelper(this.root);

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

//   The maxSum() function is designed to find the maximum sum that can be obtained by traveling along a path in the tree. 
//   It starts by checking if the root of the tree is null using if(!this.root) return 0;. If the root is null, indicating an empty tree, the function immediately returns 0 as there are no nodes to traverse.

//   The variable maxSum is initialized with 0. This variable will keep track of the maximum sum encountered during the traversal.

//   The maxSumHelper() function is defined within the maxSum() function. 
//   This helper function is responsible for recursively calculating the maximum sum along a path starting from a given node.

//   Inside the maxSumHelper() function, it first checks if the current node is null using if(!node) return 0;. 
//   If the node is null, indicating the end of a path, the function immediately returns 0 as there are no values to contribute to the sum.

//   The helper function then recursively calls maxSumHelper() on the left child of the current node and assigns the result to the variable leftSum. 
//   This represents the maximum sum of the path starting from the left child.

//   Similarly, it recursively calls maxSumHelper() on the right child of the current node and assigns the result to the variable rightSum. 
//   This represents the maximum sum of the path starting from the right child.

//   The maximum sum is calculated by adding the current node's value (node.val) to the sum of the left and right paths (leftSum and rightSum). 
//   The maximum between the current maxSum and the calculated sum is assigned back to maxSum using maxSum = Math.max(maxSum, node.val + leftSum + rightSum);. 
//   This ensures that the maxSum variable always holds the highest sum encountered during the traversal.

//   Finally, the helper function returns the maximum sum among three values: 
//   0, the sum of the left path and the current node's value (leftSum + node.val), and the sum of the right path and the current node's value (rightSum + node.val). 
//   The Math.max() function is used to determine the highest value among the three, effectively excluding negative sums and paths with negative contributions.

//   Back in the maxSum() function, it calls maxSumHelper() with this.root (the root of the tree) as the argument. 
//   This initiates the traversal and calculates the maximum sum starting from the root.

//   After the traversal, the function should return the maximum sum, so a return maxSum; statement is included at the end.

// In summary, the maxSum() function uses a helper function maxSumHelper() to recursively calculate the maximum sum along a path in the tree. 
// It initializes the maxSum variable to 0 and updates it during the traversal to hold the highest sum encountered. Finally, the function returns the maximum sum obtained from the traversal.

  maxSum() {
    if(!this.root) return 0;

    let maxSum = 0;

    function maxSumHelper(node){
      if(!node) return 0;

      const leftSum = maxSumHelper(node.left);
      const rightSum = maxSumHelper(node.right);

      maxSum = Math.max(maxSum, node.val + leftSum + rightSum);

      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }

    maxSumHelper(this.root);

    return maxSum;

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

//   The nextLarger() function is designed to find the smallest value in the tree that is larger than a given lowerBound value. 
//   If such a value exists, it is returned; otherwise, null is returned. The function starts by checking if the root of the tree is null using if(!this.root) return null;. 
//   If the root is null, indicating an empty tree, the function immediately returns null as there are no values to compare.

//   The variable nextLarger is initialized with null. This variable will keep track of the smallest value in the tree that is larger than lowerBound.

//   The nextLargerHelper() function is defined within the nextLarger() function. 
//   This helper function is responsible for recursively traversing the tree and updating the nextLarger value if a smaller value is found.

//   Inside the nextLargerHelper() function, it first checks if the current node is null using if(!node) return;. 
//   If the node is null, indicating the end of a path, the function immediately returns without making any changes.

//   The helper function then compares the value of the current node (node.val) with the lowerBound. 
//   If the node value is greater than the lowerBound, it checks two conditions:
//       If nextLarger is null, indicating that no larger value has been found yet, 
//       or if the current node value is smaller than the current nextLarger, it updates the nextLarger value to the current node value using nextLarger = node.val;. 
      
//       This ensures that nextLarger holds the smallest value encountered so far that is larger than the lowerBound.

//   After checking the conditions, the helper function recursively calls nextLargerHelper() on the left child and the right child of the current node. 
//   This allows the function to traverse the entire tree and explore all possible paths.

//   Back in the nextLarger() function, it calls nextLargerHelper() with this.root (the root of the tree) as the argument. 
//   This initiates the traversal and searches for the smallest value larger than lowerBound.

//   After the traversal, the function returns the nextLarger value, which represents the smallest value in the tree that is larger than lowerBound.

// In summary, the nextLarger() function uses a helper function nextLargerHelper() to recursively traverse the tree and find the smallest value that is larger than the given lowerBound. 
// It initializes the nextLarger variable to null and updates it during the traversal whenever a smaller value is found. 
// Finally, the function returns the nextLarger value, representing the desired result.

  nextLarger(lowerBound) {
    if(!this.root) return null;

    let nextLarger = null;

    function nextLargerHelper(node){
      if(!node) return;

      if(node.val > lowerBound){
        if(!nextLarger || node.val < nextLarger) nextLarger = node.val;
      }

      nextLargerHelper(node.left);
      nextLargerHelper(node.right);
    }

    nextLargerHelper(this.root);

    return nextLarger;

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  // The function takes two nodes, node1 and node2, as arguments to check if they are cousins.
  // It first checks if the tree has a root. If not, it returns false since there are no nodes in the tree.
  // It initializes variables node1Parent, node2Parent, node1Depth, and node2Depth to null. 
  // These variables will store the parents and depths of node1 and node2.
  // The areCousinsHelper() function is defined inside areCousins().
  //  It takes three parameters: node (the current node), parent (the parent of the current node), and depth (the depth of the current node).
  // Inside the helper function, it checks if the current node is equal to node1 or node2. If it is, it updates the respective parent and depth variables.
  // It then recursively calls areCousinsHelper() on the left and right children of the current node, incrementing the depth by 1.
  // After calling areCousinsHelper() with the root node and initializing the variables, the function areCousinsHelper() has updated the parent and depth variables according to the positions of node1 and node2.
  // Finally, the function checks if node1Parent is not equal to node2Parent (meaning they have different parents) and if node1Depth is equal to node2Depth (meaning they are at the same level). 
  // If both conditions are true, it returns true, indicating that node1 and node2 are cousins. Otherwise, it returns false.

  areCousins(node1, node2) {

    if(!this.root) return false;

    let node1Parent = null;
    let node2Parent = null;
    let node1Depth = null;
    let node2Depth = null;

    function areCousinsHelper(node, parent, depth){
      if(!node) return;

      if(node === node1){
        node1Parent = parent;
        node1Depth = depth;
      }

      if(node === node2){
        node2Parent = parent;
        node2Depth = depth;
      }

      areCousinsHelper(node.left, node, depth + 1);
      areCousinsHelper(node.right, node, depth + 1);
    }

    areCousinsHelper(this.root, null, 0);

    return node1Parent !== node2Parent && node1Depth === node2Depth;


  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

//   It initializes an empty string str to store the serialized representation of the tree.

//   The function serializeHelper() is defined. This helper function performs the recursive traversal of the tree and appends the values of the nodes to the str string.

//   Inside serializeHelper(), the base case is checked. If the current node is null, it means it is a leaf or a missing child node. 
//   In this case, the string "null " is appended to str to represent the absence of a node.

//   If the current node is not null, its value is appended to str followed by a space. This represents a valid node in the tree.

//   The serializeHelper() function is recursively called for the left and right child nodes of the current node. 
//   This ensures that all nodes in the tree are visited and their values are appended to str.

//   The serializeHelper() function is initially called with this.root, which represents the root node of the binary tree. 
//   This starts the recursive traversal from the root.

//   After the traversal is complete, the serialized string str is returned. Any trailing whitespace is removed using the trim() method to ensure a clean representation.

// In summary, the serialize() function recursively traverses the binary tree using a helper function and builds a serialized string representation by appending the node values and "null" for missing nodes.


static serialize() {
  let str = "";

  function serializeHelper(node) {
    if (!node) {
      str += "null ";
      return;
    }

    str += node.val + " ";
    serializeHelper(node.left);
    serializeHelper(node.right);
  }

  serializeHelper(this.root);

  return str.trim();
}

// The serialize() function is a static method of the BinaryTree class, which means it can be called directly on the class itself without creating an instance of the class.
// The purpose of this function is to serialize a binary tree into a string representation. Serialization is the process of converting an object into a format that can be stored or transmitted.
// Here's how the function works:

//     It initializes an empty string str to store the serialized representation of the tree.

//     The function serializeHelper() is defined. This helper function performs the recursive traversal of the tree and appends the values of the nodes to the str string.

//     Inside serializeHelper(), the base case is checked. If the current node is null, it means it is a leaf or a missing child node. 
//     In this case, the string "null " is appended to str to represent the absence of a node.

//     If the current node is not null, its value is appended to str followed by a space. This represents a valid node in the tree.

//     The serializeHelper() function is recursively called for the left and right child nodes of the current node. 
//     This ensures that all nodes in the tree are visited and their values are appended to str.

//     The serializeHelper() function is initially called with this.root, which represents the root node of the binary tree. 
//     This starts the recursive traversal from the root.

//     After the traversal is complete, the serialized string str is returned. Any trailing whitespace is removed using the trim() method to ensure a clean representation.

// In summary, the serialize() function recursively traverses the binary tree using a helper function and builds a serialized string representation by appending the node values and "null" for missing nodes.


  static serialize() {

    let str = "";

    function serializeHelper(node){
      if(!node){
        str += "null ";
        return;
      }

      str += node.val + " ";
      serializeHelper(node.left);
      serializeHelper(node.right);
    }

    serializeHelper(this.root);

    return str.trim();




  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

//   The function deserialize() takes a stringTree parameter, which is the serialized string representation of a binary tree.

//   The string is split into an array of nodes using the space delimiter. Each element in the array represents a node value in the serialized form.

//   The variable index is initialized to 0. It keeps track of the current index in the nodes array as the deserialization process proceeds.

//   The function deserializeHelper() is defined. This recursive helper function performs the deserialization of the tree.

//   Inside deserializeHelper(), the first check is for the string "null". If the current node is "null", it means it represents a missing child node. 
//   In this case, the function increments the index and returns null.

//   If the current node is not "null", it creates a new BinaryTreeNode object with the value from nodes[index]. The index is then incremented.

//   The left child of the current node is set by recursively calling deserializeHelper(). 
//   This assigns the correct left child node, or null if it's missing.

//   Similarly, the right child of the current node is set by recursively calling deserializeHelper().

//   Once the deserialization is complete, the deserialized binary tree is created by passing the root node (the result of deserializeHelper()) to the BinaryTree constructor.

//   The deserialized BinaryTree object is returned.

// In summary, the deserialize() function splits the serialized string into an array of node values, performs a recursive deserialization process using a helper function,
//  and returns a BinaryTree object with the deserialized structure.

  static deserialize() {

    let nodes = stringTree.split(" ");
    let index = 0;

    function deserializeHelper() {
      if (nodes[index] === "null") {
        index++;
        return null;
      }

      let node = new BinaryTreeNode(nodes[index]);
      index++;
      node.left = deserializeHelper();
      node.right = deserializeHelper();
      return node;
    }

    return new BinaryTree(deserializeHelper());


  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  // The function checks if the root of the binary tree is null. 
  // If it is, it returns null since there are no nodes in the tree.

  // The function lowestCommonAncestorHelper() is defined. 
  // This is a recursive helper function that traverses the binary tree to find the lowest common ancestor.

  // Inside lowestCommonAncestorHelper(), the base case is checked. If the current node is null, it means the traversal has reached the end of a branch, so null is returned.

  // Next, the function checks if the current node is either node1 or node2, indicating that one of the nodes has been found. 
  // In this case, the current node is returned as the lowest common ancestor.

  // If neither of the base cases is met, the function recursively calls lowestCommonAncestorHelper() for the left and right child nodes of the current node.

  // The results from the recursive calls are stored in the variables left and right.

  // If both left and right are non-null, it means that the current node is the lowest common ancestor, so the current node is returned.

  // If only one of left or right is non-null, it means that one of the nodes was found in the left subtree or right subtree. 
  // In this case, the non-null value is returned as the lowest common ancestor.

  // Finally, the lowestCommonAncestorHelper() function is initially called with this.root, which represents the root of the binary tree.

  // The result of the lowestCommonAncestorHelper() call is returned as the lowest common ancestor of node1 and node2.

  lowestCommonAncestor(node1, node2) {

    if(!this.root) return null;

    function lowestCommonAncestorHelper(node){
      if(!node) return null;

      if(node === node1 || node === node2) return node;

      let left = lowestCommonAncestorHelper(node.left);
      let right = lowestCommonAncestorHelper(node.right);

      if(left && right) return node;

      return left ? left : right;
    }

    return lowestCommonAncestorHelper(this.root);


    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
