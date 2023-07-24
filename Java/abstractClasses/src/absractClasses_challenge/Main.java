package absractClasses_challenge;

public class Main {

    public static void main(String[] args) {
	// TODO Auto-generated method stub
//Challenge: How many granules?
//	1 Teaspoon of coffee granules is needed for 150mL of water
//	Create an abstract Container with 2 functions
//	An abstract function getVolume()
//	A teaspoonCount() function that uses getVolume() to calculate the teaspoons of coffee granules needed for the volume
//	Create three classes LatteGlass, ShotGlass and Mug that extend container, all should implement the getVolume() method
	LatteGlass latteGlass = new LatteGlass();
	System.out.println("Latte glass requires " + latteGlass.teaspoonCount()+ " teaspoons of coffee.");
	
	ShotGlass shotGlass = new ShotGlass();
	System.out.println("Shot glass requires " + shotGlass.teaspoonCount()+ " teaspoons of coffee.");
	
	Mug mug = new Mug();
	System.out.println("A mug requires " + mug.teaspoonCount()+ " teaspoons of coffee.");
	
	
//	Challenge: Phone
//	Create an abstract class named Phone
//	the Phone class should have a phone number property
//	the Phone class should have a method named call that takes a single parameter of another phone object and logs that phones number
//	create a class named Landline that inherits from Phone and has an address property
//	create a class named Mobile that inherits from Phone and has a method called text that takes another Mobile as well as a string and logs the number as well as the message

	LandLine landLine = new LandLine("03 98765432", "18 Main Street, Brunswick, VIC 3130");
	LandLine landLine2 = new LandLine("03 2345678", "25 Station Street, Albert Park, VIC 3035");
	
	landLine.call(landLine2);
	
	Mobile mobile = new Mobile("0404123123");
	Mobile mobile2 = new Mobile("0404123123");
	
	mobile2.text(mobile, "Hello");
	mobile.text(mobile2, "Good bye");
    }

}
