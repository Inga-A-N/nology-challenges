package intro;
import java.util.Scanner; 

public class ClassChallen {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//- Create a byte, integer and double using the scanner to take input
		//- Create an integer that is the result of dividing your byte by a number selected by the user
		//- Create a long by taking input from the user for a short and multiplying that by another short
		int dividing;
		
		Scanner s = new Scanner(System.in);
		System.out.print("Please enter a byte (an integer between -128 and 127)");
		
		byte aByte = s.nextByte();
		System.out.println("Input byte: " + aByte);
		
		System.out.print("Please enter an integer between -2,147,483,648 and 2,147,483,647");
		int anInt = s.nextInt();
		System.out.println("Input integer: " + anInt);
		
		System.out.print("Please enter a double(a number with 7 to 15 decimal places)");
		double aDouble = s.nextDouble();
		System.out.println("Input double: " + aDouble);
		
		System.out.print("Please enter a divisor to divide byte");
		
		dividing = aByte / s.nextInt();
		System.out.println("Byte divided by integer: " + dividing);
		
		System.out.println("Please enter a number between -32768 and 32767");
		short firstShort = s.nextShort();
		System.out.println("Please enter a number between -32768 and 32767");
		short secondShort = s.nextShort();		
		long aLong = firstShort * secondShort;
		
		
		System.out.println("The product of multiplication of shorts: " + aLong);
//		short aShort = 
		
		s.close();
//		
	}

}
