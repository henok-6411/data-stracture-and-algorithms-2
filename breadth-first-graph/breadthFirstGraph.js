class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}
class Graph{
  constructor(){
    this.vertices = [];
    this.edge = [],
    this.degree = 0;
  }
  addNode(val){
    let vertex = new Node(val);
    this.vertices.push(vertex);
    this.edge[vertex] = [];
  }
  addEdge(name1 , name2){
    let vertex = new Node(name1);
    let vertex2 = new Node(name2);
    this.edge[vertex].push(vertex);
    this.edge[vertex2].push(vertex2);
  }
  enqueue(val){
    if(!this.front || !this.rear){
      this.front = new Node(val);
      this.rear = new Node(val);
      return;
    }
      let newNode = new Node(val);
      this.rear.next = newNode;
      this.rear = newNode;
  }
  dequeue(){
    if(!this.front && !this.rear){
      return;
    }
    let deqValue = this.front;
    this.front = this.front.next;
    deqValue.next = null;
    return newNode;
  }
  BreadthFirst(node){

console.log(node);


  }

}


module.exports = Graph;