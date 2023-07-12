package control_flow;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		byte age = 18;
		boolean isCitizen = true;
		if(age>18 && isCitizen) {
			System.out.println("You can vote");
			
		}else {
			System.out.println("No voting yet");
			
		}
		String country = "au";
		if(age >= 21) {
			System.out.println("You can drink in America");
		}else if (age >= 18 && country.equals("au")) {
				
			System.out.println("You can drink in Australia");
			
		}else {
			System.out.println("No drinking yet");
		}

	}

}
