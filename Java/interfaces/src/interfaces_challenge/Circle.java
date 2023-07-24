package interfaces_challenge;

public class Circle implements Area, Perimeter{
    
    double radius;
    
    public Circle(double radius) {
	this.radius = radius;
    }

    @Override
    public double getPerimeter() {
	// TODO Auto-generated method stub
	return 2*(Math.PI*this.radius);
    }

    @Override
    public double getArea() {
	// TODO Auto-generated method stub
	return Math.pow(Math.PI*this.radius, 2);
    }

}
