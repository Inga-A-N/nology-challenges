package intro;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		System.out.println("Hello there");
	    System.out.print("Hello ");
	    System.out.print("there \n");// does not make a new line between prints, needs \n to make new line
	    
	    //byte
	    byte myByte = 126;
	    System.out.println(myByte);
	    
	    myByte++;
	    System.out.println(myByte);
	    
	    myByte +=10; //overflows byte -128 127 range and will start counting from -128 and will print -119
	    System.out.println(myByte);
	    
	    //To represent bigger numbers we can use underscores to separate
	    int myInt = 12_356_135;
	    
	    //long - we need L at the end of the number
	    
	    // float - we need to put F at the end of the number
	    
	    //booleans 
	    boolean myBool = true;
	    
	    // char single character take up 2 bytes(16 bits), represented with single quotes, can't be represented by double quotes because double quotes represent a string in java
	  }

	

}
