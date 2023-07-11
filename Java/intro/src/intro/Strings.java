package intro;

public class Strings {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		// String concatenation
		String firstName = "Inga";
		System.out.println("Hello " + firstName);
		String lastName = "Lastname";
		System.out.println(firstName + " " + lastName);
		String fullName = firstName + " " + lastName;
		System.out.println(fullName);
		
		int myAge = 38;
		
		System.out.println(String.format("%s is %d yeas old", fullName, myAge));
				

	}

}
