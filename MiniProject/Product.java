package miniProject;

public class Product {
	private int id;
	public String name;
	public int price;

	public Product(String name, int price) {
		SingletonState.getState();
		this.id = SingletonState.productManager.counter();
		this.name = name;
		this.price = price;
	}

	public int getID() {
		return this.id;
	}

	@Override
	public String toString() {
		return this.id + ":" + this.name;
	}

}