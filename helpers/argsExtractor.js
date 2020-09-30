const { ARGS_NAMES } = require('../constants');

const argsExtractor = () => {
  const argsList = process.argv.slice(2);
  const scriptParams = {};

  for (let i = 0; i < argsList.length; i += 2) {
    const paramName = ARGS_NAMES[argsList[i]];

    if (paramName) {
      const valueIndex = i + 1;
      scriptParams[paramName] = argsList[valueIndex];
    }
  }

  return scriptParams;
};

module.exports = argsExtractor;
