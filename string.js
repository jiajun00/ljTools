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

exports.str_space = str_space;
exports.val_empty = val_empty;
exports.str_cut = str_cut;
exports.isInstr = isInstr;