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