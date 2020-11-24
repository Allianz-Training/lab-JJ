package com.jele.helloWorld;

public class HomeWork3 {
	public static void main(String[] args) {
		draw9(3);
		draw10(3);
		draw11(3);
		draw12(3);
		draw13(3);
		draw14(3);
		draw15(3);
		draw16(3);
		draw17(3);
	}

	public static void draw9(int n) {
		for (int i = 0; i < n; i++) {
			System.out.println(i * 2);
		}
	}

	public static void draw10(int n) {
		for (int i = 1; i <= n; i++) {
			System.out.println(i * 2);
		}
	}

	public static void draw11(int n) {
		for (int i = 1; i <= n; i++) {
			for (int j = 1; j <= n; j++) {
				System.out.print(j * i);
			}
			System.out.println();
		}
	}

	public static void draw12(int n) {
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				if (i == j)
					System.out.print("-");
				else
					System.out.print("*");
			}
			System.out.println();
		}
	}

	public static void draw13(int n) {
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				if (i == n - j - 1)
					System.out.print("-");
				else
					System.out.print("*");
			}
			System.out.println();
		}
	}

	public static void draw14(int n) {
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				if (j > i)
					System.out.print("-");
				else
					System.out.print("*");
			}
			System.out.println();
		}
	}

	public static void draw15(int n) {
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				if (i + j < n)
					System.out.print("*");
				else
					System.out.print("-");
			}
			System.out.println();
		}
	}

	public static void draw16(int n) {
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				if (j > i)
					System.out.print("-");
				else
					System.out.print("*");
			}
			System.out.println();
		}

		for (int i = 1; i < n; i++) {
			for (int j = 0; j < n; j++) {
				if (i + j < n)
					System.out.print("*");
				else
					System.out.print("-");
			}
			System.out.println();
		}
	}
	
	public static void draw17(int n) {
		for (int i = 1; i <= n; i++) {
			for (int j = 1; j <= n; j++) {
				if (j > i)
					System.out.print("-");
				else
					System.out.print(i);
			}
			System.out.println();
		}

		for (int i = 1; i < n; i++) {
			for (int j = 0; j < n; j++) {
				if (i + j < n)
					System.out.print(n-i);
				else
					System.out.print("-");
			}
			System.out.println();
		}
	}

}
