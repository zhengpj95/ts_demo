(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QualityType = exports.ColorType = void 0;
/**颜色*/
var ColorType;
(function (ColorType) {
    ColorType[ColorType["Red"] = 1] = "Red";
    ColorType[ColorType["Blue"] = 2] = "Blue";
    ColorType[ColorType["Yellow"] = 3] = "Yellow";
    ColorType[ColorType["Green"] = 4] = "Green";
})(ColorType || (exports.ColorType = ColorType = {}));
/**品质*/
var QualityType;
(function (QualityType) {
    QualityType[QualityType["NORMAL"] = 0] = "NORMAL";
    QualityType[QualityType["BLUE"] = 1] = "BLUE";
    QualityType[QualityType["RED"] = 2] = "RED";
    QualityType[QualityType["GOLD"] = 3] = "GOLD";
    QualityType[QualityType["PINK"] = 4] = "PINK";
})(QualityType || (exports.QualityType = QualityType = {}));

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
/**
 * 公共工具类
 */
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**随机整数*/
    Utils.random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    return Utils;
}());
exports.Utils = Utils;

},{}],3:[function(require,module,exports){
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

},{"./Utils.js":2}]},{},[1,2,3]);
