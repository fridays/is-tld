# is-tld

[![Build Status](https://travis-ci.org/fridays/is-tld.svg?branch=master)](https://travis-ci.org/fridays/is-tld) [![npm version](https://d25lcipzij17d.cloudfront.net/badge.svg?id=js&type=6&v=1.0.1&x2=0)](https://www.npmjs.com/package/next-routes)

Returns `true` if a value is a top-level domain

## Installation

```bash
npm install --save is-tld
```

## Usage

```javascript
const isTld = require('is-tld')

isTld('com') // true
isTld('_') // false
```

## Credits

> [tld-list](https://www.npmjs.com/package/tld-list) A list of all valid top-level domains updated from time to time.
