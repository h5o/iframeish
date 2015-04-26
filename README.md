# iframeish

[![Build Status](https://travis-ci.org/h5o/iframeish.svg?branch=master)](https://travis-ci.org/h5o/iframeish)

Helps work with iframes

```js
Iframeish(function (err, result) {
    // executes after onload
    console.log(result.iframe);
    console.log(result.document);
});
```

```js
var opts = {
    renderTo: document.body.appendChild(document.createElement('div')) 
};

Iframeish(opts, function (err, result) {
    // executes after onload
    console.log(result.iframe);
    console.log(result.document);
});
```
