package classes;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
	    
	  //In you main function:
	  //instantiate a dog that woofs
	  //... a bear that roars
	  //print each of their sounds to the console
	    
	    Animal dog = new Animal("dog", "Binksy", "woof");
	    
	    System.out.println(dog.getSound());
	    
	    Animal bear = new Animal("bear", null, "roar");
	    
	    System.out.println(bear.getSound());
	    
	    Animal defaultAnimal = new Animal();
	    System.out.println(defaultAnimal.getSound());
		    
		    

	}

}
