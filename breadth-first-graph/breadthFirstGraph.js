class Node{
  constructor(val){
    this.val = val;
    this.edge = [];
    this.searched = false;
    this.parent = null;
  }
}
class Graph{
  constructor(){
    this.node = [];
    this.graph = {},
    this.start = null;
    this.end = null;
  }
  setStart(val){
    let vertex = new Node(val);
     this.start =  this.graph[vertex];  
     return this.start;  
  }
  setEnd(val){
    let vertex = new Node(val);
    this.end = this.graph[vertex];
    return this.end;
  }


}

let newGraph = new Graph();
let start = newGraph.setStart('dubai');
let end = newGraph.setEnd('dubai');

let que = [];
start.searched = true;
que.push(start);

while(que.length > 0){
let current  = que.shift();
if(current === end){
  console.log('found' , current);
}

}
console.log('graph',newGraph)


module.exports = Graph;