package methods;


//
public class Maths {
    
//    Static methods - attached directly to a class definition
    
  public static int add(int a, int b) {
  return a+b;}  
  
  public static int substract(int a, int b) {
      return a-b;
  }

  public static int multiply(int a, int b) {
      return a*b;
  }
  public static int divide(int a, int b) {
      return a/b;
  }
  
//  Challenge: Find Area Method
//  MVP:
//  Create method called findArea
//  It should take in a single parameter
//  radius (of the circle)
//  It should return the area of the circle
  
  public static double findArea(double radius) {
      return (double)Math.PI*(radius*radius);}
  
//  Challenge: Fullname Method
//  MVP:
//  Create a method called fullName,
//  It should take in 2 parameters:
//  firstName
//  lastName
//  It should return a full name
  
  public static String fullName(String firstName, String lastName) {
      return String.format("%s %s", firstName, lastName);
      
  }
//  Challenge: Firstname Method
//  MVP:
//  Create a method called fullName,
//  It should take in 1 parameter:
//  fullName
//  It should return a first name
  
  public static String fullName(String fullName) {
      String[] names = fullName.split(" ");
      String firstName = names[0];
      return firstName;
  };
}
