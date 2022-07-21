# rtgg.js
A JavaScript API wrapper for [racetime.gg](https://racetime.gg/)

## Install
```
npm i rtgg.js
```

Note: this package uses the native `fetch` API, and thus requires at least Node.js v17.5.

## Initialization
```js
const rtggAPI = require('rtgg.js');

const rtgg = new rtggAPI();
```

## Usage
The wrapped is based on [promises](https://nodejs.dev/learn/understanding-javascript-promises), so it advised you use [`async`/`await`](https://nodejs.dev/learn/modern-asynchronous-javascript-with-async-and-await) in all API calls.

Documentation is available [here](DOCS.md).