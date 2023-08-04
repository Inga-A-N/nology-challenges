package lists;
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {
	// TODO Auto-generated method stub

	DynamicArray myArray = new DynamicArray();
	
	myArray.add(1);
	myArray.add(2);
	myArray.add(3);
	myArray.add(4);
	myArray.add(5);
	System.out.println(myArray.size());
	System.out.println(myArray.get(0));
	myArray.viewContent();
	myArray.add(6);
	System.out.println(myArray.get(5));
	myArray.viewContent();
	
	
	ArrayList<String> names = new ArrayList<String>();
	System.out.println(names);
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
