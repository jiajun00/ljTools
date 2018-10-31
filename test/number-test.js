const {
  numFormat,
  randomNum
} = require('../index.js');

console.log('numFormat(4567123,\'1\'):' + numFormat(4567123, '1'));

console.log('numFormat(4567123,\'2\'):' + numFormat(4567123, '2'));


console.log('randomNum:' + randomNum(100,200));
