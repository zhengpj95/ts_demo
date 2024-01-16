import {ColorType} from "ConstEnum";
import {Utils} from "Utils";

export class Index {
	constructor() {
	}

	showView(): void {
		console.log(`showView......`);
		console.log(ColorType.Green);
		const num = Utils.random(1, 10);
		console.log("random number: ", num);
	}
}

const index = new Index();
index.showView();