const {
  randomWords
} = require('../index');


console.log('randomWords(20)：'+randomWords(20)); //生成20位的随机字符串
console.log('randomWords(3,25)：'+randomWords(3,25)); //生成3-25位的随机字符串

console.log('randomWords(25,25,false)：'+randomWords(25,25,false)); //生成不包含数字的25位的随机字符串
console.log('randomWords(5,25,false)：'+randomWords(5,25,false)); //生成不包含数字的5-25位的随机字符串
