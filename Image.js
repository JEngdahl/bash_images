//a color is a number in the range [0, 256)
//an image is an array of arrays of colors
//a row is an array in an image
//an image is an array of rows
//rows is the number of rows in an image
//columns is the number of colors in a row

class Image {
  constructor({matrix = [], rows = matrix.length, columns = matrix[0].length}) {
    this.matrix = [];
    for (let i = 0; i < rows; i++) {
      let row = [];
      for (let j = 0; j < columns; j++) {
        if (matrix) {
          row.push(new Color(matrix[i][j]));
        } else {
          row.push(new Color(41));
        }
      }
      this.matrix.push(row);

    }
  }

  render() {
    const black = new Color(0);
    return this.matrix.reduce((str, row) => {
      let line = ""
      row.forEach(color => {
        line += color.bashSequence() + " ";
      });
      line += black.bashSequence();
      return str + "\n" + line;
    }, "");
  }

}

class Color {
  constructor(c) { //c >= 0 && c <256
    this.value = c;
  }

  bashSequence() {
    const displayChar = "S"; //can become a variable to support text on top of background
    return `\x1b[48;5;${this.value}m`
  }
}

module.exports = Image;
