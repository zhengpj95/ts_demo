
export class SingletonClass {
    static ins() {
        let clazz = this;
        if (!clazz._instance) {
            clazz._instance = new clazz()
        }
        return clazz._instance
    }
}