var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };


/*
* 判断值是否为null或者undefind
* @param string val 字符串
*/
function val_empty(val) {
  if (val == null || typeof val == "undefined" || val == '') {
    return false;
  } else if ((typeof val === "undefined" ? "undefined" : _typeof(val)) == "object") {
    return true;
  } else {
    return true;
  }
}

/*
 * 截取字符串
 * @param string str 字符串
 * @param int length 截取长度
 */
function str_cut(str, length) {
  if (!val_empty(str)) {
    return '';
  }
  if (str.length > length) {
    str = str.slice(0, length) + '...';
  }
  return str;
}

/*
 * 除去字符串中的空格
 */
function str_space(str) {
  var result = str.replace(/(^\s+)|(\s+$)/g, "");
  return result.replace(/\s/g, "");
}
/*
 * 判断是否包函字符串
 * @param string str 字符串
 * @param string instr 所包含的字符串
 */
//判断是否包含字符串
function isInstr(str, instr) {
  if (typeof str !== 'string') {
    console.log('错误：这不是一个字符串');
    return false;
  }
  if (str.indexOf(instr) >= 0) {
    return true;
  } else {
    return false;
  }
}

/*
** randomWords 产生任意长度随机字母数字组合
** min-任意长度最小位[只填第一个参数生成的数为固定位数] max-任意长度最大位
** isNumber 是否包含数字
*/

function randomWords(min, max=0, isNumber=true){
  var str = "",
    range,
    arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  // 随机产生
  if(max > min){
    range = Math.round(Math.random() * (max-min)) + min;
  }else{
    range = min;
  }
  if(isNumber){
    arr.push('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
  }
  for(let i=0; i<range; i++){
    const pos = Math.round(Math.random() * (arr.length-1));
    str += arr[pos];
  }
  return str;
}

exports.str_space = str_space;
exports.val_empty = val_empty;
exports.str_cut = str_cut;
exports.isInstr = isInstr;
exports.randomWords = randomWords;
exports.__esModule = true;