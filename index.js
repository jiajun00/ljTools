var date = require('./date.js')
var number = require('./number.js')
var string = require('./string.js')
var array = require('./array.js')

module.exports = exports = {
  ...number,
  ...string,
  ...array,
  ...date
}

Object.defineProperty(exports, "__esModule", {
  value: true
});