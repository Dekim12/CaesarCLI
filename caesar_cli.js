const { argsExtractor, codeChar } = require('./helpers');

'This is secret.'.split('').forEach((letter) => console.log(codeChar(letter, 7)));
