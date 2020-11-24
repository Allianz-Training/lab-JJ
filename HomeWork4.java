package com.jele.helloWorld;

import java.util.Scanner;

public class HomeWork4 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.print("Please enter number : ");
		int input = sc.nextInt();
		for(int i = 1;i<=12;i++) {
			System.out.println(input + " * " + i + " = " + (input * i));
		}
		sc.close();
	}
}
