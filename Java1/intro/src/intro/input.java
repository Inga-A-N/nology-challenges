package intro;

import java.util.Scanner;

public class input {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner s = new Scanner(System.in);
		System.out.print("Please enter your name");
		String name = s.nextLine();
		System.out.println("Hello" + name);
		s.close(); //need to close to avoid memory leak
		
	}

}
