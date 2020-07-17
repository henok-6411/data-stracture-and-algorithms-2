'use strict';
class Node{
  constructor(val){
    this.val = val;
    
  }
}


class Graph{
  constructor(){
    this.vertices =  [];
    this.edge = [];
    this.degree = 0;

    
  }
  addNode(val){ 
    let vertex = new Node(val);
    this.vertices.push(vertex.val);
     this.edge[vertex] = [];
  }

  addEdge( val , val2){
    let vertex1 = new Node(val);
    let vertex2 = new Node(val2);
    this.edge[vertex1].push(vertex2);
    this.edge[vertex2].push(vertex1);
    this.degree++;
  }
  getNodes(){
    let nodeValue = [];
    for(let i = 0; i < this.vertices.length; i++){
      nodeValue.push(this.vertices[i].val);
    }
    return nodeValue;
  }
  getNeighbors(){
  }
 
  size(){
   return this.vertices.length;
  }
}

module.exports =  Graph;