package inheritance;

public class MyParentClass {
    float data;
    
    public MyParentClass(float data) {
	this.data = data;
    }
    
    public void parentMethod() {
	System.out.printf("Parent method: %f\n", data);
    }

}
