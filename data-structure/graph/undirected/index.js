const Graph = require("./Graph");
const {
  breadthFirstSearchTechnique,
  depthFirstSearchTechnique,
} = require("./TraversalTechnique");

const graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
graph.addEdge("D", "A");

graph.display();
new breadthFirstSearchTechnique(graph.nodes, "A").implement();
new depthFirstSearchTechnique(graph.nodes, "A").implement();
