import {SingletonState} from './singletonState.js'
import {PageManager} from './pageManager.js'

class Main {
	main(args:string[]) {
		let inst = new SingletonState().getState();
		let pm = new PageManager(inst);
		pm.startProgram();
	}
}

let m = new Main();
m.main(null);