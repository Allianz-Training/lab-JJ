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
			double sum = 0;
			String outString = "";
			for(Map.Entry<Product, Integer> set : cart.entrySet()) {
				outString += set.getKey().name + " : " + set.getValue() + " | Total : " + set.getKey().price*set.getValue() + "\n";
				sum += set.getKey().price*set.getValue();
			}
			outString += "Total : " + sum;
			return outString;
		}
	}
	
	public void clearCart() {
		
	}
	
	public void deleteProductInCart(Product p) {
		cart.remove(p);
	}
	
	public String deleteProductInCart(Integer i) {
		for(Map.Entry<Product, Integer> set : cart.entrySet()) {
			if(i == set.getKey().getID()) {
				String item = set.getKey().toString();
				cart.remove(set.getKey());
				return item;
			}
		}
		return null;
	}

}