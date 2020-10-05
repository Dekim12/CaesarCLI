const { pipeline } = require('stream');

const { argsExtractor, validateArguments } = require('./helpers');
const { getReadStream, getWriteStream, getTransformStream } = require('./streams');
const { ACTIONS } = require('./constants');

const args = argsExtractor();

const startCode = (err, args) => {
  if (!err) {
    const { shiftNumber, action, inputFile, outputFile } = args;

    const shift = action === ACTIONS.encode ? +shiftNumber : -shiftNumber;

    const readStream = getReadStream(inputFile);
    const writeStream = getWriteStream(outputFile);
    const transformStream = getTransformStream(shift);

    pipeline(readStream, transformStream, writeStream, (err) => {
      if (err) {
        process.stderr.write(`\nError: Sorry, something went wrong.\n\n`);
      }
    });
  }
};

validateArguments(args, startCode);
