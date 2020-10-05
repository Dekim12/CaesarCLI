const fs = require('fs');
const { pipeline, Transform } = require('stream');

const { toCode } = require('../helpers');

const getTransformStream = (shift) => {
  const transformStream = new Transform();

  transformStream._transform = (chunk, encoding, callback) => {
    try {
      callback(null, toCode(chunk.toString(), shift) + '\r\n');
    } catch (err) {
      callback(err);
    }
  };

  return transformStream;
};

module.exports = getTransformStream;
