public class Lab11{

	public static void main(String [] args){
		System.out.println(lab11Return(11));
		lab11NotReturn();
	}

	public static String lab11Return(int temp) {
		return "This is Return Value : " + temp;
	}

	public static void lab11NotReturn() {
		System.out.println("This is internal method PrintOut");
	}
}