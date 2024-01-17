# rollup 打包 js

把 src_js 下的文件打包成一个浏览器可运行的文件，可以打包成 iife 格式。

iife 就是马上执行函数方式，此js文件可以在html上马上执行。

```shell
rollup .\src_js\Main.js --file ./distjs/main.js --format iife
```

也可以打包成 umd 格式，注意这种格式需要提供 name 属性。

如下，main对应的值会写入到window中，在浏览器可以通过此main值查看结果。

也可以通过node运行导出的js文件。

```shell
rollup .\src_js\Main.js --file ./distjs/main.js --format umd --name main
```