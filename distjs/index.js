(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.main = {}));
})(this, (function (exports) { 'use strict';

    class Pool {
        alloc() {
            return undefined;
        }
        release(){
            return undefined;
        }
    }

    class SingletonClass {
        static ins() {
            let clazz = this;
            if (!clazz._instance) {
                clazz._instance = new clazz();
            }
            return clazz._instance
        }
    }

    /**
     * MathUtils
     */
    class MathUtils {
        /**随机整数*/
        static randomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        /**(min,max]随机数*/
        static random(min, max) {
            return Math.random() * (max - min + 1) + min;
        }
    }

    class Main {
        constructor() {
        }

        onShow() {
            console.log(`Main.onShow......`);
            this.onShowRandom();
        }

        onShowRandom() {
            const val = MathUtils.random(1, 10);
            const val1 = MathUtils.randomNumber(1, 10);
            console.log("Main.onShowRandom......", val, val1);
        }
    }

    // export const main = new Main(); // 导出实例
    // main.onShow();

    let module1 = {};

    class Module {
        constructor() {
            regClass(Pool);
            regClass(SingletonClass);
            regClass(Main);
        }
    }

    function regClass(cls) {
        console.log(cls.name);
        module1[cls.name] = new cls();
    }

    new Module();

    exports.module1 = module1;

}));
