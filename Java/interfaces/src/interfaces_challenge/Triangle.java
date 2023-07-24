package interfaces_challenge;

public class Triangle implements Area, Perimeter{
    
    double a;
    double b;
    double c;
    
    public Triangle(double a, double b, double c) {
	this.a = a;
	this.b = b;
	this.c = c;
    }

    @Override
    public double getPerimeter() {
	// TODO Auto-generated method stub
	return a+b+c;
    }

    @Override
    public double getArea() {
	// TODO Auto-generated method stub
	return (Math.sqrt(Math.pow(a, 2) - ((Math.pow(b, 2))/4)*b))/2;
    }

}
