package miniProject;

import miniProject.StateName.PageName;
import miniProject.StateName.UserType;

public class SingletonState {

	private static SingletonState instance = null;
	public UserType currentUserType = null;
	public PageName currentPage = PageName.LOGIN_PAGE;
	public static ProductManager productManager;
	
	public final static SingletonState getState() {
		if (SingletonState.instance == null) {
			SingletonState.instance = new SingletonState();
			productManager = new ProductManager();
		}
		return instance;
	}
	
	public final ProductManager getProductManager() {
		return productManager;
	}
	

}