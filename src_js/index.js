// import {Pool} from "./base/Pool";
// import {SingletonClass} from "./base/SingletonClass";
// import {Main} from "./Main";
//
// export let module1 = {};
//
// class Module {
//     constructor() {
//         regClass(Pool);
//         regClass(SingletonClass);
//         regClass(Main);
//     }
// }
//
// function regClass(cls) {
//     console.log(cls.name);
//     module1[cls.name] = new cls();
// }
//
// new Module();

// 把模块导入后再导出去
export * from "./base/Pool.js";
export * from "./base/SingletonClass.js";
export * from "./Main.js";

console.log(`11111 distjs`);