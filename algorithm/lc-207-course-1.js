var canFinishFirst = function (numCourses, prerequisites) {
  // Let's create an adjacency list first.
  // Should we use a map to create adjacency list
  let adjList = new Map();
  for (let i = 0; i < numCourses; i++) {
    adjList.set(i, []);
  }
  for (let prerequisite of prerequisites) {
    if (adjList.has(prerequisite[0])) {
      adjList.set(prerequisite[0], [
        ...adjList.get(prerequisite[0]),
        prerequisite[1],
      ]);
    }
  }

  // Three states, we need to maintain
  // UNVISITED, VISITING, VISITED

  // Filling out the status felt like pain. Optimize this one.
  let status = new Map();
  for (let i = 0; i < numCourses; i++) {
    status.set(i, "UNVISITED");
  }
  // console.log("status", status);
  // Do a dfs for each of these nodes.

  function dfs(node) {
    // Here, we rely on return value of dfs. Important to consider
    let currentStatus = status.get(node);
    // Explain this line

    /* 
      @Feynman: 
    */
    if (currentStatus === "VISITED") return true;

    /* 
      @Feynman:
    */
    if (currentStatus === "VISITING") return false;
    status.set(node, "VISITING");
    console.log("node", adjList, node);
    for (let i = 0; i < adjList.get(node).length; i++) {
      let neighbour = adjList.get(node)[i];
      // Is this condition correct?
      /*  
        @Feynman
        If the return value of the dfs of this neighbour is false,then dfs(node) return value is also false.
        Since, the node has dependency on neighbour 
      */
      if (!dfs(neighbour)) return false;
    }

    // Understanding this that for the curr node dfs finished here. Need to mark completed.
    /* 
      @Question: 
      @Feynman: 
    */
    status.set(node, "VISITED");
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }
  return true;
  // console.log("adjList", adjList, status);
};

var canFinish = function (numCourses, prerequisites) {
  // first item -> dependant course(same as in the prerequisites array)
  const adjList = Array.from({ length: numCourses }, () => []);
  for (let prerequisite of prerequisites) {
    console.log("prerequisite", prerequisite[0], prerequisite[1]);
    adjList[prerequisite[0]].push(prerequisite[1]);
  }
  console.log("adjList", adjList);

  const statuses = Array.from({ length: numCourses }, () => "UNVISITED");
  console.log("statuses", statuses);

  // dfs(node) => everything reachable from node is cycle free

  function dfs(node) {
    if (statuses[node] === "VISITING") return false;
    if (statuses[node] === "VISITED") return true;
    statuses[node] = "VISITING";
    for (let i = 0; i < adjList[node].length; i++) {
      let nei = adjList[node];
      if (!dfs(nei)) return false;
    }
    statuses[node] = "VISITED";
    return true;
  }
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }
  return true;
};

console.log(
  canFinish(5, [
    [0, 1],
    [1, 4],
    [2, 4],
    [3, 1],
    [3, 2],
  ])
);
