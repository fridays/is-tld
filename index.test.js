/* global test, expect */
const isTld = require('./index')

test('"com" is a tld', () => {
  expect(isTld('com')).toBe(true)
})

test('"_" is not a tld', () => {
  expect(isTld('_')).toBe(false)
})
