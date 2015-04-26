buster.testCase("Iframeish", {

	"setUp": function (done) {
		if (typeof(Iframeish) !== "undefined") {

			// using a global - assume the browser
			this.Iframeish = Iframeish;
			this.window = window;
			done();

		} else {

			// global not found - assume jsdom
			this.Iframeish = require("../index");
			global.jsdom.env({
				html: "<!doctype html>",
				loaded: function (err, window) {
					expect(err).toBeNull("Failed init");
					this.window = window;
					done();
				}.bind(this)
			});

		}
	},

	"should be defined": function () {
		expect(this.Iframeish).toBeFunction();
		expect(this.window).toBeDefined();
	}

});
