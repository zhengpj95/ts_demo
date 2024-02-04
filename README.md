# 大纲

构建ts编译环境，通过指令直接编译生成对应的js文件。

看 `package.json` 和 `tsconfig.json` 文件，搭建ts编译环境。

`tsconfig.json` 所在的根目录就是一个完整的ts项目。

## 问题

### 如何运行在浏览器上

目前编译生成的js文件不适用在浏览器上，需要处理成能运行到浏览器上的。

解决方式：

要运行在浏览器上，需要在tsconfig.json设置一下参数。有以下三步：

- 设置 `"target": "ES6"`
- 移除 `"module": "CommonJS"` 或者不移除但需设置成 `"module": "ES6"` 即可
- 在html中导入js时候，需要加上 `type="module"`。

```ts
// tsconfig.json
"target": "ES6"
// "module": "CommonJS"

// html文件
<script src="./dist/index.js" type="module"></script>
```

```js
// 编译生成的js代码
import { HolyChildProxy } from "./holy_child/HolyChildProxy";
export class Index {
    constructor() {
    }
    showView() {
        console.log(`showView......`);
        console.log(4 /* ColorType.Green */);
        let a = null;
        console.log(a);
        const proxy = new HolyChildProxy();
        proxy.init();
    }
}
const index = new Index();
index.showView();
//# sourceMappingURL=index.js.map
```

这样编译出来的js文件，就可以在浏览器中运行了。

### 导入其他模块路径错误，浏览器错误

> Uncaught TypeError: Failed to resolve module specifier "holy_child/HolyChildProxy".
> Relative references must start with either "/", "./", or "../".

解决方式其实就是保证相对路径完整一点，js文件要有后缀`.js`，这样就不会出现报错了。如下：

```js
import {HolyChildProxy} from "./holy_child/HolyChildProxy.js";
```

但是不可能每次都手动修改或者修改全部引用的，这样很不合理，还不如直接使用js书写代码呢。

所以这里还需要寻找解决方式。_TODO_

### Uncaught ReferenceError: exports is not defined

在浏览器中运行的，不能使用 `"module": "CommonJS"`。

模块内容不一样的，具体可以查查区分。

```js
// 编译生成的js代码
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Index = void 0;
const HolyChildProxy_1 = require("./holy_child/HolyChildProxy");
class Index {
    constructor() {
    }
    showView() {
        console.log(`showView......`);
        console.log(4 /* ColorType.Green */);
        let a = null;
        console.log(a);
        const proxy = new HolyChildProxy_1.HolyChildProxy();
        proxy.init();
    }
}
exports.Index = Index;
const index = new Index();
index.showView();
//# sourceMappingURL=index.js.map
```

### browserify

使用这个插件，可以将所有的js文件编译成一个js文件，然后运行到浏览器中。

但是还有一个问题，文件导入还是需要写 `./xx/xx.js`，不能缺少文件后缀名。

而且需要设置 `tsconfig.json` 内的 `"module": "CommonJS"` 。

> browserify dist/ConstEnum.js dist/Utils.js dist/index.js -o ./dist/bundle.js

> module不设置，或者设置成es6，会有如下报错
>
> ParseError: 'import' and 'export' may appear only with 'sourceType: module'

## package.json

此文件的 `type` 字段，默认是 `commonjs` 格式。

值为 `module` 则以es模块处理；值为 `commonjs` 则以commonjs模块处理。

无论 `type` 字段为何值，`.mjs` 的文件都按照es模块处理，`.cjs` 的文件都安装commonjs模块处理。所以一般都建议明确 `type` 字段的值。

## rollup

rollup打包默认以 es模块 处理。rollup命令无需声明type字段，但是配置rollup.config.js则需要声明type字段为module。

如果 package.json 的 type 字段不声明，默认是 commonjs模块 处理。

但是rollup配置打包就会出问题。所以需要显示声明type字段为 `module`。
