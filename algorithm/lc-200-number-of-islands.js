var numIslands = function (grid) {
  // How to determine m,n
  let m = grid.length;
  let n = grid[0].length;
  const DIRS = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
  ];
  function isValidCell(node) {
    if (node[0] >= 0 && node[0] < m && node[1] >= 0 && node[1] < n) return true;
    return false;
  }

  let seen = Array.from({ length: m }, () => Array(n).fill(false));
  let q = [];
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // where should I mark it visited.

      // Should the queue be single dimensional or multi dimensional
      // Do I need to mark 0 as seen as well?
      // Where should I mark seen[i][j] = true;
      if (!seen[i][j] && grid[i][j] === "1") {
        q.push([i, j]);
        seen[i][j] = true;
        // Where should I increase the island count?
        count++;
        while (q.length !== 0) {
          // console.log("queue", q);
          // Where to pop the queue?
          // Where to check for 1's and 0's
          // What happens if it is 1, what happens if it is 0.
          let currNode = q.shift();

          // visit all the neighbours of the currNode
          // currNode is of the form [i, j] of course
          // So, push all the valid neighbours to the queue
          for (let dir of DIRS) {
            let neighbourX = currNode[0] + dir[0];
            let neighbourY = currNode[1] + dir[1];
            let neighbour = [neighbourX, neighbourY];
            let shouldTraverse =
              isValidCell(neighbour) &&
              !seen[neighbourX][neighbourY] &&
              grid[neighbourX][neighbourY] === "1";
            console.log(
              currNode,
              neighbour,
              shouldTraverse,
              isValidCell(neighbour)
              // !seen[neighbourX][neighbourY],
              // grid[neighbourX][neighbourY] === "1"
            );

            if (shouldTraverse) {
              // console.log("isvalidcell", neighbour);
              q.push([neighbourX, neighbourY]);
              seen[neighbourX][neighbourY] = true;
            }
          }
        }
      }
    }
  }
  return count;
};

const grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

// Better solution

function numIslandsBetterBfs(grid) {
  const m = grid.length;
  if (m === 0) return 0;
  const n = grid[0].length;

  const DIRS = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const seen = Array.from({ length: m }, () => Array(n).fill(false));

  let count = 0;
  const q = [];

  const inBounds = (r, c) => r >= 0 && r < m && c >= 0 && c < n;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1" && !seen[i][j]) {
        // new island found
        count++;
        q.length = 0; // reuse queue (optional)
        q.push([i, j]);
        seen[i][j] = true; // mark on enqueue

        let head = 0;
        while (head < q.length) {
          const [r, c] = q[head++];
          for (const [dr, dc] of DIRS) {
            const nr = r + dr,
              nc = c + dc;
            if (!inBounds(nr, nc)) continue;
            if (grid[nr][nc] !== "1") continue; // water
            if (seen[nr][nc]) continue; // already discovered
            seen[nr][nc] = true; // mark when enqueuing
            q.push([nr, nc]);
          }
        }
      }
    }
  }
  return count;
}

function numIslandsDfs(grid) {
  let rowsNum = grid.length;
  let colsNum = grid[0].length;
  let count = 0;
  const DIRS = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const seen = Array.from({ length: rowsNum }, () =>
    Array(colsNum).fill(false)
  );

  function dfs([x, y]) {
    // When will this dfs function return?

    for (const dir of DIRS) {
      let neighbourX = x + dir[0];
      let neighbourY = y + dir[1];
      let isInBound =
        neighbourX >= 0 &&
        neighbourX < rowsNum &&
        neighbourY >= 0 &&
        neighbourY < colsNum;

      if (
        isInBound &&
        grid[neighbourX][neighbourY] === "1" &&
        !seen[neighbourX][neighbourY]
      ) {
        // Should seen be marked only here
        seen[neighbourX][neighbourY] = true;
        console.log("doing dfs", neighbourX, neighbourY);
        dfs([neighbourX, neighbourY]);
      }
    }
  }
  for (let i = 0; i < rowsNum; i++) {
    for (let j = 0; j < colsNum; j++) {
      if (!seen[i][j] && grid[i][j] === "1") {
        count++;
        dfs([i, j]);
      }
    }
  }
  return count;
}
numIslandsDfs(grid);
