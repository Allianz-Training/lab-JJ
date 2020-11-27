package miniProject;

import java.util.ArrayList;

public class ProductManager {
	
	public static ArrayList<Product> products = new ArrayList<Product>();
	private static int idCount = 0;
	
	public ProductManager(){
		products.add(new Product("Apple", 1));
		products.add(new Product("Banana", 5));
		products.add(new Product("Coconut", 10));
	}
	
	public static int counter() {
		return idCount++;
	}
	
	public void showAll() {
		for (Product product : products) {
			System.out.println(" (" + product.getID() + ")" + product.name);
		}
	}
	
	public void addProduct(Product p) {
		products.add(p);
	}
	
	public void removeProduct(Product p) {
		products.remove(p);
	}
	
	public void removeProductbyID(int i) {
		boolean isFoundedProduct=false;
		for(Product product : products) {
			if(product.getID() == i) {
				isFoundedProduct=true;
				products.remove(product);
				break;
			}
		}if(!isFoundedProduct) {
			System.out.println("Product id "+i+" not existed in this list.");
		}
	}
}
