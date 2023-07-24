package inheritance;

public class MyChildClass extends MyParentClass {
    public MyChildClass(float data) {
	super(data);
    }
    public void childMethod() {
	System.out.printf("Child method");
    }

}
