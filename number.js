/*
 * 数字转化为带三位逗号的字符串
 * @param number num 数字
 * @param string type 类型 1.正常 2.保留两位小数
 */
function numFormat(num, type='1'){
  if(type === '2'){
    num = num.toFixed(2);
  }
  const res=num.toString().replace(/\d+/, function(n){ // 先提取整数部分
    return n.replace(/(\d)(?=(\d{3})+$)/g,function($1){
      return $1+",";
    });
  })
  return res;
}




exports.numFormat = numFormat;
exports.__esModule = true;
