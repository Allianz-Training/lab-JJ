package miniProject;

import java.util.HashMap;
import java.util.Map;

import miniProject.StateName.UserType;

public class UserManager {

	private SingletonState inst;
	private UserType type;
	public HashMap<Product, Integer> cart = new HashMap<Product, Integer>();

	public UserManager() {
		inst = SingletonState.getState();
	}

	public UserType getType() {
		return type;
	}

	public void setType(UserType type) {
		this.type = type;
	}

	public String watchCart() {
		if (cart.isEmpty()) {
			return "Your cart is empty.";
		} else {
			String outString = "{";
			for(Map.Entry<Product, Integer> set : cart.entrySet()) {
				outString += set.getKey().name + " : " + set.getValue() + ",";
			}
			outString =  outString.substring(0,outString.length()-1);
			outString += "}";
			return outString;
		}
	}
	
	public void clearCart() {
		
	}
	
	public void deleteProductInCart(Product p) {
		cart.remove(p);
	}
	
	public boolean deleteProductInCart(Integer i) {
		for(Map.Entry<Product, Integer> set : cart.entrySet()) {
			if(i == set.getKey().getID()) {
				cart.remove(set.getKey());
				return true;
			}
		}
		return false;
	}

}
