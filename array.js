/*
 * 获取数组最大值
 * @param array arr 数组
 */
function arr_max(arr) {
  return Math.max.apply(Math, arr);
}

/*
 * 获取数组最小值
 * @param array arr 数组
 */
function arr_min(arr) {
  return Math.min.apply(Math, arr);
}

/*
 * 输入数组，会随机抽取数组中的一个值输出
 */
function arr_random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


exports.arr_max = arr_max;
exports.arr_min = arr_min;
exports.arr_random = arr_random;