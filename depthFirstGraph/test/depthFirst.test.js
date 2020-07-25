'use strict';

const Graph = require('../depthFirstGraph');

describe('Happy Path of depthFirst', () =>{
  it('it successfully add edges' , () =>{
    let graph = new Graph();
    graph.addEdge('A' , 'B');
    graph.addEdge('C' , 'D');
    graph.addEdge('E' , 'F');

    expect(graph).toEqual(true);
  })
})