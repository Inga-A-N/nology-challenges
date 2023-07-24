package testing;

public class PointsOutOfRange extends Exception{
    

    /**
     * 
     */
    private static final long serialVersionUID = 1L;
    //Syntax for creating custom exceptions in Java
    public PointsOutOfRange(String message) {
	super(message);
    }

}
