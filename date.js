
  /*
   * 获取年月日
   * @param type 日期格式类型 1.YYYY/MM/DD 2.YYYY-MM-DD
   */
function getNowDate(type='1') {
  const myDate = new Date();
  const year = myDate.getFullYear();    //获取完整的年份(4位,1970-????)
  let month = myDate.getMonth() + 1;       //获取当前月份(0-11,0代表1月)
  if(month<=9){
    month = '0'+month;
  }
  let day = myDate.getDate();        //获取当前日(1-31)
  if(day<=9){
    day = '0'+day;
  }
  let date
  if( type === '1') {
    date = year + '/' + month + '/' + day;
  }
  if( type === '2') {
    date = year + '-' + month + '-' + day;
  }
  return date
}

  /*
   * 获取星期
   * @param type 日期格式类型 1.大写 2.数字
   */
function getWeek(type='1') {
  const myDate = new Date();
  const w = myDate.getDay();         //获取当前星期X(0-6,0代表星期天)
  if(type === '1'){
    return w+1;
  }
  if(type === '2'){
    const Week = ['日','一','二','三','四','五','六'];
    return Week[w];
  }
}

  /*
   * 获取星期
   * @param type 日期格式 1.YYYY/MM/DD h:m:s 2.YYYY-MM-DD h:m:s 3.YYYY/MM/DD 4.YYYY-MM-DD 5.h:m:s
   */
function stampTotime(timestamp , type='1') {
  const num = String(timestamp).length
  console.log(timestamp)
  if(num === 10){//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    timestamp = timestamp*1000;
  }
  var date = new Date(timestamp),
    Y = date.getFullYear(),
    M = date.getMonth()+1,
    D = date.getDate(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds();
  if(M<10){
    M = '0'+M;
  }
  if(D<10){
    D = '0'+D;
  }
  if(h<10){
    h = '0'+h;
  }
  if(m<10){
    m = '0'+m;
  }
  if(s<10){
    s = '0'+s;
  }
  let time;
  if( type === '1') {
    time = Y + '/' + M + '/' + D + " " + h + ':' + m + ':' + s;
  }
  if( type === '2') {
    time = Y + '-' + M + '-' + D + " " + h + ':' + m + ':' + s;
  }
  if( type === '3') {
    time = Y + '/' + M + '/' + D;
  }
  if( type === '4') {
    time = Y + '-' + M + '-' + D;
  }
  if( type === '5') {
    time = h + ':' + m + ':' + s;
  }
  return time;
}

function timeTostamp(time){
  const date = new Date(time.split(" "));//在苹果手机里这样使用会因为日期中间有空格导致结果为NaN,可以将日期分割然后进行转化
  const stamp =  date.getTime();
  return stamp;
}

exports.getNowDate = getNowDate;
exports.getWeek = getWeek;
exports.stampTotime = stampTotime;
exports.timeTostamp = timeTostamp;