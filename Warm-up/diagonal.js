// var arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

var arr = [
    [3,0,1],
    [9,5,6],
    [7,4,2]
]

var length = arr.length;
var leftDiagonal = 0;
var rightDiagonal = 0;
var result = 0;

function diagonalOfMatrix(arr) {
  if (!arr) return 0;

  for (let i = 0; i < length; i++) {
    leftDiagonal += arr[i][i];
    rightDiagonal += arr[length - 1 - i][i];
  }
  console.log("Left Diagonal Sum",leftDiagonal)
  console.log("Right diagonal Sum",rightDiagonal)
  result = Math.abs(leftDiagonal - rightDiagonal);

  return result;
}

console.log(diagonalOfMatrix(arr));
