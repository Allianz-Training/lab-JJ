package com.jele.helloWorld;

public class HomeWork5 {
	public static void main(String[] args) {
		draw18(3);
		draw19(3);
		draw20(3);
		draw21(3);
		draw22(3);
		draw23(3);
		draw24(3);
		draw25(3);
	}

	public static void draw18(int n) {
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				if (j < n - i - 1) {
					System.out.print("-");
				} else {
					System.out.print("*");
				}
			}
			System.out.println();
		}
	}

	public static void draw19(int n) {
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				if (j >= i) {
					System.out.print("*");
				} else {
					System.out.print("-");
				}
			}
			System.out.println();
		}
	}

	public static void draw20(int n) {
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				if (j < n - i - 1) {
					System.out.print("-");
				} else {
					System.out.print("*");
				}
			}
			System.out.println();
		}
		for (int i = 1; i < n; i++) {
			for (int j = 0; j < n; j++) {
				if (j >= i) {
					System.out.print("*");
				} else {
					System.out.print("-");
				}
			}
			System.out.println();
		}
	}

	public static void draw21(int n) {
		int counter = 0;
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				if (j < n - i - 1) {
					System.out.print("-");
				} else {
					System.out.print(++counter);
				}
			}
			System.out.println();
		}
		for (int i = 1; i < n; i++) {
			for (int j = 0; j < n; j++) {
				if (j >= i) {
					System.out.print(++counter);
				} else {
					System.out.print("-");
				}
			}
			System.out.println();
		}
	}

	public static void draw22(int n) {
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				if(j < n - i - 1) {
					System.out.print("-");
				}else {
					System.out.print("*");
				}
			}
			for(int j = 1; j< n;j++) {
				if(j <= i) {
					System.out.print("*");
				}else {
					System.out.print("-");
				}
			}
			System.out.println();
		}
	}
	
	public static void draw23(int n) {
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				if(i<=j) {
					System.out.print("*");
				}else {
					System.out.print("-");
				}
			}
			for(int j = 1; j< n;j++) {
				if(i < n - j ) {
					System.out.print("*");
				}else {
					System.out.print("-");
				}
			}
			System.out.println();
		}
	}
	
	public static void draw24(int n) {
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				if(j < n - i - 1) {
					System.out.print("-");
				}else {
					System.out.print("*");
				}
			}
			for(int j = 1; j< n;j++) {
				if(j <= i) {
					System.out.print("*");
				}else {
					System.out.print("-");
				}
			}
			System.out.println();
		}
		
		for (int i = 1; i < n; i++) {
			for (int j = 0; j < n; j++) {
				if(i<=j) {
					System.out.print("*");
				}else {
					System.out.print("-");
				}
			}
			for(int j = 1; j< n;j++) {
				if(i < n - j ) {
					System.out.print("*");
				}else {
					System.out.print("-");
				}
			}
			System.out.println();
		}
	}
	
	public static void draw25(int n) {
		int counter = 0;
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				if(j < n - i - 1) {
					System.out.print("-");
				}else {
					System.out.print(++counter);
				}
			}
			for(int j = 1; j< n;j++) {
				if(j <= i) {
					System.out.print(++counter);
				}else {
					System.out.print("-");
				}
			}
			System.out.println();
		}
		
		for (int i = 1; i < n; i++) {
			for (int j = 0; j < n; j++) {
				if(i<=j) {
					System.out.print(++counter);
				}else {
					System.out.print("-");
				}
			}
			for(int j = 1; j< n;j++) {
				if(i < n - j ) {
					System.out.print(++counter);
				}else {
					System.out.print("-");
				}
			}
			System.out.println();
		}
	}
	
	

}
