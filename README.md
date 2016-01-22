# dora-plugin-json-server

[![NPM version](https://img.shields.io/npm/v/dora-plugin-json-server.svg?style=flat)](https://npmjs.org/package/dora-plugin-json-server)
[![Build Status](https://img.shields.io/travis/dora-js/dora-plugin-json-server.svg?style=flat)](https://travis-ci.org/dora-js/dora-plugin-json-server)
[![Coverage Status](https://img.shields.io/coveralls/dora-js/dora-plugin-json-server.svg?style=flat)](https://coveralls.io/r/dora-js/dora-plugin-json-server)
[![NPM downloads](http://img.shields.io/npm/dm/dora-plugin-json-server.svg?style=flat)](https://npmjs.org/package/dora-plugin-json-server)

[json-server](https://github.com/typicode/json-server) plugin for dora.

---

## Usage

```bash
$ npm i dora dora-plugin-json-server -D
$ ./node_modules/.bin/dora --plugins json-server
```

## Test

```bash
$ npm test
```

## Options

- `router` - Specify file path or url as db, Default `json-server.json`
- `mount` - Path to mount, Default `/api`

## LICENSE

MIT
