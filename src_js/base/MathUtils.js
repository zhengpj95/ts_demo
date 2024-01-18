/**
 * MathUtils
 */
export class MathUtils {
    /**随机整数*/
    static randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**(min,max]随机数*/
    static random(min, max) {
        return Math.random() * (max - min + 1) + min;
    }
}