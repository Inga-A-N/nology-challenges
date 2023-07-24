package interfaces_challenge;

public class Rhombus implements Area, Perimeter{
    
    double base;
    double height;
    
    public Rhombus(double base, double height) {
	this.base = base;
	this.height = height;
    }

    @Override
    public double getPerimeter() {
	// TODO Auto-generated method stub
	return (this.base+this.height)*2;
    }

    @Override
    public double getArea() {
	// TODO Auto-generated method stub
	return this.base*this.height;
    }

}
