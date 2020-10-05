const fs = require('fs');

const getWriteStream = (path) => {
  if (path) {
    return fs.createWriteStream(path, { flags: 'a' });
  }

  process.stdout.write('\n');

  return process.stdout;
};

module.exports = getWriteStream;
