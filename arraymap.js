var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var indexPosition;

var result = input.map(
  function (arr) {
    var currentX = arr.x;
    var currentY = arr.y;
    var squaredZ = Math.pow(currentX, 2) + Math.pow(currentY, 2);
    var outputZ = Math.sqrt(squaredZ);
    return outputZ;
  }
);


console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);