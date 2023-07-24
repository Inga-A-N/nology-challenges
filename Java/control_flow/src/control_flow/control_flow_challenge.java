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
		
//		Scanner s = new Scanner(System.in);
//		System.out.print("Please enter an integer ");
//		int inputNumber = s.nextInt();
//		
//		if (inputNumber < 0) {
//			System.out.print(inputNumber + " is negative");
//		} else if (inputNumber == 0) {
//			System.out.print(inputNumber + " is neither positive nor negative");
//		}
//		else {
//			System.out.println(inputNumber + " is positive");
//		}
//		
//		System.out.println("Please enter an integer ");
//		int num1 = s.nextInt();
//		System.out.println("Please enter an integer ");
//		int num2 = s.nextInt();
//		System.out.println("Please enter an integer ");
//		int num3 = s.nextInt();
//		if (num1 > num2 && num1>num3) {
//			System.out.println(num1 + "is the largest ");
//		}else if (num2 > num1 && num2>num3) {
//			System.out.println(num2 + "is the largest ");
//		}
//		else {
//			System.out.println(num3 + " is the largest ");
//		};
//		s.close(); //need to close to avoid memory leak
//		
//		// Switch statement
		Scanner scan = new Scanner(System.in);
//		
//		boolean isRunning = true;
//		while (isRunning) {
//		System.out.println("Type c to continue, or e or x to exit");
//		
//		char command = scan.next().charAt(0);
//		
//		switch(command) {
//		case 'c':
//			System.out.println("Continue running");
//			break;
//		case 'e':
//		case 'x':
//			System.out.println("Exiting");
//			isRunning = false;
//			break;
//		default:
//			System.out.println("Command is not recognized");
//			
//		}
//			
//		};
		
////		scan.close();
////		
//		for (int i = 0; i < 10; i++) {
//			if (i==2) {continue;}
//			if (i == 8) {
//				break;
//			};
//			System.out.println(i);
//		};
		
////		Challenge: Rounding Floats
////		Request 2 float inputs from the user
////		Round both to 3 decimal places
////		if they are the same number after rounding:
////		print "Both numbers are n after rounding"
////		else
////		print "n1, and n2 are different numbers", n1 and n2 being the 2 rounded values
//		
//		
//		System.out.println("Please enter a number with up to 6 decimal places: ");
//		float n1 = scan.nextFloat();
//		float roundedN1 = (float)Math.round(n1 * 1000) / 1000;
//		System.out.println("Rounded n1: " + roundedN1);
//		System.out.println("Please enter a number with up to 6 decimal places: ");
//		float n2 = scan.nextFloat();
//		 
//		float roundedN2 = (float)Math.round(n2 * 1000) / 1000;
//		System.out.println("Rounded n2: " + roundedN2);
//		
//		if (roundedN1 == roundedN2) {
//			System.out.println("Both numbers are" + roundedN1 + "after rounding");
//		}else{
//			System.out.println(roundedN1 +" and " + roundedN2 + " are different numbers");
//		};
////		
////		
//		
////		scan.close();
//		
////		Challenge: What's the number of x in y?
////		Scan user input twice
////		Allowed inputs:
////		"s" => seconds
////		"m" => minutes
////		"h" => hours
////		"D" => days
////		"M" => months
////		"Y" => years
////		Input => Output Examples:
////		1st: "M", 2nd: "D" => "There are 30 days in a month"
////		1st: "M", 2nd: "h" => "There are 720 hours in a month"
////		1st: "h", 2nd: "s" => "There are 3600 seconds in an hour"
////		1st: "M", 2nd: "Y" => "There are no years in a month"
////		1st: "s", 2nd: "h" => "There are no hours in a second"
////		Assumptions:
////		There are 30 days in a month
		
		
		
		int year = 31536000;
		int month = 2592000;
		int day = 86400;
		int hour = 3600;
		int minute = 60;
		int second = 1;
		int periodOne;
		String periodStrOne;
		int periodTwo;
		String periodStrTwo;
		System.out.println("Allowed inputs:\n"
				+"s => seconds\n"
				+"m => minutes\n"
				+"h => hours\n"
				+"D => days\n"
				+"M => months\n"
				+"Y => years");
			
		System.out.println("Please enter a character for container");
		String container = scan.next();
		System.out.println(container);
			
		
//			System.out.println("Container is: "+container);
			System.out.println("Please enter a character for content");
			String content = scan.next();
			System.out.println("Content is: "+content);
			
						
			if (container.equals("Y")) {
			    periodOne = year;
			    periodStrOne = "year";
			    
			    if (content.equals("Y")) {
				periodTwo = year;
				periodStrTwo = "years";
				int result = periodOne/periodTwo;
				System.out.println(String.format("There are %s %s in a %s", result, periodStrTwo, periodStrOne));
			    }else if (content.equals("M")) {
				periodTwo = month;
				periodStrTwo = "months";
				int result = periodOne/periodTwo;
				System.out.println(String.format("There are %s %s in a %s", result, periodStrTwo, periodStrOne));
			    }
			    else if (content.equals("D")) {
				periodTwo = day;
				periodStrTwo = "days";
				int result = periodOne/periodTwo;
				System.out.println(String.format("There are %s %s in a %s", result, periodStrTwo, periodStrOne));
			    
			};
						
			String inputOfCharacters = container + content;
//			switch (container) {
//			case "Y":
//			   periodOne = year;
//			   periodStrOne = "year";
//			   break;
//			case "M":
//			    periodOne = month;
//			    periodStrOne = "month";
//			    break;
//			case "D":
//			    periodOne = day;
//			    periodStrOne = "day";
//			    break;
//			case "h":
//			    periodOne = hour;
//			    periodStrOne = "hour";
//			    break;
//			case "m":
//			    periodOne = minute;
//			    periodStrOne = "minute";
//			    break;
//			case "s":
//			    periodOne = second;
//			    periodStrOne = "second";
//			    break;
//			    
//			}
//			
//			switch (content) {
//			case "Y":
//			    periodTwo = year;
//			    periodStrTwo = "years";
//			    break;
//			case "M":
//			    periodTwo = month;
//			    periodStrTwo = "months";
//			    break;
//			case "D":
//			    periodTwo = day;
//			    periodStrTwo = "days";
//			    break;
//			case "h":
//			    periodTwo = hour;
//			    periodStrTwo = "hours";
//			    break;
//			case "m":
//			    periodTwo = minute;
//			    periodStrTwo = "minutes";
//			    break;
//			case "s":
//			    periodTwo = second;
//			    periodStrTwo = "seconds";
//			    break;
//			    
//			}
//			System.out.println(periodOne);
			
//			System.out.println(String.format("Period one: %s = %s; period two: %s = %s", periodStrOne, periodOne, periodStrTwo, periodTwo));
//			keepGoing = false;
			
			
		
		switch(inputOfCharacters) {
		case "MD":
			System.out.println("There are 30 days in a month");
			
			break;
		case "Mh":
    		    	System.out.println("There are 720 hours in a month");
    		    	
    		    	break;
		case "Ms":
		    	System.out.println("There are 2592000 seconds in a month");
			
			break;
		case "Dh":
		    	System.out.println("There are 24 hours in a day");
        		
        		break;
		case "Ds":
		    	System.out.println("There are 86400 seconds in a day");
			
			break;
		case "hs":
		    	System.out.println("There are 3600 seconds in an hour");
			
			break;
		default:
			System.out.println("Command is not recognized");
			
		
			
		};
		
		
	}

}
}
