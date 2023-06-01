pivot(value) {
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
  