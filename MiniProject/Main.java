package miniProject;

public class Main {
	public static void main(String[] args) {
		SingletonState inst =  SingletonState.getState();
		PageManager pm = new PageManager(inst);
		pm.startProgram();
	}
}