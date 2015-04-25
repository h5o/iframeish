# iframeish

[![Build Status](https://travis-ci.org/h5o/iframeish.svg?branch=master)](https://travis-ci.org/h5o/iframeish)

Helps work with iframes

## todo

* add tests
* inject scripts that execute in iframe (clean!) context
* investigate "clean slate" (i.e. same interface, without an iframe, but say a custom `window` instead)
* add autosizing stuffs
* add positioning stuffs

## done

* `Iframeish([opts, ] cb)`, where `cb` is a `function nodeback(err, result)`, called after `onload`, 
   where `result` has `iframe` and `document` properties.
