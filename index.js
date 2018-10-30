var date = require('./date.js')
var number = require('./number.js')
var string = require('./string.js')
var array = require('./array.js')

module.exports = {
  ...number,
  ...string,
  ...array,
  ...date
}