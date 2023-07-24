package generics;

public class Coordinates <T extends Number>{
    
    T x;
    T y;
    
    public Coordinates(T x, T y) {
	this.x = x;
	this.y = y;
    }
    

}
