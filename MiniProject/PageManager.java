package miniProject;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
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
		page = PageName.LOGIN_PAGE;
		System.out.println("What do you want to do?\n 1:Buy item(User)\n 2:Manage item(Admin)\n 3:Exit");
		int choice = scanner.nextInt();
		 
		if (choice == 1) {
			user.setType(UserType.USER);
			mainUserPage(user);
		} else if (choice == 2) {
			user.setType(UserType.ADMIN);
			mainAdminPage(user);
		} else if (choice == 3) {
			System.out.println("Thank you!");
			return;
		} else {
			System.out.println("\nFalse Input!\n");
			startProgram();
		}
	}

	public void mainUserPage(UserManager usr) {
		page = PageName.USER_PAGE;
		int choice = 0;
		System.out.println("Main Page");
		System.out.println("Product List");
		inst.getProductManager().showAll();
		System.out.println("What would you like to do?");
		System.out.println(" 1:Add product to Cart");
		System.out.println(" 2:Watch products in cart");
		System.out.println(" 3:Logout");
		choice = scanner.nextInt();
		 
		if (choice == 1) {
			addToCartPage(usr);
		} else if (choice == 2) {
			showCartPage(user);
		} else if (choice == 3) {
			back();
		} else {
			System.out.println("\nWrong Input!\n");
			mainUserPage(user);
		}
	}

	public void mainAdminPage(UserManager usr) {
		page = PageName.ADMIN_PAGE;
		int choice = 0;
		System.out.println("\nHello " + usr.getType());
		System.out.println("Product List");
		inst.getProductManager().showAll();
		System.out.println("What would you like to do?");
		System.out.println(" 1:Add Product");
		System.out.println(" 2:Remove Product");
		System.out.println(" 3:Logout");
		choice = scanner.nextInt();
		 
		if (choice == 1) {
			addProductToList();
		} else if (choice == 2) {
			removeProductfromList();
		} else if (choice == 3) {
			back();
		} else {
			System.out.println("\nWrong Input!\n");
			mainAdminPage(user);
		}
	}

	public void showCartPage(UserManager usr) {
		page = PageName.CART_PAGE;
		System.out.println("Your Cart:");
		System.out.println(usr.watchCart());
		if (usr.cart.isEmpty()) {
			back();
		}
		System.out.println("What would you like to do?");
		System.out.println(" 1:Delete item in the cart");
		System.out.println(" 2:Check out");
		System.out.println(" 3:Back");
		int choice = scanner.nextInt();
		 
		if (choice == 1) {
			removeFromCartPage();
		} else if (choice == 2) {
			SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd 'at' HH:mm:ss z");
			Date date = new Date(System.currentTimeMillis());
			String bill = "Order receipt:\n" + usr.watchCart() + "\n" + formatter.format(date) + "\nAddress:\n";
			checkOutPage(bill);
		} else if (choice == 3) {
			back();
		} else {
			System.out.println("Wrong input!");
			showCartPage(user);
		}
	}

	public void addToCartPage(UserManager usr) {
		page = PageName.USER_ADD_PAGE;
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
		back();
	}

	public void removeFromCartPage() {
		page = PageName.USER_REMOVE_PAGE;
		System.out.println("What product that you want to remove from your cart?");
		for (Map.Entry<Product, Integer> set : user.cart.entrySet()) {
			System.out.println(" " + set.getKey().toString());
		}
		int choice = scanner.nextInt();
		 
		String removed = user.deleteProductInCart(choice);
		if (removed == null) {
			System.out.println("Not has this product in Cart!");
		} else {
			System.out.println("Removed " + removed + " from your cart.\n");
		}
		back();
	}

	public void checkOutPage(String bill) {
		System.out.println("Please add your address for shipping : ");
		Scanner addrScanner = new Scanner(System.in);
		String addr = addrScanner.nextLine();
		try {
			SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
			Date date = new Date(System.currentTimeMillis());
			String fileName = "Receipt_" + formatter.format(date) + ".txt";
			FileWriter myWriter = new FileWriter(fileName);
			myWriter.write(bill + addr);
			myWriter.close();
			System.out.println("Successfully saved the receipt.");
		} catch (IOException e) {
			System.out.println("An error occurred.");
			e.printStackTrace();
		}
		user.cart.clear();
		mainUserPage(user);
	}

	public void addProductToList() {
		page = PageName.ADMIN_ADD_PAGE;
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
		back();
	}

	public void removeProductfromList() {
		page = PageName.ADMIN_REMOVE_PAGE;
		System.out.println("Product List");
		inst.getProductManager().showAll();
		System.out.println("Please fill product id that you want to remove from list?");
		int idProductRemove = scanner.nextInt();
		 
		inst.productManager.removeProductbyID(idProductRemove);
		System.out.println("Product List");
		for (Product product : inst.getProductManager().products) {
			System.out.println(" (" + product.getID() + ")" + product.name);
		}
		back();
	}

	public void back() {
		switch (page) {
		case ADMIN_PAGE:
			startProgram();
			break;
		case USER_PAGE:
			startProgram();
			break;
		case CART_PAGE:
			mainUserPage(user);
			break;
		case USER_REMOVE_PAGE:
			showCartPage(user);
			break;
		case USER_ADD_PAGE:
			mainUserPage(user);
			break;
		case ADMIN_REMOVE_PAGE:
			mainAdminPage(user);
			break;
		case ADMIN_ADD_PAGE:
			mainAdminPage(user);
			break;
		default:
			break;
		}
	}

}