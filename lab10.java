public class Lab10{

	public static void main(String [] args){
		lab10();
	}

	public static void lab10() {
		for (int count = 1; count <= 10; count++) {
			if (count == 2)
				continue;
			System.out.println(count);
		}
	}
}