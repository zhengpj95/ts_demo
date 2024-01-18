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

在模块内，通过index.js引入所有的js文件，那么只要对这个index.js文件进行rollup打包，就会把模块内的所有js文件打包成一个js文件了。
这样的处理方式，可以处理成每个文件夹都是一个模块，然后也打包成一个模块。