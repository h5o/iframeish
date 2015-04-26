module.exports = function (grunt) {

	require("time-grunt")(grunt);
	require("load-grunt-tasks")(grunt);

	grunt.initConfig({
		"clean": {
			"all": ["dist/**"]
		},
		"uglify": {
			"dist": {
				"src": ["dist/Iframeish.debug.js"],
				"dest": "dist/Iframeish.min.js"
			}
		},
		"_watch": {
			autoBuild: {
				files: ["index.js", "src/**"],
				tasks: ["default", "buster:local:test", "test-jsdom"]
			},
			autoTest: {
				files: ["test/**"],
				tasks: ["buster:local:test", "test-jsdom"]
			}
		},
		buster: {
			"local": {
				"test": {
					"reporter": "specification",
					"config-group": "browser"
				}
			},
			"jsdom": {
				"test": {
					"reporter": "specification",
					"config-group": "jsdom"
				}
			},
			"jsdom-compat": {
				"test": {
					"reporter": "specification",
					"config-group": "jsdom-compat"
				}
			}
		},
		open: {
			"capture-browser": {
				path: "http://127.0.0.1:1111/capture"
			}
		},
		browserify: {
			"dist": {
				"src": [
					"index.js"
				],
				"dest": "dist/Iframeish.debug.js",
				"options": {
					"browserifyOptions": {
						"standalone": "Iframeish"
					}
				}
			}
		},
		"bump": {
			"options": {
				commitMessage: 'release %VERSION%',
				commitFiles: ["-a"],
				tagName: '%VERSION%',
				tagMessage: 'version %VERSION%',
				pushTo: 'origin'
			}
		}
	});

	grunt.renameTask("watch", "_watch");

	grunt.registerTask("default", "Clean build and minify", ["clean:all", "browserify", "uglify"]);
	grunt.registerTask("test", "Clean build, minify and run tests",
		["default", "test-jsdom", process.env.TRAVIS === "true" ? "test-phantom" : "test-local"]
	);
	grunt.registerTask("test-phantom", ["buster:local:server", "buster:local:phantomjs", "buster:local:test"]);
	grunt.registerTask("test-local", ["buster:local:server", "buster:local:phantomjs", "open:capture-browser", "buster:local:test"]);
	grunt.registerTask("test-jsdom", !process.version.indexOf("v0.10") ? ["buster:jsdom-compat:test"] : ["buster:jsdom:test", "buster:jsdom-compat:test"]);
	grunt.registerTask("watch", ["buster:local:server", "buster:local:phantomjs", "open:capture-browser", "_watch"]);

	grunt.registerTask("release", function () {
		var bump = grunt.option("bump");
		if (bump != "patch" && bump != "minor" && bump != "major") grunt.fail.fatal("Please pass --bump");
		grunt.task.run(["checkbranch:master", "checkpending", "bump:" + bump]);
	});

};
