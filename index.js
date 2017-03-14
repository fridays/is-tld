const tlds = require('tld-list')

module.exports = string => tlds.indexOf(string) !== -1
