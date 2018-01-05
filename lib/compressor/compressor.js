const zlib = require('zlib');

const gzip = zlib.createGzip();
const fs = require('fs');

const compress = (output) => {
  const inputFile = fs.createReadStream(output);
  const outputFile = fs.createWriteStream(`${output}.gz`);
  inputFile.pipe(gzip).pipe(outputFile);
  return true;
};

module.exports = { compress };
