import {ProductManager} from './productManager.js'
import {UserType,PageName} from './myEnum.js'

export class SingletonState {
    
    instance:SingletonState;
	currentUserType:UserType;
	currentPage:PageName;
    productManager:ProductManager;
    
	
	getState():SingletonState {
		if (this.instance == null) {
			this.instance = new SingletonState();
            this.productManager = new ProductManager();
            this.currentPage = PageName.LOGIN_PAGE
		}
		return this.instance;
	}
	
	getProductManager():ProductManager {
		return this.productManager;
	}
	

}