(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.main = {}));
})(this, (function (exports) { 'use strict';

    /**
     * 公共工具类
     */
    class Utils {
        /**随机整数*/
        static random(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }

    /**颜色*/
    exports.ColorType = void 0;
    (function (ColorType) {
        ColorType[ColorType["Red"] = 1] = "Red";
        ColorType[ColorType["Blue"] = 2] = "Blue";
        ColorType[ColorType["Yellow"] = 3] = "Yellow";
        ColorType[ColorType["Green"] = 4] = "Green";
    })(exports.ColorType || (exports.ColorType = {}));
    /**品质*/
    exports.QualityType = void 0;
    (function (QualityType) {
        QualityType[QualityType["NORMAL"] = 0] = "NORMAL";
        QualityType[QualityType["BLUE"] = 1] = "BLUE";
        QualityType[QualityType["RED"] = 2] = "RED";
        QualityType[QualityType["GOLD"] = 3] = "GOLD";
        QualityType[QualityType["PINK"] = 4] = "PINK";
    })(exports.QualityType || (exports.QualityType = {}));

    exports.Utils = Utils;

}));
