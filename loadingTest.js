const Image = require('./Image');

let film = [];
const frames = 6;
const columns = 6;
const rows = 6;
//const interval = Math.ceil((225 - 16) / (columns * rows * frames));

for (let i = 0; i < frames; i++) {
  let matrix = [];
  for (let j = 0; j < rows; j++) {
    let row = [];
    for (let k = 0; k < columns; k++) {
      const color = 16 + 36 * j + 6 * i + k;
      row.push(color);
      row.push(color);
      row.push(color);
    }
    matrix.push(row);
  }
  let image = new Image({matrix});
  film.push(image.render());
}
  film = film.concat(film.slice(1, film.length - 1).reverse());

let frame = 0;

setInterval(function() {
  //console.log('new frame');
  process.stdout.write('\033c');
  process.stdout.write(film[frame]);
  //process.stdout.clearLine();
  //process.stdout.clearLine();
  //process.stdout.clearLine();
  //process.stdout.clearLine();
  frame += 1;
  frame %= film.length;
}, 100);
