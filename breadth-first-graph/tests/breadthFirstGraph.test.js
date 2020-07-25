'use strict'

const Graph =  require('../breadthFirstGraph');

describe('Happy path of breadthFirst search', () =>{
  it('it successfully search breathFirst and return value' , () => {
    let graph = new Graph();
    newGraph.setStart('pandora');
    newGraph.setStart('arendelle');
    newGraph.setStart('metraville');
    newGraph.setStart('monstroplis');
    newGraph.setStart('narria');
    newGraph.setStart('naboo');

    expect(graph.BreadthFirst).toEqual([Pandora, Arendelle, Metroville, Monstroplolis, Narnia, Naboo])
  })
})