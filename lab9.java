public class Lab9{

	public static void main(String [] args){
		lab9();
	}

	public static void lab9() {
		for (int count = 0; count <= 20; count++) {
			if (count == 11) {
				System.out.println(count);
				continue;
			}
			System.out.println("Normal : " + count);
		}
	}
}