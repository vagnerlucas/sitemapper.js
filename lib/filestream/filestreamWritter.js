const fs = require('fs');

function FileStreamWritter(fileName) {
  this.fileName = fileName;

  this.createOutputFileStream = () => {
    this.outPutFileStream = fs.createWriteStream(this.fileName);
    return this;
  };

  this.writeToFileStream = data => {
    this.outPutFileStream.write(data);
    return this;
  };

  this.close = () => {
    this.outPutFileStream.end();
    return this;
  };
}

module.exports = FileStreamWritter;
