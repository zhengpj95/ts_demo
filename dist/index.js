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

    class Index {
        constructor() {
        }
        showView() {
            console.log(`showView......`);
            console.log(4 /* ColorType.Green */);
            const num = Utils.random(1, 10);
            console.log("random number: ", num);
        }
    }
    const index = new Index();
    index.showView();

    exports.Index = Index;

}));
