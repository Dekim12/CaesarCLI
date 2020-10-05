const { CHAR_COUNT, UPPERCASE_CHAR_RANGE, LOWERCASE_CHAR_RANGE } = require('../constants');

const defineIsLetter = (charCode) =>
  (charCode >= UPPERCASE_CHAR_RANGE.min && charCode <= UPPERCASE_CHAR_RANGE.max) ||
  (charCode >= LOWERCASE_CHAR_RANGE.min && charCode <= LOWERCASE_CHAR_RANGE.max);

const defineIsLowercase = (charCode) => charCode >= LOWERCASE_CHAR_RANGE.min;

const codeChar = (char, shift = 0) => {
  const charCode = char.charCodeAt();

  if (!defineIsLetter(charCode)) {
    return char;
  }

  const isLowercase = defineIsLowercase(charCode);
  const codeDifference = isLowercase ? LOWERCASE_CHAR_RANGE.min : UPPERCASE_CHAR_RANGE.min;
  let encodedCharCode = charCode - codeDifference + shift;

  if (encodedCharCode >= CHAR_COUNT) {
    encodedCharCode %= CHAR_COUNT;
  } else if (encodedCharCode < 0) {
    encodedCharCode = (encodedCharCode % CHAR_COUNT) + CHAR_COUNT;
  }

  return String.fromCharCode(codeDifference + encodedCharCode);
};

const toCode = (input, shift) =>
  input
    .split('')
    .map((char) => codeChar(char, shift))
    .join('');

module.exports = toCode;
