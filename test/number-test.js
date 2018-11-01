const {
  numFormat,
  randomNum,
  checkPhone,
  checkIDCard
} = require('../index.js');

console.log('numFormat(4567123,\'1\'):' + numFormat(4567123, '1'));

console.log('numFormat(4567123,\'2\'):' + numFormat(4567123, '2'));


console.log('randomNum:' + randomNum(100,200));


console.log('checkPhone:' + checkPhone('13629618142'));


console.log('checkIDCard:' + checkIDCard('130102199004178645'));



