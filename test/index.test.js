buster.testCase("Iframeish", {

	"setUp": function () {
		this.Iframeish = typeof(Iframeish) !== "undefined" ? Iframeish : require("../index");
	},

	"should be defined": function () {
		expect(this.Iframeish).toBeFunction();
	}

});
