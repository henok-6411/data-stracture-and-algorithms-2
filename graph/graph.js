'use strict';

class Graph{
  constructor(){
    this.vertices =  [];
    this.edge = [];
    this.degree = 0;
  }

  addNode(vertex){
    this.vertices.push(vertex);
    this.edge[vertex] = [];
  }
  addEdge( vertex1 , vertex2){
    this.edge[vertex1].push(vertex2);
    this.edge[vertex2].push(vertex1);
    this.degree++;
  }
  getNodes(){

  }
  getNeighbors(){

  }
 
  size(){
    this.vertices.length;
  }
}

module.exports =  Graph;