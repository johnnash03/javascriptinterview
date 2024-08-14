function topologicalSort(jobs, deps) {
  const result = [];
  let totalDeps = 0;
  const adj = jobs.reduce((acc, val) => {
    acc[val] = {
      outNodes: [],
      indegree: 0,
    };
    return acc;
  }, {});
  for (let [u, v] of deps) {
    adj[u].outNodes.push(v);
    adj[v].indegree++;
    totalDeps++;
  }
  console.log(adj);
  // Push independent jobs that are not part dependencies to the result.
  for (const job of jobs) {
    if (!adj[job]) {
      result.push(job);
    }
  }

  const q = [];

  for (let job in adj) {
    if (adj[job].indegree === 0) {
      q.push(Number(job));
    }
  }
  let depsSeen = 0;

  // Push the item to queue only when it has indegree 0
  while (q.length) {
    let node = q.shift();
    result.push(node);

    for (nei of adj[node].outNodes) {
      depsSeen += 1;
      // Indgree decreases because the dependent task is already done and has 0 dependencies.
      adj[nei].indegree -= 1;
      // This task can now be done since all the dependencies are done.
      if (adj[nei].indegree === 0) {
        q.push(nei);
      }
    }
  }
  // Doubt: What's the deal with depsSeen. Probably if some dependency is not seen, it is not possible.
  if (depsSeen === totalDeps) return result;
  return [];
}

const output = topologicalSort(
  [1, 2, 3, 4],
  [
    [1, 2],
    [1, 3],
    [3, 2],
    [4, 2],
    [4, 3],
  ]
);

console.log("output", output);
