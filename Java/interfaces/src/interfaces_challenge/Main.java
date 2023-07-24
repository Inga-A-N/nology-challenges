package interfaces_challenge;

public class Main {

    public static void main(String[] args) {
	// TODO Auto-generated method stub
//	Challenge: Working with Shapes
//	MVP
//	V Create a Area interface with 1 function signature
//	V getArea => returns the area of the shape
//	V Create another interface called Perimeter with 1 function signature
//	V getPerimeter => returns the perimeter of the shape
//	V Create 3 classes Circle, Triangle and Rhombus
//	Implement Area and Perimeter for all classes
	
	Circle circle = new Circle(15);
	System.out.printf("Circle circumference with radius %s is %,.2f", circle.radius, circle.getPerimeter());
	System.out.println(circle.getArea());
	
	Triangle triangle = new Triangle(10, 2, 15);
	System.out.println(triangle.getPerimeter());
	System.out.println(triangle.getArea());
	
	Rhombus rhombus = new Rhombus(5, 10);
	System.out.println(rhombus.getPerimeter());
	System.out.println(rhombus.getArea());
	
//	Bonus
//	Create a SurfaceArea interface with 1 function signature
//	getSurfaceArea => returns the surface area of the shape
//	Create a Volume interface with 1 function signature
//	getVolume => returns the volume of the shape
//	Implement SurfaceArea and Volume for the following classes
//	Cube, Sphere, Hexahedron and Cone
	
	








    }

}
