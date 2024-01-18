import {MathUtils} from "./MathUtils";

export class Main {
	constructor() {
	}

	onShow() {
		console.log(`Main.onShow......`);
		this.onShowRandom();
	}

	onShowRandom() {
		const val = MathUtils.random(1, 10);
		const val1 = MathUtils.randomNumber(1, 10);
		console.log("Main.onShowRandom......", val, val1);
	}
}

// export const main = new Main(); // 导出实例
// main.onShow();