const fs = require('fs');
const { ACTIONS } = require('../constants');

const validateFiles = (existingFile, possibleFile, args, callback) => {
  fs.access(existingFile, fs.constants.W_OK, (err) => {
    if (err) {
      callback(new Error());
      process.stderr.write(`\nError: InputFile isn't exist or you haven't access to it.\n\n`);

      return process.exit(1);
    }

    if (possibleFile) {
      fs.access(possibleFile, fs.constants.W_OK, (err) => {
        if (err) {
          callback(new Error());
          process.stderr.write(`\nError: OutputFile isn't exist or you haven't access to it.\n\n`);

          return process.exit(1);
        }

        callback(null, args);
      });
    } else {
      callback(null, args);
    }
  });
};

const validateArguments = (args, callback) => {
  const { shiftNumber, action, inputFile, outputFile } = args;

  if (!shiftNumber || !action) {
    callback(new Error());
    process.stderr.write('\nError: "shift" and "action" parameters are required!\n\n');

    return process.exit(1);
  } else if (isNaN(+shiftNumber)) {
    callback(new Error());
    process.stderr.write(
      `\nError: Parameter "shift" isn't correct. It should be a positive or a negative number Please check!\n\n`
    );

    return process.exit(1);
  } else if (action !== ACTIONS.encode && action !== ACTIONS.decode) {
    callback(new Error());
    process.stderr.write(
      `\nError: Parameter "action" isn't correct. It should be "encode" or "decode" string. Please check!\n\n`
    );

    return process.exit(1);
  } else if (inputFile) {
    return validateFiles(inputFile, outputFile, args, callback);
  } else if (outputFile) {
    return validateFiles(outputFile, inputFile, args, callback);
  } else if (!inputFile && !outputFile) {
    return callback(null, args);
  }
};

module.exports = validateArguments;
