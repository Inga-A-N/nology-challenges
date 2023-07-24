package inheritance;
import java.util.Arrays;

public class Main {

    public static void main(String[] args) {
	// TODO Auto-generated method stub
MyParentClass parent = new MyParentClass(123.123f);
MyChildClass child = new MyChildClass(23.23f);

parent.parentMethod();
child.parentMethod();

child.childMethod();
System.out.println(child.data);
System.out.println(parent.data);


//parent.childMethod(); Parent can't use children's methods
String[] guests = {"Jeff"};

	Podcast programmingPodcast = new Podcast("Software engineering dayly", 1.5f, "mp3", guests);
    
    
    Song someSong = new Song("faint", 0.01f, "mp3", "Linkin park");
    
    programmingPodcast.printTrackInfo();
    someSong.printTrackInfo();
    System.out.println(programmingPodcast.getFileName());
    
    Track[] Tracks = {someSong, programmingPodcast};
    
    System.out.println(Arrays.toString(Tracks));
    
    Teacher calum = new Teacher("Calum");
    Teacher alex = new Teacher("Alex");
    Student inga = new Student("Inga", "Uruguay");
    inga.sayYourName(); 
    
    Person[] personArr = {calum, alex, inga};
    for (Person p : personArr) {
	p.sayYourName();
    }
    
    String name2 = inga.getName();
    
    calum.callMeeting(name2);
    alex.callMeeting(name2);
    
    }
    
    
}
