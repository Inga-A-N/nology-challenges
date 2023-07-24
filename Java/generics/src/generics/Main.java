package generics;

public class Main {

    public static void main(String[] args) {
	// TODO Auto-generated method stub
	
	TopThreeList<String> strings = new TopThreeList<>("Hello", "Mary", "Johns" );

	String[] someString = {
		"flower", "tree"
	};
	PrintArray.printAnyArray(someString);
    }
    
    Integer x = 10;
    Integer y = 15;
    
    //Can't create Coordinates instance with other data types rather than Number,
    //because we have limitation within the class Coordinates "T extends Numbers"
    Coordinates<Integer> coords = new Coordinates<>(x, y);
    

}
