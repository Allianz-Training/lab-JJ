package com.jele.helloWorld;

public class HomeWork1 {
	public static void main(String[] args) {
		 draw1(2);
		 draw2(2);
		 draw3(3);
		 draw4(3);
		 draw5(3);
		 draw6(3);
		 draw7(4);
		 draw8(4);
	}

	public static void draw1(int n) {
		for (int i = 0; i < n; i++) {
			System.out.print("*");
		}
		System.out.println();
	}

	public static void draw2(int n) {
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				System.out.print("*");
			}
			System.out.println();
		}
	}

	public static void draw3(int n) {
		for (int i = 0; i < n; i++) {
			for (int j = 1; j < n + 1; j++) {
				System.out.print(j);
			}
			System.out.println();
		}
	}

	public static void draw4(int n) {
		for (int i = 0; i < n; i++) {
			for (int j = n; j > 0; j--) {
				System.out.print(j);
			}
			System.out.println();
		}
	}

	public static void draw5(int n) {
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				System.out.print(i + 1);
			}
			System.out.println();
		}
	}

	public static void draw6(int n) {
		for (int i = n; i > 0; i--) {
			for (int j = 0; j < n; j++) {
				System.out.print(i);
			}
			System.out.println();
		}
	}

	public static void draw7(int n) {
		int sum = 1;
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				System.out.print(sum++ + " ");
			}
			System.out.println();
		}
	}
	
	public static void draw8(int n) {
		int sum = n*n;
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				System.out.print(sum-- + " ");
			}
			System.out.println();
		}
	}
}
