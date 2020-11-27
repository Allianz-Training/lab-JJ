package miniProject;

import java.util.Map;
import java.util.Scanner;
import miniProject.StateName.PageName;
import miniProject.StateName.UserType;

public class PageManager {

	private SingletonState inst;
	private UserManager user;
	private PageName page;
	private Scanner scanner = new Scanner(System.in);

	public PageManager(SingletonState inst) {
		this.inst = inst;
		user = new UserManager();
		this.page = inst.currentPage;
	}

	public void startProgram() {
		boolean isSelected = false;
		page = PageName.LOGIN_PAGE;
		System.out.println("What do you want to do?\n 1:Buy item(User)\n 2:Manage item(Admin)\n 3:Exit");
		int choice = scanner.nextInt();
		while (choice != 1 || choice != 2 || choice != 3) {
			if (choice == 1) {
				user.setType(UserType.USER);
				showListUser(user);
				choice = 0;
				isSelected = true;
			} else if (choice == 2) {
				user.setType(UserType.ADMIN);
				showListAdmin(user);
				choice = 0;
				isSelected = true;
			} else if (choice == 3) {
				System.out.println("Thank you!");
				// scanner.close();
				// break;
				return;
			} else {
				if (!isSelected) {
					System.out.println("\nFalse Input!\n");
				}
				System.out.println("What do you want to do?\n 1:Buy item(User)\n 2:Manage item(Admin)\n 3:Exit");
				choice = scanner.nextInt();
			}
		}
	}

	public void showListUser(UserManager usr) {
		page = PageName.USER_PAGE;
		int choice = 0;
//		System.out.println("\nHello " + usr.getType());
		System.out.println("Main Page");
		System.out.println("Product List");
		for (Product product : inst.getProductManager().products) {
			System.out.println(" (" + product.getID() + ")" + product.name);
		}
		do {
			System.out.println("What would you like to do?");
			System.out.println(" 1:Add product to Cart");
			System.out.println(" 2:Watch products in cart");
			System.out.println(" 3:Logout");
			choice = scanner.nextInt();
			if (choice == 1) {
				showAddToCart(usr);
			} else if (choice == 2) {
				showCart(user);
			} else if (choice == 3) {
				back();
				return;
			}
		} while (choice != 1 || choice != 2 || choice != 3);
		return;
	}

	public void showListAdmin(UserManager usr) {
		page = PageName.ADMIN_PAGE;
		int choice = 0;
		System.out.println("\nHello " + usr.getType());
		System.out.println("Product List");
		for (Product product : inst.getProductManager().products) {
			System.out.println(" (" + product.getID() + ")" + product.name);
		}
		do {
			System.out.println("What would you like to do?");
			System.out.println(" 1:Add Product");
			System.out.println(" 2:Remove Product");
			System.out.println(" 3:Logout");

			choice = scanner.nextInt();
			if (choice == 1) {
				addProductToList();
			} else if (choice == 2) {
				removeProductToList();
			} else if (choice == 3) {
				back();
				return;
			}
		} while (choice != 1 || choice != 2 || choice != 3);
	}

	public void showCart(UserManager usr) {
		page = PageName.CART_PAGE;
		System.out.println(usr.watchCart());
		if (usr.cart.isEmpty()) {
			back();
		}
		System.out.println("What would you like to do?\n 1:Delete item in the cart\n 2:Back");
		int choice = scanner.nextInt();
		do {
			if (choice == 1) {
				showDelete();
				back();
				return;
				//back();
			} else if (choice == 2) {
				back();
				return;
			} else {
				System.out.println("Wrong input!");
				System.out.println("What would you like to do?\n 1:Delete item in the cart\n 2:Back");
				choice = scanner.nextInt();
			}
		} while (choice != 1 || choice != 2);
	}

	public void showAddToCart(UserManager usr) {
		page = PageName.ADD_PAGE;
		System.out.println("Product List");
		inst.getProductManager().showAll();
		System.out.println("What would you like to add?");
		boolean foundedProduct = false;
		boolean foundedinCart = false;
		int choice = scanner.nextInt();
		for (Product product : inst.getProductManager().products) {
			if (choice == product.getID()) {
				for (Map.Entry<Product, Integer> set : user.cart.entrySet()) {
					if (set.getKey().name.equals(product.name)) {
						foundedinCart = true;
						set.setValue(set.getValue() + 1);
					}
				}
				if (!foundedinCart) {
					user.cart.put(product, 1);
				}
				System.out.println("Added " + product.name + " to cart");
				foundedProduct = true;
				break;
			}
		}
		if (!foundedProduct) {
			System.out.println("Not Found this item!");
		}
	}

	public void showDelete() {
		page = PageName.REMOVE_PAGE;
		System.out.println("What product that you want to delete?");
		for (Map.Entry<Product, Integer> set : user.cart.entrySet()) {
			System.out.println(" " + set.getKey().toString());
		}
		int choice = scanner.nextInt();
		if (!user.deleteProductInCart(choice)) {
			System.out.println("Not has this product in Cart!");
		}
	}

	public void addProductToList() {
		System.out.println("Please enter product name to add : ");
		String productName = scanner.next();
		System.out.println("Please enter price : ");
		int productPrice = scanner.nextInt();
		Product newProduct = new Product(productName, productPrice);
		inst.productManager.addProduct(newProduct);
		System.out.println("Add " + productName + " to Productlist!");
		System.out.println();
		System.out.println("Product List");
		for (Product product : inst.getProductManager().products) {
			System.out.println(" (" + product.getID() + ")" + product.name);
		}
		System.out.println();

	}

	public void removeProductToList() {
		page = PageName.ADMINREMOVE_PAGE;
		System.out.println("Product List");
		for (Product product : inst.getProductManager().products) {
			System.out.println(" (" + product.getID() + ")" + product.name);
		}
		System.out.println("Please fill product id that you want to remove from list?");
		int idProductRemove = scanner.nextInt();
		inst.productManager.removeProductbyID(idProductRemove);
		System.out.println("Product List");
		for (Product product : inst.getProductManager().products) {
			System.out.println(" (" + product.getID() + ")" + product.name);
		}
	}

	public void back() {
		switch (page) {
		case ADMIN_PAGE, USER_PAGE:

			break;
		case CART_PAGE:
			showListUser(user);
			break;
		case REMOVE_PAGE:
			showCart(user);
			break;
		case ADD_PAGE:
			break;
		case ADMINREMOVE_PAGE:
			showListAdmin(user);
			break;
		default:
			break;
		}
	}

}
