/*
 * 数字转化为带三位逗号的字符串
 * @param number num 数字
 * @param string type 类型 1.正常 2.保留两位小数
 */
function numFormat(num, type='1'){
  if(type === '2' || type === 2){
    num = num.toFixed(2);
  }
  const res=num.toString().replace(/\d+/, function(n){ // 先提取整数部分
    return n.replace(/(\d)(?=(\d{3})+$)/g,function($1){
      return $1+",";
    });
  })
  return res;
}

/*
 * 生成从minNum到maxNum的随机数
 * @param number minNum 最小值
 * @param number maxNum 最大值
 */
function randomNum(minNum,maxNum){
  switch(arguments.length){
    case 1:
      return parseInt(Math.random()*minNum+1,10);
    case 2:
      if((maxNum-minNum) > 0){
        return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
      }else{
        return 0;
      }
    default:
      return 0;
  }
}



exports.numFormat = numFormat;
exports.randomNum = randomNum;
exports.__esModule = true;
