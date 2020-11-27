package miniProject;

import java.util.ArrayList;
import miniProject.StateName.PageName;
import miniProject.StateName.UserType;

public class SingletonState {

	private static SingletonState instance = null;
	public UserType currentUserType = null;
	public PageName currentPage = PageName.LOGIN_PAGE;
	public static ProductManager productManager;
	
	public static SingletonState getState() {
		if (SingletonState.instance == null) {
			SingletonState.instance = new SingletonState();
			productManager = new ProductManager();
		}
		return instance;
	}
	
	public ProductManager getProductManager() {
		return productManager;
	}
	

}
