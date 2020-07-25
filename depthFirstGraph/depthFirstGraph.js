'use strict';

class Node{
  constructor(){
    this.val = null;
  }
}
class Graph{
  constructor(){
    this.node = [];
    this.edge = [];
  }
  addEdge(val , val2){
let node1 = new Node(val);
let node2 = new Node(val2);
this.edge[node1].push(node2);
this.edge[node2].push(node1);
  }
  depthFirst(val){


  }
}

module.exports = Graph;