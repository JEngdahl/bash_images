const Image = require('./Image');

let matrix = [];
const columns = 40;
const rows = 4;
const interval = (231 - 16) / (columns * rows);
for (let i = 0; i < rows; i++) {
  let row = [];
  for (let j = 0; j < columns; j++) {
    row.push(Math.floor(16 + j * interval * (i + 1)));
  }
  matrix.push(row);
}

const image = new Image({
  matrix: matrix
});
console.log(image.render())
