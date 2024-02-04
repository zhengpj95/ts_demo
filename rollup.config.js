/**
 * 打包成iife格式，可以有name属性，有的话就可以在浏览器通过name值获取使用
 */
// export default {
//     input: './src_js/index.js',
//     output: {
//         file: './distjs/index.iife.js',
//         format: 'iife',
//         name: "main1"
//     }
// };

/**
 * 打包成cjs格式
 * 若打包成.cjs文件，然后node运行此.cjs文件即可
 * 若打包成.js文件，需要设置package.json的type为module。
 * 若是上述的.js文件要在nodejs中运行，需要修改package.json的type为commonjs格式，不然在node使用会出现错误提示
 * .cjs文件在nodejs中运行则不会报错。
 */
// export default {
//     input: "./src_js/index.js",
//     output: {
//         file: "./distjs/index.cjs",
//         format: "cjs"
//     }
// };

/**
 * 打包成umd格式，可以有name属性，有的话就可以在浏览器通过name值获取使用
 */
// export default {
//     input: './src_js/index.js',
//     output: {
//         file: './distjs/index.umd.js',
//         format: 'umd',
//         name: "main"
//     }
// };
