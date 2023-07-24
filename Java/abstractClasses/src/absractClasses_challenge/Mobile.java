package absractClasses_challenge;

public class Mobile extends Phone{
    

    
    public Mobile(String phoneNumber) {
	this.phoneNumber = phoneNumber;
	
    }
    
   public void text(Mobile mobile, String message) {
	System.out.println("Texting: "+ mobile.phoneNumber + "\nThe message is: " + message); 
    }

}
