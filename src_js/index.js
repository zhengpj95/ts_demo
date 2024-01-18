
import {Pool} from "./base/Pool";
import {SingletonClass} from "./base/SingletonClass";
import {Main} from "./Main";

export let module1 = {}

class Module {
    constructor() {
        regClass(Pool)
        regClass(SingletonClass)
        regClass(Main)
    }
}

function regClass(cls) {
    console.log(cls.name);
    module1[cls.name] = new cls();
}

new Module();
