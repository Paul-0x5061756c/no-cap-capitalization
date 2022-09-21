# no-cap-capitalization

[Creator](https://github.com/Pauldb-Levarne) |
[SourceCode](https://github.com/Pauldb-Levarne/no-cap-capitalization)

## Installation


Using npm:
```shell
$ npm i -g npm
$ npm i no-cap-capitalization
```
Note: add `--save` if you are using npm < 5.0.0

In Node.js:
```js
// Load the full build.
const { capitalizeFirstLetter, capitalizeFirstLetterOfEveryWord } = require("no-cap-capitalization")
```


## Why no-cap-capitalization?

no-cap-capitalization makes it easy to uppercase your strings in JavaScript

## Usage


Examples:
```js
capitalizeFirstLetter("paul is awesome") // returns "Paul is awesome"
capitalizeFirstLetterOfEveryWord("paul is awesome") // returns "Paul Is Awesome"
```