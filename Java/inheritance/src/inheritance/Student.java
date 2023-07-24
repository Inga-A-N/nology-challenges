package inheritance;

public class Student extends Person{
//    students have a property called cohort, which is a string
//  When a student says their name, they should also mention which cohort they are in
    String cohort;
    public Student(String name, String cohort) {
	super(name);
	this.cohort = cohort;
	
    };
    public String getName() {
	return this.name;
    }
    @Override
	public void sayYourName() {
	    System.out.printf("My name is %s. I'm in %s cohort.\n", this.name, this.cohort);
	}

}
