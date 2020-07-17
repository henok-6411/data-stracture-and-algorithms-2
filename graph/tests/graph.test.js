'use strict';
const Graph = require('../graph');

/* 
xNode can be successfully added to the graph
An edge can be successfully added to the graph
A collection of all nodes can be properly retrieved from the graph

All appropriate neighbors can be retrieved from the graph
Neighbors are returned with the weight between nodes included
The proper size is returned, representing the number of nodes in the graph
A graph with only one node and edge can be properly returned
An empty graph properly returns null
*/
describe('They happy path of Graph', () =>{
  it('Node can be successfully added to the graph' , () =>{
    let newNode = new Graph();
    newNode.addNode('node 1');
    newNode.addNode('node 2');
    newNode.addNode('node 3');
    newNode.addNode('node 4');

    
    expect(newNode.vertices).toEqual(['node 1','node 2','node 3','node 4']);
  })
  it('An edge can be successfully added to the graph' , () =>{
    let newNode = new Graph();
    newNode.addNode('node 1');
    newNode.addNode('node 2');
    newNode.addEdge('addedNode2' ,'addedNode1' );
    newNode.addEdge('addedNode1','addedNode1');
   
    expect(newNode.degree).toEqual(2);
  })
  it('The proper size is returned, representing the number of nodes in the graph' , () =>{
    let newNode = new Graph();
    newNode.addNode('node 1');
    newNode.addNode('node 2');
    newNode.addNode('node 3');
    newNode.addNode('node 4');

console.log(newNode.vertices.length);
    expect(newNode.size()).toBe(4);
  })
})