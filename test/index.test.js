buster.testCase("Iframeish", {

	"setUp": function (done) {
		if (typeof(Iframeish) !== "undefined") {

			// using a global - assume the browser
			this.Iframeish = Iframeish;
			done();

		} else {

			// global not found - assume jsdom
			this.Iframeish = require("../index");
			global.jsdom.env({
				html: "<!doctype html>",
				loaded: function (err, window) {
					expect(err).toBeNull("Failed init");
					global.window = window;
					global.document = window.document;
					done();
				}
			});

		}
	},

	"tearDown": function () {
		if (typeof(global) !== "undefined" && global.jsdom) {
			delete global.window;
			delete global.document;
		}
	},

	"should render an iframe in the body": function (done) {
		this.Iframeish(function (err, iframeish) {
			expect(err).toBeNull();

			var iframes = document.body.getElementsByTagName("iframe");
			expect(iframes.length).toEqual(1);
			expect(iframeish.iframe).toBe(iframes[0]);
			expect(iframeish.document).toBe(iframeish.iframe.contentDocument);
			expect(iframeish.document.compatMode).toEqual("CSS1Compat");

			// @todo: does this really belong here? kept for now, because h5o-bookmarklet expects it...
			expect(parseInt(window.getComputedStyle(iframeish.iframe).borderWidth) || 0).toEqual(0);
			done();
		});
	},

	"should render an iframe in an opts.renderTo": function (done) {
		var myCustomDiv = document.createElement("div");
		document.body.appendChild(myCustomDiv);

		var opts = {
			renderTo: myCustomDiv
		};

		this.Iframeish(opts, function (err, iframeish) {
			expect(err).toBeNull();

			var iframes = myCustomDiv.getElementsByTagName("iframe");
			expect(iframes.length).toEqual(1);
			expect(iframeish.iframe).toBe(iframes[0]);
			expect(iframeish.document).toBe(iframeish.iframe.contentDocument);
			expect(iframeish.document.compatMode).toEqual("CSS1Compat");
			done();
		});
	}

});
