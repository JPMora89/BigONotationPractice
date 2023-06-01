class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    push(value) {
      const newNode = new Node(value);
  
      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
  
      this.length++;
    }
  
    pop() {
      if (this.length === 0) return null;
  
      const poppedNode = this.tail;
  
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = poppedNode.prev;
        this.tail.next = null;
        poppedNode.prev = null;
      }
  
      this.length--;
      return poppedNode.value;
    }
  
    shift() {
      if (this.length === 0) return null;
  
      const shiftedNode = this.head;
  
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = shiftedNode.next;
        this.head.prev = null;
        shiftedNode.next = null;
      }
  
      this.length--;
      return shiftedNode.value;
    }
  
    unshift(value) {
      const newNode = new Node(value);
  
      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
  
      this.length++;
    }
  
    getAt(index) {
      if (index < 0 || index >= this.length) return null;
  
      let current;
  
      if (index <= this.length / 2) {
        current = this.head;
        for (let i = 0; i < index; i++) {
          current = current.next;
        }
      } else {
        current = this.tail;
        for (let i = this.length - 1; i > index; i--) {
          current = current.prev;
        }
      }
  
      return current.value;
    }
  
    setAt(index, value) {
      const node = this.getNodeAt(index);
      if (node) {
        node.value = value;
        return true;
      }
      return false;
    }
  
    insertAt(index, value) {
      if (index < 0 || index > this.length) return false;
  
      if (index === 0) {
        this.unshift(value);
      } else if (index === this.length) {
        this.push(value);
      } else {
        const newNode = new Node(value);
        const prevNode = this.getNodeAt(index - 1);
        const nextNode = prevNode.next;
  
        newNode.prev = prevNode;
        newNode.next = nextNode;
        prevNode.next = newNode;
        nextNode.prev = newNode;
  
        this.length++;
      }
  
      return true;
    }
  
}