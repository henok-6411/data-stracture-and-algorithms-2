'use strict'

const Graph =  require('../breadthFirstGraph');

describe('Happy path of breadthFirst search', () =>{
  it('it successfully search breathFirst and return value' , () => {
    let graph = new Graph();
    graph.addNode('pandora');
    graph.addNode('Arendelle');
    graph.addNode('Metroville');
    graph.addNode('Monstroplolis');
    graph.addNode('Narnia');
    graph.addNode('Naboo');

    expect(graph.BreadthFirst).toEqual([Pandora, Arendelle, Metroville, Monstroplolis, Narnia, Naboo])
  })
})