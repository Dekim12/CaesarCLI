const fs = require('fs');

const getReadStream = (path) => {
  if (path) {
    return fs.createReadStream(path);
  }

  console.clear();

  return process.stdin;
};

module.exports = getReadStream;
