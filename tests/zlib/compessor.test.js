const expect = require('chai').expect;
const FileStreamWritter = require('../../lib/filestream/filestreamWritter');
const compressor = require('../../lib/compressor/compressor');

const inputFile = './tests/zlib/output/testfile.txt';

describe('Compressor', () => {
    it('should write to a file and compress data', () => {
        let fileStreamWritter = new FileStreamWritter(inputFile);
        fileStreamWritter
            .createOutputFileStream(inputFile)
            .writeToFileStream('input data to test file')
            .close();
            
        // for (var i = 0; i < 1000; i++)
        //     fileStreamWritter.writeToFileStream('input data to test file');

        //fileStreamWritter.close();

        let result = compressor.compress(fileStreamWritter.fileName);
        expect(result).to.equal(true);
    })
})