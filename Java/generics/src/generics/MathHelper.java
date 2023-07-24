package generics;

public class MathHelper {
//to support multiple data types but not all data types
    //because we want this data type to have particular methods
   
    public static <T extends Comparable> T max(T one, T two) {
	T biggerThing = one;
	
	if (two.compareTo(one)>0){
	    biggerThing = two;
	}
	return biggerThing;
    }

}
