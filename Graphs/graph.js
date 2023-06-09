class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);

    return this;

  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    vertexArray.forEach(vertex => this.addVertex(vertex));

    return this;


  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);

    return this;
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);

    return this;
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    vertex.adjacent.forEach(neighbor => {
      neighbor.adjacent.delete(vertex);
    });
    this.nodes.delete(vertex);

    return this;
  }

  // this function returns an array of Node values using DFS

  // The function takes a start node as a parameter, representing the starting point for the traversal.

  // It initializes an empty stack called toVisitStack and adds the start node to it. 
  // This stack will be used to keep track of nodes to visit.

  // It creates an empty set called seen and adds the start node to it. 
  // This set will be used to keep track of nodes that have been visited.

  // It creates an empty array called result to store the visited node values.

  // The function enters a loop that continues as long as there are nodes in the toVisitStack:

  // a. It pops the top node from the toVisitStack and assigns it to the current variable.
  // b. It pushes the value of the current node to the result array, capturing the visited node value.
  // c. It iterates over each neighbor of the current node using the current.adjacent.forEach method.
  // d. For each neighbor, it checks if it has been visited before by checking if it exists in the seen set. 
  
  // If the neighbor has not been seen before, it performs the following steps:

  // 1. It adds the neighbor to the seen set to mark it as visited.
  // 2. It pushes the neighbor to the toVisitStack to be visited in the future.

  // Once the loop completes, all nodes in the connected component reachable from the start
  //  node have been visited and their values have been added to the result array.
  // Finally, the function returns the result array containing the values of the visited 
  // nodes in the order they were traversed using depth-first search.

  depthFirstSearch(start) {
    const toVisitStack = [start];
    const seen = new Set(toVisitStack);
    const result = [];

    while (toVisitStack.length) {
      let current = toVisitStack.pop();
      result.push(current.value);

      current.adjacent.forEach(neighbor => {
        if (!seen.has(neighbor)) {
          seen.add(neighbor);
          toVisitStack.push(neighbor);
        }
      });
    }

    return result;

  }

  // this function returns an array of Node values using BFS

  // The function takes a start node as a parameter, representing the starting point for the traversal.

  // It initializes an empty queue called toVisitQueue and adds the start node to it. 
  // This queue will be used to keep track of nodes to visit.

  // It creates an empty set called seen and adds the start node to it. 
  // This set will be used to keep track of nodes that have been visited.

  // It creates an empty array called result to store the visited node values.

  // The function enters a loop that continues as long as there are nodes in the toVisitQueue:

  // a. It dequeues the front node from the toVisitQueue and assigns it to the current variable.
  // b. It pushes the value of the current node to the result array, capturing the visited node value.
  // c. It iterates over each neighbor of the current node using the current.adjacent.forEach method.
  // d. For each neighbor, it checks if it has been visited before by checking if it exists in the seen set. 
  
  // If the neighbor has not been seen before, it performs the following steps:

  // 1. It adds the neighbor to the seen set to mark it as visited.
  // 2. It enqueues the neighbor to the toVisitQueue to be visited in the future.

  // Once the loop completes, all nodes in the connected component reachable from the start node have been visited, and their values have been added to the result array.

  // Finally, the function does not explicitly return the result array. 
  // You can add a return result; statement at the end of the function to ensure that the array is returned.


  breadthFirstSearch(start) {
    const toVisitQueue = [start];
    const seen =  new Set(toVisitQueue);
    const result = [];

    while(toVisitQueue.length) {
      let current = toVisitQueue.shift();
      result.push(current.value);

      current.adjacent.forEach(neighbor => {
        if (!seen.has(neighbor)) {
          seen.add(neighbor);
          toVisitQueue.push(neighbor);
        }
      });
    }
  }




}

module.exports = {Graph, Node}

class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);

    return this;

  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    vertexArray.forEach(vertex => this.addVertex(vertex));

    return this;


  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);

    return this;
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);

    return this;
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    vertex.adjacent.forEach(neighbor => {
      neighbor.adjacent.delete(vertex);
    });
    this.nodes.delete(vertex);

    return this;
  }

  // this function returns an array of Node values using DFS

  // The function takes a start node as a parameter, representing the starting point for the traversal.

  // It initializes an empty stack called toVisitStack and adds the start node to it. 
  // This stack will be used to keep track of nodes to visit.

  // It creates an empty set called seen and adds the start node to it. 
  // This set will be used to keep track of nodes that have been visited.

  // It creates an empty array called result to store the visited node values.

  // The function enters a loop that continues as long as there are nodes in the toVisitStack:

  // a. It pops the top node from the toVisitStack and assigns it to the current variable.
  // b. It pushes the value of the current node to the result array, capturing the visited node value.
  // c. It iterates over each neighbor of the current node using the current.adjacent.forEach method.
  // d. For each neighbor, it checks if it has been visited before by checking if it exists in the seen set. 
  
  // If the neighbor has not been seen before, it performs the following steps:

  // 1. It adds the neighbor to the seen set to mark it as visited.
  // 2. It pushes the neighbor to the toVisitStack to be visited in the future.

  // Once the loop completes, all nodes in the connected component reachable from the start
  //  node have been visited and their values have been added to the result array.
  // Finally, the function returns the result array containing the values of the visited 
  // nodes in the order they were traversed using depth-first search.

  depthFirstSearch(start) {
    const toVisitStack = [start];
    const seen = new Set(toVisitStack);
    const result = [];

    while (toVisitStack.length) {
      let current = toVisitStack.pop();
      result.push(current.value);

      current.adjacent.forEach(neighbor => {
        if (!seen.has(neighbor)) {
          seen.add(neighbor);
          toVisitStack.push(neighbor);
        }
      });
    }

    return result;

  }

  // this function returns an array of Node values using BFS

  // The function takes a start node as a parameter, representing the starting point for the traversal.

  // It initializes an empty queue called toVisitQueue and adds the start node to it. 
  // This queue will be used to keep track of nodes to visit.

  // It creates an empty set called seen and adds the start node to it. 
  // This set will be used to keep track of nodes that have been visited.

  // It creates an empty array called result to store the visited node values.

  // The function enters a loop that continues as long as there are nodes in the toVisitQueue:

  // a. It dequeues the front node from the toVisitQueue and assigns it to the current variable.
  // b. It pushes the value of the current node to the result array, capturing the visited node value.
  // c. It iterates over each neighbor of the current node using the current.adjacent.forEach method.
  // d. For each neighbor, it checks if it has been visited before by checking if it exists in the seen set. 
  
  // If the neighbor has not been seen before, it performs the following steps:

  // 1. It adds the neighbor to the seen set to mark it as visited.
  // 2. It enqueues the neighbor to the toVisitQueue to be visited in the future.

  // Once the loop completes, all nodes in the connected component reachable from the start node have been visited, and their values have been added to the result array.

  // Finally, the function does not explicitly return the result array. 
  // You can add a return result; statement at the end of the function to ensure that the array is returned.


  breadthFirstSearch(start) {
    const toVisitQueue = [start];
    const seen =  new Set(toVisitQueue);
    const result = [];

    while(toVisitQueue.length) {
      let current = toVisitQueue.shift();
      result.push(current.value);

      current.adjacent.forEach(neighbor => {
        if (!seen.has(neighbor)) {
          seen.add(neighbor);
          toVisitQueue.push(neighbor);
        }
      });
    }
  }

  // Shortest Path Function, lies outside the class

  // The shortestPath function accepts three parameters: the graph (represented as an adjacency list), the source vertex, and the target vertex.
  // The function initializes a queue to store vertices to visit and an object called visited to track the visited vertices and their predecessors.
  // It performs a breadth-first search starting from the source vertex, visiting neighbors and adding them to the queue.
  // The search continues until the target vertex is found or until all reachable vertices are visited.
  // If the target vertex is found, the function calls the constructPath helper function to construct the shortest path using the visited object.
  // The constructPath function traces the path from the target vertex back to the source vertex using the predecessors stored in the visited object.
  // The constructed path is returned as an array of vertices, representing the shortest path from the source to the target.
  // If no path is found from the source to the target, the function returns null.
  
  //  Outside of class Graph, add the following shortestPath function:
  function shortestPath(graph, source, target) {
    // Create a queue to store vertices to visit
    const queue = [source];
  
    // Create an object to track the visited vertices and their predecessors
    const visited = { [source]: null };
  
    // Perform breadth-first search until the target vertex is reached
    while (queue.length > 0) {
      const current = queue.shift();
  
      // If the target vertex is found, construct and return the shortest path
      if (current === target) {
        return constructPath(visited, target);
      }
  
      // Visit the neighbors of the current vertex
      for (const neighbor of graph[current]) {
        if (!visited.hasOwnProperty(neighbor)) {
          visited[neighbor] = current;
          queue.push(neighbor);
        }
      }
    }
  
    // No path found from source to target
    return null;
  }
  
  // Helper function to construct the shortest path using the visited vertices
  function constructPath(visited, target) {
    const path = [target];
    let current = target;
  
    while (visited[current] !== null) {
      current = visited[current];
      path.unshift(current);
    }
  
    return path;
  }
}  
