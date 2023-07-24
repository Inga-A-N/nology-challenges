package testing;

import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import java.util.ArrayList;
import java.util.Arrays;

import org.junit.jupiter.api.Test;

public class UtilsTest {
    @Test
    public void add_TwoPositiveIntegers_ReturnCorrectSum() {
     int expectedResult = 4;
     int actualResult = Utils.add(2, 2);
     assertEquals(expectedResult, actualResult);
    }
    
    @Test
    public void add_TwoNegativeIntegers_ReturnsCorrectSums() {
	int expected = -5;
	int actual = Utils.add(-1, -4);
	assertEquals(expected, actual);
    }
    
    @Test
    public void divide_TwoPositiveDoubles_ReturnsCorrectResult() {
	double expected = 10.0;
	double actual = Utils.divide(100.0, 10.0);
	assertEquals(expected, actual);
	assertEquals(2.0, Utils.divide(4.0, 2.0));
    }
    
    @Test
    public void divide_DivisorIsZero_ThrowsArithmeticException() {
	assertThrows(ArithmeticException.class, () ->Utils.divide(10.0, 0.0));
    }
    
    @Test
    public void makeUnique_InputArrayHasDuplicates_ReturnsShorterList() {
	ArrayList<Integer> input = new ArrayList<>(Arrays.asList(1, 1, 1, 2, 2, 3, 3, 3));
	ArrayList<Integer> expected = new ArrayList<>(Arrays.asList(1, 2, 3));
	ArrayList<Integer> actual = Utils.makeUnique(input);
	assertTrue(actual.size() < input.size());
	assertTrue(actual.size() == expected.size());
    }
    	// check if a list with no unique elements returns a list of the same size
	
 	// for list with duplicates I want to check if actual is equal to expected
 	
 	// for list with no duplicates, check if input is the same as return
    
    @Test
    public void makeUnique_InputArrayHasNoUniqueElements_ReturnssameSize() {
	ArrayList<Integer> input = new ArrayList<>(Arrays.asList());
	ArrayList<Integer> expected = new ArrayList<>(Arrays.asList());
	ArrayList<Integer> actual = Utils.makeUnique(input);
	assertTrue(actual.size() == input.size());
	assertTrue(actual.size() == expected.size());
    }
    @Test
    public void makeUnique_InputArrayHasNoDuplicates_ReturnssameSize() {
	ArrayList<Integer> input = new ArrayList<>(Arrays.asList(1, 2, 3, 4));
	ArrayList<Integer> actual = Utils.makeUnique(input);
	assertTrue(actual.size() == input.size());
	
    }
    @Test
    public void makeUnique_InputArrayHasDuplicates_ReturnsListOfUniqueElementsOnly() {
	ArrayList<Integer> input = new ArrayList<>(Arrays.asList(1, 1, 1, 2, 2, 3, 3, 3));
	ArrayList<Integer> expected = new ArrayList<>(Arrays.asList(1, 2, 3));
	ArrayList<Integer> actual = Utils.makeUnique(input);
	assertEquals(expected, actual);
	
    }

}
