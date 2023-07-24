package absractClasses_challenge;

abstract class Phone {
    String phoneNumber;
    
//    method that takes in another instance of this class as an argument
    public void call(Phone phone) {
	System.out.println("Calling " + phone.phoneNumber);
    }

}
