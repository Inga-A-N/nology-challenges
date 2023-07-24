package testing;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class GradeTest {
    
//    if many tests require an instance of class (for non-static methods),
    //instead of creating those instances in every single test repeating a lot of syntax
    // we can use an annotation @BeforeEach
    
    static Grade grade;
	
	@BeforeEach
	void setUpGrade() {
		grade = new Grade();
	}
	
	// create a grade with 45 points and check if it's not passing
	@Test
	public void setPassing_PointsBelow50_SetsToFalse() throws PointsOutOfRange {
		grade.setPoints(46);
		assertFalse(grade.getIsPassing());
	}
	
	// create a grade with 50 points and check if it is passing
	@Test
	public void setPassing_PointsAbove50_SetsToTrue() throws PointsOutOfRange {
		grade.setPoints(50);
		assertTrue(grade.getIsPassing());
	}
	
	@Test
	public void calculateGrade_PointBelow50_ReturnsC() throws PointsOutOfRange {
		grade.setPoints(44);
		char returnedGrade = 'c';
		char actual = grade.calculateGrade(
				grade.getPoints());
		assertEquals(returnedGrade, actual);
	}
	
	@Test
	public void setPoints_PointsBelow0_ThrowsPoinstOutOfRageException() {
		assertThrows(PointsOutOfRange.class, () -> grade.setPoints(-10));
	}
	
}