var date = require('./date.js');
var number = require('./number.js');
var string = require('./string.js');
var array = require('./array.js');
var scripts = require('./loadscript.js');

Object.defineProperty(exports, "__esModule", {
  value: true
});

module.exports = exports = {
  ...number,
  ...string,
  ...array,
  ...date,
  ...scripts
}