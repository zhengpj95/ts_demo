/**
 * 打包成iife格式，可以有name属性，有的话就可以在浏览器通过name值获取使用
 */
// export default {
//     input: './src_js/index.js',
//     output: {
//         file: './distjs/index1.js',
//         format: 'iife',
//         name: "main1"
//     }
// };

/**
 * 打包成cjs格式，注意这里要修改package.json的type为commonjs格式，不然在node使用会出现错误提示
 * 也可以直接写成.cjs后缀的文件，然后node运行此.cjs文件即可
 * rollup打包，需要设置package.json的type为module
 */
// export default {
//     input: "./src_js/index.js",
//     output: {
//         file: "./distjs/index.cjs",
//         format: "cjs"
//     }
// };


import typescript from "@rollup/plugin-typescript";

/**
 * 把typescript打包，需要npm安装 @rollup/plugin-typescript 和 tslib
 */
export default {
    input: "./src/index.ts",
    output: {
        file: "./dist/index.js",
        format: 'umd',
        name: "main"
    },
    plugins: [typescript({compilerOptions: {lib: ["es5", "es6", "dom"], target: "es2020"}})]
};