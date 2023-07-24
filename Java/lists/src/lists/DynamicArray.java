package lists;

import java.util.Arrays;

public class DynamicArray {
    private int[]data;
    private int length = 0;
    private int buffer;
    
    public DynamicArray(){
	this.buffer = 5;
	this.data = new int[this.buffer];
	}
    public void viewContent() {
	System.out.println(Arrays.toString(this.data));
    }
    
    

}
