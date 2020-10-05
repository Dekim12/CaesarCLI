const fs = require('fs');
const { ACTIONS } = require('../constants');

const validateArguments = (args, callback) => {
  const { shiftNumber, action, inputFile, outputFile } = args;

  if (!shiftNumber || !action) {
    callback(new Error());

    return process.stderr.write('\nError: "shift" and "action" parameters are required!\n\n');
  } else if (isNaN(+shiftNumber)) {
    callback(new Error());

    return process.stderr.write(
      `\nError: Parameter "shift" isn't correct. It should be a positive or a negative number Please check!\n\n`
    );
  } else if (action !== ACTIONS.encode && action !== ACTIONS.decode) {
    callback(new Error());

    return process.stderr.write(
      `\nError: Parameter "action" isn't correct. It should be "encode" or "decode" string. Please check!\n\n`
    );
  } else if (inputFile) {
    fs.access(inputFile, fs.constants.W_OK, (err) => {
      if (err) {
        callback(new Error());

        return process.stderr.write(
          `\nError: InputFile isn't exist or you haven't access to it.\n\n`
        );
      }

      if (outputFile) {
        fs.access(outputFile, fs.constants.W_OK, (err) => {
          if (err) {
            callback(new Error());

            return process.stderr.write(
              `\nError: OutputFile isn't exist or you haven't access to it.\n\n`
            );
          }

          callback(null, args);
        });
      } else {
        callback(null, args);
      }
    });
  } else if (outputFile) {
    fs.access(outputFile, fs.constants.W_OK, (err) => {
      if (err) {
        callback(new Error());

        return process.stderr.write(
          `\nError: OutputFile isn't exist or you haven't access to it.\n\n`
        );
      }

      if (inputFile) {
        fs.access(inputFile, fs.constants.W_OK, (err) => {
          if (err) {
            callback(new Error());

            return process.stderr.write(
              `\nError: InputFile isn't exist or you haven't access to it.\n\n`
            );
          }

          callback(null, args);
        });
      } else {
        callback(null, args);
      }
    });
  }
  if (!inputFile && !outputFile) {
    callback(null, args);
  }
};

module.exports = validateArguments;
