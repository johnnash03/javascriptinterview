/* 
[
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0]
]
Output: [2, 1, 5, 2, 2]
*/

const create2dArray = (rows, columns, defaultValue) =>
  [...Array(rows).keys()].map((i) => Array(columns).fill(defaultValue));

function riverSizes(matrix) {
  // Write your code here.
  const rowLen = matrix.length;
  const colLen = matrix[0].length;
  let visited = create2dArray(rowLen, colLen, false);
  let sizeArr = [];
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (!visited[i][j] && matrix[i][j] === 1) {
        let size = traverse(i, j, matrix, visited);
        sizeArr.push(size);
      }
    }
  }
  return sizeArr;
}

function traverse(i, j, matrix, visited) {
  if (invalid(i, j, matrix, visited)) return 0;
  visited[i][j] = true;
  return (
    1 +
    traverse(i + 1, j, matrix, visited) +
    traverse(i, j + 1, matrix, visited) +
    traverse(i - 1, j, matrix, visited) +
    traverse(i, j - 1, matrix, visited)
  );
}

function invalid(x, y, matrix, visited) {
  if (x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length) {
    return true;
  }
  if (visited[x][y] || matrix[x][y] === 0) {
    return true;
  }
  return false;
}
