function removeIslands(matrix) {
  let vis = new Array(matrix.length);
  for (let i = 0; i < vis.length; i++) {
    vis[i] = new Array(matrix[0].length).fill(0);
  }
  for (let i = 0; i < matrix[0].length; i++) {
    if (!vis[0][i]) dfs(0, i, vis, matrix);
  }
  for (let i = 0; i < matrix.length; i++) {
    if (!vis[i][0]) dfs(i, 0, vis, matrix);
  }
  for (let i = 0; i < matrix.length; i++) {
    if (!vis[i][matrix[0].length - 1])
      dfs(i, matrix[0].length - 1, vis, matrix);
  }
  for (let i = 0; i < matrix[0].length; i++) {
    if (!vis[matrix.length - 1][i]) dfs(matrix.length - 1, i, vis, matrix);
  }
  for (let i = 1; i < matrix.length - 1; i++) {
    for (let j = 1; j < matrix[0].length - 1; j++) {
      if (matrix[i][j] === 1 && vis[i][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
}

function dfs(i, j, vis, matrix) {
  if (!vis[i][j] && matrix[i][j] === 1) {
    vis[i][j] = 1;
    if (j + 1 < matrix.length) {
      dfs(i, j + 1, vis, matrix);
    }
    if (i + 1 < matrix.length) {
      dfs(i + 1, j, vis, matrix);
    }
    if (i - 1 >= 0) {
      dfs(i - 1, j, vis, matrix);
    }
    if (j - 1 >= 0) {
      dfs(i, j - 1, vis, matrix);
    }
  }
  return;
}
