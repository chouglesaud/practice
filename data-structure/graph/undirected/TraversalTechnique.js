class TraversalTechnique {
  constructor(nodes, startingNode) {
    this.startingNode = startingNode;
    this.nodes = nodes;
  }
}

class breadthFirstSearchTechnique extends TraversalTechnique {
  constructor(nodes, startingNode) {
    super(nodes, startingNode);
  }
  implement() {
    let visitedNode = [];
    let queue = [];

    visitedNode[this.startingNode] = true;
    queue.push(this.startingNode);

    while (queue.length > 0) {
      const currentNode = queue.shift();

      console.log(currentNode);

      const adjacencyListOfCurrentNode = this.nodes[currentNode].getAdjacent();

      for (let node of adjacencyListOfCurrentNode) {
        if (!visitedNode[node]) {
          visitedNode[node] = true;
          queue.push(node);
        }
      }
    }
  }
}

class depthFirstSearchTechnique extends TraversalTechnique {
  constructor(nodes, startingNode) {
    super(nodes, startingNode);
  }
  implement() {
    let visitedNode = [];
    this.dfsRecursion(this.startingNode, visitedNode);
  }
  dfsRecursion(currentNode, visitedNode) {
    visitedNode[currentNode] = true;

    console.log(currentNode);

    let adjacencyListOfCurrentNode = this.nodes[currentNode].getAdjacent();

    for (var node of adjacencyListOfCurrentNode) {
      if (!visitedNode[node]) this.dfsRecursion(node, visitedNode);
    }
  }
}

module.exports = { breadthFirstSearchTechnique, depthFirstSearchTechnique };
