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

/*
 * 手机号验证
 * @param number phone 手机号
 */
function checkPhone(phone){
  if(/^1[34578]\d{9}$/.test(phone)){
    return true;
  } else {
    return false;
  }
}

/*
 * 固定电话
 * @param number tel 电话号吗
 */
function checkTel(tel){
  if(/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(tel)){
    return true;
  } else {
    return false;
  }
}

/*
 * 身份证验证
 * @param number idCard 省份证号码
 */
function checkIDCard(idCard){
  const length = idCard.length;
  if(length === 15){
    if(/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/.test(idCard)){
      return true;
    } else {
      return false;
    }
  }
  if(length === 18){
    if(/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/.test(idCard)){
      return true;
    } else {
      return false;
    }
  }
  return false;
}

exports.numFormat = numFormat;
exports.randomNum = randomNum;
exports.checkPhone = checkPhone;
exports.checkTel = checkTel;
exports.checkIDCard = checkIDCard;
exports.__esModule = true;
