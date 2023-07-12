package control_flow;
import java.util.Scanner;

public class control_flow_challenge {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		Challenge: Positive or Negative?
//				Scan user input and print...
//				"n is positive" if n (the number that was scanned) is positive
//				"n is negative" if n is negative
//				Challenge: Find the largest input
//				Get 3 numbers from the user
//				Print "n is the largest", n being the largest of the 3 inputs
		
		Scanner s = new Scanner(System.in);
		System.out.print("Please enter an integer ");
		int inputNumber = s.nextInt();
		
		if (inputNumber < 0) {
			System.out.print(inputNumber + " is negative");
		} else if (inputNumber == 0) {
			System.out.print(inputNumber + " is neither positive nor negative");
		}
		else {
			System.out.println(inputNumber + " is positiv");
		}
		
		System.out.println("Please enter an integer ");
		int num1 = s.nextInt();
		System.out.println("Please enter an integer ");
		int num2 = s.nextInt();
		System.out.println("Please enter an integer ");
		int num3 = s.nextInt();
		if (num1 > num2 && num1>num3) {
			System.out.println(num1 + "is the largest ");
		}else if (num2 > num1 && num2>num3) {
			System.out.println(num2 + "is the largest ");
		}
		else {
			System.out.println(num3 + " is the largest ");
		};
//		s.close(); //need to close to avoid memory leak
//		
//		// Switch statement
		Scanner scan = new Scanner(System.in);
		
		boolean isRunning = true;
		while (isRunning) {
		System.out.println("Type c to continue, or e or x to exit");
		
		char command = scan.next().charAt(0);
		
		switch(command) {
		case 'c':
			System.out.println("Continue running");
			break;
		case 'e':
		case 'x':
			System.out.println("Exiting");
			isRunning = false;
			break;
		default:
			System.out.println("Command is not recognized");
			
		}
			
		};
		
//		scan.close();
//		
		for (int i = 0; i < 10; i++) {
			if (i==2) {continue;}
			if (i == 8) {
				break;
			};
			System.out.println(i);
		};
		
//		Challenge: Rounding Floats
//		Request 2 float inputs from the user
//		Round both to 3 decimal places
//		if they are the same number after rounding:
//		print "Both numbers are n after rounding"
//		else
//		print "n1, and n2 are different numbers", n1 and n2 being the 2 rounded values
		
		
//		Scanner v = new Scanner(System.in);
		System.out.println("Please enter a number with up to 6 decimal places: ");
		float n1 = scan.nextFloat();
		float roundedN1 = (float)Math.round(n1 * 1000) / 1000;
		System.out.println("Rounded n1: " + roundedN1);
		System.out.println("Please enter a number with up to 6 decimal places: ");
		float n2 = scan.nextFloat();
		 
		float roundedN2 = (float)Math.round(n2 * 1000) / 1000;
		System.out.println("Rounded n2: " + roundedN2);
		
		if (roundedN1 == roundedN2) {
			System.out.println("Both numbers are" + roundedN1 + "after rounding");
		}else{
			System.out.println(roundedN1 +" and " + roundedN2 + " are different numbers");
		};
//		
//		
		
//		scan.close();
		
//		Challenge: What's the number of x in y?
//		Scan user input twice
//		Allowed inputs:
//		"s" => seconds
//		"m" => minutes
//		"h" => hours
//		"D" => days
//		"M" => months
//		"Y" => years
//		Input => Output Examples:
//		1st: "M", 2nd: "D" => "There are 30 days in a month"
//		1st: "M", 2nd: "h" => "There are 720 hours in a month"
//		1st: "h", 2nd: "s" => "There are 3600 seconds in an hour"
//		1st: "M", 2nd: "Y" => "There are no years in a month"
//		1st: "s", 2nd: "h" => "There are no hours in a second"
//		Assumptions:
//		There are 30 days in a month
		
	}

}
