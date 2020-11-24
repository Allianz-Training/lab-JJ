package com.jele.helloWorld;

public class HomeWork2 {
	public static void main(String [] args) {
		String[][] table = {
			{"1","2","3"},
			{"4","5","6"},
			{"7","8","9"},
		};
		multiplyTableArr(table);
	}

	public static void multiplyTable(String[][] tb) {
		for (String[] strArr : tb) {
			for (String each : strArr) {
				System.out.print(Integer.parseInt(each) * 2);
				if (each != strArr[strArr.length - 1]) {
					System.out.print(",");
				}
			}
			System.out.println();
		}
	}

	public static void multiplyTableArr(String[][] tb) {
		for (int i = 0; i < tb.length; i++) {
			for (int j = 0; j < tb[i].length; j++) {
				System.out.print(Integer.parseInt(tb[i][j]) * 2);
				if (j != tb[i].length - 1)
					System.out.print(",");
			}
			System.out.println();
		}

	}
}
