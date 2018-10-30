# ljTools
![](https://img.shields.io/badge/ljTools-1.0.4-green.svg)
![](https://img.shields.io/travis/antvis/g2.svg)
![](https://img.shields.io/badge/language-javascript-red.svg)
![](https://img.shields.io/badge/license-MIT-000000.svg)
![](https://img.shields.io/badge/ECMAScipt-6-orange.svg)

ljTools 是一套处理数据的常用函数工具包，简化数据处理。具有高度的易用性和复用性，用户无需关注各种繁琐的实现细节，一条语句即可构建出需要的结果。

## 安装
```bash
npm install -save ljtools
```

## Document
[Wiki文档](https://github.com/jiajun00/ljTools/wiki)

[npm package](https://www.npmjs.com/package/ljtools)

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

&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;instr（字符串）所包含的字符串

```javascript
import { isInstr } from 'ljTools';

const max = isInstr(str, instr);
```
## License
   [MIT](http://opensource.org/licenses/MIT)
   
   Copyright (c) 2018-present, jiajun00