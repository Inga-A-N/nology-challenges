package arrays;

public class ArraysUtils {
//    Create a static method that takes in an int[]
//	    ... and returns a new int[] where all numbers have been incremented
//	    Input => Output Examples:
//	    { 1, 2, 3 } => { 2, 3, 4 }
//	    { 45, 23 } => { 46, 24 }
//	    { } => { }
    
    
    public static int[] intArr(int[] newArr) {
	int[] newNumArr = new int[newArr.length];
	for (int i = 0; i < newArr.length; i++) {
	    newNumArr[i]= newArr[i]+1;
	}
	  return newNumArr;
    }
    
//	    Challenge: Reverse Items in an Array
//	    Create a static method that takes in int[] on your ArrayUtils class
//	    ... and returns a new int[] where all the items are in the reverse order
//	    Input => Output Examples:
//	    { 1, 2, 3 } => { 3, 2, 1 }
//	    { 45, 23 } => { 23, 45 }
//	    { } => { }
    
    public static int[] arrayOfIntegers(int[] newArr) {
	int[] arrayReversed = new int[newArr.length];
	for (int i = 0; i < newArr.length; i++) {
	    arrayReversed[i]= newArr[newArr.length-1-i];
	}
	  return arrayReversed;
    }

}
