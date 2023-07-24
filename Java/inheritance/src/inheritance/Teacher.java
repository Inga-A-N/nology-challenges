package inheritance;

public class Teacher extends Person{

    public Teacher(String name) {
   	super(name);
    };
//    Teachers have a method called call meeting, 
//    which takes a person and prints both the teacher and the persons name to the console
    public String getName() {
	return this.name;
    }
    
    public void callMeeting(String name2) {
	
	System.out.printf("Call meeting with paricipants: %s and %s\n", getName(), name2);
    }
   	
}
