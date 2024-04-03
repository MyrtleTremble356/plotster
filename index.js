const getArraySum = require('./getArraySum')
const uniqueArray = require('./uniqueArray')
const getCurrentTimestamp = require('./getCurrentTimestamp')
const randomColor = require('./randomColor')

module.exports = (obj) => {
    return JSON.parse(JSON.stringify(obj));
  }