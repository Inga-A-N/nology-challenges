package arrays;

import java.util.Arrays;

public class Main {

    public static void main(String[] args) {
	// TODO Auto-generated method stub

	
//	String[] names = {"Alice", "Bob", "Charlie"};
//	System.out.println(names[0]);
//	System.out.println(names[1]);
//	System.out.println(names[2]);
//	
//	
//	int[] numbers = new int[3];
//	numbers[0]= 1;
//	numbers[1]= 2;
//	numbers[2]= 3;
//	System.out.println(numbers[0]);
//	System.out.println(numbers[1]);
//	System.out.println(numbers[2]);
//	
//	System.out.println(names); // prints out address of this array
//	
//	System.out.println(Arrays.toString(names));
//	System.out.println(Arrays.toString(numbers));
//	
//	// We can copy arrays by using the System.arrayCopy() method
//	int[]newNumbers = new int[4];
//	System.arraycopy(numbers, 0, newNumbers, 0, numbers.length);
//	newNumbers[3] = 9;
//	
//	int[] someNumbers = {1, 2, 3, 4};
//	
//	int[] incrementedNumbers = ArraysUtils.intArr(someNumbers);
//	
//	System.out.println(Arrays.toString(incrementedNumbers));
//	
//	int[] numbersToReverse = ArraysUtils.arrayOfIntegers(someNumbers);
//	System.out.println(Arrays.toString(numbersToReverse));
//	
//	int[][] grid = {{1, 2},{3,4}};
	
	int a, b, c, d;
	a = 2; 
	b = 2;
	c = 3;
	d = 4;

	int [][][][] fourDArray = new int[a][b][c][d];
	
	int initial = 1;

	// Use for loops to fill this multidimensional array with incremented values
	
	for (int i = 0; i < fourDArray.length; i++) {
	    for(int j = 0; j< fourDArray[0].length; j++) {
		for(int k= 0; k< fourDArray[0][0].length; k++) {
		    for(int l= 0; l< fourDArray[0][0][0].length; l++) {
			fourDArray[i][j][k][l] = initial;
			initial++;
			System.out.println((fourDArray[i][j][k][l]));
			
			
		    }
		}
	    }
	       
	}
	System.out.println(Arrays.deepToString(fourDArray));
	
	for (int i = 0; i < a; i++) {
		for (int j = 0; j < b; j++) {
			for (int k = 0; k < c; k++) {
				for (int l = 0; l < d; l++) {
				
				}
			}
		}
	}

	for (int[][][] threeDArray : fourDArray) {
		for (int[][] twoDArray : threeDArray) {
			for (int[] oneDArray : twoDArray) {
				System.out.println(Arrays.toString(oneDArray));
			}
		}
	}

    }

}
