import { ProductManager } from './productManager.js';
import { PageName } from './myEnum.js';
export class SingletonState {
    getState() {
        if (this.instance == null) {
            this.instance = new SingletonState();
            this.productManager = new ProductManager();
            this.currentPage = PageName.LOGIN_PAGE;
        }
        return this.instance;
    }
    getProductManager() {
        return this.productManager;
    }
}
//# sourceMappingURL=singletonState.js.map