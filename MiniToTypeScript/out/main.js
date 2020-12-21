import { SingletonState } from './singletonState';
import { PageManager } from './pageManager';
class Main {
    main(args) {
        let inst = new SingletonState().getState();
        let pm = new PageManager(inst);
        pm.startProgram();
    }
}
let m = new Main();
m.main(null);
//# sourceMappingURL=main.js.map