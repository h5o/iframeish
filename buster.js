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
		"test/helpers/globals.js"
	]
};

config["jsdom"] = {
	rootPath: ".",
	environment: "node",
	tests: [
		"test/*.test.js"
	],
	libs: [
		"test/helpers/globals.js",
		"test/helpers/jsdom.js"
	]
};

config["jsdom-compat"] = {
	rootPath: ".",
	environment: "node",
	tests: [
		"test/*.test.js"
	],
	libs: [
		"test/helpers/globals.js",
		"test/helpers/jsdom-compat.js"
	]
};
