package generics;

public class PrintArray {
    
    //need to create for each data type separately
    public static void printStringArray
(String[] stringArr) {
	for(String str:stringArr) {
	    System.out.println(str);
	}
    }
    
    public static <T> void printAnyArray
    (T[] anyArr) {
    	for(T any:anyArr) {
    	    System.out.println(any);
    	}
        }
}
