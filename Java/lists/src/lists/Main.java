package lists;
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {
	// TODO Auto-generated method stub

	DynamicArray myArray = new DynamicArray();
	
	
	ArrayList<String> names = new ArrayList<String>();
	ArrayList<Integer> numbers = new ArrayList<>(); // ArrayList can't take primitive types, they need a wrapper class
	//empty <> in the right part will also work as java will presume it is the same type as in the left part.
	Integer myNumber = 1;
	numbers.add(myNumber);
	ArrayList<Object> anythingList = new ArrayList<>();//ArrayList with<Object> can take any type of elements, but it's not a good practice
	anythingList.add("Hello");
	anythingList.add(myNumber);
	System.out.println(anythingList);
    }

}
