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
