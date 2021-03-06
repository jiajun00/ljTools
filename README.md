# ljTools
![](https://img.shields.io/badge/ljTools-1.0.9-green.svg)
![](https://img.shields.io/badge/build-passing-yellow.svg)
![](https://img.shields.io/badge/language-javascript-red.svg)
![](https://img.shields.io/badge/license-MIT-000000.svg)
![](https://img.shields.io/badge/ECMAScipt-6-orange.svg)

ljTools 是一套处理数据的常用函数工具包，简化数据处理。具有高度的易用性和复用性，用户无需关注各种繁琐的实现细节，一条语句即可构建出需要的结果。
包括：
- 日期类型，获取年月日、获取星期、将日期转为时间戳、将时间戳转为日期；
- Number类型，数字转化为带三位逗号的字符串、生成从最小值到最大值的随机数、手机号验证、座机号验证；
- 数组类型，获取数组最大值、获取数组最小值、输入数组随机抽取数组中的一个值输出；
- 字符串类型，判断值是否为null或者undefind、截取字符串、除去字符串中的空格、判断是否包函字符串、产生任意长度随机字母数字组合、邮箱验证；
- 文件类型，动态加载js文件


## 安装
```bash
npm install --save ljtools
```

## Document
[Wiki文档](https://github.com/jiajun00/ljTools/wiki/使用说明)

[GIT](https://github.com/jiajun00/ljTools)

[npm package](https://www.npmjs.com/package/ljtools)

[cnpm package](https://npm.taobao.org/package/ljtools)

## 使用方法

### 日期类型
* **获取年月日**

&emsp;&emsp; _方法：getNowDate(type)_

&emsp;&emsp; _参数：type（字符串） &emsp;默认'1'、输出格式（YYYY/MM/DD）;&emsp;&emsp;'2'、输出格式（YYYY/MM/DD）_
```javascript
import { getNowDate } from 'ljTools';

const date = getNowDate();
```
* **获取星期**

&emsp;&emsp; _方法：getWeek(type)_

&emsp;&emsp; _参数：type（字符串） &emsp;默认'1'、输出大写，如：日、一、二 ;&emsp;&emsp;'2'、输出数字，如：1、2、7_
```javascript
import { getWeek } from 'ljTools';

const date = getWeek();
```

* **将日期转为时间戳**

&emsp;&emsp; _方法：timeTostamp(time)_

&emsp;&emsp; _参数：time（字符串） &emsp;日期，如：'2018-10-10 17:55:32'_
```javascript
import { timeTostamp } from 'ljTools';

const stamp = timeTostamp('2018-10-10 17:55:32');
```

* **将时间戳转为日期**

&emsp;&emsp; _方法：stampTotime(stamp,type='1')_

&emsp;&emsp; _参数：stamp（字符串） &emsp;日期，如：'1234567890'_

&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;_type（字符串，可选） &emsp;默认'1'、YYYY/MM/DD h : m : s； '2'、YYYY-MM-DD h : m : s； '3'、YYYY/MM/DD； '4'、YYYY-MM-DD； '5'.h : m : s_
```javascript
import { stampTotime } from 'ljTools';

const time = stampTotime('1234567890');
```
### Number类型
* **数字转化为带三位逗号的字符串**

&emsp;&emsp; _方法：numFormat(num, type='1')_

&emsp;&emsp; _参数： num（数字）   
&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;type（字符串，可选） &emsp;默认'1'、正常;&emsp;&emsp;'2'、保留两位小数_
```javascript
import { numFormat } from 'ljTools';

const money = numFormat(num);
```
* **生成从最小值到最大值的随机数**

&emsp;&emsp; _方法：randomNum(minNum, maxNum)_

&emsp;&emsp; _参数： minNum（数字）最小值_   
&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;maxNum（数字） 最大值_
```javascript
import { randomNum } from 'ljTools';

const money = randomNum(minNum,maxNum);
```
* **手机号验证**

&emsp;&emsp; _方法：checkPhone(phone)_

&emsp;&emsp; _参数： phone（数字）手机号_

&emsp;&emsp; _返回值：bool型（true|false）_

```javascript
import { checkPhone } from 'ljTools';

if(checkPhone(phone)){
  console.log("验证成功！");
}else{
  console.log("验证失败！");
}
```
* **固定电话**

&emsp;&emsp; _方法：checkTel(tel)_

&emsp;&emsp; _参数： tel（数字）电话号码_

&emsp;&emsp; _返回值：bool型（true|false）_

```javascript
import { checkTel } from 'ljTools';

const bool = checkTel(tel);
```
* **身份证验证**

&emsp;&emsp; _方法：checkIDCard(idCard)_

&emsp;&emsp; _参数： idCard（数字）身份证号_

&emsp;&emsp; _返回值：bool型（true|false）_
```javascript
import { checkIDCard } from 'ljTools';

const bool = checkIDCard(idCard);
```
### 数组类型
* **获取数组最大值**

&emsp;&emsp; _方法：arr_max(arr)_

&emsp;&emsp; _参数： arr（数组）_
```javascript
import { arr_max } from 'ljTools';

const arr = ['1','5','7','12'];
const max = arr_max(arr);
```
* **获取数组最小值**

&emsp;&emsp; _方法：arr_min(arr)_

&emsp;&emsp; _参数： arr（数组）_
```javascript
import { arr_min } from 'ljTools';

const arr = ['1','5','7','12'];
const min = arr_min(arr);
```
* **输入数组随机抽取数组中的一个值输出**

&emsp;&emsp; _方法：arr_random(arr)_

&emsp;&emsp; _参数： arr（数组）_
```javascript
import { arr_random } from 'ljTools';

const arr = ['1','5','7','12'];
const random = arr_random(arr);
```

### 字符串类型
* **判断值是否为null或者undefind**

&emsp;&emsp; _方法：val_empty(val)_

&emsp;&emsp; _参数： val（字符串）_
```javascript
import { val_empty } from 'ljTools';

const max = val_empty(val);
```
* **截取字符串**

&emsp;&emsp; _方法：str_cut(str, length)_

&emsp;&emsp; _参数： str（字符串）_

&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;length（整数）截取字符串的长度
```javascript
import { str_cut } from 'ljTools';

const max = str_cut(str, length);
```
* **除去字符串中的空格**

&emsp;&emsp; _方法：str_space(str)_

&emsp;&emsp; _参数： str（字符串）_

```javascript
import { str_space } from 'ljTools';

const max = str_space(str);
```
* **判断是否包函字符串**

&emsp;&emsp; _方法：isInstr(str, instr)_

&emsp;&emsp; _参数： str（字符串）_

&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;_instr（字符串）所包含的字符串_

```javascript
import { isInstr } from 'ljTools';

const max = isInstr(str, instr);
```
* **产生任意长度随机字母数字组合**

&emsp;&emsp; _方法：randomWords(min, max=0, isNumber=true)_

&emsp;&emsp; _参数： min（数字）任意长度最小位[只填第一个参数生成固定位数]_

&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;_max（数字，可选）任意长度最大位_

&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;_isNumber（bool，可选）是否包含数字_

```javascript
import { randomWords } from 'ljTools';

randomWords(20); //生成20位的随机字符串
randomWords(3,25); //生成3-25位的随机字符串
randomWords(25,25,false); //生成不包含数字的25位的随机字符串
```
* **验证邮箱**

&emsp;&emsp; _方法：checkEmail(email)_

&emsp;&emsp; _参数： email（字符串）邮箱账号_

&emsp;&emsp;&ensp;_返回值：bool型（true|false）_
```javascript
import { checkEmail } from 'ljTools';

const email = '123@qq.com'
const bool = checkEmail(email); //true

```

### 文件类型
* **动态加载js文件**

&emsp;&emsp; _方法：loadScript(path, callback)_

&emsp;&emsp; _参数： path（字符串）js文件路径_

&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;_callback 回调方法(返回参数true和false)_

&emsp;&emsp;&ensp;注：异步方法

```javascript
import { loadScript } from 'ljTools';

const url = "https://xxx.xxx.com/xxx.js";
loadScript(url, (res)=>{
  if(res){
    console.log("成功!");
  }else{
    console.log("失败!");
  }
});
```
## License
   [MIT](http://opensource.org/licenses/MIT)
   
   Copyright (c) 2018-present, jiajun00