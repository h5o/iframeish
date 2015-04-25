var config = module.exports;

config["browser"] = {
	rootPath: ".",
	environment: "browser",
	src: [
		"dist/Iframeish.min.js"
	],
	tests: [
		"test/*.test.js"
	],
	extensions: [
		require("buster-extension-iife")
	],
	libs: [
		"test/helpers/*.js"
	]
};

config["jsdom"] = {
	rootPath: ".",
	environment: "node",
	tests: [
		"test/*.test.js"
	],
	libs: [
		"test/helpers/*.js"
	]
};
