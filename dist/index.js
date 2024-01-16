"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.Index = void 0;
var Utils_1 = require("./Utils.js");
var Index = /** @class */ (function () {
	function Index() {
	}

	Index.prototype.showView = function () {
		console.log("showView......");
		console.log(4 /* ColorType.Green */);
		var num = Utils_1.Utils.random(1, 10);
		console.log("random number: ", num);
	};
	return Index;
}());
exports.Index = Index;
var index = new Index();
index.showView();
