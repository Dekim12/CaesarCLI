const ARGS_NAMES = {
  '--shift': 'shiftNumber',
  '-s': 'shiftNumber',
  '--output': 'outputFile',
  '-o': 'outputFile',
  '--input': 'inputFile',
  '-i': 'inputFile',
  '--action': 'action',
  '-a': 'action',
};

const CHAR_COUNT = 26;

const UPPERCASE_CHAR_RANGE = {
  min: 65,
  max: 90,
};

const LOWERCASE_CHAR_RANGE = {
  min: 97,
  max: 122,
};

module.exports = { ARGS_NAMES, CHAR_COUNT, UPPERCASE_CHAR_RANGE, LOWERCASE_CHAR_RANGE };
