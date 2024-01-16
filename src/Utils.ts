/**
 * 公共工具类
 */
export class Utils {
	/**随机整数*/
	public static random(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}