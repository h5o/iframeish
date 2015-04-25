(function () { // IIFE runs in "global" context in all environments (node, browser, etc)

	if (!this.buster) {
		this.buster = require("buster");
	}

	this.assert = this.buster.assert;
	this.refute = this.buster.refute;
	this.expect = this.buster.expect;

}());
