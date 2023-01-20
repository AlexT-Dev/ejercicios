// class Node {
//   // Your code here:

// }

function Node(value){
  this.value = value;
  this.next = null;
}
class MinStack {
  // Your code here:
  constructor(){
    this.head = null;
  }

  push = function(value){
    const newNode = new Node(value)
    // if (!this.head) this.head = newNode; //Si no hay head, lo crea con el nuevo nodo
    newNode.next = this.head;
    this.head = newNode;

  }

  pop = function(){
    if (!this.head) return "Lista Vacía"
    this.head = this.head.next

  }

  min = function(){
    let current = this.head;
    if (!current) return "Lista vacía"
    while (current.next){
      current = current.next;
      if (current.value < min) min = current.value;
    }
    return min
  }
  peek = function(){
    if (!this.head) return "Lista Vacía"
    return this.head.value;
  }
}

module.exports = {
  Node,
  MinStack
}
